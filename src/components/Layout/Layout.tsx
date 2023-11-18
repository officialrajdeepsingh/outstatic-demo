'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header/Header'


export function Layout({ children }: { children: React.ReactNode }) {
    
    const params = usePathname()

    // check the path outstatic
    if (params.includes("outstatic")) {
        return children
    }

    // Return 
    return (
        <>
            <Header />
            {children}
        </>
    )
}