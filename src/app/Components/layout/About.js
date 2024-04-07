import Link from "next/link"
import Image from 'next/image'
const About=()=>{
    return (
        <>
             <div className="mt-15 " id="about">
                <h1 className="text-white text-4xl text-center font-bold mb-10">OUR TEAM</h1>
                </div>
                <div className="flex gap-20 flex-wrap justify-center my-10">
                
                <div className="image">
                <Image src="/Sarthik.png" alt="Sarthik Bangroo" width={300} height={100}/>
                    <div className="content">
                    <h3 className="text-2xl text-yellow-300 font-serif font-bold mb-5">Sarthik Bangroo</h3>
                    <p className="text-md text-white ">Front End Developer / UI UX </p>
                    <Link className="mt-10" href="https://www.linkedin.com/in/sarthik-bangroo-b877a4250/" target='_blank'>
                    <p className=" text-white ">Computer Engineering</p>
                    <p className="text-white mb-2 text-center">2025</p>
                    <div  className="flex justify-center"  style={{ cursor: 'pointer' }}>
                        <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="image">
                    <Image src="/Riddhi.png" alt="Riddhi Kulkarni" width={300} height={300}/>
                        <div className="content">
                        <h3 className="text-2xl text-yellow-300 font-serif font-bold  mb-5">Riddhi Kulkarni</h3>
                        <p className="text-md text-white ">Front End Developer / UI UX </p>
                        <Link className="mt-10" href="https://www.linkedin.com/in/riddhi-kulkarni-9a6b84232/" target='_blank'>
                        <p className=" text-white ">Computer Engineering </p>
                        <p className="text-white mb-2 text-center">2025</p>
                        <div className="flex justify-center"  style={{ cursor: 'pointer' }}>
                            <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <Image src="/Varad.png" alt="Varad" width={300} height={200}/>
                        <div className="content">
                        <h3 className="text-2xl text-yellow-300 font-serif font-bold  mb-5">Varad Pundlik</h3>
                        <p className="text-md text-white ">Back End Developer</p>
                        <Link className="mt-10" href="https://www.linkedin.com/in/varad-pundlik-3a6178205/" target='_blank'>
                        <p className=" text-white ">Computer Engineering </p>
                        <p className="text-white mb-2  text-center">2025</p>
                        <div className="flex justify-center"  style={{ cursor: 'pointer' }}>
                            <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <Image src="/Anirudha.png" alt="Anirudha" width={300} height={200}/>
                        <div className="content">
                        <h3 className="text-2xl text-yellow-300 font-serif font-bold  mb-5">Anirudha Udgirkar</h3>
                        <p className="text-md text-white ">Back End Developer</p>
                        <Link className="mt-10" href="https://www.linkedin.com/in/anirudha-udgirkar-13ab53244/" target='_blank'>
                        <p className=" text-white ">Computer Engineering </p>
                        <p className="text-white mb-2  text-center">2025</p>
                        <div className="flex justify-center"  style={{ cursor: 'pointer' }}>
                            <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <Image src="/Guru.png" alt="Gurunath" width={300} height={200}/>
                        <div className="content">
                        <h3 className="text-2xl text-yellow-300 font-serif font-bold  mb-5">Gurunath Salve</h3>
                        <p className="text-md text-white ">GenAI Engineer</p>
                        <Link className="mt-10" href="https://www.linkedin.com/in/gurunath-salve/" target='_blank'>
                        <p className=" text-white ">ENTC</p>
                        <p className="text-white mb-2  text-center">2025</p>
                        <div className="flex justify-center"  style={{ cursor: 'pointer' }}>
                            <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
                        </div>
                        </Link>
                    </div>
                </div>
                </div>
        </>
    )
}

export default About;