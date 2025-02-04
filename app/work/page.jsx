"use client";

import react, {useState} from "react";
import {motion} from "framer-motion";

import {Swiper,SwiperSlide} from "swiper/react";
import"swiper/css";

import { BsArrowUpRight,BsGithub } from "react-icons/bs";

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger, } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects=[
  {
    num:'01',
    category:'FullStack',
    title: 'Healthy Farm Crops Website',
    description:"Healthy Farm Crops is an online marketplace that connects farmers with buyers, reducing wait times and wastage. It offers a user-friendly platform with mobile compatibility for easy transactions. This solution enhances agricultural trade by providing a faster and more efficient selling process.",
    stack: [{name: "HTML"},{name: "PHP"},{name: "CSS"},{name: "JavaScript"},{name: "SQL"}],
    image:'/assets/work/1.jpeg',
    live: '',
    github:"https://github.com/Madusanka-max/HEALTHY-FARM-CROPS-Website-Using-PHP-HTML-CSS-JavaScript-SQL",
  },
  {
    num:'02',
    category:'FullStack',
    title: 'Vehicle Repair Centers Website',
    description:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...",
    stack: [{name: "HTML"},{name: "PHP"},{name: "CSS"},{name: "JavaScript"},{name: "SQL"}],
    image:'/assets/work/1.jpeg',
    live: '',
    github:"https://github.com/Madusanka-max/vehicle-repair-centers-website-using-PHP-HTML-CSS-JAVASCRIPT",
  },
  {
    num:'02',
    category:'FullStack',
    title: 'The Grocery Shop Management System',
    description:"The Grocery Shop Management System (GSMS) is a digital solution designed to streamline grocery store operations by automating inventory management, sales tracking, and supplier coordination. It helps store owners make informed decisions, optimize stock levels, and improve efficiency. By reducing manual work and enhancing customer satisfaction, GSMS ensures grocery stores remain competitive and cost-effective....",
    stack: [{name: "JAVAFX"},{name: "SQL"}],
    image:'/assets/work/1.jpeg',
    live: '',
    github:"https://github.com/Madusanka-max/GroceryShopManagementSystem",
  },
  {
    num:'02',
    category:'FullStack',
    title: 'Vehicle Repair Centers Website',
    description:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...",
    stack: [{name: "HTML"},{name: "PHP"},{name: "CSS"},{name: "JavaScript"}],
    image:'/assets/work/1.jpeg',
    live: '',
    github:"",
  },
];
const work = () => {
  const[project,setProject]=useState(projects[0]);

  const handleSlideChange=(swiper)=>{
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
      className="mini-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="flex items-center">
                {/* Outline number */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* Project category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ml-4">
                  {project.category}
                </h2>
              </div>
              {/* project title */}
               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              {/* project description */}
              <p className="text-white/60 text-justify">{project.description}</p>
              {/* stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma*/}
                    {index!=project.stack.length -1 &&","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="p-2 rounded bg-white text-black">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="p-2 rounded bg-white text-black">GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full ">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                    
                  </div>
                </SwiperSlide>;
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default work