'use client';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import LogoutButton from './buttons/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import Cross from "./icons/Cross";
import Bars from "./icons/Bars";
import { usePathname } from "next/navigation";


export default function NavbarWeb({ session }) {

    // con estados, como si fuera un modal trabajamos con la navbar
    const [nav, setNav] = useState(false);
    const path = usePathname();

    // Función para cerrar la barra de navegación
    const closeNav = () => {
        if (nav) {
            setNav(false);
        }
    };

    return (
        <div className='max-w-4xl flex justify-between mx-auto px-8'>
            <div className='flex items-center gap-6 '>
                <Link href={'/'} className="flex items-center gap-2 text-blue-500">
                    <FontAwesomeIcon icon={faLink} className="text-blue-500" />
                    <span className="font-bold">LinkTree</span>
                </Link>
            </div>
            <div className="hidden md:flex justify-between items-center gap-5">
                <div className="flex">
                    <nav className='flex items-center gap-4 text-slate-500 text-sm'>
                        <Link href={'/about'} className={path === '/about' ? 'text-blue-500 font-bold' : ''}  >About</Link>
                        <Link href={'/pricing'} className={path === '/pricing' ? 'text-blue-500 font-bold' : ''} >Pricing</Link>
                        <Link href={'/contact'} className={path === '/contact' ? 'text-blue-500 font-bold' : ''}  >Contact</Link>
                    </nav>
                </div>
                <nav className='flex items-center gap-3 text-sm text-slate-800 font-bold'>
                    {!!session && (
                        <>
                            <Link href={'/account'}>
                                Hello, {session?.user?.name}
                            </Link>
                            <LogoutButton />
                        </>
                    )}
                    {!session && (
                        <>
                            <Link href={'/login'} className={path === '/login' ? 'text-blue-500 font-bold' : ''}>Sign In</Link>
                        </>
                    )}
                </nav>
            </div>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 text-gray-500 md:hidden"
            >
                {nav ? <Cross /> : <Bars />}
            </div>

            {nav && (
                <div className="flex flex-col p-4 absolute left-0 w-full h-screen bg-gradient-to-b from-white to-gray-400">
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer absolute pr-4 z-10 text-gray-500 md:hidden "
                    >
                        {nav ? <Cross /> : <Bars />}
                    </div>
                    <div >
                        <nav className='flex flex-col items-center gap-4 text-slate-500 text-sm'>
                            <Link href={'/about'} className={path === '/about' ? 'text-blue-500 font-bold' : ''} onClick={closeNav} >About</Link>
                            <Link href={'/pricing'} className={path === '/pricing' ? 'text-blue-500 font-bold' : ''} onClick={closeNav}>Pricing</Link>
                            <Link href={'/contact'} className={path === '/contact' ? 'text-blue-500 font-bold' : ''} onClick={closeNav} >Contact</Link>
                        </nav>
                    </div>
                    <nav className='flex flex-col items-center gap-3 text-sm text-slate-800 font-bold mt-2'>
                        {!!session && (
                            <>
                                <Link href={'/account'}>
                                    Hello, {session?.user?.name}
                                </Link>
                                <LogoutButton />
                            </>
                        )}
                        {!session && (
                            <>
                                <Link href={'/login'} className={path === '/login' ? 'text-blue-500 font-bold' : ''} onClick={closeNav} >Sign In</Link>
                            </>
                        )}
                    </nav>
                    
                </div>
            )}

        </div>
    )
}