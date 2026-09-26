'use client'
import { scrollContext } from "@/components/Scroll";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { redirect } from "react-router-dom";
import { ToastContainer, Bounce, toast } from "react-toastify";


export default function Home() {
  const { homeRef, aboutRef, skillRef, experienceRef, educationRef, certificateRef, contactRef } = useContext(scrollContext)

  const [frontend, setFrontend] = useState([
    { img: `text.png`, name: "HTML5" },
    { img: `js.png`, name: "JavaScript" },
    { img: `physics.png`, name: "React.js" },
    { img: `tailwindCSS.png`, name: "TailwindCSS" },
    { img: `typescript.png`, name: "TypeScript" },
    { img: `nextJs.png`, name: "Next.js" }
  ])


  const [backend, setbackend] = useState([
    { img: `/mongodbLogo.png`, name: "MongoDB" },
    { img: `expressJS.png`, name: "Express.js" },
    { img: `git.png`, name: "Git.js" },
    { img: `GitHubActions.png`, name: "GitHub Actions" },
    { img: `github.png`, name: "GitHub" },
    { img: `docker.png`, name: "Docker" },
    { img: `Postman.png`, name: "Postman" },
    { img: `nodeJs.png`, name: "Next.js" },
  ])

  const [language, setlanguage] = useState([
    { img: `/js.png`, name: "JavaScript" },
    { img: `java.png`, name: "Java" },
    { img: `python.png`, name: "Python" },
  ])


  const [skill, setSkill] = useState([
    {
      title: "Frontend Development",
      keypoints: {
        1: "Built responsive interfaces using React.js, Next.js, HTML, and CSS.",
        2: "Developed reusable components and handled forms, state, events, and client-side interactions.",
        3: "Focused on clean layouts, responsive design, and consistent user experience."
      }
    },
    {
      title: "Full-Stack Development",
      keypoints: {
        1: "Built full-stack web applications using React.js, Next.js, Node.js, and Express.",
        2: "Connected frontend applications with REST APIs and backend services.",
        3: "Worked with authentication, form handling, server-side functionality, and application flows."
      }
    },
    {
      title: "Backend & Database",
      keypoints: {
        1: "Developed backend functionality using Node.js and Express.js.",
        2: "Worked with MongoDB and Mongoose for storing and managing application data.",
        3: "Implemented REST APIs and integrated third-party services such as Razorpay in projects."
      }
    },
    {
      title: "Problem Solving & Learning",
      keypoints: {
        1: "Practicing Data Structures and Algorithms using JavaScript and Java.",
        2: "Strengthening fundamentals in OOP, SQL, JavaScript, and problem solving.",
        3: "Continuously building projects to apply concepts and improve practical development skills."
      }
    },
  ])

  const handleCopy = () => {
    let mode = localStorage.getItem("mode")
    navigator.clipboard.writeText("yashsharma3440@gmail.com")
    if (mode=="dark") {
      toast.success('Copied to clipboard', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    else {
      toast.success('Copied to clipboard', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }


  return (
    <>
      <section className="w-full flex flex-col gap-10 max-w-7xl px-10 max-[550px]:px-5 mx-auto max-[510px]:px-2">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {/* HOME */}
        <div ref={homeRef} className={`STARTINGSECTION relative w-full h-157 justify-center items-start flex flex-col 
          dark:shadow-[0px_1px_20px_#b0b0b033] max-[750px]:flex-colgba(255,255,255,0.2)] rounded-2xl shadow-[0px_0px_40px_rgba(10,10,10,0.08)] overflow-hidden mt-[30px] max-[550px]:mt-[10px] max-[950px]:mt-[25px]`}>
          <img src="/Main_pic.png" alt="" className="w-full h-full object-cover max-[510px]:object-[80%_20%] pointer-events-none absolute" />

          <div className="INFO relative pl-[5%] max-[880px]:pl-[2.5%]  flex flex-col text-white w-[60%] gap-6  max-[510px]:px-1 max-[510px]:w-full">

            <div>
              <h5 className="text-[#ffffffa2]">Hi, my name is Yash Sharma</h5>
              <h1 className="text-4xl font-black max-[510px]:opacity-75">Full Stack Developer</h1>
              <h3 className="SUB-HEADING  max-[510px]:opacity-75">I'm a Full-Stack Developer with a passion for building efficient, user-friendly applications using the MERN stack.</h3>
            </div>

            <div className="BTN flex justify-start gap-3">
              <a href="https://github.com/YashSharma00710" target="_blank">
                <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-base text-[16px] max-[510px]:text-[13px] text-center leading-5 border rounded-xl px-2 py-2 cursor-pointer hover:scale-105  hover:bg-[#1d0101] ">My Project</button>
              </a>
              <a href="https://drive.google.com/file/d/1v4Rk_r_FAqCJ8cTLbtAzxxWMVoMl47YN/view?usp=drive_link" target="_blank">
                <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-base text-[16px] max-[510px]:text-[13px] text-center leading-5 border rounded-xl px-2 py-2 cursor-pointer hover:scale-105  hover:bg-[#1d0101]">Download Resume</button>
              </a>
            </div>

            <div className="SKILLS flex gap-3 flex-wrap max-[510px]:opacity-75 max-[510px]:text-[13px]">
              <button className="border rounded-xl py-.5 px-2.5 border-[#ffffff59]">MongoDB</button>
              <button className="border rounded-xl py-.5 px-2.5 border-[#ffffff59]">Express</button>
              <button className="border rounded-xl py-.5 px-2.5 border-[#ffffff59]">React.Js</button>
              <button className="border rounded-xl py-.5 px-2.5 border-[#ffffff59]">Next.Js</button>
            </div>

            <div className="EXPLORING">
              <span className="bg-[#fff9f975] py-1 px-2 rounded-xl animate-pulse SUB-HEADING">Currently exploring:</span>
              <span className="SUB-HEADING max-[510px]:opacity-75">TypeScript, Authentication & Authorization, AI Integration</span>
            </div>

          </div>

        </div>





        {/* ABOUT */}
        <div ref={aboutRef} className={`2SECTION relative w-full gap-8 rounded-2xl justify-center items-center flex flex-col dark:shadow-[0px_1px_20px_#b0b0b033] shadow-[0px_0px_40px_rgba(10,10,10,0.08)] SECTION-PX SECTION-PY bg-white dark:bg-[#000000]`}>

          <div className="2HEADING flex items-center flex-col gap-3">
            <div className="border-2 border-[#ff002d21] bg-[#ff002d21] p-1 rounded-xl flex justify-center items-center gap-2 text-sm">
              <span><img src="/verified.png" alt="" className="size-6" /></span>
              <span>Get To Know Me</span>
            </div>
            <h1 className="MAIN-HEADING font-black text-center">About Me</h1>
            <p className="w-[70%] max-[510px]:w-[95%] max-[510px]:text-[13px] text-[16px] text-center">A passionate full-stack developer with expertise in modern web technologies, algorithmic problem solving, and an urge to create exceptional user experiences.</p>
          </div>

          <div className="SKILLGRID grid grid-cols-2 max-[770px]:grid-cols-1 w-full  gap-5">

            {skill.map((i, index) => (
              <div key={index} className="SKILL flex flex-col items-start border border-gray-500 p-7 max-[880px]:p-3 rounded-2xl gap-3 overflow-hidden">
                <h1 className="font-black SUB-HEADING pl-2">{i.title}</h1>
                <div className="flex gap-2 flex-col max-[510px]:text-[13px]">
                  {Object.values(i.keypoints).map((j, indexOfJ) => (
                    <div key={indexOfJ} className="KEYPOINTS flex items-start gap-3">
                      <div className="size-2 rounded-full bg-[#FF66A1] shadow-[0_0_8px_#FF66A1] mt-3 shrink-0"></div>
                      <p className="">
                        {j}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
            )}
          </div>
        </div>





        {/* SKILLS */}
        <div ref={skillRef} className={`3SECTION relative w-full gap-8 rounded-2xl justify-center items-center flex flex-col dark:shadow-[0px_1px_20px_#b0b0b033] shadow-[0px_0px_40px_rgba(10,10,10,0.08)] SECTION-PX SECTION-PY bg-white dark:bg-[#000000]`}>
          <div className="3HEADING flex items-center flex-col gap-3 ">
            <div className="border-2 border-[#ff002d21] bg-[#ff002d21] p-1 rounded-xl flex justify-center items-center gap-2 text-sm">
              <img src="/pencil.png" alt="" className="size-6" />
              <span>Technical Arsenal</span>
            </div>
            <h1 className="MAIN-HEADING font-black text-center">Skills & Technologies
            </h1>
            <p className="w-[70%] max-[510px]:w-[95%] max-[510px]:text-[13px] text-[16px] text-center">A comprehensive overview of programming languages, web frameworks, databases, and development tools I work with daily.</p>
          </div>

          <div className="SKILLSINFO w-full space-y-10">
            {/* LANGUAGES */}
            <div className="FRONTEND space-y-7 ">
              <h2 className=" font-black text-2xl">
                <span className="text-pink-400 SUB-HEADING"> {`>_`} </span>
                <span className="SUB-HEADING">Programming Languages</span>
              </h2>
              <div className="w-full">
                <div className="flex p-1 w-full overflow-auto">
                  {/* //1st */}
                  <div className="flex w-fit gap-10 max-[550px]:gap-5">
                    {language.map((e, i) => (
                      <div key={i} className="BOX flex flex-col items-center dark:bg-[#181818e0] bg-[#fff0f0a6] justify-center w-[140px] h-[130px]  rounded-3xl gap-3  border border-transparent hover:border-red-400 hover:scale-105 transition-all cubic-bezier(0.59, -0.13, 0.3, 1.05)">
                        <img src={`${e.img}`} alt="" className={`${e.name == "Next.js" ? "dark:invert" : ''} size-12 object-contain`} />
                        <span className="text-[15px] max-[510px]:text-[13px] max-[550px]:text-[13px] font-black px-2 text-center">{e.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>


            {/* FRONTEND */}
            <div className="FRONTEND space-y-7 ">
              <h2 className=" font-black text-2xl">
                <span className="text-pink-400 SUB-HEADING"> {`</>`} </span>
                <span className="SUB-HEADING">Frontend & Core Development</span>
              </h2>
              <div className="MOVING1 py-2 w-full overflow-hidden">
                <div className="BIGMOVING flex w-fit px-5">
                  {/* //1st */}
                  <div className="MOVINGITEM2 flex w-fit  min-w-[87.5vw] gap-10">
                    {[...frontend, ...frontend].map((e, i) => (
                      <div key={i} className="BOX flex flex-col items-center dark:bg-[#181818e0] bg-[#fff0f0a6] justify-center w-[140px] h-[130px] rounded-3xl gap-3  border border-transparent hover:border-red-400 hover:scale-105 transition-all cubic-bezier(0.59, -0.13, 0.3, 1.05)">
                        <img src={`${e.img}`} alt="" className={`${e.name == "Next.js" ? "dark:invert" : ''} size-12 object-contain`} />
                        <span className="text-[15px] max-[510px]:text-[13px] font-black px-2 text-center">{e.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>


            {/* BACKEND */}
            <div className="BACKEND space-y-7">
              <h2 className=" font-black text-2xl">
                <span className="text-pink-400 SUB-HEADING"> {`</>`} </span>
                <span className=" SUB-HEADING">Backend, DataBase</span>
              </h2>
              <div className="MOVING1 py-2 w-full overflow-hidden">
                <div className={`BIGMOVING flex w-fit px-5`} >
                  {/* //1st */}
                  {/* <div className="MOVINGITEM1 flex  bg-amber-200 w-fit gap-10"> */}
                  <div className="MOVINGITEM2 flex w-fit min-w-[87.5vw] gap-10">
                    {[...backend, ...backend].map((e, i) => (
                      <div key={i} className="BOX flex flex-col items-center dark:bg-[#181818e0] bg-[#fff0f0a6] justify-center w-[140px] h-[130px] rounded-3xl gap-3  border border-transparent hover:border-red-400 hover:scale-105 transition-all cubic-bezier(0.59, -0.13, 0.3, 1.05)">
                        <img src={`${e.img}`} alt="" className={`${e.name == "GitHub" || e.name == "Express.js" ? "dark:invert" : ''} size-12 object-contain`} />
                        <span className="text-[15px] max-[510px]:text-[13px] font-black px-2 text-center">{e.name}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>


        {/* EXPERIENCE */}
        <div ref={experienceRef} className={`3SECTION relative w-full gap-8 rounded-2xl justify-center items-center flex flex-col dark:shadow-[0px_1px_20px_#b0b0b033] shadow-[0px_0px_40px_rgba(10,10,10,0.08)] SECTION-PX SECTION-PY bg-white dark:bg-[#000000]`}>
          <div className="4HEADING flex items-center flex-col gap-3">
            <div className="border-2 border-[#ff002d21] bg-[#ff002d21] p-1 rounded-xl flex justify-center items-center gap-2 text-sm">
              <span><img src="/work.png" alt="" className="size-6" /></span>
              <span>Career Journey</span>
            </div>
            <h1 className="MAIN-HEADING font-black text-center">Professional Experience</h1>
            <p className="w-[70%] max-[510px]:w-[95%] text-[16px] text-center">My journey through web development — internship experience and self-driven full-stack projects.</p>
          </div>

          <div className="EDUCATIONSECTION flex w-full gap-1 flex-col justify-center gap-10 ">

            {/* CLG */}
            <div className=" bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_1px_20px_#bcbcbc33] p-5 max-[510px]:p-2 rounded-2xl flex z-1">
              <div className="EDULOGO w-fit h-fit p-2 rounded-2xl bg-[#e1e1e9] dark:bg-[#2e2e2e] shrink-0">
                <img src="wordpress.webp" alt="" className="size-10 max-[510px]:size-7" />
              </div>
              <div className="EDUCATION flex flex-col w-full py-1 px-2 rounded-2xl gap-3">
                <div className="START flex justify-between gap-3 items-start max-[750px]:flex-col ">
                  <div className="FRONT gap-3 flex flex-col justify-center">
                    <h1 className="font-black SUB-HEADING">Web Developer Intern</h1>
                    <div className="flex gap-4 max-[500px]:flex-col max-[500px]:gap-1">
                      <span className="font-black text-sm max-[770px]:text-[12px]">porQpine IT</span>
                      <span className="flex items-center justify-start text-[13px] gap-1">
                        <img src="location.png" alt="" className="size-3.5" />
                        <span className="max-[770px]:text-[11px]">Hybrid</span>
                      </span>
                    </div>
                  </div>
                  <div className="BACK flex flex-col gap-3 items-end justify-center  max-[750px]:flex-row">
                    <span className="UP flex items-center gap-2 text-[13px] border border-[#ff002d21] bg-[#ff002d21] py-1 px-2 rounded-2xl">
                      <img src="calendar.png" alt="" className="size-4 dark:invert" />
                      July 2025 — Oct 2025
                    </span>
                  </div>
                </div>
                <div className="END w-[95%] space-y-5">
                  <div className="DESC">
                    {/* <p>Code. Build. Break. Learn. Repeat. — turning ideas into full-stack experiences, one project at a time.</p> */}
                    <p className="max-[510px]:text-[13px]">Built a full-featured e-commerce website using WordPress and WooCommerce, covering product catalog setup, shopping cart, checkout, and order management. Completed as a 3-month internship project (also served as a minor college project).</p>
                  </div>
                  <div className="MODULES flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <h5 className="text-gray-500 font-black max-[510px]:text-[14px]">KEY CONTRIBUTIONS & IMPACT</h5>
                    </span>
                    <div className="flex flex-col gap2 flex-wrap gap-1 text-sm max-[510px]:text-[13px]">
                      <span>✅ Set up and configured a WooCommerce-based online store, including product listings, categories, and cart/checkout flow.</span>
                      <span>✅ Managed the end-to-end order lifecycle — from product upload to order processing — through the WordPress admin dashboard.</span>
                      <span>✅ Configured automated transactional email notifications for order confirmations and updates.</span>
                      <span>✅ Gained hands-on experience with real-world e-commerce workflows in a structured internship environment.</span>
                    </div>
                    <div className="flex gap2 flex-wrap gap-3 text-sm max-[510px]:text-[13px]">
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">WordPress</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">WooCommerce</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Product Management</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Order Processing</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Email Automation</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* EDUCATION */}
        <div ref={educationRef} className={`4SECTION relative w-full gap-8 rounded-2xl justify-center items-center flex flex-col  dark:shadow-[0px_1px_20px_#b0b0b033] shadow-[0px_0px_40px_rgba(10,10,10,0.08)] SECTION-PX SECTION-PY bg-white dark:bg-[#000000]`}>

          <div className="4HEADING flex items-center flex-col gap-3">
            <div className="border-2 border-[#ff002d21] bg-[#ff002d21] p-1 rounded-xl flex justify-center items-center gap-2 text-sm">
              <span><img src="/light-bulb.png" alt="" className="size-6" /></span>
              <span>Academic Journey</span>
            </div>
            <h1 className="MAIN-HEADING font-black text-center">Education & Qualifications</h1>
            <p className="w-[70%] max-[510px]:w-[95%] text-[16px] text-center">A journey of learning, growth, and building a strong foundation in technology.</p>
          </div>

          <div className="EDUCATIONSECTION flex w-full gap-1 flex-col justify-center gap-10 ">
            <div className="w-0.5 h-[70%] absolute bg-[red] left-30" ></div>

            {/* CLG */}
            <div className=" bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_1px_20px_#bcbcbc33] p-5 max-[510px]:p-2 rounded-2xl flex z-1">
              <div className="EDULOGO w-fit h-fit bg-gradient-to-r shrink-0  from-[#FD1D1D] from-[7%] to-[#FF05FB] p-2 rounded-2xl">
                <img src="education.png" alt="" className="size-10 max-[510px]:size-7" />
              </div>
              <div className="EDUCATION flex flex-col w-full py-1 px-2 rounded-2xl gap-3">
                <div className="START flex justify-between gap-3 items-start max-[750px]:flex-col ">
                  <div className="FRONT gap-3 flex flex-col justify-center">
                    <h1 className="font-black SUB-HEADING">Bachelor of Computer Applications</h1>
                    <div className="flex gap-4 max-[500px]:flex-col max-[500px]:gap-1">
                      <span className="font-black text-sm max-[770px]:text-[12px]">JIMS VK-II,Jagannath University</span>
                      <span className="flex items-center justify-start text-[13px] gap-1">
                        <img src="location.png" alt="" className="size-3.5" />
                        <span className="max-[770px]:text-[11px]">Vasant Kunj, New Delhi, India</span>
                      </span>
                    </div>
                  </div>
                  <div className="BACK flex flex-col gap-3 items-end justify-center  max-[750px]:flex-row">
                    <span className="UP flex items-center gap-2 text-[13px] border border-[#ff002d21] bg-[#ff002d21] py-1 px-2 rounded-2xl">
                      <img src="calendar.png" alt="" className="size-4 dark:invert" />
                      2023-2026
                    </span>
                    <span className="DOWN">
                      <span className="flex w-fit items-center gap-2 text-[13px] border border-[#ff002d21] bg-[#05fd2d21] py-1 px-2 rounded-2xl">7.83 CGPA</span>
                    </span>
                  </div>
                </div>
                <div className="END w-[95%] space-y-5">
                  <div className="DESC">
                    {/* <p>Code. Build. Break. Learn. Repeat. — turning ideas into full-stack experiences, one project at a time.</p> */}
                    <p className="max-[510px]:text-[13px]">Studied programming, data structures, databases, web development, software engineering, and computer fundamentals, with a focus on practical projects and problem-solving.</p>
                  </div>
                  <div className="MODULES flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <img src="open-book.png" alt="" className="size-5" />
                      <h5 className="text-gray-500 font-black max-[510px]:text-[14px]">Key Modules & Coursework</h5>
                    </span>
                    <div className="flex gap2 flex-wrap gap-3 text-sm max-[510px]:text-[13px]">
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Data Structures & Algorithms</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Object-Oriented Programming</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Database Management Systems</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Web Development</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Computer Networks</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Operating Systems</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Software Engineering</button>
                    </div>
                  </div>
                  <div className="MODULES flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <img src="brand.png" alt="" className="size-6" />
                      <h5 className="text-gray-500 font-black max-[510px]:text-[14px]">Highlights & Achievements</h5>
                    </span>
                    <div className="flex flex-col gap2 flex-wrap gap-1 text-sm max-[510px]:text-[13px]">
                      <span>🏆 Head of Club Activities, leading teams to successful event wins.</span>
                      <span>⚽ Led the college football team for one year.</span>
                      <span>🎓 Frequently among the top performers in class.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* 12th */}
            <div className=" bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_1px_20px_#bcbcbc33] p-5 max-[510px]:p-2 rounded-2xl flex z-1">
              <div className="EDULOGO w-fit h-fit shrink-0 bg-[linear-gradient(75deg,rgba(250,90,90,1)_0%,rgba(253,187,45,1)_100%)] p-2 rounded-2xl">
                <img src="education.png" alt="" className="size-10 max-[510px]:size-7" />
              </div>
              <div className="EDUCATION flex flex-col w-full py-1 px-2 rounded-2xl gap-3">
                <div className="START flex justify-between gap-3 items-start max-[750px]:flex-col ">
                  <div className="FRONT gap-3 flex flex-col justify-center">
                    <h1 className="font-black SUB-HEADING">Senior Secondary Education (Class XII – CBSE)</h1>
                    <div className="flex gap-4 max-[500px]:flex-col max-[500px]:gap-1">
                      <span className="font-black text-sm max-[770px]:text-[12px]">Kendriya Vidyalaya</span>
                      <span className="flex items-center justify-start text-[13px] gap-1">
                        <img src="location.png" alt="" className="size-3.5" />
                        <span className="max-[770px]:text-[11px]">New Delhi, India</span>
                      </span>
                    </div>
                  </div>
                  <div className="BACK flex flex-col gap-3 items-end justify-center  max-[750px]:flex-row shrink-0">
                    <span className="UP flex items-center gap-2 text-[13px] border border-[#ff002d21] bg-[#ff002d21] py-1 px-2 rounded-2xl ">
                      <img src="calendar.png" alt="" className="size-4 dark:invert" />
                      2022-2023
                    </span>
                    <span className="DOWN">
                      <span className="flex w-fit items-center gap-2 text-[13px] border border-[#ff002d21] bg-[#05fd2d21] py-1 px-2 rounded-2xl">81.4 %</span>
                    </span>
                  </div>
                </div>
                <div className="END w-[95%] space-y-5">
                  <div className="DESC">
                    <p className="max-[510px]:text-[13px]">Commerce stream with Information Practices (IP), building a foundation in business, economics, accountancy, and computer applications.</p>
                  </div>
                  <div className="MODULES flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <img src="open-book.png" alt="" className="size-5" />
                      <h5 className="text-gray-500 font-black max-[510px]:text-[14px]">Key Modules & Coursework</h5>
                    </span>
                    <div className="flex gap2 flex-wrap gap-3 text-sm max-[510px]:text-[13px]">
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Accountancy</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Business Studies</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Economics</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Information Practices (Python)</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">English</button>
                    </div>
                  </div>
                  <div className="MODULES flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <img src="brand.png" alt="" className="size-6" />
                      <h5 className="text-gray-500 font-black max-[510px]:text-[14px]">Highlights & Achievements</h5>
                    </span>
                    <div className="flex flex-col gap2 flex-wrap gap-1 text-sm max-[510px]:text-[13px]">
                      <span>🏆 Class XII Topper in Information Practices (IP)</span>
                      <span>🎤 Attended Pariksha Pe Charcha through school</span>
                      <span>⚽ Represented the school in the football team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* 10th */}
            <div className=" bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_1px_20px_#bcbcbc33] p-5 max-[510px]:p-2 rounded-2xl flex z-1">
              <div className="EDULOGO w-fit h-fit bg-[radial-gradient(circle,#fb3f5e_0%,#fc466b_100%)] p-2 rounded-2xl">
                <img src="education.png" alt="" className="size-10 max-[510px]:size-7" />
              </div>
              <div className="EDUCATION flex flex-col w-full py-1 px-2 rounded-2xl gap-3">
                <div className="START flex justify-between gap-3 items-start max-[750px]:flex-col ">
                  <div className="FRONT gap-3 flex flex-col justify-center">
                    <h1 className="font-black SUB-HEADING">Secondary School Certificate (Class X – CBSE)</h1>
                    <div className="flex gap-4 max-[500px]:flex-col max-[500px]:gap-1">
                      <span className="font-black text-sm max-[770px]:text-[12px]">Kendriya Vidyalaya</span>
                      <span className="flex items-center justify-start text-[13px] gap-1">
                        <img src="location.png" alt="" className="size-3.5" />
                        <span className="max-[770px]:text-[11px]">New Delhi, India</span>
                      </span>
                    </div>
                  </div>
                  <div className="BACK flex flex-col gap-3 items-end justify-center  max-[750px]:flex-row shrink-0">
                    <span className="UP flex items-center gap-2 text-[13px] border border-[#ff002d21] bg-[#ff002d21] py-1 px-2 rounded-2xl">
                      <img src="calendar.png" alt="" className="size-4 dark:invert" />
                      2021-2022
                    </span>
                    <span className="DOWN">
                      <span className="flex w-fit items-center gap-2 text-[13px] border border-[#ff002d21] bg-[#05fd2d21] py-1 px-2 rounded-2xl">75.4 %</span>
                    </span>
                  </div>
                </div>
                <div className="END w-[95%] space-y-5">
                  <div className="DESC">
                    <p className="max-[510px]:text-[13px]">Comprehensive secondary education with a strong foundation in science, mathematics, languages, and social studies.</p>
                  </div>
                  <div className="MODULES flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <img src="open-book.png" alt="" className="size-5" />
                      <h5 className="text-gray-500 font-black max-[510px]:text-[14px]">Key Modules & Coursework</h5>
                    </span>
                    <div className="flex gap2 flex-wrap gap-3 text-sm max-[510px]:text-[13px]">
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Mathematics</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Science</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Social Studies</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">English</button>
                      <button className="py-1 px-2 rounded-2xl border border-red-200 w-fit">Hindi</button>
                    </div>
                  </div>
                  <div className="MODULES flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <img src="brand.png" alt="" className="size-6" />
                      <h5 className="text-gray-500 font-black max-[510px]:text-[14px]">Highlights & Achievements</h5>
                    </span>
                    <div className="flex flex-col gap2 flex-wrap gap-1 text-sm max-[510px]:text-[13px]">
                      <span>🏆 2nd Place in an Inter-School Drawing Competition.</span>
                      <span>🥉 3rd Place in Hindi Kavita Lekhan Pratiyogita.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>





        {/* CERTIFICATES */}
        <div ref={certificateRef} className={`5SECTION relative w-full gap-8 rounded-2xl justify-center items-center flex flex-col dark:shadow-[0px_1px_20px_#b0b0b033] shadow-[0px_0px_40px_rgba(10,10,10,0.08)] SECTION-PX SECTION-PY bg-white dark:bg-[#000000]`}>

          <div className="5HEADING flex items-center flex-col gap-3">
            <div className="border-2 border-[#ff002d21] bg-[#ff002d21] p-1 rounded-xl flex justify-center items-center gap-2 text-sm">
              <span><img src="/verified.png" alt="" className="size-6" /></span>
              <span>Verified Credentials</span>
            </div>
            <h1 className="MAIN-HEADING font-black text-center">Certifications & Achievements</h1>
            <p className="w-[70%] max-[510px]:w-[95%] text-[16px] text-center">Academic certifications and recognized achievements showcasing continuous learning.</p>
          </div>

          <div className="CERTIFICATEGRID grid grid-cols-2 w-full  gap-5 max-[770px]:grid-cols-1">
            {/* 1 CERTIFICATE */}
            <div className="CERTIFICATE1 flex flex-col items-start p-5 rounded-2xl gap-3 bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_1px_20px_#bcbcbc33]">
              <div className="flex justify-between w-full items-center">
                <div className="CERTIFICATELOGO w-fit h-fit bg-[linear-gradient(157deg,#61ebf2_19%,#f5eb33_89%)] p-2 rounded-2xl">
                  <img src="python.png" alt="" className="size-8" />
                </div>
                <span className="flex w-fit items-center text-sm border border-[#ff002d21] bg-[#05fd2d21] py-1 px-2 rounded-2xl">Verified</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-black SUB-HEADING ">Joy of Computing using Python</h1>
                <h4 className="text-sm space-x-3">
                  <span className="text-red-400 font-black">SWAYAM / NPTEL •</span>
                  <span className="font-black text-gray-500 ">2025</span>
                </h4>
              </div>
              <div className="flex gap-2 flex-col ">
                <div className="flex gap2 flex-wrap gap-3 text-[11px] font-black">
                  <button className="py-1 px-2 rounded-xl border border-red-200 w-fit">Python</button>
                  <button className="py-1 px-2 rounded-xl border border-red-200 w-fit">Programming</button>
                  <button className="py-1 px-2 rounded-xl border border-red-200 w-fit">Problem Solving</button>
                </div>
              </div>
            </div>

            {/* 2nd CERTIFICATE */}
            <div className="CERTIFICATE1 flex flex-col items-start p-5 rounded-2xl gap-3 bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_1px_20px_#bcbcbc33]">
              <div className="flex justify-between w-full items-center">
                <div className="CERTIFICATELOGO w-fit h-fit bg-[linear-gradient(135deg,#06b6d4_0%,#2563eb_100%)] p-2 rounded-2xl">
                  <img src="technology.png" alt="" className="size-8" />
                </div>
                <span className="flex w-fit items-center text-sm border border-[#ff002d21] bg-[#05fd2d21] py-1 px-2 rounded-2xl">Verified</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-black SUB-HEADING ">Introduction to Industry 4.0 and Industrial Internet of Things</h1>
                <h4 className="text-sm space-x-3">
                  <span className="text-red-400 font-black">SWAYAM / NPTEL •</span>
                  <span className="font-black text-gray-500 ">2025</span>
                </h4>
              </div>
              <div className="flex gap-2 flex-col ">
                <div className="flex gap2 flex-wrap gap-3 text-[11px] font-black ">
                  <button className="py-1 px-2 rounded-xl border border-red-200 w-fit">Industry 4.0</button>
                  <button className="py-1 px-2 rounded-xl border border-red-200 w-fit">IoT</button>
                  <button className="py-1 px-2 rounded-xl border border-red-200 w-fit">IIoT</button>
                </div>
              </div>
            </div>

          </div>
        </div>





        {/* CONTACT */}
        <div ref={contactRef} className={`6SECTION relative w-full gap-8 rounded-2xl justify-center items-center flex flex-col dark:shadow-[0px_1px_20px_#b0b0b033] shadow-[0px_0px_40px_rgba(10,10,10,0.08)] SECTION-PX SECTION-PY bg-white dark:bg-[#000000]`}>

          <div className="6HEADING flex items-center flex-col gap-3">
            <div className="border-2 border-[#ff002d21] bg-[#ff002d21] p-1 rounded-xl flex justify-center items-center gap-2 text-sm">
              <span><img src="/social-network.png" alt="" className="size-6" /></span>
              <span>Let's Connect</span>
            </div>
            <h1 className="MAIN-HEADING font-black text-center">Get In Touch</h1>
            <p className="w-[70%] max-[510px]:w-[95%] text-[16px] text-center">Interested in working together, discussing opportunities, or technical inquiries? Reach out directly!

            </p>
          </div>

          <div className="CONTACTGRID flex flex-col w-full  gap-5 max-[730px]:gap-2">
            {/* 1 CONTACT */}
            <div className="CONTACT1 flex flex-col items-start p-5 rounded-2xl max-[510px]:px-[10px]">

              {/* 1st */}
              <div className="flex max-[730px]:flex-col w-full items-center justify-between border border-red-400 p-3 rounded-2xl bg-[linear-gradient(90deg,#efffeb_9%,#ebcece_46%,#b1def0_100%)] dark:bg-[linear-gradient(90deg,#5d5547_9%,#8b5959_46%,#17262d_100%)]">
                <div className="flex items-center gap-2 max-[730px]:w-full">
                  <div className="CONTACTLIVE size-2 bg-green-400 p-2 rounded-2xl"></div>
                  <div className="flex flex-col w-fit items-start text-sm py-1 px-2">
                    <span className="font-black">Currently Available for Engineering Roles & Collaborations</span>
                    <span className="text-[13px]">Open for Full-Time, Remote, Onsite & Freelance Projects</span>
                  </div>
                </div>
                <div>
                  <a
                    href="mailto:yashsharma3440@gmail.com"
                  >
                    <button className="flex items-center gap-3 text-[13px] font-black cursor-pointer p-2 rounded-2xl border border-[#ff002d21] bg-[#f4dbdb] dark:bg-[#5b3131]">
                      <img src="gmail.png" alt="" className="size-4" />
                      <span className="font-black ">Email me Directly</span>
                    </button>
                  </a>
                </div>
              </div>

            </div>

            {/* 2nd CONTACT */}
            <div className="CONTACT1 flex  items-start p-5 gap-3 max-[510px]:p-2">
              <div className="flex max-[770px]:flex-col w-full h-fit items-stretch justify-between gap-5 ">


                {/* Left Contact*/}
                <div className="flex flex-col gap-4 w-full rounded-2xl items-center bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_5px_40px_rgba(255,255,255,0.2)] p-6 Designed & max-[770px]:p-3">
                  {/* Upper Section */}
                  <div className="w-full flex items-start gap-4 max-[770px]:gap-2">
                    <img src="gmail.png" alt="" className="size-7 max-[510px]:size-5 mt-2" />
                    <div className="flex flex-col font-black ">
                      <span className="text-gray-500 max-[880px]:text-[15px]">Direct Email Address</span>
                      <span className="max-[880px]:text-sm">yashsharma3440@gmail.com</span>
                    </div>
                  </div>
                  {/* Bottom Section */}
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-sm">Feel free to email me directly for hiring inquiries, project proposals, or technical discussions.</span>
                    <div className="flex w-full pt-3 flex-col gap-4">
                      <hr className="text-gray-400" />
                      <button className="cursor-pointer rounded-xl py-1 gap-2 border border-gray-500 w-full flex items-center justify-center" onClick={handleCopy}>
                        <span><img src="copy.png" alt="" className="size-4" /></span>
                        <span className="max-[510px]:text-[13px]">Copy Email</span>
                      </button>
                    </div>
                  </div>
                </div>


                {/* Right Contact*/}
                <div className="flex flex-col gap-4 w-full rounded-2xl items-center bg-[#f4f4f4] dark:bg-[#000000] shadow-[0px_0px_10px_#cdcdcd] dark:shadow-[0px_5px_40px_rgba(255,255,255,0.2)] p-6 max-[880px]:p-3">


                  {/*Right contact Upper Section */}
                  <div className="w-full flex items-start gap-4">
                    <div className="flex flex-col font-black ">
                      <span className="text-gray-500 max-[880px]:text-[15px]">Connect Across Professional Platforms</span>

                    </div>
                  </div>

                  {/*Right contact Bottom Section */}
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col gap-3">

                      {/*Right contact First Button */}
                      <a href="https://www.linkedin.com/in/yash-sharma-76220a32b/" target="_blank">
                        <button className="flex items-center w-full gap-3 bg-white dark:bg-[#262626] p-2 rounded-xl cursor-pointer" >
                          <div className="bg-[#e1e1e9] dark:bg-[#2e2e2e] p-2 rounded-xl shrink-0">
                            <img src="linkedIn.png" alt="" className="size-5 " />
                          </div>
                          <div className="font-black flex justify-between items-center w-full">
                            <div className="flex flex-col items-start">
                              <span className="max-[880px]:text-[15px]">LinkedIn</span>
                              <span className="text-[12px] text-gray-500">@yash-sharma</span>
                            </div>
                            <div>
                              <img src="share.png" alt="" className="size-4 dark:invert" />
                            </div>
                          </div>
                        </button>
                      </a>

                      {/*Right contact Second Button */}
                      <a href="https://github.com/YashSharma00710" target="_blank">
                        <button className="flex items-center w-full gap-3 bg-white dark:bg-[#262626] p-2 rounded-xl cursor-pointer" >
                          <div className="bg-[#e1e1e9] dark:bg-[#2e2e2e] p-2 rounded-xl shrink-0">
                            <img src="github.png" alt="" className="size-5 dark:invert" />
                          </div>
                          <div className="font-black flex justify-between items-center w-full">
                            <div className="flex flex-col items-start">
                              <span className="max-[880px]:text-[15px]">GitHub</span>
                              <span className="text-[12px] text-gray-500 ">@YashSharma00710</span>
                            </div>
                            <div>
                              <img src="share.png" alt="" className="size-4 dark:invert" />
                            </div>
                          </div>
                        </button>
                      </a>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section >
    </>
  );
}
