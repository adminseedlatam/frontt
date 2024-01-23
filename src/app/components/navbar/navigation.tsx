import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import Logo from "../../assets/img/logo/logo.png";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Links",
    route: "/links",
  },
];

export function Navigation() {
  return (
    <header className="flex justify-center  bg-[#222222] fixed z-10 top-0">
      <div className="">
        <div className={styles.navbarDesktop}>
          <div className="px-2 hidden  lg:flex ">
            <Link href="/">
              <Image width={150} height={75} src={Logo} alt="logo"></Image>
            </Link>
          </div>

          <div className="lg:flex hidden px-2 ">
            <div className="flex items-center content-center ">
              <Link
                href="#Descubrenos"
                className="p-2 text-lg font-bold  text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]"
              >
                Discover us
              </Link>

              <Link
                href="#Gobernanza"
                className=" p-2  text-lg font-bold  text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]"
              >
                Governance
              </Link>

              <Link
                href="#Separte"
                className=" p-2  text-lg  font-bold text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]"
              >
                Join us
              </Link>

              {/* <Link
                target="_blank" 
                rel="noopener" 
                href="https://mirror.xyz/seedlatam.eth"
                className="p-2 text-lg font-bold border-[#222222]  text-white hover:border-b-4 hover:border-[#F651F6] border-b-4"
              >
                Blog
              </Link> */}

              <Link
                target="_blank"
                rel="noopener"
                href="/links"
                className="p-2 text-lg font-bold border-[#222222]  text-white hover:border-b-4 hover:border-[#F651F6] border-b-4"
              >
                Contact
              </Link>

       
            </div>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className="lg:hidden">
            <Link href="/">
              <Image width={150} height={75} src={Logo} alt="logo"></Image>{" "}
            </Link>
          </div>
          <div className="lg:hidden">
            <nav role="navigation" className="flex items-center">
             
              <div id={styles.menuToggle}>
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id={styles.menu}>
                  <li>
                    <Link href="#Descubrenos">Discover us</Link>
                  </li>
                  <li>
                    <Link href="#Gobernanza">Governance</Link>
                  </li>
                  <li>
                    <Link href="#Separte">Join us</Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://mirror.xyz/seedlatam.eth"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link target="_blank" rel="noopener" href="/links">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
