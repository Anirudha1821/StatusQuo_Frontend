'use client'
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
export default function Header(){
    const session=useSession();
    
    const status=session?.status;
    const userData = session?.data?.user;
    let userName = userData?.name || userData?.email;

    if (userName && userName && userName.includes(' ')) {
        userName = userName.split(' ')[0].toUpperCase ();
    }
    return (
        <header className="flex items-center justify-between text-white m-2     ">
            <nav className="flex items-center gap-16 text-lg text-white-500 ">
                <Link className="text-blue-600 text-3xl bold font-bold" href={"/"}>StatusQuo</Link>
                <Link href={"/"} >Home</Link>
                <Link href={"/features"} >Features</Link>
                <Link href={"/about"} >About</Link>
            </nav>

            <nav className="flex items-center gap-5 text-white font-semibold">
                {status==='authenticated' && (
                    <>
                    <h1 className="whitespace-nowrap">Hello, {userName}</h1>
                    <button onClick={() => signOut({ callbackUrl: '/' })} className="bg-blue-500 rounded-full text-white px-8 py-2 border-0">Logout</button>
                    </>
                )}  
                {status==='unauthenticated' && (
                    <>
                        <Link href={"/login"}>Login</Link>
                        <Link href={"/register"} className="bg-blue-500 rounded-full text-white px-8 py-2">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}