import styles from "../articles.module.css";
import portada from "@/app/assets/img/seednode/articles/articuloContruyendoNodoj.png";
import Image from "next/image";
import PlacaMadre from "@/app/assets/img/seednode/articles/articuloContruyendoNodoIMG1.png";
import NVMe from "@/app/assets/img/seednode/articles/articuloContruyendoNodoIMG2.png";
import Intel from "@/app/assets/img/seednode/articles/articuloContruyendoNodoIMG3.png";
import GrafoPSU from "@/app/assets/img/seednode/articles/articuloContruyendoNodoIMG4.png";
import Link from "next/link";


export default function Articulo2() {
  return (
    <div className={styles.secondContainer}>
      <div className="mx-auto">
        <Image
          className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
          width={1200}
          height={500}
          alt="GovInWeb3"
          src={portada}
        />
      </div>

      <div className="mx-8 md:mx-20 lg:mx-72">
        {/* aca tiene que ir la iamgen */}
        <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
          Construyendo un nodo desde cero con materiales de hardware
        </h1>
        <div className="mt-4">
          <p>
            En el gran ecosistema de la tecnología blockchain los nodos juegan
            un papel fundamental en la seguridad y la descentralización de las
            redes. Estos nodos actúan como puntos de conexión que validan y
            transmiten transacciones, manteniendo la integridad y la
            confiabilidad del sistema en su conjunto. Si bien existen numerosas
            opciones de software para ejecutar un nodo, ¿alguna vez te
            preguntaste cómo sería construir un nodo desde cero utilizando
            componentes de hardware? En este artículo, nos sumergiremos en el
            fascinante mundo de la construcción de nodos físicos, explorando los
            fundamentos, los desafíos y los pasos prácticos necesarios para
            crear tu propio nodo.¡Prepárate para entrar en el emocionante viaje
            de construir tu propia infraestructura descentralizada!
          </p>
          <p className="mt-4">
            Primero, debemos tener en cuenta que tipo de nodo queremos tener, en
            este caso vamos a cubrir la forma más económica de poder crear un
            nodo (y divertida IMO): armar componente por componente! para esto,
            debemos tener en cuenta los requisitos recomendados:
          </p>
          <p className="mt-4">Especificaciones recomendadas</p>
          <ul className="pt-4 list-disc ml-5 text-white">
            <li>16 - 32 GB de RAM</li>
            <li>SSD de 2 TB (preferiblemente DDR4)</li>
            <li>CPU de cuatro núcleos (o doble núcleo hiper-procesado)</li>
            <li>Conexión a internet por cable</li>
            <li>Sistema operativo Linux</li>
          </ul>
        </div>
        <div>
          <h2 className="py-4 mt-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Selección de Componentes:
          </h2>
          <p className="mt-4">
            Para construir un nodo desde cero, es crucial seleccionar
            cuidadosamente cada componente para garantizar un rendimiento óptimo
            y una estabilidad confiable. Aquí hay una guía paso a paso para
            elegir los componentes principales de hardware:
          </p>
        </div>
        <div className="mt-6">
          <h2 className="pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Placa Base (Motherboard):
          </h2>
          <p className="mt-4">
            La placa base es el cimiento de cualquier sistema informático. Para
            un nodo, busca una placa que tenga el “socket” compatible con el
            tipo de procesador que planeas utilizar y tenga suficientes puertos
            de conexión para tus dispositivos de almacenamiento y periféricos.
            Pero, ¿Qué es el socket? El socket es el punto de conexión entre el
            procesador y la placa base, permite que el procesador se integre
            eléctrica y mecánicamente con el resto del sistema.
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="FotoPlacaMadre"
              src={PlacaMadre}
            />
          </div>
          <p className="mt-4">
            También debemos tener en cuenta que si vamos a utilizar un disco
            NVMe SSD la motherboard debe tener la entrada para que podamos
            conectarlo:
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="FotoPlacaMadre"
              src={NVMe}
            />
          </div>
          {/* PROCESADOR */}
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Procesador (CPU)
          </h2>
          <p className="mt-4">
            La elección del procesador depende en gran medida de las necesidades
            de rendimiento de tu nodo. Se recomienda un procesador potente con
            múltiples núcleos y capacidad de procesamiento multitarea. Se
            recomienda fuertemente una CPU que obtenga una puntuación de al
            menos 6000 o mejor en Passmark. Para los tiempos de sincronización
            inicial, el rendimiento de un solo hilo es mejor que tener muchos
            núcleos. A la hora de identificar la generación de procesadores
            Intel Core nos guiaremos de la siguiente imagen:
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="ExplicacionVersionesCPU"
              src={Intel}
            />
          </div>
          <p className="mt-4 font-bold">Ejemplo de 13a Generación</p>
          <ul className="pt-4 list-disc ml-5 text-white">
            <li>
              Intel® Core™ procesador i7-13 700K es de 13a Generación porque el
              número 13 aparece después de i7.
            </li>
          </ul>
          {/* Memoria RAM */}
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Memoria RAM
          </h2>
          <p className="mt-4">
            La memoria RAM es esencial para el rendimiento general del sistema y
            la capacidad de respuesta. Asegúrate de elegir suficiente RAM para
            manejar la carga de trabajo del nodo y cualquier otra tarea que
            puedas ejecutar simultáneamente, se recomienda un mínimo de 16 GB.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Almacenamiento (SSD/NVMe)
          </h2>
          <p className="mt-4">
            El almacenamiento rápido y confiable es fundamental para garantizar
            tiempos de carga rápidos y una operación sin problemas. Tanto los
            SSD tradicionales como los discos NVMe ofrecen excelentes
            velocidades de lectura/escritura, lo que los hace ideales para
            almacenar la cadena de bloques y otros datos del nodo. Se recomienda
            un disco de 2 TB o más para ayudar con la longevidad del mismo.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Tarjeta Gráfica (GPU)
          </h2>
          <p className="mt-4">
            Si bien los nodos generalmente no requieren una tarjeta gráfica
            dedicada, será o no será necesaria dependiendo si nuestro procesador
            tiene gráfica integrada, si no lo tiene, vamos a necesitar una GPU
            para poder dar imagen a nuestro Nodo y asi hacer las configuraciones
            del software, con una GPU de 1GB ya es suficiente, ya que solamente
            es para brindar imagen a nuestro Nodo. Si el procesador tiene
            gráfica integrada, no debemos preocuparnos ya que conectaremos la
            entrada de imagen (por ejemplo: HDMI) directo a la motherboard.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Fuente de Alimentación (PSU)
          </h2>
          <p className="mt-4">
            Una fuente de alimentación confiable y de alta calidad es esencial
            para garantizar la estabilidad del sistema y proteger los
            componentes de posibles daños por sobretensión o fluctuaciones de
            energía. Es importante que la fuente tenga una certificación de
            eficiencia como las del siguiente cuadro, donde se recomienda por lo
            menos una eficiencia de 80 plus bronze.
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="ExplicacionVersionesPSU"
              src={GrafoPSU}
            />
          </div>

          <p className="mt-4">
            La cantidad de watts dependerá de todos los componentes de nuestro
            Nodo, debemos consultar las especificaciones de la Motherboard para
            ver su consumo y tener un aproximado del tipo de fuente que debemos
            adquirir.
          </p>
          <p className="mt-4">
            Un tip para generar más estabilidad a nuestro nodo es conectarlo a
            un estabilizador de tensión.
          </p>
          <p className="mt-4">
            Es recomendable comprar una fuente más grande de la cantidad de
            watts que necesitamos para ir sobrados de energía, ya que no hay
            mucha diferencia de precios para el tipo de fuente que vas a
            necesitar, los componentes más caros económicamente serán el CPU y
            la memoria SSD, donde si seguimos los requisitos recomendados nos
            ahorraremos problemas futuros.
          </p>
          <p className="mt-4">
            Una vez que hayas seleccionado tus componentes, el siguiente paso es
            ensamblarlos cuidadosamente en tu gabinete (verificá que el tamaño
            sea compatible con tu Motherboard!) y comenzar a configurar el
            software, para esta etapa podés ir a nuestra <Link  className="font-bold underline text-md" href="https://mirror.xyz/seedlatam.eth/VpuKM5vy2uWpK-H-MVGcbZaCIlRVoC3iTsASDDXIhTY">Guía completa para configurar un nodo de Ethereum</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
