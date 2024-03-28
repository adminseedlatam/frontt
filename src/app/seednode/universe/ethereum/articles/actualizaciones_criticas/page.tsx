import styles from "../articles.module.css";
import Image from "next/image";
import portada from "@/app/assets/img/seednode/articles/actualizacionesCriticas.png";
import foto1 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo1.jpg";
import foto2 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo2.jpg";
import foto3 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo3.jpg";
import foto4 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo4.jpg";
import foto5 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo5.jpg";
import foto6 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo6.jpg";
import foto7 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo7.jpg";
import foto8 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo8.jpg";
import foto9 from "@/app/assets/img/seednode/articles/actualizaciones-criticas/photo9.jpg";
import Link from "next/link";

export default function Articulo() {
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
        <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
          Actualizaciones críticas y parches de seguridad
        </h1>
        <p className="mt-4">
          Operar cualquier tipo de nodo de Ethereum no consiste únicamente en
          instalarlo y dejarlo funcionando. Eso no es suficiente. Es necesario
          establecer una rutina de mantenimiento y seguirla meticulosamente para
          minimizar al máximo cualquier riesgo que pueda surgir. Es dentro de
          este mantenimiento donde debemos asegurarnos de que los clientes del
          nodo estén ejecutando las últimas versiones.
        </p>
        <p className="mt-4">
          No actualizar los clientes podría generar varios inconvenientes, como
          un rendimiento disminuido, problemas de compatibilidad con
          aplicaciones más nuevas o incluso riesgos de seguridad. El software
          desactualizado está expuesto a ataques y exploits de vulnerabilidades
          conocidas en versiones anteriores.
        </p>
        <p className="mt-4">
          Si bien nos centraremos en ofrecer sugerencias para mantener
          actualizados los clientes de Ethereum, también destacamos la necesidad
          e importancia de mantener actualizado el sistema operativo.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Actualizaciones del Sistema Operativo
        </h2>
        <p className="mt-4">
          Podemos imaginar cómo se sentiría un staker al encontrar un mensaje de
          advertencia de su sistema operativo indicando que su máquina es
          vulnerable. Para evitar que esto suceda, hay dos opciones: estar
          atento las 24 horas del día a los parches de seguridad y las
          actualizaciones de su sistema operativo, o tener habilitadas
          actualizaciones automáticas. Claramente, la segunda opción ofrece
          cierta ventaja en eficiencia. La decisión de usar actualizaciones
          automáticas o no dependerá de cada usuario.
        </p>
        <p className="mt-4">
          A continuación, presentamos un tutorial que muestra cómo habilitar las
          actualizaciones críticas de seguridad de forma automática en
          distribuciones de Linux:
        </p>
        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">
              sudo apt-get update -y <br />
              sudo apt-get install -y unattended-upgrades update-notifier-common
              <br />
              sudo vim /etc/apt/apt.conf.d/20auto-upgrades #usar nano si no
              tienen vim instalado
              <br />
              #sudo nano /etc/apt/apt.conf.d/20auto-upgrades
            </code>
          </pre>
        </div>
        <p className="mt-4">
          Una vez abierto el archivo de configuración modificamos los siguientes
          parámetros:
        </p>
        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">
              APT::Periodic::Update-Package-Lists &quot;1&quot;;
              <br />
              APT::Periodic::Unattended-Upgrade &quot;1&quot;; <br />
              APT::Periodic::AutocleanInterval &quot;7&quot;; <br />
              Unattended-Upgrade::Remove-Unused-Dependencies &quot;true&quot;;{" "}
              <br />
              Unattended-Upgrade::Remove-New-Unused-Dependencies
              &quot;true&quot;; <br />
              Unattended-Upgrade::Automatic-Reboot &quot;true&quot;; <br />
              Unattended-Upgrade::Automatic-Reboot-Time &quot;02:00&quot;;{" "}
              <br />
            </code>
          </pre>
        </div>

        <p className="mt-4">Guardamos el archivo y procedemos a configurar:</p>

        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">
              sudo systemctl enable unattended-upgrades
              <br />
              sudo systemctl restart unattended-upgrades
              <br />
            </code>
          </pre>
        </div>
        <p className="mt-4">Volvemos a actualizar:</p>
        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">
              sudo apt-get update -y
              <br />
              sudo apt-get upgrade -y
              <br />
              sudo apt-get dist-upgrade -y
              <br />
            </code>
          </pre>
        </div>
        <p className="mt-4">Reiniciamos:</p>
        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">
              sudo shutdown -r now
              <br />
            </code>
          </pre>
        </div>
        <p className="mt-4">
          Ahora las actualizaciones criticas de seguridad del sistema operativo
          se instalaran automáticamente.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Actualizaciones de los clientes de Ethereum
        </h2>

        <p className="mt-4">
          Como sabemos, para fortalecer la resistencia de Ethereum contra
          posibles ataques o errores de consenso, es recomendable usar clientes
          minoritarios. Para ver la distribución de clientes, recomendamos
          visitar{" "}
          <Link
            className="font-bold underline text-md"
            href="https://clientdiversity.org/"
          >
            Client Diversity
          </Link>
        </p>
        <p className="mt-4">
          Para obtener más detalles sobre la importancia de la diversidad de
          clientes, compartimos un artículo anterior en donde explicamos las
          ventajas de cada cliente y realizamos una evaluación comparativa entre
          ellos: &quot;
          <Link
            className="font-bold underline text-md"
            href="https://mirror.xyz/seedlatam.eth/xXIWoicVKhEQzFRy2StTUldtzCsbt6nkBm2L1VF8ZdI"
          >
            Evaluación comparativa de clientes de Ethereum
          </Link>
          &quot;
        </p>
        <p className="mt-4">
          Debido a esta diversidad, nos enfocaremos en esta guía en un tutorial
          básico para actualizar un cliente, brindar recomendaciones generales y
          mencionar buenas prácticas que un operador de nodo debería seguir.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Verificación periódica de actualizaciones de los clientes
        </h2>
        <p className="mt-4">
          Es importante mantenerse al día con las últimas actualizaciones, ya
          que, como mencionamos, contienen correcciones de errores y parches de
          seguridad.
        </p>
        <p className="mt-4">
          Por lo general, las actualizaciones nos indican qué tan urgentes son
          necesarias sus implementaciones; por ejemplo, Nimbus las clasifica de
          la siguiente manera:
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold">low-urgency:</span> actualiza a tu
            conveniencia.
          </li>
          <li className="pt-2">
            <span className="font-bold">medium-urgency:</span> puede contener
            una corrección de estabilidad importante; es mejor actualizar cuanto
            antes.
          </li>
          <li className="pt-2">
            <span className="font-bold">high-urgency:</span> actualiza tan
            pronto como puedas; esta es una actualización crítica necesaria para
            que el cliente funcione correctamente.
          </li>
        </ul>
        <p className="mt-4">
          Para mantenerse informado, no hay nada mejor que ser miembro del
          Discord de los clientes utilizados e inscribirse en sus alarmas por
          correo electrónico (en caso de que tengan ese servicio).
        </p>
        <p className="mt-4">
          Verificar las últimas versiones directamente desde GitHub también es
          una buena opción. A continuación, se detallan las páginas necesarias
          para verificar la última versión de cada cliente y los documentos
          necesarios para realizar la actualización.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Execution Clients -EL
        </h2>
        {/* GETH */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          geth
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto1}
          />
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/ethereum/go-ethereum/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://geth.ethereum.org/docs/getting-started/installing-geth"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://geth.ethereum.org/"
            >
              Web
            </Link>
          </div>
        </div>

        <p className="mt-4">
          ⛔ Desde SEEDNode, desalentamos el uso de geth e invitamos a usar
          clientes minoritarios.
        </p>
        {/* Nethermind */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Nethermind
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto2}
          />
          {/* Links */}
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/NethermindEth/nethermind/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://docs.nethermind.io/faq/#how-do-i-upgrade-my-node"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://www.nethermind.io/nethermind-client"
            >
              Web
            </Link>
          </div>
        </div>
        {/* Besu */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Besu
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto3}
          />
          {/* Links */}
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/hyperledger/besu/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://besu.hyperledger.org/stable/public-networks/get-started"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://www.hyperledger.org/projects/besu"
            >
              Web
            </Link>
          </div>
        </div>
        {/* Erigon */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Erigon
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto4}
          />
          {/* Links */}
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/ledgerwatch/erigon/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://erigon.gitbook.io/erigon"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://erigon.tech/"
            >
              Web
            </Link>
          </div>
        </div>

        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Consensus Clients - CL
        </h2>
        {/* Prysm */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Prysm
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto5}
          />
          {/* Links */}
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/prysmaticlabs/prysm/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://docs.prylabs.network/docs/getting-started"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://prysmaticlabs.com/
              "
            >
              Web
            </Link>
          </div>
        </div>
        {/* Lighthouse */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Lighthouse
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto6}
          />
          {/* Links */}
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/sigp/lighthouse/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://lighthouse-book.sigmaprime.io/"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://lighthouse.sigmaprime.io/"
            >
              Web
            </Link>
          </div>
        </div>
        {/* Teku */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Teku
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto8}
          />
          {/* Links */}
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/Consensys/teku/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://docs.teku.consensys.io/introduction"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://consensys.io/teku"
            >
              Web
            </Link>
          </div>
        </div>
        {/* Nimbus */}
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Nimbus
        </h3>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="geth"
            src={foto7}
          />
          {/* Links */}
          <div className="flex justify-center">
            <Link
              className="font-bold underline text-md px-2"
              href="https://github.com/status-im/nimbus-eth2/releases"
            >
              Releases
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://nimbus.guide/keep-updated.html"
            >
              Docs
            </Link>
            <Link
              className="font-bold underline text-md px-2"
              href="https://our.status.im/tag/nimbus/"
            >
              Web
            </Link>
          </div>
        </div>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Actualización del cliente
        </h2>
        <p className="mt-4">
          *Consideraciones: El procedimiento de actualización va a cambiar de
          cliente en cliente. A su vez, para el mismo cliente, va a depender de
          la forma en que haya sido instalado (instalado en el sistema, usando
          Docker u otra opción), y también del Sistema Operativo.
        </p>
        <p className="mt-4">
          Si se siguió una guía para la instalación del cliente, es recomendable
          dirigirse a esa misma documentación para buscar información de cómo
          actualizarlo. *
        </p>
        <p className="mt-4">
          Sólo con fines educativos, realizaremos en esta guía, la actualización
          de un cliente <strong>Nethermind</strong> en una distribución{" "}
          <strong>Linux</strong>, directamente descargando los archivos
          binarios.
        </p>

        <p className="mt-4">
          El procedimiento es general, se descargan los nuevos archivos y se
          reemplazan los antiguos. Para cualquier otro cliente en Linux el
          procedimiento es similar.
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Procedimiento para actualizar un cliente Nethermind
        </h3>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            Con el siguiente script descargamos la ultima versión directamente
            del GitHub . La descomprimimos y eliminamos el archivo .zip.
          </li>
        </ul>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              RELEASE_URL=&quot; <br />
              https://api.github.com/ <br /> repos/NethermindEth/nethermind/{" "}
              <br /> releases/latest&quot;
              <br />
              <br />
              BINARIES_URL=&quot;$(curl -s $RELEASE_URL | jq -r &quot;.assets[]
              | select(.name) | .browser_download_url&quot; | grep
              linux-x64)&quot; <br />
              <br />
              echo Downloading URL: $BINARIES_URL <br />
              cd $HOME <br />
              wget -O nethermind.zip $BINARIES_URL <br />
              unzip -o nethermind.zip -d $HOME/nethermind <br />
              rm nethermind.zip
            </code>
          </pre>
        </div>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              ✅ Realizar una triple comprobación de que la página del GitHub es
              la correcta.
            </code>
          </pre>
        </div>

        <ul className="pt-4 list-disc ml-5 text-white">
          <li>Detenemos el cliente</li>
        </ul>

        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              sudo systemctl stop execution
            </code>
          </pre>
        </div>

        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            Eliminamos los binarios de la versión anterior, instalamos los
            nuevos y reiniciamos el cliente.
          </li>
        </ul>

        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              sudo rm -rf /usr/local/bin/nethermind <br />
              sudo mv $HOME/nethermind /usr/local/bin/nethermind
              <br />
              sudo systemctl start execution
            </code>
          </pre>
        </div>

        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Cambios en Ethereum
        </h2>

        <p className="mt-4">
          Al igual que con el caso específico de los clientes, es vital
          mantenerse informado sobre todo lo relacionado con el mundo de
          Ethereum. Estar involucrado en comunidades, seguir a los
          desarrolladores, leer noticias o visitar directamente el&nbsp;
          <Link
            className="font-bold underline text-md"
            href="https://blog.ethereum.org/es"
          >
            blog de Ethereum
          </Link>{" "}
          son buenas prácticas.
        </p>
        <p className="mt-4">
          Por ejemplo, el último gran cambio en la red, el hard fork Dencun, fue
          un evento anunciado con mucho tiempo de anticipación. Antes, durante y
          después de este hito en la historia de Ethereum, los clientes enviaron
          una mayor cantidad de actualizaciones que en otros momentos.
        </p>
        <p className="mt-4">
          Es responsabilidad del operador de nodo mantenerse informado de todos
          los acontecimientos y tener su equipo listo para el momento del
          cambio.
        </p>
        <p className="mt-4">
          En las imágenes siguientes podemos ver cómo desde el blog de Ethereum
          avisaban qué versiones había que utilizar para que los nodos se
          sincronicen con la nueva cadena y no queden sincronizados con la
          cadena de bloques previa al hard fork.
        </p>
        {/* Imagen */}
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="GovInWeb3"
            src={foto9}
          />
        </div>

        <Link
          className="font-bold underline text-md px-2"
          href="https://blog.ethereum.org/2024/02/27/dencun-mainnet-announcement#client-releases"
        >
          Releases
        </Link>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Conclusiones
        </h2>
        <p className="mt-4">
          Con todo lo expuesto, podemos concluir que la mejor forma de mantener
          los nodos actualizados es siguiendo las novedades tanto de los
          clientes específicos de interés como de la red Ethereum en general.
          Estar atento al GitHub, Discord y redes de sus clientes es una muy
          buena práctica para no perderse ninguna noticia, actualización o
          parche de seguridad urgente que deba aplicarse.
        </p>
        <p className="mt-4">
          Mantenerse informado acerca del mundo Ethereum también es fundamental,
          ya que al fin y al cabo, nuestros nodos son parte de la
          infraestructura de la red. Recomendamos participar en comunidades
          específicas, como por ejemplo{" "}
          <Link
            className="font-bold underline text-md px-2"
            href="https://twitter.com/ethStaker"
          >
            ethStaker,
          </Link>
          donde en su Discord, mantienen un canal con alarmas de actualizaciones
          de clientes muy útil, y por supuesto los invitamos a participar en{" "}
          <Link
            className="font-bold underline text-md px-2"
            href="https://twitter.com/SEEDLatam"
          >
            SEEDLatam
          </Link>{" "}
          para no perderse ninguna novedad del mundo Ethereum.
        </p>
        {/* FIN */}
      </div>
    </div>
  );
}
