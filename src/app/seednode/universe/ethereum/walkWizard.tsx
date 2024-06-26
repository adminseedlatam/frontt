import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../../../utils/cn";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import gorro from "@/app/assets/img/seednode/2 intermediate hat.svg";
import styles from "./seednode.module.css";
import Link from "next/link";
import art1 from "@/app/assets/img/seednode/construyendo-nodo-hardware.png";
import art2 from "@/app/assets/img/seednode/portadaguia.png";
import art3 from "@/app/assets/img/seednode/ethereum_clients.jpg";
import art4 from "@/app/assets/img/seednode/medidas-seg.png";

export default function WalkWizardPath() {
  return (
    <div className=" justify-center items-center ">
      {/* Desktop */}
      <div className="hidden lg:block flex-wrap   ">
        <div className="flex justify-center items-center">
          <Image alt="image" className="" width="94" height="100" src={gorro} />
          <h1 className="pt-7 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-5xl">
            Node Guardian
          </h1>
          <Image alt="image" className="" width="94" height="100" src={gorro} />
        </div>
      </div>
      {/* Responsive */}
      <div className="lg:hidden flex justify-center items-center  ">
        <Image alt="image" className="" width="150" height="120" src={gorro} />
      </div>
      <div className="lg:hidden flex justify-center items-center  ">
        <h1 className="pt-2 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-5xl">
          Node Guardian
        </h1>
      </div>

      <div className="mx-0 lg:mx-11">
        <p className={styles.p}>
          En este tramo de nuestro recorrido, podrás ver el paso a paso para
          construir un nodo desde cero con materiales de hardware, así como
          investigar sobre las medidas de seguridad para operadores de nodos.
          Adentrate en la importancia de la sincronización y las
          actualizaciones.
        </p>
      </div>
      {/* Articulos */}
      <div className="overflow-y-auto lg:overflow-y-hidden">
        {/* Articulo 1 */}
        <div className="h-[12rem] sm:h-[20rem] md:h-[30rem] lg:h-[30rem] pt-40 sm:pt-0  relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={art1.src}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="font-normal text-sm">
                  Descubre cómo construir tu propio nodo físico para la
                  tecnología blockchain. Desde especificaciones recomendadas
                  hasta consejos prácticos y una guía completa para configurar
                  un nodo de Ethereum.
                </p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="/seednode/universe/ethereum/articles/contruyendo-nodos"
                >
                  <button className={styles.card_button1}>Leer Articulo</button>
                </Link>
              </div>
            </div>
          </DirectionAwareHover>
        </div>
        {/* Articulo 2 */}
        <div className=" h-[18rem] sm:h-[1rem] md:h-[15rem] lg:h-[20rem]  md:pt-20 flex items-center justify-center">
          <DirectionAwareHover imageUrl={art2.src}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="font-normal text-sm">
                  Configura tu propio nodo de Ethereum con nuestra guía
                  completa. Desde la instalación hasta la selección del cliente,
                  contribuye a la descentralización de la red. ¡Únete al
                  movimiento y sé dueño de tu camino tecnológico!
                </p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="/seednode/universe/ethereum/articles/guia-nodo-ethereum"
                >
                  <button className={styles.card_button1}>Leer Articulo</button>
                </Link>
              </div>
            </div>
          </DirectionAwareHover>
        </div>
        {/* Articulo 3 */}
        <div className="h-[0rem] sm:h-[20rem] md:h-[35rem] lg:h-[37rem] pt-0 sm:pt-4 relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={art3.src}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h1 className="font-bold text-xl">
                  {/* Medidas de seguridad para operadores de nodos */}
                </h1>
                <p className="font-normal text-sm">{/* Descripcion */}</p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="/seednode/universe/ethereum/articles/ethereum_clients"
                >
                  <button className={styles.card_button1}>Leer Articulo</button>
                </Link>
              </div>
            </div>
          </DirectionAwareHover>
        </div>
        {/* Articulo 4 */}
        <div className=" h-[-1rem] sm:h-[0rem] md:h-[20rem] sm:mb-20 sm:mt-4 md:pt-40 lg:pt-0  relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={art4.src}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="font-normal text-sm">
                  Protege tu nodo Ethereum: Medidas esenciales para salvaguardar
                  la integridad de la red. Descubre cómo fortalecer la seguridad
                  de tus nodos distribuidos con recomendaciones prácticas, desde
                  monitoreo constante hasta implementación de protocolos de
                  enrutamiento seguros y más.
                </p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="/seednode/universe/ethereum/articles/seguridad-op-nodos"
                >
                  <button className={styles.card_button1}>Leer Articulo</button>
                </Link>
              </div>
            </div>
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  );
}
