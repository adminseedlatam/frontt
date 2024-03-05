import styles from "../articles.module.css";
import Image from "next/image";
import portada from "@/app/assets/img/seednode/articles/guia-completa/0.png";
import foto1 from "@/app/assets/img/seednode/articles/guia-completa/1.png";
import foto2 from "@/app/assets/img/seednode/articles/guia-completa/2.png";
import foto3 from "@/app/assets/img/seednode/articles/guia-completa/3.png";
import foto4 from "@/app/assets/img/seednode/articles/guia-completa/4.png";
import foto5 from "@/app/assets/img/seednode/articles/guia-completa/5.png";
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
          Guía completa para configurar un nodo de Ethereum: Desde la
          instalación hasta la sincronización
        </h1>
        <div className="mt-4">
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Introducción
          </h2>
          <p className="mt-4">
            Ethereum opera como una red distribuida de nodos, cada uno de los
            cuales ejecuta el software para verificar los bloques de la cadena.
            La correcta distribución de estos nodos es esencial para lograr la
            descentralización y aumentar la resistencia a la censura de la red.
            Un ejemplo de esto es un nodo operando en Córdoba, Argentina, lo que
            representa un significativo avance hacia la mejora de la integridad
            de la red. Por lo tanto, es crucial motivar a más personas en
            América Latina a embarcarse en la tarea de ejecutar sus propios
            nodos, contribuyendo así de manera directa a una blockchain más
            descentralizada y robusta.
          </p>
          <p className="mt-4">
            En este artículo, te proporcionaremos una guía completa para
            configurar tu propio nodo de Ethereum. Si sientes que aún necesitas
            perfeccionar algunos conceptos antes de comenzar, también hemos
            elaborado el artículo “Artículo 0: Nodes 101”, que te brindará el
            conocimiento necesario para emprender este camino.
          </p>
          <p className="mt-4">
            A lo largo de este artículo, te llevaremos desde los pasos iniciales
            hasta la implementación final. Sin embargo, hay dos enfoques que
            puedes considerar, dependiendo de tus objetivos y del hardware que
            desees utilizar. En nuestro caso, estaremos ejecutando un nodo
            completo con DappNode, gracias a un grant otorgado por la{" "}
            <strong>Ethereum Foundation.</strong>
          </p>
          <p className="mt-4">
            Debajo podrás encontrar el esquema que utilizamos para explicarte de
            la mejor forma posible cómo ejecutar el Nodo.
          </p>
          <p className="mt-4">
            ¡Arranquemos! ¿Serás un Node instalooor ó el Wizard buildooor?
          </p>

          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={foto1}
            />
          </div>
          <p className="mt-4">
            Esquema de configuración para un nodo de Ethereum
          </p>
        </div>

        <div className="mt-6">
          <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
            1.The Node instalooor path
          </h1>

          <p className="mt-4">
            Tomar este camino implica comprar un hardware que requerirá
            configuración. Aquí, deberás seleccionar un cliente, descargar los
            bloques de la red (dependiendo el tipo de nodo que elijas) y
            sincronizarlo con los demás nodos, para ello tendrás que seguir una
            serie de pasos que detallaremos más adelante. Descubriremos qué es
            HOPR, examinaremos un ejemplo de hardware y aprenderemos cómo
            instalar el software de DappNode de manera efectiva.
          </p>

          <p className="mt-4">
            Posteriormente, abordaremos la elección del cliente y la
            sincronización del nodo, pero antes de ello, es fundamental elegir
            entre las dos alternativas de hardware disponibles. 1.1 ¿Qué es
            HOPR? Es un protocolo que está enfocado en proveer a los usuarios
            una nueva forma de comunicarse con completa privacidad. Su alcance
            incluye la venta de hardware necesario para ejecutar software que
            procesa transacciones y contribuye a la validación de diversas
            blockchains, como Ethereum en nuestro caso. Estas compactas pero
            potentes computadoras nos permiten tener nuestro propio nodo en casa
            y conectarlo a la red que elijamos. El hardware que ofrecen incluye:
            HOPR home: Intel NUC i7 32gb DDR4 RAM 2TB NVMe
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            1.2 ¿Cómo instalar DApp Node en hopr?
          </h2>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            1.2.1 AMD/Intel
          </h2>
          <p className="mt-4">
            Si utilizar procesadores AMD/Intel, existen dos metodos para
            instalar DAppNode: 1.2.1 Instalación mediante comandos La
            instalación de DappNode puede lograrse a través de comandos,
            recomendamos el uso de sistemas operativos Ubuntu o Debian. Antes de
            comenzar, debemos tener en cuenta los siguientes requisitos previos:
            Requisitos previos: Instalar: Docker: Get Docker | Docker
            Documentation Docker compose: Scenario two: Install the Compose
            plugin xz: XZ Utils
          </p>
          <p className="mt-4">
            Ejecuta el siguiente comando en tu terminal para instalar los
            requisitos previos (si ya los tienes instalados o deseas utilizar
            otro método de instalación, puedes omitir este paso):
          </p>
          {/* Codigo */}
          <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
            <pre className="whitespace-pre-wrap">
              <code className="language-html">
                sudo wget -O - https://prerequisites.dappnode.io | sudo bash
              </code>
            </pre>
          </div>
          <p className="mt-4">Instalación</p>
          <p className="mt-4">
            Luego, procedemos con la instalación de DAppNode a través del
            siguiente comando:
          </p>
          {/* Codigo */}
          <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
            <pre className="whitespace-pre-wrap">
              <code className="language-html">
                sudo wget -O - https://installer.dappnode.io | sudo bash
              </code>
            </pre>
          </div>
          <p className="mt-4">Reiniciar</p>
          <p className="mt-4">
            Una vez finalizada la instalación, reinicia tu computadora con el
            siguiente comando:
          </p>
          {/* Codigo */}
          <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
            <pre className="whitespace-pre-wrap">
              <code className="language-html">shutdown -r now</code>
            </pre>
          </div>

          <p className="mt-4">1.2.2 Instalación mediante ISO</p>
          <p className="mt-4">
            Este enfoque se emplea si no tienes ningún sistema operativo (SO)
            instalado. Para llevar a cabo la instalación, flashea un USB con el
            archivo .ISO que instalará Debian junto con DAppNode. Aquí los pasos
            a seguir:
          </p>
          <p className="mt-4">Obtención del ISO</p>
          <p className="mt-4">
            Puedes obtener la imagen (.iso) directamente desde desde DAppNodeISO
            o construirla siguiendo la documentación en source.
          </p>
          <p className="mt-4">Grabar el ISO en un USB</p>
          <p className="mt-4">
            Para poder grabar/instalar el ISO en un USB, se recomienda utilizar
            Etcher aunque Rufus también puede ser una buena opción. Asegurate de
            ver un video en Youtube, si nunca instalaste un sistema operativo.
          </p>
          <p className="mt-4">
            Tené en cuenta que ejecutar un USB booteado en una computadora con
            información eliminará todos los datos presentes. Además, DappNode
            está diseñado para funcionar de manera continua, por lo que se
            sugiere no apagarlo si deseas mantener la sincronización.
          </p>
          {/* Armar advertencia */}
          <p className="mt-4">
            Te recomendamos utilizar una computadora exclusiva para el nodo, no
            la que uses para fines personales.
          </p>
          <p className="mt-4">
            Una vez instalado DappNode en HOPR, podemos seguir con la
            configuración del nodo para instalar el cliente y sincronizarlo.
            Asimismo, antes vamos a detallar cómo podés ejecutar tu nodo sin
            necesidad de comprar un equipo especial.
          </p>
        </div>

        <div className="mt-6">
          <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
            2. The Wizard buildooor Path
          </h1>
          <p className="mt-4">
            Si te gusta tirar magia (codear) y caer en el rabbit hole bien
            profundo, es probable que inclines tu elección hacia la construcción
            de tu propio hardware en lugar de adquirirlo preconfigurado. Si este
            es tu caso, estás optando por lo que llamamos el &quot;Wizard
            buildooor path&quot;. Para que puedas abordar este desafío de manera
            exitosa, hemos recopilado información esencial que te guiará.
            Comenzaremos por las especificaciones mínimas necesarias y luego
            procederemos con la instalación del software.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            2.1 ¿Qué tipo de hardware puedo utilizar?
          </h2>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Paso 1 - Hardware
          </h2>

          <p className="mt-4">
            Especificaciones mínimas 4–8 GB de RAM SSD de 2 TB SSD necesario
            para cumplir con los requerimientos de velocidad de escritura.
          </p>
          <p className="mt-4">
            Recomendado Intel NUC de 7ª generación o superior (Procesador x86)
            Conexión a internet por cable (No es necesaria, pero provee una
            instalación más simple y la mayor estabilidad) Monitor y teclado (A
            menos que esté usando DAppNode o la configuración ssh/headless)
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Paso 2 - Software
          </h2>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Opción 1 - DAppNode
          </h2>
          <p className="mt-4">
            Una vez tengas el hardware listo, podes descargar el sistema
            operativo DAppNode desde cualquier ordenador y proceder a instalarlo
            en un nuevo SSD utilizando una unidad USB.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Paso 2 - Software
          </h2>

          <p className="mt-4">
            Si sos de los que prefieren tener todo el control y tenes
            experiencia en el ámbito, podes optar por utilizar la línea de
            comandos. Si este es tu camino, en el siguiente enlace encontrarás
            la información necesaria para llevarlo a cabo.
          </p>
          <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
            Ambos caminos
          </h1>
          <p className="mt-4">
            Luego de la instalación del software, la configuración del nodo es
            la misma sin tener en cuenta el hardware que utilices por lo que
            aquí ambos caminos se juntan para terminar teniendo el mismo
            resultado:
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={foto2}
            />
          </div>
          <p className="mt-4">Comparativa de ambos caminos</p>
          <p className="mt-4">
            La elección entre ambos caminos depende de tus preferencias
            personales, nivel de experiencia y objetivos. Tanto “The Node
            instalooor path” como “The Wizard buildooor Path” tienen sus
            beneficios como complicaciones permitiéndote participar activamente
            en Ethereum y sumergirte en el mundo de la descentralización.
          </p>
          <p className="mt-4">
            Lo bueno de obtener un nodo de HOPR preconfigurado es no tener que
            comprar todos los componentes del hardware y armarlo vos mismo, pero
            eso también influye en el precio ya que sale más barato armar un
            nodo propio.
          </p>
          <p className="mt-4">
            Con esta información, seguramente ya podés darte una idea de que
            hardware vas a elegir y es momento de acceder a DappNode.
          </p>
        </div>

        <div className="mt-6">
          <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
            3. Accediendo a DAppNode
          </h1>

          <p className="mt-4">
            Conectar a DappNode con internet es una de las partes más
            importantes, así que prestale especial atención a lo que sigue.
          </p>
          <p className="mt-4">
            Hay 5 formas de acceder a internet y son las siguientes:
          </p>
          <ul className="pt-4 list-disc ml-5 text-white">
            <li>Red Local</li>
            <li>SSH (Acceso por terminal)</li>
            <li>Físico</li>
            <li>VPN</li>
            <li>WiFi</li>
          </ul>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            3.1 Red Local
          </h2>

          <p className="mt-4">
            Recomendamos utilizar esta opción ya que es la más amigable y rápida
            a la hora de realizar alguna acción con DAppNode
          </p>
          <p className="mt-4">
            ⚠️ Importante: Cuando uses el proxy de tu red local estas limitado
            al dashboard de la UI de dappnode.local y no vas a poder acceder a
            otras features como los clientes de las blockchains (Ethereum,
            Gnosis Chain, etc) . Debes configurar y usar una{" "}
            <Link
              className="font-bold underline text-md"
              href="https://docs.dappnode.com/user/guides/access/vpn/"
            >
              VPN
            </Link>
            &nbsp;o el hotspot WiFi para acceder a estas features.
          </p>

          <p className="mt-4">
            <strong>Estos son los pasos que deberías seguir:</strong>
          </p>
          <p className="mt-4">
            1-Conectando DAppNode a nuestro Router via Ethernet para tener
            internet
          </p>
          <p className="mt-4">2-Conectar nuestro dispositivo a la misma red</p>
          <p className="mt-4">
            3-Acceder desde cualquier dispositivo a el link&nbsp;
            <Link
              className="font-bold underline text-md"
              href="http://dappnode.local"
            >
              http://dappnode.local
            </Link>
            &nbsp;donde solo los dispositivos conectados al wifi van a tener
            acceso
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={foto3}
            />
          </div>
          <p className="mt-4">Imagen extraída de: Connect toDAppNode</p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            3.1.1 Habilitar o deshabilitar el acceso a la red local
          </h2>
          <p className="mt-4">
            Si no tenes uso para el acceso a la red local porque estas usando
            las funciones de VPN o el punto de acceso WiFi incluido, también
            podes deshabilitarlo (y, por supuesto, habilitarlo nuevamente más
            tarde) en el menú de la barra lateral de Wi-Fi en Dappnode:
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={foto4}
            />
          </div>
          <p className="mt-4">
            Cambiar a la pestaña de Red Local, y cambiar la funcionalidad de la
            red local:
          </p>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={foto5}
            />
          </div>

          <p className="mt-4">
            Para saber cómo configurar las otras conexiones, podés ingresar{" "}
            <Link
              className="font-bold underline text-md"
              href="https://docs.dappnode.com/user/guides/access/"
            >
              aquí
            </Link>
            .
          </p>
          <p className="mt-4">
            A continuación veremos los primeros pasos a realizar con DAppNode
            instalado.
          </p>
        </div>
        <div className="mt-6">
          <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
            4. Primeros pasos con DAppNode
          </h1>
          <p className="mt-4">
            La primera vez que ingreses a la interfaz de usuario de DappNode, se
            te pedirá que crees una nueva cuenta. Deberás proporcionar un nombre
            de usuario y una contraseña segura.
          </p>
        </div>
      </div>
    </div>
  );
}
