"use client";

import Image from "next/image";
import { Tabs } from "../../../components/ui/tabs";
import Nivel3 from "../../../assets/img/seednode/2 old school hat.svg"

export default function TabsDemo() {
  const tabs = [
    {
      title: "Apprendice Wizard Path",
      value: "apprendice Wizard Path",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Contenido - Apprendice Wizard Path</p>
          <StartWizardPath />
        </div>
      ),
    },
    {
      title: "Walking the Wizard path",
      value: "walking the Wizard path",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Contenido - Walking the Wizard path</p>
          <WalkWizardPath />
        </div>
      ),
    },
    {
      title: "Node Wizard",
      value: "node Wizard",
      content: (
        <div className="flex flex-wrap w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Image
                    src={Nivel3}
                    height="100"
                    width="100"
                    className="h-full w-full object-cover rounded-xl group-hover:shadow-xl filter blur-sm"
                    alt="thumbnail"
                  />
          <p>Contenido - Node Wizard</p>
          <FullWizard />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px]  relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const StartWizardPath = () => {
  return (
    <div>
      <h1>Starting the wizard path</h1>
    </div>
  );
};

const WalkWizardPath = () => {
  return (
    <div>
      <h1>Walking the wizard path</h1>
    </div>
  );
};

const FullWizard = () => {
  return (
    <div>
      <h1>Full wizard path</h1>
    </div>
  );
};
