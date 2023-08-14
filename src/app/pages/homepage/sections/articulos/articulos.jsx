import Image from "next/image";
import Link from "next/link";
import styles from "./articulos.module.css";

// Images

import Articulo from "../../../../../app/assets/img/articulos/articulo-ejemplo.png";

export default function Articulos() {
  return (
    <div>
      <div className={styles.articulos} id="Articulos">
        <div className={styles.articulosContainer}>
          <div className={styles.subContainer}>
          <div>
            <h2 className={styles.h2}>Artículos</h2>
            <h3 className={styles.h3}>
              Una nueva forma de entender la participación comunitaria
            </h3>
          
          <div>
            <p className={styles.p}>
            La gobernanza web3 es el conjunto de procesos que se utilizan para
              decidir el funcionamiento de blockchains y protocolos
              descentralizados. Estos procesos ocurren  </p>
          </div>
            <div className={styles.buttonContainer}>
              <Link
                target="_blank"
                rel="noopener"
                href="https://mirror.xyz/seedlatam.eth"
              >
                <button className={styles.button2}>
                  Ver todos los artículos
                </button>
              </Link>
            </div>
            </div>
            <div className={styles.ImageContainer}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://mirror.xyz/seedlatam.eth/UxGxKpwHaEvUTNnz6YN-4fecqU0yJdndA8l_xIbW-Mk"
              className=""
            >
              <Image
                width={653.69}
                height={574.69}
                src={Articulo}
                alt="logo"
              ></Image>
            </Link>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}
