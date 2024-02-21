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
      title: "Apprendice Wizard Path",
      value: "apprendice Wizard Path",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-400 to-[#8D3C94]">
          <StartWizardPath />
        </div>
      ),
    },
    {
      title: "Walking the Wizard path",
      value: "walking the Wizard path",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <WalkWizardPath />
        </div>
      ),
    },
    {
      title: "Node Wizard",
      value: "node Wizard",
      content: (
        <div className="flex flex-wrap w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <FullWizardPath />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[120rem] [perspective:1000px]  relative b flex flex-col max-w-5xl px-6 lg:mx-auto w-full  items-start justify-start mt-20 mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
