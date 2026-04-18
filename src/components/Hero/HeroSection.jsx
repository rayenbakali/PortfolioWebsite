import { Button } from "@/components/ui/button";
import { ArrowDown, Paintbrush } from "lucide-react";
import { motion } from "motion/react";
import React, { useState, useEffect, useMemo } from "react";
import { HeroHighlight } from "./HeroHighlight";

const HeroSection = ({ introDone = true }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(() => ["Software engineer", "Graphic designer", "Freelancer"], []);
  useEffect(() => {
    if (!introDone) return;
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [titles, introDone]);
  return (
    <div id="home" className="p-0 flex items-center justify-center max-w-screen-xl">
      <div className="text-center w-full">
        <HeroHighlight >
        <h1 className="text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Hi im Rayen Bakali
        </h1>
        <h1 className="text-2xl font-bold">
          <motion.span
            key={titleIndex}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: titleIndex * 0.2 }}
          >
            {titles[titleIndex]}
          </motion.span>
        </h1>
        <p className="mt-6 px-10 text-[17px] md:text-lg">
          I'm a software engineer with a passion for building web applications
          and a freelance Graphic Designer
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" onClick={() => window.location.href = "#about"}>
              Get to know me <ArrowDown className="!h-5 !w-5" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
            >
            <a href="https://www.behance.net/lazerxtv"  target="_blank" className="flex items-center gap-2">
              My other side
              <Paintbrush className="!h-5 !w-5" />
            </a>
          </Button>
        </div>
            </HeroHighlight>
      </div>
    </div>
  );
};

export default HeroSection;
