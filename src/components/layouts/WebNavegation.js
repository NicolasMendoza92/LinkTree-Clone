'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function WebNavegation() {
    const path = usePathname();
    return (
        <>
            <nav className='flex items-center gap-4 text-slate-500 text-sm'>
                <Link href={'/about'} className={path === '/about' ? 'text-blue-500 font-bold' : ''} >About</Link>
                <Link href={'/pricing'} className={path === '/pricing' ? 'text-blue-500 font-bold' : ''}>Pricing</Link>
                <Link href={'/contact'} className={path === '/contact' ? 'text-blue-500 font-bold' : ''}>Contact</Link>
            </nav>
        </>
    )
}

// 