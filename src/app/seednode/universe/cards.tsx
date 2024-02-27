"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Ethereum from "../../assets/img/seednode/ethereum.jpg";
import Starknet from "../../assets/img/seednode/starknet.png";
import Optimism from "../../assets/img/seednode/optimism2.png";

export default function ThreeDCards() {
  return (
    <div className="max-w-full gap-11 h-full w-full pt-4 px-4 grid grid-cols-1 2xl:grid-cols-3">
      {/* Ethereum */}
      <div className=" ">
        <CardContainer className="inter-var">
          <CardBody className="bg-[#DCDBDC] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold sm:mx-24 text-neutral-600"
            >
              Ethereum the infinite
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-600 text-sm max-w-sm mt-2"
            >
              Elige tu camino entre los distintos senderos que Ethereum tiene
              para ofrecerte, desde los principios basicos hasta correr tu
              propio nodo, buena suerte en este viaje Eternauta!
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
      <div className="">
        <CardContainer className="inter-var">
          <CardBody className="bg-[#DCDBDC] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold sm:mx-40 text-neutral-600 dark:text-white"
            >
              Optimism
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Próximamente podrás conocer más sobre Optimism, explorando todo lo
              necesario para ejecutar tu propio nodo en esta blockchain de capa
              2
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <a
                href="/seednode/universe/ethereum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative">
                  <Image
                    src={Optimism}
                    height="500"
                    width="600"
                    className="h-full w-full object-cover rounded-xl group-hover:shadow-xl filter blur-sm"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-neutral-200 text-4xl font-bold uppercase">
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
      <div className="">
        <CardContainer className="inter-var">
          <CardBody className="bg-[#DCDBDC] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold sm:mx-40 text-neutral-600 dark:text-white"
            >
              StarkNet
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Próximamente podrás conocer más sobre StarkNet, explorando todo lo
              necesario para ejecutar tu propio nodo en esta blockchain de capa
              2
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <a
                href="/seednode/universe/ethereum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative">
                  <Image
                    src={Starknet}
                    height="500"
                    width="600"
                    className="h-full w-full object-cover rounded-xl group-hover:shadow-xl filter blur-sm"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-neutral-200 text-4xl font-bold uppercase">
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
