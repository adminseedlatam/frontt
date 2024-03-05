import Tabs from "./tabs.tsx";

export default function Ethereum() {
  return (
    <div className=" justify-center items-center min-h-screen mx-8 sm:mx-24 lg:mx-28">
      <h1 className="pt-32 2xl:pl-10 text-shadow-lg font-bold leading-10 tracking-tight  text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        ¡Bienvenido a The Infinite Ethereum!
      </h1>
      <div className="pt-7 ">
        <p className="text-center text-2xl not-italic font-normal leading-7 tracking-[-1.2px] pt-[25.75px]">
          TIEth ha sido creado por SEEDNode para que puedas aprender de manera
          interactiva sobre nodos. A lo largo de tres niveles:
          <b>Node Apprendice</b>,<b> Node Guardian</b> y <b>Node Wizard</b>,
          mejorarás tus conocimientos. <br />
          <br /> Cada nivel te guiará hacia la comprensión y desbloqueo de
          contenido más avanzado.
        </p>
      </div>

      <Tabs />
    </div>
  );
}
