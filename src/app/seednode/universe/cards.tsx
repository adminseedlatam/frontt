"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Ethereum from "../../assets/img/seednode/ethereum.jpg";

export default function ThreeDCards() {
  return (
    <div className="max-w-[800px] gap-11 pt-4 pl-[27vw] pr-[3vw] flex justify-center items-center">
      {/* Ethereum */}
      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-[#DCDBDC] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-neutral-600"
            >
              Ethereum the infinite
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-600 text-sm max-w-sm mt-2"
            >
              Super texto
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <a
                href="/seednode/universe/ethereum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={Ethereum}
                  height="500"
                  width="600"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      {/* Optimism */}
      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-[#DCDBDC] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Optimism  
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Super texto
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <a
                href="/seednode/universe/ethereum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative">
                  <Image
                    src={Ethereum}
                    height="500"
                    width="600"
                    className="h-full w-full object-cover rounded-xl group-hover:shadow-xl filter blur-sm"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-neutral-600 text-4xl font-bold uppercase">
                      Coming Soon
                    </h1>
                  </div>
                </div>
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      {/* StarkNet */}
      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-[#DCDBDC] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              StarkNet
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Super texto
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <a
                href="/seednode/universe/ethereum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative">
                  <Image
                    src={Ethereum}
                    height="500"
                    width="600"
                    className="h-full w-full object-cover rounded-xl group-hover:shadow-xl filter blur-sm"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-neutral-600 text-4xl font-bold uppercase">
                      Coming Soon
                    </h1>
                  </div>
                </div>
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
