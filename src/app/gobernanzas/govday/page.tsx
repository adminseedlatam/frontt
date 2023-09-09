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



export default function HomePage(){


return(
    <div className="justify-between max-md:pt-[100px] bg-contain px-[5vw]  min-h-screen">
        
        {/* imagen everyone y titullo gov day */}
      
        <div className="bg-[url('../assets/img/gobernanza/govday/fondo-gov-day.png')] bg-no-repeat bg-center bg-auto pt-64 pr-3 justify-center items-center max-md:pt-[3rem]
        min-h-screen  ">
        
            <div>
                <Image className="px-6 mx-auto pb-40  " alt="Logo" src={everyone}></Image>
            </div>

            <div>
                <Image className="mx-auto rounded-md " alt="Logo" src={letras}></Image> 
            </div>
        
        </div>
      

    
    
    </div>
    )
}



