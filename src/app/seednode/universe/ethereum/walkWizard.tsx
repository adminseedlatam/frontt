import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../../../utils/cn";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import gorro from "@/app/assets/img/seednode/2 intermediate hat.svg";
import styles from "../../seednode.module.css";
import Link from "next/link";

export default function WalkWizardPath() {
  const art1 = "https://i.imgur.com/v8hpynE.png";
  const art2 = "https://i.imgur.com/4BivUH5.png";

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
      <div>
        {/* Articulo 1 */}
        <div className="h-[6rem] sm:h-[20rem] md:h-[35rem] lg:h-[40rem] pt-40 sm:pt-0 relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={art1}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h1 className="font-bold text-xl">
                  Construyendo un nodo desde cero con materiales de hardware
                </h1>
                <p className="font-normal text-sm">Descripcion?</p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://mirror.xyz/seedlatam.eth/c7sL9rh1mIy6MLygNdjB15HvsTmmqi-NoYDnp-48z1M"
                >
                  <button className={styles.card_button1}>Leer Articulo</button>
                </Link>
              </div>
            </div>
          </DirectionAwareHover>
        </div>
        {/* Articulo 2 */}
        <div className="h-[20rem] sm:h-[0rem] md:h-[20rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={art2}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h1 className="font-bold text-xl">
                  Medidas de Seguridad para Operadores de Nodos
                </h1>
                <p className="font-normal text-sm">
                  Diferencias y características
                </p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://mirror.xyz/seedlatam.eth/fnGBQeAW0r5IPsnMIo3kJoW4zJHDC3YZIle7z7T_O1w"
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
