'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
export default function Register(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [creatingUser,setCreatingUser]=useState(false);
    const [userCreated,setuserCreated]=useState(false);
    
    //logic once form is submitted
    function handleFormSubmit(ev){
        ev.preventDefault();
        setCreatingUser(true);
        setuserCreated(false);
        const response=fetch('/api/register',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers: {'Content-type':'application/json'},
        });
        if(response.ok){
            setuserCreated(true);
        }
        else{
            return new Error("Sorry an Error Occured");
        }
        setCreatingUser(false);
    }
    



    return(
        <div className="loginMain grid grid-cols-2 mt-20">
            <div className="logindiv pl-40">    
                <h1 className="text-center text-3xl font-semibold text-white ">Welcome to <br /><span className="text-6xl font-bold text-purple-500">Status Quo</span></h1>
                <section className="mt-8 " >
                    {userCreated && (
                        <div className="my-4 text-center">
                        User created.<br />
                        Now you can{' '}
                        <Link className="underline" href={'/login'}>Login &raquo;</Link>
                        </div>
                    )}
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
                        <input type="email" placeholder="Email" disabled={creatingUser} value={email} onChange={e=> setEmail(e.target.value)}  />
                        <input type="password" placeholder="password" disabled={creatingUser} value={password} onChange={e=> setPassword(e.target.value)} />
                        <button type="submit" disabled={creatingUser}  className="bg-blue-700 text-white font-semibold">Register</button>
                        <div className="text-center my-4 text-white border-t pt-4">
                            Already have an account?{' '}
                            <Link className="underline text-blue-700" href={'/login'}>Login here &raquo;</Link>
                        </div>
                    </form>
                </section>  

            </div>
            <div className="image flex items-center justify-start ">
                <Image className="rounded-xl" src={'/RegisterImage.jpg'} alt={"RegisterImage"} width={550} height={600}></Image>
            </div>

        </div>
    )
}