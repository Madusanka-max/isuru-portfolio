"use client";

import {FaCss3,FaHtml5,FaJs,FaReact,FaFigma,FaNodeJs,} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger,} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "I'm a software engineer with a passion for creating user-friendly experiences.",
  info: [
    { fieldName: "Name", fieldvalue: "Isuru Madusanka" },
    { fieldName: "Phone", fieldvalue: "(+094 71 4288427)" },
    { fieldName: "Experience", fieldvalue: "12+" },
    { fieldName: "Skype", fieldvalue: "Isuru Madusanka" },
    { fieldName: "Nationality", fieldvalue: "Sri Lankan" },
    { fieldName: "Email", fieldvalue: "isuru23776@gmail.com" },
    { fieldName: "Freelance", fieldvalue: "Available" },
    { fieldName: "Language", fieldvalue: "English, Sinhala" },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "My Experience",
  description: "I have worked on various projects across various domains.",
  items: [
    { company: "Admin", position: "", duration: "" },
    { company: "Manager", position: "", duration: "" },
  ],
};

// education data
const education = {
  icon: "",
  title: "My Education",
  description: "I have worked on various projects across various domains.",
  items: [
    { institution: "CCC", 
      degree: "Primary Education", 
      duration: "2006-2011" 
    },
    {
      institution: "STC",
      degree: "Secondary Education",
      duration: "2011-2019",
    },
    {
      institution: "NIBM",
      degree: "Diploma in Software Engineering",
      duration: "2019-2022",
    },
    { institution: "RUSL", 
      degree: "BICT Hons", 
      duration: "2021-present" 
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
    { icon: <FaNodeJs />, 
      name: "Node.js" 
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
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="hover:text-accent">Experience</TabsTrigger>
            <TabsTrigger value="education" className="hover:text-accent">Education</TabsTrigger>
            <TabsTrigger value="skills" className="hover:text-accent">Skills</TabsTrigger>
            <TabsTrigger value="about" className="hover:text-accent">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <h2 className="text-2xl font-bold mb-4">{experience.title}</h2>
              <p>{experience.description}</p>
              <ul>
                {experience.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <strong>
                      {item.position} at {item.company}
                    </strong>{" "}
                    ({item.duration})
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="education">
              <h2 className="text-2xl font-bold mb-4">{education.title}</h2>
              <p>{education.description}</p>
              <ul>
                {education.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <strong>{item.degree}</strong> from{" "}
                    <em>{item.institution}</em> ({item.duration})
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="skills">
              <h2 className="text-2xl font-bold mb-4">{skills.title}</h2>
              <p>{skills.description}</p>
              <div className="flex flex-wrap gap-4">
                {skills.skillList.map((skill, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="p-2 border rounded-lg text-center">
                        {skill.icon}
                        <p>{skill.name}</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipProvider>
                      <TooltipContent>{skill.name}</TooltipContent>
                    </TooltipProvider>
                  </Tooltip>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
              <h2 className="text-2xl font-bold mb-4">{about.title}</h2>
              <p>{about.description}</p>
              <ul>
                {about.info.map((infoItem, index) => (
                  <li key={index}>
                    <strong>{infoItem.fieldName}: </strong>
                    {infoItem.fieldvalue}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
