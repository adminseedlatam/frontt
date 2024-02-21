import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../../../utils/cn";
import { DirectionAwareHover } from "../../../components/ui/direction-aware-hover";
import gorro from "@/app/assets/img/seednode/2 old school hat.svg";
import styles from "../../seednode.module.css";
import Link from "next/link";

export default function StartWizardPath() {
  const imageUrl =
    "https://i.imgur.com/6VV0HzV.png";

  return (
    <div className=" justify-center items-center min-h-screen">
      <div className="flex justify-center items-center  ">
        <Image alt="image" className="" width="120" height="120" src={gorro} />
        <h1 className="pt-2 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-5xl">
          Starting the wizard path
        </h1>
        <Image alt="image" className="" width="120" height="120" src={gorro} />
      </div>
      <p className={styles.p}>
        Estaria bueno tener un texto aca explicando que vas a encontrar en esta
        seccion
      </p>
      {/* Articulos */}
      <div>
        {/* Articulo 1 */}
        <div className=" h-[40rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <h1 className="font-bold text-xl">Titulo del articulo</h1>
                <p className="font-normal text-sm">Descripcion</p>
              </div>
              <div className="sm: md: lg: xl:ml-[225px] flex justify-end">
                {" "}
                {/* Utilizamos justify-end e items-end */}
                <Link href="/seednode/universe">
                  <button className={styles.card_button1}>Leer Articulo</button>
                </Link>
              </div>
            </div>
          </DirectionAwareHover>
        </div>
        {/* Articulo 2 */}
      </div>
    </div>
  );
}
