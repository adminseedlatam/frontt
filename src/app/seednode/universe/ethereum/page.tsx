import Tabs from "./tabs.tsx";
import styles from "../../seednode.module.css";

export default function Ethereum() {
  return (
    <div className=" justify-center items-center min-h-screen">
      
      <h1 className="pt-32 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-7xl">
        Ethereum: The infinite
      </h1>
      <div className="pt-7 mx-auto px-24">
        <p className={styles.p}>
          Ethereum: the infinite está diseñado por SEEDNode para que aprendas de
          forma interactiva sobre nodos. A través de tres niveles: X1, X2 y X3,
          mejorarás tus conocimientos. Cada nivel te ayudará a ordenar y a
          desbloquear contenido más avanzado
        </p>
      </div>

      <Tabs />
    </div>
  );
}
