"use client";

import dynamic from "next/dynamic";

// ✅ Dynamically import ScriptLoader with SSR disabled
const ScriptLoader = dynamic(() => import("@/components/ScriptLoader"), {
  ssr: false,
});

import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";

const MainPage = () => {
  return (
    <>
      {/* ✅ This will safely load your script on client side only */}
      <ScriptLoader />

      {/* ✅ Your main page layout */}
      <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
        <FloatingNav navItems={navItems} />
        <div className="w-full max-w-7xl">
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainPage;
