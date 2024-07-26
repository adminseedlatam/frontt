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
                Collectively building the path to decentralized and
                unpermissioned digital sovereignty
              </p>
            </div>
            <div>
              <h2 className={styles.h2}>SEED Latam</h2>
              <div className={styles.linksMainContainer}>
                <ul className={styles.linksContainer}>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://www.notion.so/seedlatam/e4b238dd9a2348e198ee4fdf301bf27d?v=211e14a11b1a448486eb5eb8d76c8590"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={mirror}></Image>
                      Wiki
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://www.notion.so/seedlatam/Team-320e74e6abdb4ebfa33ca8cfc77f1bbc?pvs=4#5fcea4b6661c49449c58f131358ed5a8"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={mirror}></Image>
                      SEED Ecosystem
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/SeedLatam"
                    >
                      <Image className="" alt="Logo" src={twitter}></Image>
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/SEEDGov"
                    >
                      <Image className="" alt="Logo" src={twitter}></Image>
                      Twitter SEED Gov
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://twitter.com/Seedorg_"
                    >
                      <Image className="" alt="Logo" src={twitter}></Image>
                      Twitter SEED Org
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://discord.com/invite/zMy9gUzzHH"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={discord}></Image>
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://t.me/seed_latam"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={telegram}></Image>
                      Telegram
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://www.youtube.com/@SEEDLatam/playlists"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={youtube}></Image>
                      Youtube
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://mirror.xyz/seedlatam.eth"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={mirror}></Image>
                      Mirror
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://www.linkedin.com/company/seedlatam/"
                    >
                      {" "}
                      <Image className="" alt="Logo" src={linkedin}></Image>
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://www.instagram.com/seedlatam"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={instagram}></Image>
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://x.com/SEEDNodes"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={twitter}></Image>
                      Twitter SEED Nodes
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://t.me/SEED_Nodes"
                    >
                      {" "}
                      <Image className=" " alt="Logo" src={telegram}></Image>
                      Club de nodos
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={styles.h2}>Communities</h2>
                <div className={styles.linksMainContainer}>
                  <ul className={styles.linksContainer}>
                    <li>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://seedorg.super.site/communities/l2-en-espaol"
                      >
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
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/OptimismESP"
                      >
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
