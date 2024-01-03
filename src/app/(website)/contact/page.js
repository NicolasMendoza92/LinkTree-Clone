'use client';
import SubmitButton from '@/components/buttons/SubmitButton';
import Image from 'next/image';
import React from 'react'

export default function ContactPage() {

  const contactUsImg = '/images/contactUs.png'

  return (
    <section className='p-12 pt-32 mb-6 mx-auto'>
      <div className='grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 items-center'>
        <div>
          <h1 className='text-5xl font-bold mb-2'>
            Get in touch with us!
          </h1>
          <form className='flex flex-col'>
            <label className="input-label-contact" htmlFor="name-contact">Full Name</label>
            <input
            className='input-contact'
              type='text'
              name='name'
              id='name-contact'
              placeholder='Jhon Doe' />
            <label className="input-label-contact" htmlFor="email-contact">Email</label>
            <input
            className='input-contact'
              type='email'
              name='email'
              id='email-contact'
              placeholder='example@mail.com' />
            <label className="input-label-contact" htmlFor="message-contact">Message</label>
            <textarea
            className='input-contact mb-4'
              name="message"
              id="message-contact"
              placeholder="Put your message for us..." />
            <SubmitButton>
              Submit
            </SubmitButton>
          </form>
        </div>

          <Image src={contactUsImg} width={800} height={600} alt={'avatar'} priority={true} />

      </div>
    </section>
  )
}
