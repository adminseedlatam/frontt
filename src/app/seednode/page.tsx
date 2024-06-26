import Link from "next/link";
import styles from "./seednode.module.css";
import Image from "next/image";
import NodoImg from "@/app/assets/img/seednode/Logo1.svg";

export default function SeedNode() {
  return (
    /* Desktop */
    <div className="bg-[url('../assets/img/seednode/background2.svg')] w-screen bg-cover pr-3 pt-28 justify-center items-center min-h-screen">
      <div className="max-w-[1100px] min-h-screen pl-[5vw] pr-[3vw] hidden  lg:flex">
        <div className=" 2xl:pt-[3.5rem] lg:pt-[2.5rem] md:pt-[1.5rem]">
          <Image
            className="mb-[28px] mr-9"
            height={200}
            src={NodoImg}
            alt="Logo"
          ></Image>

          <h1 className={styles.h1}>SEED Node</h1>

          <p className={styles.p}>
            Facilitamos el acceso a nodos seguros y escalables en
            todo el mundo.
          </p>

          <div className="flex py-[2.5rem]">
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
      <div className="max-w-[750px] min-h-screen px-[5vw]  flex lg:hidden mt-10">
        <div>
          
          <Image
            className="mt-10 mr-2 "
            height={90.19}
            src={NodoImg}
            alt="Logo"
          ></Image>
          <h1 className={styles.h1}>SEED Node</h1>


          <p className="text-base">
            En SEEDNode, facilitamos el acceso a nodos seguros y escalables en
            todo el mundo.
          </p>

          <div className="pt-8 flex">
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
    </div>
  );
}
