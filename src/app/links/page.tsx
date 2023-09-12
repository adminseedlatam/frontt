import Link from "next/link";
import styles from "./links.module.css";
import Image from "next/image";
import discord from "../assets/icons/discordwhite.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitterwhite.svg";
import mirror from "../assets/icons/mirror.svg";
import telegram from "../assets/icons/telegram.svg";


export default function Links() {
  return (
    /* Desktop */
    <div className=" min-h-screen">
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.secondContainer}>
            <div>
              <h1 className={styles.h1}>Links</h1>
              <p className={styles.p}>
                Construyendo colectivamente el camino a la descentralización y
                la soberanía digital no permisionada
              </p>
            </div>
            <div>
              <h2 className={styles.h2}>SEED Latam</h2>
              <div className={styles.linksMainContainer}>
                <ul className={styles.linksContainer}>
                  <li>
                    <Link target="_blank" rel="noopener" href="https://twitter.com/SeedLatam">
                      <Image className="" alt="Logo" src={twitter}></Image>
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" rel="noopener" href="https://www.youtube.com/@SEEDLatam/playlists">
                      {" "}
                      <Image className=" " alt="Logo" src={youtube}></Image>
                      Youtube
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" rel="noopener" href="https://discord.com/invite/zMy9gUzzHH">
                      {" "}
                      <Image className=" " alt="Logo" src={discord}></Image>
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" rel="noopener" href="https://www.linkedin.com/company/seedlatam/">
                      {" "}
                      <Image
                        className=""
                        alt="Logo"
                        src={linkedin}
                      ></Image>
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" rel="noopener" href="https://www.instagram.com/seedlatam">
                      {" "}
                      <Image
                        className=" "
                        alt="Logo"
                        src={instagram}
                      ></Image>
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" rel="noopener" href="https://t.me/seed_latam">
                      {" "}
                      <Image
                        className=" "
                        alt="Logo"
                        src={telegram}
                      ></Image>
                      Telegram
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" rel="noopener" href="https://mirror.xyz/seedlatam.eth">
                      {" "}
                      <Image className=" " alt="Logo" src={mirror}></Image>
                      Mirror
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={styles.h2}>Comunidades</h2>
                <div className={styles.linksMainContainer}>
                  <ul className={styles.linksContainer}>
                    <li>
                      <Link target="_blank" rel="noopener" href="https://twitter.com/Layer2es">
                        <span>
                          <Image
                            className="mt-1 mr-2"
                            alt="Logo"
                            src={twitter}
                          ></Image>
                        </span>
                        Layer 2 en Español
                      </Link>
                    </li>
                    <li>
                      <Link  target="_blank" rel="noopener" href="https://twitter.com/OptimismESP">
                        <Image
                          className="mt-1 mr-2"
                          alt="Logo"
                          src={twitter}
                        ></Image>
                        Optimism en Español
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
