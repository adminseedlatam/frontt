import Cards from "./cards";
import styles from "../seednode.module.css";

export default function Universe() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <h1 className="pt-32 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-7xl">
          SEED Node Universe
        </h1>
        <div className="pt-7">
          <p className={styles.p}>
            Aquí podrán explorar el universo de nodos que les proponemos, elegir
            una blockchain e iniciar su viaje por{" "}
            <strong>Ethereum: the infinite.</strong>
          </p>
        </div>
        {/* Cards */}
        <Cards />
      </div>
    </div>
  );
}
