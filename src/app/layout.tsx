import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {TheHeader} from "./components/TheHeader";
import {TheFooter} from "./components/TheFooter";
import BookProvider from './context/BookProvider'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout(
    {children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="container">
        <TheHeader/>
        {/*<main className="container ">*/}

            <BookProvider>
                {children}
            </BookProvider>

        {/*</main>*/}
        <TheFooter/>
        </div>
        </body>
        </html>
    )
}
