'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { scrollContext } from './Scroll'


const Navbar = () => {

    const btn1 = useRef(null)
    const btn2 = useRef(null)
    const btn3 = useRef(null)
    const btn4 = useRef(null)
    const btn5 = useRef(null)
    const btn6 = useRef(null)
    const btn7 = useRef(null)

    const { homeRef, aboutRef, skillRef, experienceRef, educationRef, certificateRef, contactRef } = useContext(scrollContext)

    const [section, setsection] = useState([
        { section: homeRef, btn: btn1 },
        { section: aboutRef, btn: btn2 },
        { section: skillRef, btn: btn3 },
        { section: educationRef, btn: btn4 },
        { section: certificateRef, btn: btn5 },
        { section: contactRef, btn: btn6 },
        { section: experienceRef, btn: btn7 },
    ])

    const [menu, setmenu] = useState(false);
    const [mode, setmode] = useState(true);
    const router = useRouter();
    // console.log(pathname)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.forEach((val) => {
                            if (!mode) {
                                val.btn.current.style.backgroundColor = val.section.current === entry.target ? "#cacaca9e" : "";
                                val.btn.current.style.color = val.section.current === entry.target ? "#ff3232" : "";
                            }
                            else {
                                val.btn.current.style.backgroundColor = val.section.current === entry.target ? "#484848" : "";
                                val.btn.current.style.color = val.section.current === entry.target ? "#ff3232" : "";
                            }
                        })

                    }
                })
            },
            {
                threshold: 0.4
            }
        )
        section.forEach(({ section }) => {
            observer.observe(section.current)
        })

        return () => {
            observer.disconnect()
        }
    }, [mode])




    const handleScroll1 = () => {
        homeRef.current.scrollIntoView({
            behavior: "auto"
        });
        setmenu(false)
    }

    const handleScroll2 = () => {
        aboutRef.current.scrollIntoView({
            behavior: "auto"
        });
        setmenu(false)
    }

    const handleScroll3 = () => {
        skillRef.current.scrollIntoView({
            behavior: "auto"
        });
        setmenu(false)
    }

    const handleScroll4 = () => {
        educationRef.current.scrollIntoView({
            behavior: "auto"
        });
        setmenu(false)
    }

    const handleScroll5 = () => {
        certificateRef.current.scrollIntoView({
            behavior: "auto"
        });
        setmenu(false)
    }

    const handleScroll6 = () => {
        contactRef.current.scrollIntoView({
            behavior: "auto"
        });
        setmenu(false)
    }
    const handleScroll7 = () => {
        experienceRef.current.scrollIntoView({
            behavior: "auto"
        });
        setmenu(false)
    }


    useEffect(() => {
        const modeBtaye = localStorage.getItem("mode")
        if (modeBtaye == "dark") {
            setmode(true)
        }
        else {
            setmode(false)
        }
    }, [])


    const handleMenu = () => {
        menu ? setmenu(false) : setmenu(true)
    }

    const modeToggle = () => {
        const html = document.documentElement;

        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("mode", "light");
            setmode(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("mode", "dark");
            setmode(true);
        }
    };


    return (
        <nav className='fixed z-10 w-full top-4 max-w-7xl mx-auto left-0 right-0 px-6 max-[550px]:px-3'>
            {/* <nav className='fixed z-10 w-full top-4 max-w-7xl mx-auto px-6'> */}
            <div className='flex flex-col  items-center justify-center z-10 w-full bg-[#cacaca9e] dark:bg-[#1515159c] backdrop-blur-3xl rounded-3xl py-2 px-3'>
                {/* UPPERNAV */}
                <div className="UPPERNAV flex justify-between w-full">

                    {/* LOGO */}
                        <div className='LOGO flex items-center font-extrabold MAIN-HEADING cursor-pointer' onClick={handleScroll1}>
                            <span className='bg-[linear-gradient(90deg,rgba(131,58,180,1)_0%,rgba(255,3,74,1)_0%,rgba(253,29,29,1)_31%,rgba(138,5,255,1)_100%)] bg-clip-text text-transparent'>
                                {`<`}Yash{`/>`}
                            </span>
                        </div>



                    {/* NAVS */}
                    <div className="NAVS flex gap-3 items-center dark:bg-[#1e1e1f] font-black bg-[#ffffff] py-2 rounded-3xl justify-center max-[1100px]:hidden">
                        <ul className='flex gap-6 text-[16px] px-4'>
                            <Link ref={btn1} href='/' className={`dark:hover:bg-[#303030] hover:bg-[#cccccc] p-1 rounded-xl px-2`} onClick={handleScroll1}>Home</Link>
                            <Link ref={btn2} href='/' className={`dark:hover:bg-[#303030] hover:bg-[#cccccc] p-1 rounded-xl px-2`} onClick={handleScroll2}>About</Link>
                            <Link ref={btn3} href='/' className={`dark:hover:bg-[#303030] hover:bg-[#cccccc] p-1 rounded-xl px-2`} onClick={handleScroll3}>Skills</Link>
                            <Link ref={btn7} href='/' className={`dark:hover:bg-[#303030] hover:bg-[#cccccc] p-1 rounded-xl px-2`} onClick={handleScroll7}>experience</Link>
                            <Link ref={btn4} href='/' className={`dark:hover:bg-[#303030] hover:bg-[#cccccc] p-1 rounded-xl px-2`} onClick={handleScroll4}>Education</Link>
                            <Link ref={btn5} href='/' className={`dark:hover:bg-[#303030] hover:bg-[#cccccc] p-1 rounded-xl px-2`} onClick={handleScroll5}>Certificates</Link>
                            <Link ref={btn6} href='/' className={`dark:hover:bg-[#303030] hover:bg-[#cccccc] p-1 rounded-xl px-2`} onClick={handleScroll6}>Contact</Link>
                            {/* <Link href='/' className="">Resume|</Link> */}
                        </ul>
                    </div>


                    {/* RIGHTNAVS */}
                    <div className='RIGHTNAV flex items-center gap-4'>
                        <div className="MODE flex gap-3 items-center dark:bg-[#1e1e1f] bg-[#e7e7e7] py-1 rounded-3xl justify-center">
                            <span className='cursor-pointer select-none flex items-center gap-2 px-2' onClick={modeToggle}>
                                <span><img src="/night-mode.png" alt="" className={`size-5 ${mode ? "invert" : ''}`} /></span>
                            </span>
                        </div>

                        {/* Menu */}

                        <div className='relative hidden flex-col max-[1100px]:block  z-10 text-white' onClick={handleMenu}>
                            <img src="/menu.png" alt="" className={`size-4 ${mode ? "invert" : ''} cursor-pointer`} />
                        </div>
                    </div>
                </div>

                {/* BOTTOMNAV */}
                <div className={`BOTTOMNAV grid-cols-2 w-full ${menu ? 'grid' : 'hidden'}`}>
                    <Link href='/' className={`dark:hover:bg-[#1c1c1c] hover:bg-[#ededed] p-1 rounded-xl px-2`} onClick={handleScroll1}>Home</Link>
                    <Link href='/' className={`dark:hover:bg-[#1c1c1c] hover:bg-[#ededed] p-1 rounded-xl px-2`} onClick={handleScroll2}>About</Link>
                    <Link href='/' className={`dark:hover:bg-[#1c1c1c] hover:bg-[#ededed] p-1 rounded-xl px-2`} onClick={handleScroll3}>Skills</Link>
                    <Link href='/' className={`dark:hover:bg-[#1c1c1c] hover:bg-[#ededed] p-1 rounded-xl px-2`} onClick={handleScroll7}>Experience</Link>
                    <Link href='/' className={`dark:hover:bg-[#1c1c1c] hover:bg-[#ededed] p-1 rounded-xl px-2`} onClick={handleScroll4}>Education</Link>
                    <Link href='/' className={`dark:hover:bg-[#1c1c1c] hover:bg-[#ededed] p-1 rounded-xl px-2`} onClick={handleScroll5}>Certificates</Link>
                    <Link href='/' className={`dark:hover:bg-[#1c1c1c] hover:bg-[#ededed] p-1 rounded-xl px-2`} onClick={handleScroll6}>Contact</Link>
                </div>
            </div>

        </nav >
    )
}

export default Navbar