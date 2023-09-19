"use client";

//Funcionamiento Links y pag
import Link from "next/link";
import Image from "next/image";

//Estilos
import styles from "./govday.module.css";
import styles3 from "./govday.module.css";

//Imagenes
import letras from "../../assets/img/gobernanza/govday/letras-gov-day.png";
import everyone from "../../assets/img/gobernanza/govday/everyone.png";
import texto2 from "../../assets/img/gobernanza/govday/texto2.png";

export default function HomePage() {
  return (
    <div className="justify-between max-md:pt-[100px] bg-contain px-[5vw]  min-h-screen">
      {/* imagen everyone y titullo gov day */}

      <div
        className="bg-[url('../assets/img/gobernanza/govday/fondo-gov-day.png')] bg-no-repeat bg-center bg-auto pt-64 pr-3 justify-center items-center max-md:pt-[3rem]
        min-h-screen  "
      >
        <Image
          className="pl-2 py-28 sm:py-36 md:pt-2 md:pb-32 lg:pt-2 mx-auto lg:pb-24  xl:pt-0 xl:px-6  "
          alt="Logo"
          src={letras}
        ></Image>

        <div className="pl-1 sm:pl-3 md:pl-2 lg:pl-2 xl:pl-16 2xl:pl-20 pb-10px">
          <h4 className={styles.h4}>Recap 1era edición</h4>
        </div>

        <div className="absolute xl:pb-10 xl:pl-12 mx-auto">
          <Image
            className="max-w-xs md:max-w-sm lg:max-w-md lg:pb-7 xl:max-w-xl xl:pl-2 2xl:pl-6"
            alt="Logo"
            src={texto2}
          ></Image>
        </div>

        <Image
          className="mx-auto pt-8 md:pt-6 lg:pt-9 pl-3 xl:pt-10 rounded-md "
          alt="Logo"
          src={everyone}
        ></Image>
      </div>

      {/* Charlas & Speakers */}
      <div className=" pb-16 pt-32 max-md:pt-[3rem] gap-8 grid-cols-2 lg: lg:flex xl:justify-between ">
        <div className="max-w-[482px] pt-6 text-left">
          <h3 className={styles.h3}>Charlas & Speakers </h3>
          <p className={styles.p}>
            {/* ----------------------------------- */}
            {/* Manugotsuka */}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=JUv4b2qfkVE&list=PLhTCvqIxiz5wxW4fe0-WSIJ7qVIo0vQWa&index=6"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Un resumen de los primeros meses de Arbitrum DAO
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://forum.arbitrum.foundation/u/manugotsuka"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Manugotsuka
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* João Kury */}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=qmTec7TUl9k&feature=youtu.be"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Transparencia y Anonimato en DAOs y Gobernanza (EN)
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/cripto_nita_"
              className="text-fuchsia-500 font-normal leading-9"
            >
              João Kury
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* Maxlomu.eth */}
            <Link target="_blank" rel="noopener" href="" className="">
              DAO-Ops: el nivel de interoperabilidad entre cadenas (ES)
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/maxlomu"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Maxlomu.eth
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* Maxlomu.eth */}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=5WOof_NFGBg&feature=youtu.be"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Gobernanza, Toma de Decisiones y Agencia en un entorno
              descentralizado
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/federiconh"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Federico Holzwarth
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* Pumbi */}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=OgqQXsYGch0&feature=youtu.be"
              className="text-fuchsia-500 font-normal leading-9"
            >
              El Futuro de la Gobernanza en Optimism (ES)
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/0xPumbi"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Pumbi
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* Joxes */}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=qyRaaq-nTPg&feature=youtu.be"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Gobernanza en Rollups: ¿Un Mal Necesario? (ES)
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/0xJoxes"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Joxes
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* Gonna */}
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=4AqvRyIVLS8"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Bienes Públicos en Optimism (ES)
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/GonnaEth"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Gonna
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* Mariano Davo y Crisincrypto */}
            Taller:
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=CNCfto0inxo"
              className="text-fuchsia-500 font-normal leading-9"
            >
              &nbsp;Creación y el presente de AVCs
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/CryptoAbogadoAR"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Mariano Davo
            </Link>
            &nbsp; y &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/Crisincrypto"
              className="text-fuchsia-500 font-normal leading-9"
            >
              Crisincrypto
            </Link>
            <br /> <br />
            {/* ----------------------------------- */}
            {/* 0x3liza y 0xRetro */}
            Taller:
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=HeEJ1Wx2Zjc"
              className="text-fuchsia-500 font-normal leading-9"
            >
              &nbsp;Preparando el Terreno para la Gobernanza de los Comunes (EN)
            </Link>
            &nbsp; por &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/0x3liza"
              className="text-fuchsia-500 font-normal leading-9"
            >
              0x3liza
            </Link> 
            &nbsp; y &nbsp;
            <Link
              target="_blank"
              rel="noopener"
              href="https://twitter.com/0xRetro"
              className="text-fuchsia-500 font-normal leading-9"
            >
              0xRetro
            </Link>{" "}
          </p>

          {/* boton DESKTOP */}
          <div className="md:pt-8 md:w-max-90vw md:justify-start hidden md:block">
            <Link href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5wxW4fe0-WSIJ7qVIo0vQWa">
              <button className={styles3.button2}>Ir a lista de Youtube</button>
            </Link>
          </div>

          {/* boton Responsive */}
          <div className="md:pt-8 md:w-max-90vw md:justify-start md:hidden">
            <Link href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5wxW4fe0-WSIJ7qVIo0vQWa">
              <button className={styles3.button3}>Ir a lista de Youtube</button>
            </Link>
          </div>
        </div>

        <div>
          {/* Video de youtube */}
          <div className="xl:pr-2">
            <iframe
              className="lg:left-0 aspect-video pt-6 mt-10 mx-auto h-48 sm:h-64 md:mt-0 md:h-72 lg:h-80 xl:h-96"
              src="https://www.youtube.com/embed/OjtMlpi_MjA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
