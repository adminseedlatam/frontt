"use client";

import Image from "next/image";
import { Tabs } from "../../../components/ui/tabs";
import Nivel3 from "../../../assets/img/seednode/2 old school hat.svg";
import StartWizardPath from "./startWizard";
import WalkWizardPath from "./walkWizard";
import FullWizardPath from "./fullWizard";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Node Apprentice",
      value: "node apprentice",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#B9B8FD] to-[#6C52BB]">
          <StartWizardPath />
        </div>
      ),
    },
    {
      title: "Node Guardian",
      value: "node guardian",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#9A95FF] to-[#4A3686]">
          <WalkWizardPath />
        </div>
      ),
    },
    {
      title: "Node Wizard",
      value: "node Wizard",
      content: (
        <div className="flex flex-wrap w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#6149AB] to-[#211E25]">
          <FullWizardPath />
        </div>
      ),
    },
  ];

  return (
    /* Modify when adding more articles */
    <div className=" h-[70rem] sm:h-[70rem] md:h-[80rem] lg:h-[85rem] [perspective:1000px]  relative b flex flex-col lg:max-w-5xl px-6 mx-auto w-full  items-start justify-start mt-20  mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
