'use client';
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      {/* Section Heading */}
      {/* Animated floating effect */}
<div className="mb-24 mt-16 text-center">
  <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white">
    A small selection of projects{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
      recent projects
    </span>
  </h1>
</div>
      {/* Wider Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 w-full max-w-[1800px] mx-auto">
        {projects.map(({ id, des, iconLists, img, sourceCode, title }) => (
          <div key={id} className="flex justify-center px-4 sm:px-0">
            <div className="w-full h-full min-w-[400px]">
              <PinContainer title={title} href={sourceCode}>
                <div className="flex flex-col bg-[#13162d] rounded-3xl p-6 w-full h-full shadow-xl border border-white/10 hover:border-white/20 transition-all">
                  {/* Wider Image Container */}
                  <div className="relative w-full aspect-[16/8] rounded-xl mb-6 overflow-hidden">
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      fill
                      className="object-cover opacity-10"
                    />
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover relative z-10"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col flex-grow px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
                      {title}
                    </h2>

                    {/* Wider Description */}
                    <div className="mb-6">
                      <p className="text-base md:text-lg text-gray-300 text-justify leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
                        {des}
                      </p>
                    </div>

                    {/* Tech Stack & Link - Wider */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {iconLists.map((icon, i) => (
                            <div
                              key={icon}
                              className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 bg-black hover:bg-white/10 transition-all"
                            >
                              <Image
                                src={icon}
                                alt={`tech-${i}`}
                                width={22}
                                height={22}
                                className="p-1.5"
                              />
                            </div>
                          ))}
                        </div>

                        <Link
                          href={sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-purple text-base md:text-lg hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                        >
                          View Project
                          <FaLocationArrow className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};