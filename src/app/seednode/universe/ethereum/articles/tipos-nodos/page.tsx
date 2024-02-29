import styles from "../articles.module.css";
import portada from "@/app/assets/img/seednode/articles/articulo1ej.png";
import Image from "next/image";

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
          Diferencias entre nodos archivo, completos y ligeros
        </h1>
        <div>
          <h2 className="pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight">
            Introducción
          </h2>
          <p className="">
            En primer lugar, vamos a explicar puntos claves como: qué son los
            nodos, por qué son importantes y qué papel fundamental desempeñan en
            Ethereum.
          </p>
          <p className="mt-4">
            Los Nodos son computadoras que corren un software específico
            (cliente) que permite la conexión con la red de Ethereum. Dando
            acceso de esta forma a la conexión con otros nodos y en consecuencia
            a la formación de una red. El rol fundamental que cumplen es el
            registro, validación de las transacciones y participando en el
            consenso de la red.
          </p>
          <p className="mt-4">
            Los nodos son fundamentales para la salud, la seguridad y la
            resiliencia operativa de la red. Cuantos más nodos haya, mayor
            diversidad y robustez tendrá la red.
          </p>
          <p className="mt-4">
            Esto es esencial para lograr descentralización, que es el objetivo
            de toda red para crear un sistema confiable y resistente a la
            censura.
          </p>
          <p className="mt-4">
            Previo a la ejecución de un nodo es necesario saber que la red de
            Ethereum se compone de diversos tipos de nodos, específicamente 3,
            cada uno con sus propias características y requisitos, cumpliendo un
            rol único en el mantenimiento de la cadena de bloques. Estos son los
            Nodo Archivo, Nodo Completo y Nodo Ligero.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="pb-10 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight">
            Nodo completo
          </h2>
          <p className="mt-4">
            Los nodos completos son los nodos más completos y confiables de la
            red. Realizan una validación completa de cada bloque de la cadena de
            bloques, incluyendo la descarga y verificación del cuerpo del bloque
            y los datos de estado de cada una.
          </p>
          <p className="mt-4">
            Existen dos tipos distintos de nodos completos:
          </p>
          <ul className="pt-4 list-disc ml-5 text-white">
            <li>
              <strong>Nodos completos desde el bloque génesis:</strong> que son
              los que comienzan desde el bloque génesis contando con la
              verificación de todos los bloques y verifican, por otro lado, los
              que inician su verificación en un bloque más reciente en el cual
              se confía como válido (por ejemplo, la &apos;snap sync&apos; de
              Geth).
            </li>
            <li>
              <strong>Nodos completos con sincronización rápida:</strong>{" "}
              Independientemente de dónde comience la verificación, los nodos
              completos solo mantienen una copia local de datos relativamente
              recientes (por lo general, los 128 bloques más recientes), lo que
              permite eliminar datos más antiguos para ahorrar espacio del
              disco. Los datos más antiguos que no encuentren en los últimos 128
              bloques se pueden regenerar mediante el minado (computación)
              aunque puede ser un proceso de extrema demanda al alejarnos
              progresivamente del último bloque.
            </li>
          </ul>
        </div>

        <div className="pt-6">
          <h2 className="pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Nodo Archivo
          </h2>
          <p className="mt-4">
            Los Nodos Archivo son una variante de los Nodos Completos que
            verifican cada bloque desde el génesis y nunca eliminan ninguno de
            los datos descargados.
          </p>

          <p className="mt-4">
            ¿Qué quiere decir esto? Quiere decir que los nodos archivos son un
            archivo histórico de estados.
          </p>

          <p className="mt-4">
            Al momento de compararlo con el Nodo Completo, el mayor beneficio de
            este tipo de nodo es la rápida accesibilidad a datos históricos
            sobre los estados de cada bloque debido a que se encuentran
            almacenados todos los estados desde el principio y no únicamente de
            los últimos 128 bloques. Por ejemplo, es beneficioso y práctico en
            el caso de precisar acceder a balances de billeteras, código de
            contratos o datos acerca del consenso.
          </p>

          <p className="mt-4">
            Consecuentemente, los datos representan unidades de terabytes, lo
            que resulta menos atractivo para el usuario promedio, y de extrema
            utilidad para servicios como exploradores de bloques, proveedores de
            billeteras y análisis de cadena.
          </p>
        </div>

        <div className="pt-6">
          <h2 className="pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight mt-4">
            Nodo Ligero
          </h2>
          <p className="mt-4">
            Los nodos ligeros son los nodos más sencillos y accesibles de la
            red.
          </p>

          <p className="mt-4">
            En lugar de descargar cada bloque, los nodos ligeros solo descargan
            encabezados de bloque. Estos encabezados contienen información
            resumida sobre el contenido de los bloques, una estampa del tiempo
            time stamp y el hash del bloque previo. Cualquier otra información
            que el nodo ligero requiera se solicita a un nodo completo.
          </p>

          <p className="mt-4">
            Los Nodos Ligeros se encargan de la validación de datos de la cadena
            de bloques al no poder participar de la validación de bloques ni de
            la ejecución de contratos inteligentes. No pueden verificar de
            manera independiente los datos que reciben contra las raíces de
            estado en los encabezados de bloque.
          </p>

          <p className="mt-4">
            La diferencia con los Nodos Completos radica al no participar en el
            consenso. Es decir, no pueden ser mineros/validadores, no obstante
            pueden acceder a la cadena de bloques de Ethereum con la misma
            funcionalidad y garantías de seguridad que un Nodo Completo. Otra
            diferencia con estos mismos nodos es que no efectúan una
            verificación completa de cada bloque. Consecuentemente, en el caso
            de que únicamente haya nodos ligeros en una red, haría a la red
            susceptible de ataques de validadores.
          </p>

          <p className="mt-4">
            Los nodos ligeros permiten a los usuarios participar en la red
            Ethereum sin la necesidad de hardware potente o un ancho de banda
            elevado indispensable para ejecutar nodos completos. Eventualmente,
            los nodos ligeros podrán ser ejecutados en teléfonos móviles o
            dispositivos integrados.
          </p>

          <p className="mt-4">
            <strong>
              Ahora que sabemos que los nodos completos validan cada bloque, los
              nodos archivo almacenan todos los bloques y los nodos ligeros solo
              descargan los encabezados de bloque, es importante conocer los
              requerimientos computacionales necesarios para ejecutarlos.
            </strong>
          </p>
        </div>

        <div className="pt-6">
          <h2 className="pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight">
            Requerimientos de Hardware:
          </h2>
          <p className="mt-4 font-bold">Nodo Completo</p>
          <ul className="pt-4 list-disc ml-5 text-white">
            <li>Una CPU rápida con 4 o más núcleos.</li>
            <li>16 GB o más de RAM.</li>
            <li>
              Una unidad SSD rápida con al menos 1 TB de espacio (la capacidad
              de almacenamiento aumentará con el tiempo).
            </li>
            <li>Ancho de banda de 25 MBit/s.</li>
          </ul>

          <p className="mt-4 font-bold">Nodo Archivo</p>
          <ul className="pt-4 list-disc ml-5 text-white">
            <li>Una CPU rápida con 4 o más núcleos.</li>
            <li>16 GB o más de RAM.</li>
            <li>
              El almacenamiento variará según el software del cliente (a partir
              de marzo de 2023, el modo de archivo en Geth ocupa aproximadamente
              13.5 TB, y Erigon ocupa alrededor de 2 TB (se recomienda contar
              con 3 TB)).
            </li>
            <li>Ancho de banda de 25 MBit/s.</li>
          </ul>

          <p className="mt-4 font-bold">Nodo Archivo</p>
          <ul className="pt-4 list-disc ml-5 text-white">
            <li>400 MB de almacenamiento.</li>
            <li>Acceso a Internet.</li>
          </ul>
        </div>
        <div className="pt-6">
          <h2 className="pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight">
            Conclusión
          </h2>
          <p>
            Los nodos en la red Ethereum desempeñan roles cruciales que van
            desde la validación de bloques hasta la preservación de datos
            históricos de la red. La diversidad de nodos, como los completos,
            ligeros y de archivo, permiten una mayor versatilidad, abriendo las
            puertas a la participación tanto de usuarios con recursos limitados
            hasta aquellos que requieren acceso a datos históricos detallados.
            Es indispensable contemplar previo a correr un nodo, cuál es el tipo
            de nodo que queremos correr y los recursos con los que contamos para
            tener una mejor experiencia al momento de ejecutar uno.
          </p>
        </div>
      </div>
    </div>
  );
}
