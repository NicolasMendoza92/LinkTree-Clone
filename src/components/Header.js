
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth'
import NavbarWeb from './NavbarWeb';

export default async function Header() {
    const session = await getServerSession(authOptions);

    return (
        <header className='bg-white border-b py-4 sticky top-0 z-40'>
           <NavbarWeb session={session}/>
        </header>
    )
}
