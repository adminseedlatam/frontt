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
      {/*   <ul className="text-white">
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))}
        </ul> */}

      {/*   <div className={"navbar-desktop rounded-box  lg:flex "}> */}
      <div className="">
        <div className={styles.navbarDesktop}>
          <div className="px-2 hidden  lg:flex ">
            <Link href="/">
              <Image width={150} height={75} src={Logo} alt="logo"></Image>
            </Link>
          </div>

          <div className="lg:flex hidden px-2 ">
            <div className="flex items-center content-center items-stretch">
              <Link
                href="#Descubrenos"
                className="p-2 text-lg font-bold  text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]"
              >
                Descúbrenos
              </Link>

              <Link
                href="#Gobernanza"
                className=" p-2  text-lg font-bold  text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]"
              >
                Gobernanza
              </Link>


              <Link
                href="#Separte"
                className=" p-2  text-lg  font-bold text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]"
              >
                Sé parte
              </Link>
              
              
              <Link
                target="_blank"
                rel="noopener"
                href="https://mirror.xyz/seedlatam.eth"
                className="p-2 text-lg font-bold border-[#222222]  text-white hover:border-b-4 hover:border-[#F651F6] border-b-4"
              >
                Blog
              </Link>
              {/* Aca va fotos */}

              {/* <Link
                target="_blank"
                rel="noopener"
                href="/fotos"
                className="p-2 text-lg font-bold border-[#222222]  text-white hover:border-b-4 hover:border-[#F651F6] border-b-4"
              >
                Fotos
              </Link> */}


              <Link
                target="_blank"
                rel="noopener"
                href="https://mirror.xyz/seedlatam.eth"
                className="p-2 text-lg font-bold border-[#222222]  text-white hover:border-b-4 hover:border-[#F651F6] border-b-4"
              >
                Blog
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                href="/links"
                className="p-2 text-lg font-bold border-[#222222]  text-white hover:border-b-4 hover:border-[#F651F6] border-b-4"
              >
                Contacto
              </Link>
              

             {/*  <select className="select bg-transparent w-[75px] max-w-xs ml-8">
                <option disabled selected>
                  ES
                </option>
                <option>ES - Español</option>
                <option>EN - English</option>
                <option>PT - Portugues</option>
              </select> */}
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
             {/*  <select className="select bg-transparent w-[75px] max-w-xs ml-8">
                <option disabled selected>
                  ES
                </option>
                <option value="es">ES - Español</option>
                <option value="en">EN - English</option>
                <option value="pt">PT - Português</option>
              </select> */}
              <div id={styles.menuToggle}>
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id={styles.menu}>
                  <li>
                    <Link href="#Descubrenos">Descúbrenos</Link>
                  </li>
                  <li>
                    <Link href="#Separte">Sé parte</Link>
                  </li>
                  <li>
                    <Link href="#Gobernanza">Gobernanza</Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="/links"
                    >
                      Contacto
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
