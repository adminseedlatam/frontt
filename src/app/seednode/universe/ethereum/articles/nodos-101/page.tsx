import styles from "../articles.module.css";
import Image from "next/image";
import portada from "@/app/assets/img/seednode/nodos-101.png";
import foto1 from "@/app/assets/img/seednode/articles/div-clientes.png";
import foto2 from "@/app/assets/img/seednode/node-architecture-text-background.png";
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
        {/* aca tiene que ir la iamgen */}
        <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
          Artículo 0: Nodos 101
        </h1>
        <div className="mt-4">
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Introducción
          </h2>
          <p className="mt-4">
            Si estás en el ecosistema crypto seguramente conoces esta frase,
            pero ¿sabes realmente qué significa?
          </p>
          {/* TO DO: Armar quote */}
          <p className="mt-4">
            &apos;Don&apos;t trust, verify&apos; - “No confíes, verificá”
          </p>
          <p className="mt-4">
            Una de las bases del ecosistema crypto es que no deberíamos confiar
            en terceras entidades o mismo en otras personas si no que deberíamos
            verificar por nuestra cuenta. Ya sea cuando querés invertir en algún
            proyecto y tenes que hacer tu propia investigación, como cuando
            querés subir un par de niveles y directamente tener tu nodo.
          </p>
          <p className="mt-4">
            Ahora bien, ¿por qué querrías tener tu propio nodo de Ethereum? A lo
            largo de este artículo, profundizaremos en esta cuestión, pero en
            principio, debes saber que poseer tu propio nodo aporta más
            seguridad y contribuye a la descentralización de la red. Creemos que
            gran parte de la comunidad no tiene el suyo porque piensa que es muy
            difícil configurarlo y/o mantenerlo por lo que en este artículo
            compartiremos las bases para entender qué es un nodo, su importancia
            y por qué correr tu propio nodo puede ser una gran decisión.
          </p>
          <p className="mt-4">
            Al final del camino vas a tener los conocimientos base para
            aprovechar la Guía completa de configuración, y así puedas animarte
            a contribuir directamente a la descentralización de Ethereum.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Nodos & Clientes
          </h2>
          <p className="mt-4">
            Un nodo es un pilar fundamental de la infraestructura de Ethereum.
            Es una computadora que ejecuta un software específico, conocido como
            cliente y que se conecta a otros nodos formando una red.
          </p>

          <p className="mt-4">
            La responsabilidad principal de un cliente es la verificación de
            bloques y transacciones en la blockchain, contribuyendo así a la
            seguridad integral de la red. Al descargar una copia de la
            blockchain, el cliente verifica cada bloque y lo mantiene
            sincronizado con los nuevos bloques que se añaden con el tiempo.
            Este proceso puede ser realizado por cualquier computadora conectada
            a Internet y que cumpla con ciertos requisitos.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            ¿Por qué debería correr mi propio nodo?
          </h2>

          <p className="mt-4">
            Como mencionamos en un principio, hacerlo no solo incrementa tu
            seguridad personal, sino que también contribuye al fortalecimiento
            de la descentralización de la red. No obstante, hay más razones para
            considerarlo. Si pensamos en los beneficios que podrías tener
            personalmente, notarás que tendrás mayor privacidad ya que dejarías
            de compartir tu información personal con terceras entidades, basta
            de compartir tu IP y la dirección de tu wallet.
          </p>
          <p className="mt-4">
            Además, gozarás de resistencia a la censura, ya que tener tu propio
            nodo te otorga el poder de emitir transacciones a la red cuando lo
            desees, sin depender de decisiones ajenas.
          </p>
          <p className="mt-4">
            Sumado a esto, elevarás tu soberanía al adquirir una copia de la
            blockchain. Pero más allá de todo, se trata de tu participación.
            Correr un nodo te inserta en un movimiento global que persigue la
            descentralización del poder, dándote lugar como un participante
            activo y no solo como un observador.
          </p>
          <p className="mt-4">
            Estos son solo los beneficios personales, pero la red también se
            beneficia de que corras tu nodo. Principalmente, la red se hace más
            descentralizada, lo que termina haciéndola más resiliente, y aún más
            cuando los nodos están distribuidos en diferentes localidades y
            operados por personas con backgrounds distintos. Imagínate un mundo
            con más nodos en la tierra de los campeones del mundo, la tierra de
            builders.
          </p>
          <p className="mt-4">
            Si optas por gestionar un nodo completo, estarás haciendo cumplir
            las reglas de consenso. Estos nodos no pueden ser engañados para
            aceptar bloques que violen dichas reglas. Tal verificación adicional
            añade un nivel de seguridad adicional a la red. Si todos los nodos
            fueran ligeros y no ejecutarán una verificación completa, los
            validadores podrían realizar ataques a la misma.
          </p>
          <p className="mt-4">
            En caso de un ataque que supere las defensas de la prueba de
            participación, los nodos completos pueden realizar una recuperación
            social al elegir seguir la cadena honesta. Si vos corres tu nodo,
            podes tomar vos tu decisión y no tener que seguir a alguien que tal
            vez no te convenza del todo.
          </p>
          <p className="mt-4">
            Si ejecutas un nodo completo, toda la red de Ethereum se beneficia
            de ello. Veamos más sobre los distintos tipos de nodos a
            continuación para que entiendas porque.
          </p>
          <h2 className="pt-6 pb-4 underline text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Tipos de nodos:
          </h2>
          <p className="mt-4">
            Ya sabemos que es un nodo y por qué es tan importante que haya
            diversidad de los mismos. Ahora, ¿todos los nodos son iguales?
            ¿Todos cumplen la misma función?
          </p>
          <p className="mt-4">
            La verdad es que no, existen distintas formas de sincronizar y tomar
            datos por lo que existen distintos tipos de nodos.
          </p>
          <p className="mt-4">
            Veamos las características de cada uno para que decidas cuál se
            acerca más a tus necesidades:
          </p>
          {/* Nodo completo */}
          <h2 className="pt-4  text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Nodo completo
          </h2>
          <p className="mt-4">
            Un nodo completo podría tomarse como el almacén de conocimiento de
            Ethereum. En estos, reside una copia completa de la blockchain,
            aunque se recortan datos antiguos periódicamente para mantener el
            equilibrio. Este tipo de nodo se destaca en la{" "}
            <strong>validación de bloques</strong>, verificando cada detalle de
            los bloques y el estado.
          </p>
          <p className="mt-4">
            Cada estado, incluso los más antiguos, puede ser extraído de un nodo
            completo, aunque algunos datos más antiguos se reconstruyen mediante
            solicitudes a nodos de archivo. Además de validar, también funciona
            como un servidor para la red, proporcionando datos a pedido.
          </p>
          {/* Nodo ligero */}
          <h2 className="pt-4  text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Nodo ligero
          </h2>
          <p className="mt-4">
            Los nodos ligeros son como los exploradores veloces de Ethereum. En
            lugar de cargar con la totalidad de cada bloque, estos nodos sólo
            adquieren los headers del bloque, que contienen resúmenes precisos
            de la información. Cuando se necesitan más datos, los nodos ligeros
            simplemente la solicitan a un nodo completo. Esta información
            adicional es entonces contrastada por los nodos ligeros (verificando
            los state root), garantizando la seguridad. Con esta táctica, los
            nodos ligeros permiten la participación en la red sin requerir un
            hardware de alto rendimiento, por eso con el tiempo, podrían
            funcionar en celulares o dispositivos integrados.
          </p>
          <p className="mt-4">
            Los nodos ligeros no participan en el consenso (es decir, no pueden
            ser validadores), pero pueden acceder a la blockchain con la misma
            funcionalidad y garantía de seguridad que un nodo completo.
          </p>
          <p className="mt-4">
            Aún no se admite una gran cantidad de nodos ligeros en Ethereum,
            pero es un área que se espera que se desarrolle rápidamente en el
            futuro cercano.
          </p>
          {/* Nodo completo */}
          <h2 className="pt-4  text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Nodo de archivo
          </h2>
          <p className="mt-4">
            Pensá en los nodos de archivo como bibliotecas históricas en
            Ethereum. Todo lo que un nodo completo guarda se preserva, formando
            un archivo detallado de estados pasados. Si alguna vez deseas
            conocer el saldo de una cuenta en un bloque específico o probar tus
            transacciones sin minar, un nodo de archivo es el indicado. Pero
            tené en cuenta que contemplan terabytes de datos, haciéndolos menos
            accesibles para el usuario común, pero perfectos para exploradores
            de bloques, proveedores de billeteras y análisis de blockchains. Si
            decidis sincronizar clientes en cualquier modo que no sea el de
            archivo, se perderá parte de la cadena de bloques. Aun así, los
            nodos completos pueden reconstruir esta historia bajo demanda.
          </p>
          <h2 className="pt-6 pb-4 underline text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Tipos de clientes:
          </h2>
          <p className="mt-4">
            Como hay distintos tipos de nodos, hay distintos tipos de clientes
            según la funcionalidad que tendrá el software instalado en el nodo.
            A continuación veremos las características de los nodos de
            ejecución, consenso y validadores.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Cliente de ejecución
          </h2>
          <p className="mt-4">
            Imagina al cliente de ejecución como el orquestador detrás de la
            ejecución de transacciones en Ethereum. Este cliente no solo maneja
            la creación y difusión de transacciones, sino que también administra
            el estado y respalda la Máquina Virtual Ethereum (EVM). Sin embargo,
            su enfoque no radica en la construcción de bloques ni en la lógica
            de consenso, que es responsabilidad del cliente de consenso.
          </p>

          <p className="mt-4">
            Este software crea las &quot;cargas de ejecución&quot;, que son
            básicamente listas de transacciones, un trie de estado actualizado y
            otros datos relacionados con la ejecución. Estas cargas se
            incorporan en cada bloque por los clientes de consenso. Además, el
            cliente de ejecución ejecuta nuevamente las transacciones en bloques
            nuevos para verificar su validez, un trabajo realizado en su núcleo
            llamado la Máquina Virtual Ethereum (EVM).
          </p>

          <p className="mt-4">
            Este cliente no solo trabaja detrás de escena; también ofrece a los
            usuarios una ventana a Ethereum a través de métodos RPC (Remote
            Procedure Call). Esto permite a los usuarios consultar la cadena de
            bloques, enviar transacciones e implementar contratos inteligentes.
            Estas interacciones pueden ser manejadas por bibliotecas como Web3js
            o Web3py, o interfaces de usuario como billeteras de navegador.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Cliente de consenso
          </h2>
          <p className="mt-4">
            Ahora, conoce al cerebro detrás de la sincronización en Ethereum: el
            cliente de consenso. Este se ocupa de mantener al nodo se mantenga
            sincronizado con la red. Su tarea abarca recibir bloques de pares y
            ejecutar algoritmos de bifurcación para garantizar que el nodo
            siempre siga la cadena más validada (ponderada por los saldos
            efectivos de los validadores).
          </p>

          <p className="mt-4">
            Asimismo, el cliente de consenso no es un validador. El primero no
            valida ni propone bloques; esa tarea recae en el validador, un
            accesorio opcional. Sin un validador, un cliente de consenso se
            mantiene actualizado con la cabeza de la cadena, garantizando la
            sincronización. Esto permite a los usuarios realizar transacciones
            en Ethereum con confianza, sabiendo que están en la cadena correcta.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Validadores
          </h2>
          <p className="mt-4">
            Imagina a los validadores como los guardianes del orden en la red
            Ethereum. Aquellos que operan nodos pueden agregar validadores a sus
            clientes de consenso mediante un depósito de 32 ETH en el contrato
            de depósito. Estos validadores, pueden ser agregados en cualquier
            momento y se encargan de validar y proponer bloques. También tienen
            la responsabilidad de acumular recompensas o incluso enfrentar
            penalizaciones, conocidas como &quot;slashing&quot;. Al ejecutar el
            software del validador, se hace elegible al nodo para proponer un
            nuevo bloque.
          </p>

          <p className="mt-4">
            En resumen, el cliente de ejecución escucha las nuevas transacciones
            (gossip transactions) transmitidas en la red, las ejecuta en la
            Máquina Virtual de Ethereum (EVM) y mantiene el estado más reciente
            y la base de datos de todos los datos actuales de Ethereum. El
            cliente de consenso implementa el algoritmo de consenso de PoS, que
            permite que la red alcance un acuerdo basado en datos validados
            provenientes del cliente de ejecución.
          </p>

          <p className="mt-4">
            The Merge habilitó que Ethereum hiciera la transición a Proof of
            Stake al conectar estas redes. Los clientes de ejecución y consenso
            trabajan juntos para verificar el estado de Ethereum.
          </p>
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Diversidad de clientes
          </h2>
          <p className="mt-4">
            Tanto los clientes de ejecución como los clientes de consenso tienen
            una variedad de lenguajes de programación desarrollados por
            diferentes equipos.
          </p>

          <p className="mt-4">
            Múltiples implementaciones de clientes pueden fortalecer la red al
            reducir su dependencia en una sola base de código. El objetivo ideal
            es lograr diversidad sin que ningún cliente domine la red,
            eliminando así un posible punto único de fallo. La variedad de
            lenguajes también invita a una comunidad más amplia de
            desarrolladores y les permite crear integraciones en su lenguaje
            preferido.
          </p>

          <p className="mt-4">
            Por esto es crítico que a la hora de elegir el proveedor de cliente,
            no elijamos al de mayor participación en la red, teniendo en cuenta
            que el objetivo es que cada cliente se mantenga en menos del 33%,
            más de esto ya es peligroso para la red y los mismos operadores de
            nodos. En otro artículo nos encargaremos de detallar más al respecto
            sobre la diversidad para que puedas elegir teniendo toda la
            información necesaria.
          </p>

          <p className="mt-4">
            A continuación encontrarás los principales clientes tanto de
            ejecución como de consenso:
          </p>
          <p className="mt-6 text-gray-400">EXECUTION CLIENTS</p>
          <ol className="pt-4 list-disc ml-5 text-white">
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://github.com/hyperledger/besu/releases"
              >
                Besu
              </Link>
            </li>
            <li className="mt-1">
              <Link
                className="font-bold underline text-md"
                href="https://github.com/ledgerwatch/erigon#usage"
              >
                Erigon
              </Link>
            </li>
            <li className="mt-1">
              <Link
                className="font-bold underline text-md"
                href="https://geth.ethereum.org/downloads"
              >
                Geth
              </Link>
            </li>
            <li className="mt-1">
              <Link
                className="font-bold underline text-md"
                href="https://downloads.nethermind.io/"
              >
                Nethermind
              </Link>
            </li>
          </ol>

          <p className="mt-6 text-gray-400">CONSENSUS CLIENTS</p>
          <ol className="pt-4 list-disc ml-5 text-white">
            <li>
              <Link
                className="font-bold underline text-md"
                href="https://github.com/sigp/lighthouse"
              >
                Lighthouse
              </Link>
            </li>
            <li className="mt-1">
              <Link
                className="font-bold underline text-md"
                href="https://chainsafe.github.io/lodestar/getting-started/installation/"
              >
                Lodestar
              </Link>
            </li>
            <li className="mt-1">
              <Link
                className="font-bold underline text-md"
                href="https://github.com/status-im/nimbus-eth2"
              >
                Nimbus
              </Link>
            </li>
            <li className="mt-1">
              <Link
                className="font-bold underline text-md"
                href="https://github.com/prysmaticlabs/prysm"
              >
                Prysm
              </Link>
            </li>
            <li className="mt-1">
              <Link
                className="font-bold underline text-md"
                href="https://github.com/Consensys/teku"
              >
                Teku
              </Link>
            </li>
          </ol>
          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={foto1}
            />
            <p className="mt-2 text-gray-500">
              Imagen tomada de clientdiversity.org
            </p>
          </div>
          <div className="mt-6">
            <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
              Arquitectura de los nodos
            </h2>
            <p className="mt-4">
              Como vimos recientemente, un nodo de Ethereum está compuesto por
              dos clientes: un cliente de ejecución y un cliente de consenso.
            </p>
            <p className="mt-4">
              Cuando Ethereum utilizaba Proof of Work, un cliente de ejecución
              era suficiente para ejecutar un nodo completo. Sin embargo, desde
              la implementación de Proof of Stake, el cliente de ejecución debe
              usarse junto con otro software llamado &quot;cliente de
              consenso&quot;.
            </p>
            <p className="mt-4">
              El diagrama a continuación muestra la relación entre los dos
              clientes de Ethereum. Los dos clientes se conectan a sus propias
              redes de pares (P2P) respectivas. Se requieren redes P2P separadas
              ya que los clientes de ejecución difunden las transacciones sobre
              su red P2P, lo que les permite gestionar su conjunto local de
              transacciones, mientras que los clientes de consenso difunden los
              bloques sobre su red P2P, permitiendo el consenso y el crecimiento
              de la cadena.
            </p>
            {/* Seguir aca */}
            <div className="mx-auto">
              <Image
                className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
                width={1200}
                height={500}
                alt="GovInWeb3"
                src={foto2}
              />
              <p className="mt-2 text-gray-500">
                Imagen tomada de ethereum.org - Utiliza el logo de GETH para
                representar los clientes de ejecución.
              </p>
            </div>

            <p className="mt-4">
              Para que esta estructura de dos clientes funcione correctamente,
              es crucial que los clientes de consenso sean capaces de transmitir
              paquetes de transacciones al cliente de ejecución. La ejecución de
              estas transacciones de manera local es esencial, ya que permite al
              cliente validar que dichas transacciones cumplen con todas las
              reglas establecidas por Ethereum y que las actualizaciones
              propuestas para el estado de Ethereum son precisas y legítimas.
            </p>
            <p className="mt-4">
              Además, cuando un nodo es seleccionado para desempeñar el rol de
              productor de bloques, el cliente de consenso debe tener la
              capacidad de solicitar paquetes de transacciones provenientes del
              cliente de ejecución, con el propósito de incluirlos en el próximo
              bloque a ser generado. Posteriormente, el cliente de consenso debe
              llevar a cabo la ejecución de estas transacciones, lo que conlleva
              la actualización del estado global de Ethereum de manera precisa y
              coherente. Este proceso resulta esencial para el funcionamiento
              fluido de la red en su conjunto.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
              Rastreo de nodos en la red
            </h2>
            <p className="mt-4">
              Si querés conocer la actividad de los nodos, cuántos hay y en que
              zonas podes utilizar múltiples rastreadores que ofrecen una visión
              en tiempo real de los nodos en la red de Ethereum. Tené en cuenta
              que debido a la naturaleza de las redes descentralizadas, estos
              rastreadores sólo pueden proporcionar una vista limitada de la red
              y podrían informar resultados diferentes.
            </p>

            <ol className="pt-4 list-disc ml-5 text-white">
              <li>
                <Link
                  className="font-bold underline text-md"
                  href="https://etherscan.io/nodetracker"
                >
                  Map of nodes
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  className="font-bold underline text-md"
                  href="https://ethernodes.org/"
                >
                  Ethernodes
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  className="font-bold underline text-md"
                  href="https://github.com/ethereum/node-crawler"
                >
                  Ethereum Node Crawler
                </Link>
              </li>
              <li className="mt-1">
                <Link
                  className="font-bold underline text-md"
                  href="https://nodewatch.io/"
                >
                  Nodewatch
                </Link>
              </li>
            </ol>
          </div>
          <div className="mt-6">
            <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
              Conclusión
            </h2>
            <p className="mt-4">
              Con este artículo, nuestro objetivo es proporcionar la información
              necesaria para que encuentres la inspiración y la confianza
              necesarias para participar de manera activa en la red de Ethereum.
              Como mencionamos anteriormente, esta participación no solo nos
              beneficia a nosotros como individuos, sino que también contribuye
              al bienestar general de la red en sí.
            </p>
            <p className="mt-4">
              Cuanto más amplia sea la comprensión de que correr un nodo no es
              un proceso abrumador, y que en realidad, con conocimientos
              técnicos básicos y un entendimiento de Ethereum, podemos
              establecer un nodo sin dificultades significativas, más diversidad
              se generará en la red. Esta diversidad, a su vez, proveerá una red
              más robusta y descentralizada.
            </p>
            <p className="mt-4">
              Si estás en Web3, es probable que la soberanía y la resistencia a
              la censura sean conceptos importantes para vos. Quienes estamos
              contribuyendo al desarrollo del ecosistema y que formamos parte de
              la comunidad de Ethereum estamos en búsqueda constante de formas
              para fortalecer la red y salvaguardar nuestra privacidad. Tener un
              nodo se alinea perfectamente con esta misión.
            </p>
            <p className="mt-4">
              Gracias al apoyo de la Ethereum Foundation, el equipo de SeedLatam
              y Layer2es tendrá un nodo completo ubicado en las sierras de
              Córdoba. Queremos que vos también formes parte de esta iniciativa
              y que encuentres la motivación para establecer tu propio nodo.
              Existen nodos para todos los gustos y necesidades. Si pensás en
              tener uno en tu propia casa, podés optar por un nodo completo (ya
              sea solo o validador) o incluso uno ligero. Lo importante es que
              nos animemos a dar este paso.
            </p>
            <p className="mt-4">
              Unite al camino de la Descentralización y contribuí al futuro de
              Ethereum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
