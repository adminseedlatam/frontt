import styles from "../articles.module.css";
import Image from "next/image";
import portada from "@/app/assets/img/seednode/articles/guia-completa/0.png";
import foto1 from "@/app/assets/img/seednode/articles/guia-completa/1.png";
import foto2 from "@/app/assets/img/seednode/articles/guia-completa/2.png";
import foto3 from "@/app/assets/img/seednode/articles/guia-completa/3.png";
import foto4 from "@/app/assets/img/seednode/articles/guia-completa/4.png";
import foto5 from "@/app/assets/img/seednode/articles/guia-completa/5.png";
import foto6 from "@/app/assets/img/seednode/articles/guia-completa/6.png";
import foto7 from "@/app/assets/img/seednode/articles/guia-completa/7.png";
import foto8 from "@/app/assets/img/seednode/articles/guia-completa/8.png";

import Link from "next/link";

export default function Articulo2() {
  return (
    <div className={styles.secondContainer}>
      <div className="mx-auto">
        <Image
          className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
          width={1200}
          height={500}
          alt="portada"
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
          <p className="mt-4">
            Una vez hayas seleccionado un nombre de usuario y contraseña que
            cumpla con los criterios mencionados anteriormente, DappNode te
            mostrará tu token de recuperación personal.
            <strong>
              {" "}
              Es esencial que lo mantengas seguro, ya que te permitirá regenerar
              tu nombre de usuario y contraseña en caso de olvido.
            </strong>
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            4.1 Configuración de la fuente del repositorio
          </h2>
          <p className="mt-4">
            Lo primero que Dappnode preguntará es acerca de la Fuente del
            Repositorio. Esto configura cómo DappNode interactúa con Ethereum
            para obtener paquetes de DAppStore.
          </p>
          <p className="mt-4">
            Existen dos opciones disponibles en este momento:
          </p>
          <p className="mt-4">
            Nodo completo: Esta es la forma más segura y descentralizada de
            acceder a una cadena de bloques. Sin embargo, requiere más recursos
            en términos de ancho de banda, almacenamiento y CPU.
          </p>
          <p className="mt-4">
            Fuente remota: Esta alternativa es menos descentralizada, ya que
            confiarás en los nodos completos de DappNode para proporcionar datos
            precisos de la cadena de bloques. Utiliza pocos recursos y es
            adecuada para dispositivos con limitaciones de potencia o ancho de
            banda.
          </p>
          <p className="mt-4">
            Ahora que comprendes las opciones disponibles, es hora de tomar una
            decisión. En general, recomendamos la siguiente configuración:
          </p>
          <ol className="pt-4 list-disc ml-5 text-white">
            <li>
              Utiliza la opción de &quot;Nodo completo&quot; si tu hardware y
              ancho de banda lo permiten.
            </li>
            <li>
              Activa &quot;Usar remoto durante sincronización o errores&quot; en
              la esquina inferior izquierda.
            </li>
          </ol>
          <p className="mt-4">
            Selecciona uno de los clientes listados en el menú desplegable.
            Todos ellos son opciones probadas. Si necesitas ayuda para elegir,
            puedes consultar el sitio web de la Fundación Ethereum en relación a
            los &quot;Clientes de Ejecución&quot; o chequear nuestro próximo
            artículo comparando las distintas opciones de clientes disponibles.
            La sincronización del nodo en este caso se hará automáticamente
            cuando elijamos el cliente que queramos.
          </p>
        </div>
        <div className="mt-6">
          <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
            5. Instalooors & Buildooors juntos: Descarga del cliente.
          </h1>
          <p className="mt-4">
            Seguimos avanzando y llegamos a un paso crucial: explorar las
            diferentes opciones de clientes disponibles. Al seleccionar un
            cliente para tu dispositivo (nodo), ya sea al instalar DappNode o
            por cuenta propia, debes tener en cuenta que existe una amplia
            variedad de opciones. Cuantos más clientes haya, más resistente será
            la red a posibles ataques.
          </p>

          <p className="mt-4">
            Como vimos en el artículo 0, existen clientes de ejecución y de
            consenso, pero no todos están sincronizados con la red. A
            continuación detallaremos los tipos de clientes de ejecución y de
            consenso que están listos para su uso:
          </p>

          <p className="mt-4">
            <strong>Clientes de ejecución:</strong> Nethermind, Erigon, Geth.
            Akula y Besu.
          </p>

          <p className="mt-4">
            <strong>Clientes de consenso:</strong> Lighthouse, Lodestar, Prysm,
            Nimbus y Teku
          </p>
          <p className="mt-4">
            Ethereum es una red multi-cliente porque es lo mejor para mantener
            la buena salud de la red. En el mejor de los casos, cada cliente
            tendría menos de ⅓ del stake, lo que haría que la red sea resistente
            ante errores o ataques individuales en cualquier cliente. Si se
            descubre un error en uno de los clientes, para un atacante sería
            mucho más difícil encontrar una vulnerabilidad y causar un perjuicio
            a la red, en comparación con un escenario en el que solo haya un
            cliente y el camino sea más sencillo.
          </p>
          <p className="mt-4">
            Es importante destacar que ejecutar un cliente con la mayoría del
            stake puede tener consecuencias graves:
          </p>
          <p className="mt-4">
            <strong>Evento de Recorte Masivo: </strong>Los validadores
            mayoritarios de clientes firman certificaciones recortables
            (slashable attestations) debido a un error.
          </p>
          <p className="mt-4">
            <strong>Evento de Desconexión Masiva: </strong> Todos los
            validadores mayoritarios de clientes quedan fuera de línea debido a
            un error.
          </p>
          <p className="mt-4">
            <strong>Evento de Bloque Inválido: </strong>Todos los validadores
            mayoritarios de clientes certifican un bloque inválido debido a un
            error.
          </p>
          <p className="mt-4">
            En resumen, no te dejes llevar por la corriente y elige un cliente
            que no tenga la mayoría del porcentaje, como Nimbus y Besu, o
            cualquier otro que prefieras mientras no sean los dominantes.
          </p>
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="GovInWeb3"
            src={foto6}
          />
          <p className="mt-4">Participación de clientes de ejecución</p>
          <p className="mt-4">
            Una vez que elegiste el cliente a utilizar, llega el momento de
            instalarlo en DappNode para poder utilizarlo. Esta parte es muy
            sencilla, te mostramos cómo se vería en pantalla:
          </p>
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="GovInWeb3"
            src={foto7}
          />
          <p className="mt-4">
            Luego de elegir tu cliente y proceder con la instalación (siguiendo
            los pasos en pantalla), vas a ver tus paquetes de la siguiente
            forma:
          </p>
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="GovInWeb3"
            src={foto8}
          />
          <p className="mt-4">
            ¡Voila! Ahora nos queda el último paso, ponernos de acuerdo.
          </p>
        </div>
        <div>
          <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
            6. Hay que ponerse de acuerdo: Momento de sincronizar
          </h1>

          <p className="mt-4">
            La sincronización es la parte final de la configuración de tu nodo,
            y es fundamental para su correcto funcionamiento ya que permitirá
            que tu nodo esté disponible para utilizar y confirmará tu aporte a
            la seguridad de la red.
          </p>
          <p className="mt-4">
            Como mencionamos en la sección 4 (si optaste por DAppNode) o en el
            caso de que estés ejecutando un cliente directo, la sincronización
            dependerá del tipo de nodo que estés configurando. Si estás
            utilizando DAppNode, esta información es principalmente informativa,
            ya que el programa realizará la sincronización por vos al
            seleccionar el tipo de nodo. En el caso de un cliente directo,
            puedes tener en cuenta la siguiente información.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            6.1 Modos de sincronización
          </h2>
          <p className="mt-4">
            Para mantenerse actualizado y validar los datos en la red, el
            cliente de Ethereum debe sincronizarse con el estado más reciente.
            Esto implica descargar datos de pares, verificar criptográficamente
            su integridad y construir una base de datos local de la cadenas de
            bloques.
          </p>
          <p className="mt-4">
            Los modos de sincronización representan diferentes enfoques de este
            proceso, cada uno con sus propias compensaciones. Además, los
            clientes implementan algoritmos de sincronización de manera
            distinta. Siempre consulta la documentación oficial del cliente que
            elijas para obtener información específica sobre su implementación.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            6.1.1 Resumen de las estrategias
          </h2>
          <p className="mt-4">
            Aquí tienes un resumen general de los enfoques de sincronización
            utilizados en los clientes listos para la red de Ethereum:
          </p>
          <p className="mt-4 font-bold">6.1.1.1 Sincronización total</p>
          <p className="mt-4">
            Este modo implica la descarga de todos los bloques (incluidos los
            headers, las transacciones y los recibos) y va generando de manera
            creciente el estado de la cadena de bloques al ejecutar cada bloque
            desde el principio. Este enfoque minimiza la confianza y ofrece la
            máxima seguridad al verificar cada transacción. Debido al aumento
            constante de transacciones, este proceso puede llevar desde días
            hasta semanas para completarse.
          </p>
          <p className="mt-4 font-bold">6.1.1.2 Sincronización rápida</p>
          <p className="mt-4">
            En este caso, se descargan todos los bloques (incluidos los headers,
            las transacciones y los recibos), se verifican todos los headers, se
            descarga el estado y se compara con los headers descargados. Este
            enfoque se basa en la seguridad del mecanismo de consenso y suele
            completarse en cuestión de horas.
          </p>
          <p className="mt-4">
            6.1.1.3&nbsp;
            <Link
              className="font-bold underline text-md"
              href="https://www.parity.io/blog/what-is-a-light-client/"
            >
              Sincronización ligera
            </Link>
          </p>
          <p className="mt-4">
            La modalidad ligera del cliente implica la descarga de todos los
            headers de los bloques y la información contenida en ellos. A
            continuación, verifica aleatoriamente algunos de estos datos. Este
            enfoque sincroniza únicamente una parte de la cadena, comenzando
            desde un punto de control de confianza.
          </p>
          <p className="mt-4">
            Este modo obtiene únicamente el estado más reciente y confía en los
            desarrolladores y en el mecanismo de consenso para garantizar la
            precisión. El cliente en modalidad ligera está listo para su uso con
            el estado actual de la red en cuestión de minutos.
          </p>

          <p className="mt-4">
            6.1.1.4&nbsp;
            <Link
              className="font-bold underline text-md"
              href="https://github.com/ethereum/devp2p/blob/master/caps/snap.md"
            >
              Sincronización instantánea
            </Link>
          </p>
          <p className="mt-4">
            Desarrollada por Geth, esta estrategia aprovecha dinámicas
            instantáneas entregadas por pares. Esto permite recuperar todos los
            datos de cuentas y almacenamiento sin necesidad de descargar nodos
            de prueba intermedios. Luego, Geth reconstruye estos nodos Merkle
            localmente, brindando una sincronización extremadamente rápida. De
            hecho, esta es la estrategia de sincronización más veloz que ofrece
            Geth y es su opción predeterminada. Lo mejor de todo es que esta
            eficiencia no compromete la seguridad.
          </p>
          <p className="mt-4">
            6.1.1.5&nbsp;
            <Link
              className="font-bold underline text-md"
              href="https://openethereum.github.io/Beginner-Introduction#warping---no-warp"
            >
              Sincronización Warp
            </Link>
          </p>
          <p className="mt-4">
            OpenEthereum implementó la sincronización Warp, donde los nodos
            generan regularmente snapshots (fotos instantáneas) críticos del
            estado de consenso. Cualquier par puede obtener estos snapshots a
            través de la red, lo que habilita una sincronización ágil desde ese
            punto. Es el método de sincronización más rápido y predeterminado en
            OpenEthereum. Aunque similar a la sincronización instantánea, la
            estrategia Warp carece de algunos beneficios de seguridad.
          </p>

          <p className="mt-4">
            6.1.1.6&nbsp;
            <Link
              className="font-bold underline text-md"
              href="https://openethereum.github.io/Beginner-Introduction#warping---no-warp"
            >
              Sincronización Beam
            </Link>
          </p>
          <p className="mt-4">
            Nethermind y Trinity desarrollaron la sincronización Beam, una
            variante de la sincronización rápida. Además de descargar los datos
            necesarios para ejecutar los bloques más recientes, Beam permite
            consultas en la cadena poco después de la inicialización. Con un
            enfoque en sincronizar primero el estado, Beam facilita la
            realización de consultas RPC en cuestión de minutos. Sin embargo,
            vale la pena señalar que al estar en desarrollo, la sincronización
            en segundo plano aún puede ser inestable y las respuestas RPC
            podrían presentar fallos.
          </p>
          <p className="mt-4 font-bold">6.2 Configuración en cliente</p>
          <p className="mt-4">
            Los clientes ofrecen una gama de opciones de configuración para
            adaptarse a tus necesidades. Elegí la que mejor se ajuste a tu nivel
            de seguridad, los datos disponibles y los costos. Además del
            algoritmo de sincronización, también puedes configurar la limpieza
            de datos obsoletos. Esta función te permite eliminar información
            desactualizada, como nodos de prueba de estado que ya no son
            accesibles desde los últimos bloques.
          </p>
          <p className="mt-4">
            Asegúrate de revisar detenidamente la documentación del cliente o la
            página de ayuda para descubrir cuál es el modo de sincronización
            predeterminado. Puedes definir tu preferencia de sincronización de
            manera sencilla, siguiendo las instrucciones proporcionadas.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Conclusión
          </h2>
          <p className="mt-4">
            En resumen, correr tu propio nodo en la red Ethereum es una decisión
            valiosa que conlleva múltiples beneficios. Como hemos explorado a lo
            largo de este artículo, el acto de operar tu propio nodo no solo
            contribuye a la seguridad y descentralización de la red, sino que
            también te brinda una mayor comprensión del funcionamiento interno
            de Ethereum y te otorga un mayor control sobre tus transacciones y
            datos.
          </p>
          <p className="mt-4">
            Especialmente en el contexto de Latinoamérica, donde la adopción de
            blockchain y criptomonedas continúa creciendo, el acto de ejecutar
            un nodo cobra una relevancia aún mayor. Tené en cuenta que la
            mayoría de los nodos están situados en Estados Unidos y Alemania, lo
            que no aporta a la descentralización y soberanía que buscamos. La
            capacidad de mantener y verificar tus propias transacciones puede
            resultar fundamental para garantizar la integridad de tus activos y
            contribuir a la confiabilidad de la red.
          </p>
          <p className="mt-4">
            Asimismo, el proceso no es solo sobre correr un nodo, sino también
            sobre tomar decisiones informadas. Como hemos destacado, la elección
            del cliente de Ethereum adecuado es esencial. Optar por clientes con
            un porcentaje menor de control en la red es un paso crucial hacia
            una red más robusta y resistente a posibles fallos o ataques.
          </p>
          <p className="mt-4">
            Invitamos a la comunidad a considerar seriamente la posibilidad de
            emprender este camino, ya sea el del “Node instalooor” o el del
            “Wizard buildooor” va a ser un gran momento de aprendizaje. Desde
            Seed Latam y Layer2 estamos comprometidos en brindar apoyo y
            compartir conocimientos, tanto a través de artículos informativos
            como en compartir los detalles sobre el proceso de configuración y
            operación del nodo que tendremos en Córdoba, Argentina.
          </p>
          <p className="mt-4">
            Unite al movimiento hacia la descentralización, apoya la seguridad y
            el crecimiento de Ethereum y sé el dueño de tu propio camino en esta
            nueva era tecnológica.
          </p>
          <p className="mt-4">
            ¡Muchas gracias por leer hasta acá! Nos vemos en el próximo
            artículo.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Fuentes:
          </h2>
          <ol className="pt-4 list-disc ml-5 text-white">
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://docs.dappnode.io/docs/smooth/faq-glossary#faq"
              >
                General Questions | DAppNode
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://docs.dappnode.com/user/quick-start/core/installation/"
              >
                Installation | DAppNode
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://ethereum.org/es/developers/docs/nodes-and-clients/client-diversity/"
              >
                Client diversity | ethereum.org
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://ethereum.org/es/developers/docs/nodes-and-clients/run-a-node/#spinning-up-node"
              >
                Ejecute su propio nodo de Ethereum
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://ethereum.org/en/developers/docs/nodes-and-clients/#clients"
              >
                Nodes and clients | ethereum.org
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://docs.dappnode.com/user/guides/"
              >
                Dappnode Guide Index
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://www.alchemy.com/list-of/execution-clients-on-ethereum"
              >
                List of 5 Execution Clients on Ethereum (2023)
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://www.alchemy.com/list-of/consensus-clients-on-ethereum"
              >
                List of 5 Consensus Clients on Ethereum (2023)
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://ethernodes.org/"
              >
                Ethernodes
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA"
              >
                Client diversity on Ethereum&apos;s consensus layer
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html"
              >
                Ethereum Merge: Run the majority client at your own peril! |
                Dankrad Feist
              </Link>
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://www.parity.io/blog/what-is-a-light-client/"
              >
                What is a light client and why you should care? | Parity
                Technologies
              </Link>
            </li>
          </ol>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            SeedLatam
          </h2>
          <p className="mt-4">
            El ecosistema SEEDLatam tiene el objetivo de promover el
            conocimiento y el pensamiento crítico sobre la Web3 en América
            Latina, así como impulsar a los líderes Web3 del futuro. Para lograr
            esta misión, SEEDLatam trabaja en conjunto con comunidades: creando,
            alineándose y coordinándose con ellas en la consecución de un
            objetivo más amplio:{" "}
            <strong>
              {" "}
              la educación en diversas áreas del ecosistema Web3 y generar un
              mayor impacto positivo en América Latina a través de la
              participación activa en las gobernanzas de mayor impacto.{" "}
            </strong>
          </p>
          <p className="mt-4">
            <Link
              className="font-bold underline text-md"
              href="https://twitter.com/SEEDLatam"
            >
              @SeedLatam
            </Link>
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Node Team
          </h2>
          <ol className="pt-4 list-disc ml-5 text-white">
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://twitter.com/SeedsPuntoEth"
              >
                @SeedsPuntoEth
              </Link>
              - Leader
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://twitter.com/JuanuMusic"
              >
                @JuanuMusic
              </Link>{" "}
              - Dev
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://twitter.com/MateoEmilio1"
              >
                @MateoEmilio1
              </Link>{" "}
              - Research
            </li>
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://twitter.com/iamnicki15"
              >
                @iamnicki15
              </Link>{" "}
              -  Research & Comms
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
