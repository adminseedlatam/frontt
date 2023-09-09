"use client";

//Funcionamiento Links y pag
import Link from "next/link";
import Image from "next/image";

//Estilos
import styles from "./govday.module.css";
import styles3 from "./govday.module.css";

//Imagenes
import everyone from "../../assets/img/gobernanza/govday/letras-gov-day.png"
import letras from "../../assets/img/gobernanza/govday/everyone.png"
import texto2 from "../../assets/img/gobernanza/govday/texto2.png"



export default function HomePage(){


return(
    <div className="justify-between max-md:pt-[100px] bg-contain px-[5vw]  min-h-screen">
        
        {/* imagen everyone y titullo gov day */}
      
        <div className="bg-[url('../assets/img/gobernanza/govday/fondo-gov-day.png')] bg-no-repeat bg-center bg-auto pt-64 pr-3 justify-center items-center max-md:pt-[3rem]
        min-h-screen  ">
        
            <Image className="pl-2 py-28 sm:py-36 md:pt-2 md:pb-32 lg:pt-2 mx-auto lg:pb-24  xl:pt-0 xl:px-6  " alt="Logo" src={everyone}></Image>

            <div className="pl-1 sm:pl-3 md:pl-2 lg:pl-2 xl:pl-16 2xl:pl-20 pb-10px"> 
                <h4 className={styles.h4}>
                    Recap 1era edición
                </h4>
            </div>

            <div className="absolute xl:pb-10 xl:pl-12 mx-auto">
                <Image className="max-w-xs md:max-w-sm lg:max-w-md lg:pb-7 xl:max-w-xl xl:pl-2 2xl:pl-6" alt="Logo" src={texto2}></Image> 
            </div>
                
            <Image className="mx-auto pt-8 md:pt-6 lg:pt-9 pl-3 xl:pt-10 rounded-md " alt="Logo" src={letras}></Image> 
            
        
        </div>
      

    
    
    </div>
    )
}



