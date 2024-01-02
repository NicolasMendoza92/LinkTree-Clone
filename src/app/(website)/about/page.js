import Image from "next/image";


export default function AboutPage() {

  const aboutImg = '/images/wordAbout.png'

  return (
      <section className='p-8 pt-32 pb-24 mx-auto'>
        <div className='grid grid-cols-1 gap-3 mx-auto md:grid-cols-2'>
          <div>
            <h1 className='text-5xl font-bold'>
              Let's talk about us
            </h1>
            <h2 className='text-gray-500 text-xl mt-6'>
              Different Link Apps, integrations and visual styles can help you create a Linktree that looks and feels like you and your brand.
              Explore our library of custom templates to grow and connect with your audience even more easily!
            </h2>
          </div>
          <div>
            <Image src={aboutImg} width={800} height={600} alt={'avatar'} />
          </div>
        </div>
      </section>
  )
}
