import Link from "next/link";
import Image from "next/image";

// Images
import Logo from '../../assets/img/logo/logo.png';
import discord from "../../assets/icons/discord.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

export function Footer() {
  return (
   
      <footer className="">
    <div className="mx-auto w-full px-[5vw] py-6 lg:py-8">
    {/* <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8"> */}
        <div className="md:flex  md:justify-between">
          <div className="mb-6 md:mb-0">
          <Link href="/">
            <Image width={150} height={75}  src={Logo} alt="logo"></Image>
          </Link>
          </div>
          <div className="grid  grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 ">
              <div>
                 {/*  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Descubrenos</h2> */}
                  <ul className="text-gray-600 text-base md:text-lg font-bold">
                  <li>
                          <Link href="#Descubrenos" className="border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]">Descubrenos</Link>
                      </li>
                      <li>
                          <Link href="#Separte" className="border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]">Se parte</Link>
                      </li>
                      <li>
                          <Link href="#Gobernanza" className="border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]">Gobernanza</Link>
                      </li>
                      <li>
                          <Link  target="_blank" rel="noopener" href="/links" className="border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]">Contacto</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className=" text-base md:text-lg pb-2 font-bold uppercase ">Nuestras comunidades</h2>
                  <ul className="text-gray-600 text-gray-400 text-base md:text-lg font-bold ">
                      <li>
                          <a target="_blank" rel="noopener" href="https://defilatam.com/" className="border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]">DeFi LATAM</a>
                      </li>
                      <li>
                          <a target="_blank" rel="noopener" href="https://twitter.com/Layer2es" className="border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]">Layer 2 en Español</a>
                      </li>
                      <li>
                          <a target="_blank" rel="noopener" href="https://twitter.com/OptimismESP" className="border-[#222222] border-b-4 hover:border-b-4 hover:border-[#F651F6]">Optimism en español</a>
                      </li>
                  </ul>
              </div>
              <div className="" >
               
                {/*   <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2> */}
                  <div className="flex md:justify-end gap-2 ">
               <div> <Link target="_blank" rel="noopener" href="https://comunidad.seedlatam.org">
                <Image className="" alt="Logo" src={discord}></Image>
              </Link></div><div> <Link target="_blank" rel="noopener" href="https://www.instagram.com/defilatam/">
                <Image className="" alt="Logo" src={instagram}></Image>
              </Link></div><div><Link target="_blank" rel="noopener" href="https://twitter.com/SEEDLatam/">
                <Image className="" alt="Logo" src={twitter}></Image>
              </Link></div>
             
                  </div>
              </div>
          </div>
      </div>
    </div>
</footer>
    
  );
}
