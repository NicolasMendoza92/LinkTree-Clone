import HeroForm from "@/components/forms/HeroForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";


export default async function Home() {
  const session = await getServerSession(authOptions);

  const homeImg = '/images/design_web_link.png'

  return (
      <div className="grid grid-cols-1 items-center gap-3 mx-auto md:grid-cols-2">
        <div className="mx-auto">
          <div className='max-w-md  mb-6'>
            <h1 className='text-5xl font-bold'>
             Help your followers discover everything you do,<br /> with one simple link
            </h1>
            <h2 className='text-gray-500 text-xl mt-6'>
              Share your amazing bio on one page
            </h2>
          </div>
          <HeroForm user={session?.user} />
        </div>
        <div className="mt-3">
          <Image src={homeImg} width={800} height={600} alt={'homeImg'} priority={true} />
        </div>
      </div>
  )
}
