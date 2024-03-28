import styles from "../articles.module.css";
import Image from "next/image";
import portada from "@/app/assets/img/seednode/articles/atestaciones_consenso/portada_dentro_art.png";
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
          Ethereum Clients: A Detailed Guide on Options and Features
        </h1>
        <p className="mt-4">
          En el universo de Ethereum, los clientes son herramientas escenciales
          para interactuar con la blockchain. Estos clientes, que son piezas de
          software diseñadas para conectarse y operar entre sí, ofrecen una
          variedad de características y funcionalidades que satisfacen las
          necesidades de diferentes usuarios y aplicaciones.
        </p>
        <p className="mt-4">
          En este artículo, exploraremos exhaustivamente los diversos clientes
          de Ethereum disponibles en el mercado actual, con el objetivo de
          proporcionar una visión detallada de sus características, opciones y
          usos prácticos en el contexto del desarrollo de aplicaciones
          descentralizadas, la validación de transacciones y la participación en
          la red Ethereum.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          ¿Qué es un Cliente?
        </h2>
        <p className="mt-4">
          Un cliente es una implementación de Ethereum que verifica los datos
          con las reglas del protocolo y mantiene la red segura. Un nodo tiene
          que ejecutar dos clientes: un cliente de consenso y un cliente de
          ejecución.
        </p>
        {/* NOTA */}
        <div className="mt-4 bg-blue-100 border border-blue-300 rounded-lg p-4 shadow-md">
          Recordemos que es un nodo: Un &quot;nodo&quot; es cualquier instancia
          del software cliente de Ethereum que está conectada a otras
          computadoras que también ejecutan el software Ethereum, formando una
          red.
        </div>
        <p className="mt-4">
          Los clientes facilitan la validación de transacciones, la ejecución de
          contratos inteligentes y la comunicación con otros nodos en la red, lo
          que es fundamental para mantener la integridad y la seguridad de la
          red Ethereum en su conjunto.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Los diferentes clientes de Ethereum
        </h2>
        <p className="mt-4">
          En la actualidad, existen varios clientes de Ethereum desarrollados
          por diferentes equipos y organizaciones. Algunos de los clientes más
          populares incluyen:
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Geth
        </h2>
        <p className="mt-4">
          Geth (go-ethereum) es una implementación de Go en Ethereum. Fue una de
          las implementaciones originales de Ethereum, lo que lo convierte en el
          cliente más probado y experimentado.
        </p>
        <Link
          className="font-bold underline text-md"
          href="https://geth.ethereum.org/docs/getting-started"
        >
          Docs
        </Link>
        <p className="mt-4">
          Geth se controla principalmente mediante la línea de comandos. Se
          inicia Geth utilizando el comando geth. Se detiene presionando ctrl+c.
        </p>
        <p className="mt-4">
          Podes configurar Geth utilizando opciones de línea de comandos
          (también conocidas como flags). Geth también tiene subcomandos, que se
          pueden utilizar para invocar funcionalidades como la consola o la
          importación/exportación de la blockchain.
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Comandos
        </h3>
        <p className="mt-4">
          Para poder ver la lista de comandos en cualquier momento desde tu
          propia instancia de Geth ejecutamos:
        </p>
        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">geth --help</code>
          </pre>
        </div>
        <p className="mt-4">
          Como la lista de comandos es MUY extensa, vamos a describir un poco la
          estructura de las opciones que nos deja ejecturar geth:
        </p>
        <p className="mt-4">Primero el uso es el siguiente:</p>
        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">
              {" "}
              geth [global options] command [command options] [arguments...]
            </code>
          </pre>
        </div>
        <p className="mt-4">
          Tenemos muchisimas opciones, estos son solo algunos reelevantes:
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold text-red-600">account:</span> Gestiona
            cuentas
          </li>
          <li>
            <span className="font-bold text-red-600">dumpconfig:</span> Exporta
            valores de configuración en formato TOML
          </li>
          <li>
            <span className="font-bold text-red-600">export:</span> Exporta la
            blockchain a un archivo
          </li>
          <li>
            <span className="font-bold text-red-600">import:</span> Importa un
            archivo de blockchain
          </li>
          <li>
            <span className="font-bold text-red-600">removedb:</span> Elimina la
            blockchain y las bases de datos de estado
          </li>
          <li>
            <span className="font-bold text-red-600">snapshot:</span> Conjunto
            de comandos basados en el snapshot
          </li>
          <li>
            <span className="font-bold text-red-600">version:</span> Muestra los
            números de versión
          </li>
          <li>
            <span className="font-bold text-red-600">wallet:</span> Gestiona las
            billeteras de precompra de Ethereum
          </li>
        </ul>
        <p className="mt-4">
          Ademas de estos, geth nos brinda{" "}
          <Link
            className="font-bold underline text-md"
            href="https://geth.ethereum.org/docs/fundamentals/command-line-options"
          >
            Opciones Globales
          </Link>{" "}
          muy utiles que se estructuran de la siguiente forma:
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold">Log Rotate:</span>
            <ul className="list-disc pl-6">
              <li>
                <span className="font-bold">-log.rotate:</span> Habilita la
                rotación de archivos de registro.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Account:</span>
            <ul className="list-disc pl-6">
              <li>
                Varias opciones relacionadas con la gestión de cuentas, como
                desbloqueo seguro, directorio de keystore, configuraciones de
                seguridad, etc.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Aliased (Deprecated):</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones obsoletas que aún se pueden usar, pero se
                recomienda utilizar alternativas más actualizadas.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">API and Console:</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones relacionadas con la activación y personalización
                de la API HTTP-RPC y la consola interactiva.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Developer Chain:</span>
            <ul className="list-disc pl-6">
              <li>
                Opciones para configurar una red de prueba de autoridad de
                prueba con cuenta de desarrollador prefinanciada y minería
                habilitada.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Ethereum:</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones generales de red, como la cadena de bloques a
                utilizar, directorio de datos, configuraciones de red, etc.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Gas Price Oracle:</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones relacionadas con el oráculo de precios de gas y
                las recomendaciones de tarifas de transacción.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Light Client:</span>
            <ul className="list-disc pl-6">
              <li>
                Opciones para configurar y gestionar clientes ligeros en la red
                Ethereum.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Logging and Debugging:</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones para el registro y depuración del nodo, como
                nivel de verbosidad, formato de registro, etc.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Metrics and Stats:</span>
            <ul className="list-disc pl-6">
              <li>
                Opciones para habilitar la recolección de métricas y
                estadísticas del nodo.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Miner:</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones relacionadas con la minería, como dirección de
                recompensa, límites de gas, etc.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Misc:</span>
            <ul className="list-disc pl-6">
              <li>
                Otras configuraciones diversas, como la visualización de ayuda,
                impresión de versión, etc.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Networking:</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones de red, como nodos de arranque, descubrimiento
                de pares, límites de conexión, etc.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Performance Tuning:</span>
            <ul className="list-disc pl-6">
              <li>
                Ajustes para optimizar el rendimiento del nodo, como el uso de
                memoria caché, límites de recursos, etc.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">State History Management:</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones relacionadas con la gestión del historial de
                estado de la blockchain.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Transaction Pool (Blob):</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones específicas para el pool de transacciones blob.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Transaction Pool (EVM):</span>
            <ul className="list-disc pl-6">
              <li>
                Configuraciones específicas para el pool de transacciones EVM.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Virtual Machine:</span>
            <ul className="list-disc pl-6">
              <li>
                Opciones de depuración y seguimiento para la máquina virtual y
                contratos inteligentes.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Tools
        </h2>
        <p className="mt-4">
          Tambien dentro del mundo de Geth nos encontramos con varias
          herramientas que pueden ser de nuestro interes:
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          <Link
            className="font-bold underline text-md"
            href="https://geth.ethereum.org/docs/tools/clef/introduction"
          >
            Clef
          </Link>
        </h3>
        <p className="mt-4">
          Clef es una herramienta para firmar transacciones y datos de manera
          segura en un entorno local. Permite gestionar claves de forma
          independiente a Geth, lo que brinda flexibilidad y seguridad al
          proceso de firma. Puede utilizarse de manera autónoma o integrarse con
          Geth, siendo útil para situaciones donde se accede a Ethereum a través
          de nodos remotos no confiables.
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          <Link
            className="font-bold underline text-md"
            href="https://geth.ethereum.org/docs/tools/abigen"
          >
            Abigen
          </Link>
        </h3>
        <p className="mt-4">
          Abigen es una herramienta que facilita la interacción con Ethereum
          utilizando Go. Genera paquetes Go type-safe a partir de definiciones
          de smart contracts conocidas como ABIs.
        </p>
        <p className="mt-4">
          Un ABI es un archivo JSON que especifica cómo codificar y decodificar
          datos enviados y recibidos por un smart contract. Abigen simplifica la
          implementación e interacción con smart contracts en aplicaciones Go al
          abstraer la complejidad de la codificación y decodificación de datos.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          <Link
            className="font-bold underline text-md"
            href="https://github.com/NethermindEth/sedge"
          >
            Nethermind
          </Link>
        </h2>
        <p className="mt-4">
          Este es un cliente de Ethereum desarrollado en C#/.NET, que destaca
          por su eficiencia y su enfoque en el desarrollo empresarial y la
          interoperabilidad.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          <Link
            className="font-bold underline text-md"
            href="https://docs.sedge.nethermind.io/docs/quickstart/install-guide"
          >
            Sedge
          </Link>
        </h2>
        <p className="mt-4">
          Sedge es una herramienta de configuración de nodos con “un solo clic”
          para validadores y nodos de redes/cadenas de Proof of Stake, escrita
          completamente en el lenguaje de programación Go. Sedge se encarga de
          toda la configuración del nodo completo localmente, basándose en el
          cliente elegido y utilizando scripts docker-compose generados según la
          configuración deseada, está actualmente disponible solo para Linux,
          macOS y Windows, para arquitecturas amd64 y arm64.
        </p>
        <p className="mt-4">
          Una vez que uses{" "}
          <span className="bg-gray-200 px-1 rounded text-black">sedge cli</span>{" "}
          o{" "}
          <span className="bg-gray-200 px-1 rounded text-black">
            sedge generate
          </span>{" "}
          para generar el archivo{" "}
          <span className="bg-gray-200 px-1 rounded text-black">
            docker-compose.yml
          </span>
          , podrás manejarlo por tu cuenta. Esta guía te mostrará cómo hacerlo.
        </p>
        <p className="mt-4">
          Existen varias razones por las que necesitarías gestionar la
          configuración después de usar Sedge para generar los archivos de
          configuración. Puede que desees modificar el archivo{" "}
          <span className="bg-gray-200 px-1 rounded text-black">.env</span> o{" "}
          <span className="bg-gray-200 px-1 rounded text-black">
            docker-compose.yml
          </span>{" "}
          para cambiar la configuración de la instalación, o simplemente copiar
          estos archivos a otra máquina. Actualmente, Sedge ejecuta el stack de
          docker compose que fue generado usando{" "}
          <span className="bg-gray-200 px-1 rounded text-black">sedge run</span>
          . Puedes usar{" "}
          <span className="bg-gray-200 px-1 rounded text-black">
            sedge logs
          </span>{" "}
          y{" "}
          <span className="bg-gray-200 px-1 rounded text-black">
            sedge down
          </span>{" "}
          en cualquier{" "}
          <span className="bg-gray-200 px-1 rounded text-black">
            docker-compose.yml
          </span>
          .
        </p>
        <p className="mt-4">
          Podes señalar hacia una ruta (path) generación diferente utilizando la
          opción{" "}
          <span className="bg-gray-200 px-1 rounded text-black">--path</span> .
          Esto es útil si deseas generar los archivos en un directorio distinto,
          o si quieres generar múltiples configuraciones.
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold text-red-600">Sedge logs:</span> Ejecutar
            sedge logs obtendrá los registros de contenedores en ejecución
            utilizando la CLI de docker compose.
          </li>
        </ul>
        <p className="mt-4">
          Ejecutar sedge logs obtendrá los registros de contenedores en
          ejecución utilizando la CLI de docker compose.
        </p>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              {` $ sedge logs -h
Initializing configuration
Get running container logs using docker-compose CLI. If no services are provided, the logs of all running services will be displayed.

    By default will run 'docker compose -f <script> logs --follow <service>'

Usage:
  sedge logs [flags] [services]

Flags:
  -h, --help          help for logs
  -p, --path string   docker-compose script path (default "./docker-compose-scripts")
  -t, --tail int      Tail the number of desired logs. If not set, or set to 0, logs are followed.

Global Flags:
      --logLevel string   Set Log Level (default "info")
      `}
            </code>
          </pre>
        </div>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold text-red-600">Sedge down:</span>
          </li>
        </ul>
        <p className="mt-4">
          Ejecutar sedge down detendrá y eliminará los contenedores utilizando
          la CLI de Docker Compose.
        </p>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              {` $ sedge down -h
Shutdown sedge running containers using docker compose CLI. Shortcut for 'docker compose -f <script> down'

Usage:
  sedge down [flags]

Flags:
  -h, --help          help for down
  -p, --path string   docker-compose script path (default "./docker-compose-scripts")

Global Flags:
      --logLevel string   Set Log Level (default "info")`}
            </code>
          </pre>
        </div>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Ejemplo:
        </h3>
        <p className="mt-4">
          La ejecución de sedge down cerrará y eliminará todos los contenedores
          y redes abiertas utilizadas por Sedge.
        </p>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              {` $ sedge down
2022-00-00 00:00:00 -- [INFO] [Logger Init] Log level: info
2022-00-00 00:00:00 -- [INFO] You are running the latest version of sedge. Version:  v1.3.2
[sudo] password for maceo:
[+] Running 7/7
 ⠿ Container execution-client                            Removed                                                                 93.8s
 ⠿ Container validator-client                            Removed                                                                  0.0s
 ⠿ Container consensus-client                            Removed                                                                  3.8s
 ⠿ Container validator-import-client                     Removed                                                                  0.0s
 ⠿ Network docker-compose-scripts_default                Removed                                                                  0.2s
 ⠿ Network sedge_network                                 Removed                                                                  0.1s`}
            </code>
          </pre>
        </div>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Prender el setup
        </h2>
        <p className="mt-4">
          Una vez generado el archivo{" "}
          <span className="text-black bg-gray-200 px-1 rounded">
            docker-compose
          </span>
          , puedes modificar tanto las variables de entorno en el archivo{" "}
          <span className="text-black bg-gray-200 px-1 rounded">.env</span> como
          el{" "}
          <span className="text-black bg-gray-200 px-1 rounded">
            docker-compose.yml
          </span>{" "}
          bajo el directorio sedge-data.
        </p>
        <p className="mt-4">
          Después de eso, puedes ejecutar el siguiente comando para iniciar la
          configuración desde el directorio{" "}
          <span className="text-black bg-gray-200 px-1 rounded">
            sedge-data
          </span>
          :
        </p>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              docker compose up -d
            </code>
          </pre>
        </div>

        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Apagar el setup
        </h3>
        <p className="mt-4">
          Para detener la configuración, puedes ejecutar el siguiente comando
          desde el directorio{" "}
          <span className="text-black bg-gray-200 px-1 rounded">
            sedge-data
          </span>
          :
        </p>
        <p className="mt-4">
          O bien, puedes ejecutar el siguiente comando desde cualquier
          directorio, asumiendo que tienes la ruta al directorio{" "}
          <span className="text-black bg-gray-200 px-1 rounded">
            sedge-data
          </span>{" "}
          (llamémoslo &lt;path&gt;):
        </p>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              {` docker compose -f <path> down `}
            </code>
          </pre>
        </div>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Verificar los registros del contenedor
        </h3>
        <p className="mt-4">
          El compose stack está compuesto por varios contenedores de Docker en
          ejecución.
        </p>
        <p className="mt-4">
          La configuración para un nodo completo de Ethereum que Sedge aplica
          consiste en un contenedor para cada nodo (nodo de ejecución, nodo de
          consenso y nodo validador). Puedes ejecutar el siguiente comando para
          verificar los registros de un contenedor/nodo específico desde el
          directorio sedge-data:
        </p>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              {` docker compose logs <node> `}
            </code>
          </pre>
        </div>
        <p className="mt-4">
          {` Reemplace <node> con el tipo de nodo, por ejemplo: ejecución, consenso, validador`}
        </p>
        <p className="mt-4">
          {` O bien, puedes ejecutar el siguiente comando desde cualquier directorio, asumiendo que tienes la ruta al directorio sedge-data (llamémoslo <path>):`}
        </p>
        {/* Codigo */}

        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white max-w-md sm:max-w-none mx-auto">
          <pre className="whitespace-pre-wrap">
            <code className="language-shell text-sm md:text-base lg:text-lg xl:text-xl">
              {`docker compose -f <path> logs <node>`}
            </code>
          </pre>
        </div>
        <p className="mt-4">
          Para salir del comando docker compose logs presiona ctrl+c o control+c
        </p>
        <p className="mt-4">
          (Otros comandos:{" "}
          <Link
            className="font-bold underline text-md"
            href="https://docs.sedge.nethermind.io/docs/commands"
          >
            Acá
          </Link>{" "}
          )
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Erigon
        </h2>
        <p className="mt-4">
          Erigon es una implementación eficiente y optimizada de Ethereum,
          diseñada para ser más rápida y modular.
        </p>
        <p className="mt-4">
          Utiliza tecnologías avanzadas como la sincronización escalonada y el
          almacenamiento de estado eficiente. Es un archieve node por defecto y
          ha sido reescrito completamente para enfocarse en velocidad y ahorro
          de almacenamiento.
        </p>
        <p className="mt-4">
          Puede completar la sincronización de un archive node en menos de tres
          días y con menos de 2 TB de almacenamiento.
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Opciones
        </h3>
        <Link
          className="font-bold underline text-md"
          href="https://erigon.gitbook.io/erigon/advanced-usage/options"
        >
          Docs
        </Link>
        <p className="mt-4">
          En cuanto a lo que podemos hacer con Erigon es similar a los demás
          clientes, la forma de acceder a los mandos es utilizando la flag{" "}
          <span className="bg-gray-200 px-1 rounded text-black">
            ./build/bin/erigon --help
          </span>{" "}
          donde el uso de estos comandos es el siguiente:
        </p>
        {/* Codigo */}
        <div className="bg-gray-600 mt-4 rounded-lg p-2 overflow-x-auto text-white">
          <pre className="whitespace-pre-wrap">
            <code className="language-html">erigon [command] [flags]</code>
          </pre>
        </div>
        <p className="mt-4">Con 5 comandos principales:</p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold text-red-600">init :</span> Inicializa y
            arranca un nuevo bloque génesis
          </li>
          <li>
            <span className="font-bold text-red-600">import :</span> Importa un
            archivo de cadena de bloques
          </li>
          <li>
            <span className="font-bold text-red-600">snapshots :</span> Gestiona
            instantáneas (particiones de datos históricos)
          </li>
          <li>
            <span className="font-bold text-red-600">support :</span> Conecta
            una instancia de Erigon a un sistema de diagnóstico para soporte
          </li>
          <li>
            <span className="font-bold text-red-600">help, h:</span> Muestra una
            lista de comandos o ayuda para un comando
          </li>
        </ul>
        <p className="mt-4">
          Como las flags son un monton, aca dejamos algunas reelevantes:
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <ul>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --datadir value
              </span>
              : Especifica el directorio de datos para las bases de datos.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --ethash.dagdir value
              </span>
              : Establece el directorio para almacenar los DAGs de minería
              ethash.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --internalcl
              </span>
              : Activa el consenso interno.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --txpool.disable
              </span>
              : Deshabilita la funcionalidad interna de txpool y el productor de
              bloques.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --prune value
              </span>
              : Configura qué datos antiguos eliminar de la base de datos.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --http
              </span>
              : Habilita el servidor JSON-RPC HTTP.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --http.port value
              </span>
              : Especifica el puerto en el que el servidor HTTP-RPC escucha las
              solicitudes.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --ws
              </span>
              : Habilita el servidor WS-RPC.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --graphql
              </span>
              : Habilita el endpoint de GraphQL.
            </li>
            <li>
              <span className="bg-gray-800 px-1 rounded text-red-600">
                --db.pagesize value
              </span>
              : Establece el tamaño de página para la base de datos.
            </li>
          </ul>
        </ul>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Otterscan
        </h3>
        <p className="mt-4">
          Otterscan es un explorador de bloques de Ethereum diseñado para ser
          ejecutado localmente junto con Erigon.
        </p>
        <p className="mt-4">
          Basado completamente en código fuente abierto (open source code), es
          extremadamente rápido y totalmente privado, ya que funciona en tu
          máquina local. La interfaz de usuario es intencionalmente muy similar,
          pero con muchas mejoras, al explorador de bloques de Ethereum más
          popular para facilitar la ubicación de la información.
        </p>
        <p className="mt-4">
          Para instalar Otterscan, sigue las instrucciones en el repositorio
          oficial de Github:
          <Link
            className="font-bold underline text-md"
            href="https://github.com/wmitsuda/otterscan/blob/develop/docs/install.md"
          >
            &nbsp;Docs
          </Link>
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Conclusión
        </h2>
        <p className="mt-4">
          La elección del cliente de Ethereum dependerá en gran medida de las
          necesidades y objetivos específicos de cada usuario o proyecto. Es
          recomendable evaluar las características y capacidades de cada cliente
          para seleccionar la opción más adecuada según los requisitos de
          rendimiento, seguridad, facilidad de uso y funcionalidades específicas
          requeridas. Pero lo mas importante de todo es PROBAR estos clientes y
          ver que es lo ideal para nosotros.
        </p>

        {/* FIN */}
      </div>
    </div>
  );
}
