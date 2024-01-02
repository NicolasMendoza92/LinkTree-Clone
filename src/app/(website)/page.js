import HeroForm from "@/components/forms/HeroForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
      <section className='p-6 pt-32 max-w-4xl mx-auto'>
        <div className='max-w-md mb-6'>
          <h1 className='text-5xl font-bold'>
            Your one link  <br /> for everything
          </h1>
          <h2 className='text-gray-500 text-xl mt-6'>
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        <HeroForm user={session?.user}/>
      </section>
  )
}
