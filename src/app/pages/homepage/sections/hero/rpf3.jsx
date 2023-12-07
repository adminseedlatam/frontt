"use client";

import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

import rpgf3 from "../../../../assets/img/hero/applicationRPGF3.svg";
import bagholder from "../../../../assets/img/hero/bagholder2.png";

export default function Page() {
  return (
    <div>
      <div className="pt-5">
        <a
          target="_blank"
          rel="noopener"
          onClick={() => window.my_modal_rpgf3.showModal()}
        >
          <button className={styles.hero_button1}>RPGF3</button>
        </a>
      </div>

      <dialog
        id="my_modal_rpgf3"
        className="modal pt-10  sm: md: lg: xl:pt-24 2xl:pt-4"
      >
        <form method="dialog" className="modal-backdrop  pt-0 md:pt-20  ">
          <div className="items-center max-w-[345px] sm:max-w-xl md:max-w-3xl rounded-lg max-h-[700px] md:h-4/5 min-w-3/4 border-white border bg-[#222222] mx-auto overflow-y-auto ">
            <button className="text-white btn btn-sm btn-circle btn-ghost border-none pl-[325px] sm:pl-[555px] md:pl-[740px] ">
              ✕
            </button>
            <div className="flex flex-wrap pb-12 gap-12 mx-0 sm:mx-20 md:mx-6 pt-0 md:pt-44 justify-center">
              <Image alt="baghold2" src={bagholder} />

              <Image alt="rpgf3" src={rpgf3} />

              <div className="flex  mt-4 ml-5">
                {" "}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://www.notion.so/seedlatam/RPGF-3-SEED-Latam-application-2ebbe4d4dfdf4a1989d831bcfa8b5b9e?pvs=4"
                >
                  <button className={styles.button2}>
                    Our application
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}
