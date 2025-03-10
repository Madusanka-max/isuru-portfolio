"use client";

import { FaCss3,FaHtml5,FaJs,FaReact,FaFigma,FaPhp, } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger, } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "I'm a software engineer with a passion for creating user-friendly experiences.",
  info: [
    { fieldName: "Name", fieldvalue: "Isuru Madusanka" },
    { fieldName: "Phone", fieldvalue: "+94 71 428 8427" },
    { fieldName: "Nationality", fieldvalue: "Sri Lankan" },
    { fieldName: "Email", fieldvalue: "isuru.rodriog1243@gmail.com" },
    /* { fieldName: "Experience", fieldvalue: "12+" }, */
    { fieldName: "Freelance", fieldvalue: "Available" },
    { fieldName: "Language", fieldvalue: "English, japanese, Sinhala" },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "My Experience",
  description: "I have worked on various projects across various domains.",
  items: [
    { company: "ABC", position: "Admin", duration: "2019 - 2020" },
    { company: "CDS", position: "Manager", duration: "2020 - 2025" },
  ],
};

// education data
const education = {
  icon: "",
  title: "My Education",
  description: "I have gained a strong foundation in academic studies and hands-on experience.",
  items: [
    { 
      institution: "Christ Church College, Matale (CCC)", 
      degree: "Primary Education", 
      duration: "2006 - 2011" 
    },
    {
      institution: "St. Thomas' College, Matale (STC)",
      degree: "Ordinary Level (O/L)",
      duration: "2016",
    },
    {
      institution: "St. Thomas' College, Matale (STC)",
      degree: "GCE Advanced Level (A/L)",
      duration: "2019",
    },
    {
      institution: "National Institute of Business Management (NIBM), Kandy",
      degree: "Diploma in Software Engineering",
      duration: "2019 - 2022",
    },
    { 
      institution: "Rajarata University of Sri Lanka (RUSL)", 
      degree: "Bachelor of Information and Communication Technology (Hons)", 
      duration: "2021 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "I'm a software engineer with a passion for creating user-friendly experiences.",
  skillList: [
    { icon: <FaHtml5 />, 
      name: "HTML5" 
    },
    { icon: <FaPhp />, 
      name: "PHP" 
    },
    { icon: <FaCss3 />, 
      name: "CSS3" 
    },
    { icon: <FaJs />, 
      name: "Javascript" 
    },
    { icon: <FaReact />, 
      name: "React.js" 
    },
    { icon: <SiNextdotjs />, 
      name: "Next.js" 
    },
    { icon: <SiTailwindcss />, 
      name: "Tailwind CSS" 
    },
    { icon: <FaFigma />, 
      name: "Figma" 
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col justify-center items-start w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {/*<TabsTrigger value="experience" className="hover:text-accent">Experience</TabsTrigger>*/}
            <TabsTrigger value="education" className="hover:text-accent">Education</TabsTrigger>
            <TabsTrigger value="skills" className="hover:text-accent">Skills</TabsTrigger>
            <TabsTrigger value="about" className="hover:text-accent">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
          {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-4">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          {/* education */}
            <TabsContent value="education">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-4">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return(
                      <li key={index} className="bg-[#232329] h-[284px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent flex justify-self-start items-start"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
             <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skills, index) =>{
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skills.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize p-2 rounded bg-white text-black">{skills.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                    </li>
                  );
                })}
              </ul>
             </div>
            </TabsContent>

          {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((infoItem, index) => {
                    return(
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{infoItem.fieldName}</span>
                      <span className="text-xl">{infoItem.fieldvalue}</span>
                    </li>
                    );
                  })}
                </ul>
              </div>
              
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};


export default Resume;
