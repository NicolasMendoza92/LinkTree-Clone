'use client';
import SubmitButton from '@/components/buttons/SubmitButton';
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function ContactPage() {

  const contactUsImg = '/images/contactUs.png'
  const [fullName, setFullName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [comment, setComment] = useState('');

  // handle errors 
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!fullName || !senderEmail || !comment) {
      setError('something is missing');
      return;
    }
    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          fullName, senderEmail, comment
        })
      });

      if (response.ok) {
        toast.success('Your message was sent');
        setSenderEmail('')
        setFullName('')
        setComment('')


      } else {
        console.log('Something failed ')
      }
    } catch (error) {
      console.log('Error', error)
    }


  }

  return (
    <section className='p-12 pt-32 mb-6 mx-auto'>
      <div className='grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 items-center'>
        <div>
          <h1 className='text-5xl font-bold mb-2'>
            Get in touch with us!
          </h1>
          <form onSubmit={sendEmail} className='flex flex-col'>
            <label className="input-label-contact" >Full Name</label>
            <input
              className='input-contact'
              type='text'
              name='fullName'
              id='fullName'
              placeholder='Jhon Doe'
              maxLength={70}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}/>
            <label className="input-label-contact" >Email</label>
            <input
              className='input-contact'
              type='email'
              name='senderEmail'
              id='senderEmail'
              maxLength={70}
              placeholder='example@mail.com'
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}/>
            <label className="input-label-contact" >Message</label>
            <textarea
              className='input-contact mb-4'
              name="comment"
              id="comment"
              cols={10}
              rows={5}
              maxLength={400}
              placeholder="Put your message for us..."
              value={comment}
              onChange={(e) => setComment(e.target.value)} />
            <SubmitButton>
              Submit
            </SubmitButton>
            {error && (
              <div className="inline-flex bg-red-200 border border-red-500 p-2 m-2 text-center">
                {error}
              </div>
            )}
          </form>
        </div>

        <Image src={contactUsImg} width={800} height={600} alt={'avatar'} priority={true} />

      </div>
    </section>
  )
}
