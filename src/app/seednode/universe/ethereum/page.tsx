import Tabs from "./tabs.tsx";
import styles from "../../seednode.module.css";

export default function Ethereum() {
  return (
    <div className=" justify-center items-center min-h-screen mx-8 sm:mx-24 lg:mx-28">
      <h1 className="pt-32 2xl:pl-10 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Ethereum: The infinite
      </h1>
      <div className="pt-7 ">
        <p className="text-center text-2xl not-italic font-normal leading-7 tracking-[-1.2px] pt-[25.75px]">
          Ethereum: the infinite está diseñado por SEEDNode para que aprendas de
          forma interactiva sobre nodos. A través de tres niveles:{" "}
          <b>Node Apprendice</b>,<b> Node Guardian</b> y{" "}
          <b>Node Wizard</b>, mejorarás tus conocimientos. <br/><br/> Cada nivel te ayudará
          a ordenar y a desbloquear contenido más avanzado
        </p>
      </div>

      <Tabs />
    </div>
  );
}
