import Cards from "./cards";
import styles from "../seednode.module.css";

export default function Universe() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <h1 className="pt-20  lg:pt-32 text-shadow-lg font-bold leading-10 md:leading-12 tracking-tight text-center text-4xl md:text-5xl lg:text-7xl">
          SEED Node Universe
        </h1>
        <div className="pt-7">
          <p className="text-center text-xl font-normal leading-7 tracking-tighter pt-26.75 pl-5vw mx-36">
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
