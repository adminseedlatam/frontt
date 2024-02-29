import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../../../utils/cn";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import gorro from "@/app/assets/img/seednode/2 old school hat.svg";
import styles from "../../seednode.module.css";
import Link from "next/link";
import art1 from "@/app/assets/img/seednode/fullNodeValidatorNode.png";

export default function WalkWizardPath() {
  

  return (
    <div className=" justify-center items-center ">
      {/* Desktop */}
      <div className="hidden lg:block flex-wrap   ">
        <div className="flex justify-center items-center">
          <Image alt="image" className="" width="94" height="100" src={gorro} />
          <h1 className="pt-7 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-5xl">
            Node Wizard
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
          Node Wizard
        </h1>
      </div>

      <div className="mx-0 lg:mx-11">
        <p className={styles.p}>
          Bienvenido al último tramo del camino hacia convertirte en un experto
          en nodos! Explora estrategias de respaldo y recuperación de claves,
          actualizaciones críticas y parches de seguridad. Además, desmitifica
          Gasper, explora los clientes de Ethereum y aprende sobre la generación
          y gestión segura de claves para nodos en el mundo de Ethereum.
        </p>
      </div>
      {/* Articulos */}
      <div>
        {/* Articulo 1 */}
        <div className="h-[6rem] sm:h-[20rem] md:h-[35rem] lg:h-[40rem] pt-40 sm:pt-0 relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={art1.src}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h1 className="font-bold text-xl">
                  {/* PoS - De Full Node a Validator Node */}
                </h1>
                <p className="font-normal text-sm">{/* Descripcion */}</p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="/seednode/universe/ethereum/articles/full-node-a-validator-node"
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
