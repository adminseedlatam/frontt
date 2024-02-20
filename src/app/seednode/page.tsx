import Link from "next/link";
import styles from "./seednode.module.css";
import Image from "next/image";
import NodoImg from "@/app/assets/img/seednode/ethereum_validator.png";

export default function SeedNode() {
  return (
    /* Desktop */
    <div className="bg-[url('../assets/img/gobernanza/gobernanza.png')] w-screen bg-cover pr-3 pt-28 justify-center items-center min-h-screen">
      <div className="max-w-[1100px] min-h-screen pl-[5vw] pr-[3vw] hidden  md:flex">
        <div className=" 2xl:pt-[3.5rem] lg:pt-[2.5rem] md:pt-[1.5rem]">
          <Image
            className="mb-[28px] mr-2"
            height={325}
            src={NodoImg}
            alt="Logo"
          ></Image>

          <h1 className={styles.h1}>SEED Node</h1>
        
          <p className={styles.p}>
            En SEEDNode, facilitamos el acceso a nodos seguros y escalables en
            todo el mundo. <br /> <br /> Más que una comunidad, somos pioneros
            que impulsan la descentralización y accesibilidad de esta
            tecnología.
          </p>

          <div className="flex py-[2.23rem]">
            <div>
              {" "}
              <Link href="/seednode/universe">
                <button className={styles.hero_button1}>Get started</button>
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                rel="noopener"
                href="https://seedorg.super.site/seednode"
              >
                <button className={styles.hero_button2}>About us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* REPONSIVE */}
      <div className="max-w-[750px] min-h-screen px-[5vw]  flex md:hidden mt-10">
        <div>
          <Image
            className="mt-10 mr-2 "
            height={90.19}
            src={NodoImg}
            alt="Logo"
          ></Image>

          <p className="text-base">
            “Collectively building the path to decentralized and unpermissioned
            digital sovereignty”.
          </p>

          <div className="flex">
            <div>
              {" "}
              <Link href="#Descubrenos">
                <button className={styles.hero_button1}>Discover us</button>
              </Link>
            </div>
            <div>
              <Link target="_blank" rel="noopener" href="/links">
                <button className={styles.hero_button2}>Contact us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
