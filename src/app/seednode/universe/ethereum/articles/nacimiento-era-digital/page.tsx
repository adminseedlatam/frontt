import styles from "../../../../seednode.module.css";
import React from "react";
import Image from "next/image";
import NodoImg from "@/app/assets/img/seednode/Logo1.svg";

export default function ConstructionNotice() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="mx-auto mb-8" style={{ width: "200px", height: "200px" }}>
          <Image
            className="mx-auto"
            src={NodoImg}
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">¡Este artículo está en construcción!</h1>
        <p className="text-lg">Por favor, vuelve más tarde.</p>
      </div>
    </div>
  );
}
