import Link from "next/link";
import Image from "next/image";
import styles from "./hero.module.css";

// Images
import logoIso from "../../../../assets/img/hero/logo-iso.svg";
import logoText from "../../../../assets/img/hero/logo-text.svg";
import formerly from "../../../../assets/img/hero/formerly.png";
import discord from "../../../../assets/icons/discordwhite.svg";
import instagram from "../../../../assets/icons/instagram.svg";
import twitter from "../../../../assets/icons/twitterwhite.svg";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className="max-w-[800px] min-h-screen px-[5vw] mt-10 hidden  md:flex">
        <div className=" 2xl:pt-[8.5rem] lg:pt-[3rem] md:pt-[8.5rem]">
          <Image
            className="mb-[48px] mr-2 "
            height={227}
            src={logoIso}
            alt="Logo"
          ></Image>
          <div className="flex">
            <Image
              className="py-4"
              alt="Logo"
              width={486.46}
              src={logoText}
            ></Image>
          </div>
          <div>
            <p className={styles.tagline}>
              “Collectively building the path to decentralized and
              unpermissioned digital sovereignty”.
            </p>
            <Image
              className="py-4"
              alt="DeFi LATAM"
              width={206.1}
              src={formerly}
            ></Image>
          </div>

          <div className="flex py-[2.23rem]">
            <div>
              {" "}
              <Link href="#Descubrenos">
                <button className={styles.hero_button1}>Discover us</button>
              </Link>
            </div>
            <div>
              <Link href="#Separte">
                <button className={styles.hero_button2}>Join us</button>
              </Link>
            </div>
          </div>
          <div className="flex">
            <Link href="https://comunidad.seedlatam.org">
              <Image className="mt-5 mr-2" alt="Logo" src={discord}></Image>
            </Link>
            <Link href="https://www.instagram.com/defilatam/">
              <Image className="mt-5 mr-2" alt="Logo" src={instagram}></Image>
            </Link>
            <Link href="https://twitter.com/SEEDLatam/">
              <Image className="mt-5" alt="Logo" src={twitter}></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[750px] min-h-screen px-[5vw]  flex md:hidden mt-10">
        <div>
          <Image
            className="mt-10 mr-2 "
            height={90.19}
            src={logoIso}
            alt="Logo"
          ></Image>
          <div className="flex">
            <Image
              className="py-4"
              alt="Logo"
              width={215}
              src={logoText}
            ></Image>
          </div>
          <div>
            <p className="text-base">
              “Collectively building the path to decentralized and unpermissioned digital sovereignty”.
            </p>
            <Image
              className="py-4"
              alt="DeFi LATAM"
              width={122.86}
              src={formerly}
            ></Image>
          </div>

          <div className="flex">
            <div>
              {" "}
              <Link href="#Descubrenos">
                <button className={styles.hero_button1}>Discover us</button>
              </Link>
            </div>
            <div>
              <Link href="#Separte">
                <button className={styles.hero_button2}>Join us</button>
              </Link>
            </div>
          </div>
          <div className="flex">
            <Link href="https://comunidad.seedlatam.org">
              <Image className="mt-5 mr-2" alt="Logo" src={discord}></Image>
            </Link>
            <Link href="https://www.instagram.com/defilatam/">
              <Image className="mt-5 mr-2" alt="Logo" src={instagram}></Image>
            </Link>
            <Link href="https://twitter.com/SEEDLatam/">
              <Image className="mt-5" alt="Logo" src={twitter}></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
