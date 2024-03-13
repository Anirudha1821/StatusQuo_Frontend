'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { signIn } from "next-auth/react";
export default function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loginProgress,setLoginProgress]=useState(false);
    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginProgress(true);
        await signIn('credentials',{email,password,callbackUrl:'/dashboard'})
        setLoginProgress(false);
    }
    return (
        <div className="loginMain grid grid-cols-2 mt-20">
            <div className="image flex items-center justify-end ">
                <Image className="rounded-xl" src={'/LoginImage.jpg'} alt={"loginImage"} width={500} height={500}></Image>
            </div>
            <div className="logindiv pt-8 pr-40">
                <h1 className="text-6xl  text-center font-semibold  text-purple-500">Login</h1>
                <section className="mt-8 " >
                    <form  className=" block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                        <button  type="submit" className="googlebtn bg-white flex gap-4 justify-center" >
                            <Image src={'/google.png'} alt={'googlelogo'} width={24} height={24}></Image>
                            Login with Google
                        </button>
                        <div className="flex items-center">
                            <hr className="border-2 border-gray-500 flex-grow mr-4" />
                            <span className="text-gray-500">OR</span>
                            <hr className="border-2 border-gray-500 flex-grow ml-4" />
                        </div>
                        <input type="email" placeholder="Email" disabled={loginProgress}  value={email } onChange={ev=> setEmail(ev.target.value)}/>
                        <input type="password" placeholder="password" disabled={loginProgress} value={password} onChange={ev=> setPassword(ev.target.value)}/>
                        <button disabled={loginProgress} type="submit" className="bg-blue-700 text-white font-semibold">Login</button>
                        <div className="text-center my-4 text-white border-t pt-4">
                            Dont Have an account?{' '}
                            <Link className="underline text-blue-700" href={'/register'}>Register here &raquo;</Link>
                        </div>
                    </form>
                </section>  

            </div>

        </div>
    )
}