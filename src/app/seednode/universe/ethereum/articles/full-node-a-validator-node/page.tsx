import styles from "../articles.module.css";
import portada from "@/app/assets/img/seednode/articles/portadaFullnodeValidatorNode.png";
import Image from "next/image";
import Link from "next/link";
import grafo from "@/app/assets/img/seednode/articles/articuloNic1.png";
import grafo2 from "@/app/assets/img/seednode/articles/articulo2Nic.png";

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
          PoS - De Full Node a Validator Node
        </h1>
        <div className="mt-4">
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Introducción
          </h2>
          <p>
            Proof of Stake en ethereum es el proceso por el cual se consensúa el
            estado de la blockchain y se generan nuevos bloques.
          </p>
          <p className="mt-4">
            En un principio, Ethereum utilizó el consenso Proof of Work como
            bitcoin pero desde sus inicios ha habido una clara intención de
            cambiar el consenso a PoS con el propósito de hacer, según su
            visión, la red más segura y descentralizada. De hecho, una de las
            primeras grandes ventajas de PoS es que permite que mayores actores
            puedan participar de la red sin la necesidad de grandes recursos
            económicos o conocimientos.
          </p>

          <p className="mt-4">
            En un principio, Ethereum utilizó el consenso Proof of Work como
            bitcoin pero desde sus inicios ha habido una clara intención de
            cambiar el consenso a PoS con el propósito de hacer, según su
            visión, la red más segura y descentralizada. De hecho, una de las
            primeras grandes ventajas de PoS es que permite que mayores actores
            puedan participar de la red sin la necesidad de grandes recursos
            económicos o conocimientos.
          </p>

          <p className="mt-4">
            En septiembre del 2022 se hizo el cambio definitivo luego de una
            ardua preparación y muchísimas pruebas en testnet. En este artículo
            vamos a ver cómo funciona Proof of Stake para seguir entendiendo el
            rol de los nodos en la cadena, tener una mayor perspectiva de cómo
            Ethereum funciona y cómo nosotros podemos participar de la misma.
          </p>

          <p className="mt-4">
            Para seguir es importante que entendamos la arquitectura de la red,
            Ethereum es una cadena de bloques con una computadora incorporada
            (EVM), esta computadora es canónica y contiene todo el estado de la
            blockchain. Los nodos que pertenecen a la red actualizan el estado
            de la EVM al verificar, validar y ejecutar las transacciones
            recibidas. En el siguiente cuadro podemos observar cómo se procesa a
            grandes rasgos una transacción en Ethereum Pos.
          </p>

          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={grafo}
            />
          </div>
          <p className="mt-4">
            Para que este proceso se lleve a cabo se necesita de diferentes
            agentes, hoy nos vamos a centrar específicamente en el nodo
            validador (Tenemos otro artículo donde explicamos los distintos
            tipos de nodos, sino lo leíste puedes hacerlo en el siguiente link)
          </p>

          <p className="mt-4">
            Como mencionamos anteriormente PoS es un proceso de consenso entre
            los nodos y la EVM, o mejor dicho un Mecanismo de consenso, veamos
            bien a qué nos referimos con esto.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Mecanismos de consenso
          </h2>

          <p className="mt-4">
            Los mecanismos de consenso son un pilar de protocolos, ideas, e
            incentivos que le permiten a un conjunto de nodos distribuidos
            ponerse de acuerdo sobre la validez del estado de la blockchain. En
            Ethereum, se llega al consenso cuando el 66% de nodos concuerdan en
            el mismo estado de la red. Básicamente hay un acuerdo generalizado
            de que la información proporcionada es verdadera, si hay un
            desacuerdo los nodos deberán elegir cómo seguir y esto puede
            terminar en la separación de la cadena (hard fork).
          </p>

          <p className="mt-4">
            Los protocolos hacen referencia a cómo se elige el siguiente bloque,
            y los incentivos a las recompensas que pueden recibir quienes sean
            parte del mecanismo. A continuación, veremos específicamente cómo
            funciona el mecanismo de consenso PoS.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Proof of Stake
          </h2>

          <p className="mt-4">
            En el caso de PoS, la estructura de incentivos invita a los nodos a
            operar honestamente por una serie de recompensas y penalizaciones
            aplicadas a un capital bloqueado de 32 ETH en cada nodo. Es decir
            que la seguridad es económica, y la red castiga a quienes no operan
            correctamente slasheando (eliminando) una parte de su depósito.
            Veremos más adelante exactamente como funciona esto.
          </p>

          <p className="mt-4">
            También es el mecanismo Sybil de resistencia de la red para prevenir
            Sybil attacks, es decir, un ataque al servidor de la red en el cual
            el atacante cambia el orden del sistema de reputación al crear un
            número grande de identidades pseudónimas para ganar una gran
            influencia sobre la red.
          </p>
          <p className="mt-4">
            A su vez, los validadores mantienen un protocolo de votación para
            decidir cuál bloque es válido y el más reciente para ser la cabeza
            de la cadena. Veamos más en detalle el rol del nodo validador en PoS
            para entender todo el proceso.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Validadores
          </h2>

          <p className="mt-4">
            Los validadores son nodos completos (full nodes) que ejecutan 3
            softwares distintos, cliente de ejecución, cliente de consenso y
            cliente de validación. También para poder validar deben depositar
            32ETH en la red, con el fin de asegurarse que van a actuar de forma
            correcta para no perder parte de su depósito (seguridad
            cripto-económica).
          </p>

          <p className="mt-4">
            Este nodo, es responsable de verificar que los bloques propagados en
            la red son válidos y a su vez proponen nuevos bloques. Un nodo
            completo puede contener varios validadores en el mismo (siempre y
            cuando tenga la memoria para hacerlo).
          </p>

          <p className="mt-4">
            Una vez que el validador es activado, reciben nuevos bloques de
            otros validadores en la red, donde las transacciones son
            re-ejecutadas para verificar que los cambios de estado propuestos
            son válidos al igual que la firma del bloque. Una vez que esto es
            verificado, el validador atesta a favor del bloque alrededor de la
            red.
          </p>

          <p className="mt-4">
            Anteriormente, Ethereum PoW determinaba el tiempo de bloques por la
            dificultad de minado, en PoS el tiempo es fijo y se divide en slots
            de 12 segundos y épocas de 32 slots.
          </p>

          <p className="mt-4">
            Un validador es seleccionado aleatoriamente para ser el que propone
            el siguiente bloque en cada slot, es decir cada 12 segundos. Además,
            en cada slot un comité de validadores es aleatoriamente elegido para
            votar sobre la validez del bloque propuesto (este es el protocolo de
            votación que mencionamos anteriormente).
          </p>

          <p className="mt-4">
            La idea detrás de la creación de un comité es manejar la carga de la
            red y que todos los validadores atesten en cada época pero no en
            cada slot.
          </p>

          <p className="mt-4">
            A continuación, veremos un cuadro de como una transacción es
            ejecutada en Ethereum PoS (correspondiente a un slot):
          </p>

          <div className="mx-auto">
            <Image
              className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
              width={1200}
              height={500}
              alt="GovInWeb3"
              src={grafo2}
            />
          </div>

          <p className="mt-4">
            En este gráfico podemos observar como un usuario crea una
            transacción, y la misma es recibida por un nodo, específicamente por
            el cliente de ejecución de este nodo, este software luego verifica y
            añade a su mempool la transacción si esta es válida. Luego es
            enviada a otros nodos que también la añaden a su mempool local.
          </p>

          <p className="mt-4">
            En ese instante uno de los nodos es el block proposer, que fue
            elegido aleatoriamente y que será responsable por construir y
            propagar el nuevo bloque y por actualizar el estado de la red.
          </p>
          <p className="mt-4">
            A su vez, el cliente de ejecución juntará todas las transacciones de
            su mempool local en una carga útil de ejecución (execution payload)
            y que luego pasará al cliente de consenso para que que cree el
            “Bloque Beacon” (este también contiene información de las
            recompensas, penalidades, slashings, atestaciones, etc.) que
            permitirá a la red acordar la secuencia de bloques en la “cabeza” de
            la cadena.
          </p>
          <p className="mt-4">
            Otros nodos recibirán el “Bloque Beacon”* en su gossip network de
            consenso para que luego sea enviado al cliente de ejecución que
            re-ejecutará las transacciones para asegurarse que el estado
            propuesto es válido.
          </p>
          <p className="mt-4">
            Una vez esté finalizado, el validador atestara que el bloque es
            válido y es el próximo bloque en la cadena de bloques.
          </p>
          <p className="mt-4">
            El proceso termina luego de que el bloque es añadido a la base de
            datos local y es parte de la cadena con más bloques (“supermajority
            link”) entre dos checkpoints.
          </p>
          <p className="mt-4">
            Los checkpoints ocurren al principio de cada época y existen para
            considerar que un subconjunto de calidadores atesten en cada slot,
            pero todos los validadores atesten en cada época. Por eso, es que en
            cada época un ‘supermajority link’ puede ser demostrado cuando el
            66% del total stakeado de ETH en la red está de acuerdo en dos
            checkpoints.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Recompensas y Penalidades: Seguridad cripto-económica
          </h2>
          <p className="mt-4">
            A cambio del trabajo realizado correctamente por los validadores,
            reciben un porcentaje de ETH, en el caso de no participar cuando es
            necesario pueden no recibir ETH como recompensa o si actúa
            deshonestamente, por ejemplo proponiendo múltiples bloques en un
            mismo slot, firmando dos veces el mismo bloque o presentando
            atestaciones contradictorias, parte de su ETH stakeado puede ser
            eliminado, “slasheado”.
          </p>

          <p className="mt-4">
            La cantidad de ETH slasheado depende de cuantos otros validadores
            también sean afectados, puede ser el 1% del stake o el 100% (mass
            slashing event).
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Seguridad
          </h2>
          <p className="mt-4">
            Según lo que venimos hablando, el stake de 32 ETH en PoS representa
            capital comprometido para asegurar la red y que no pueda ser atacada
            fácilmente.
          </p>

          <p className="mt-4">
            La amenaza del ataque del 51% existe en PoS pero es un gran riesgo
            para el ataque llevarla a cabo ya que necesitaria 51% del ETH
            stakeado, al momento de escribir este artículo eso significa que
            necesitaría 14,356,647 ETH aproximadamente. (pueden ver más info al
            respecto en el siguiente
            <Link
              className="font-bold underline text-md"
              href="https://beaconcha.in/"
            >
              link
            </Link>
          </p>
          <p className="mt-4">
            Si un atacante quisiera correr ese riesgo y contara con el capital
            necesario para poder hacerlo, usaría sus propias atestaciones para
            asegurar se de que su cadena preferida sea la que más atestaciones
            acumule, ya que el peso de las atestaciones acumuladas es lo que los
            clientes de consenso utilizan para determinar la cadena correcta.
            Esto implicaría en un hard fork de la cadena.
          </p>

          <p className="mt-4">
            Asimismo, como dijimos, es un gran riesgo para el atacante ya que
            los demás validadores podrían decidir seguir construyendo en la
            cadena minoritaria e ignorar el fork del atacante.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Conclusión
          </h2>

          <p className="mt-4">
            El avance de Proof of Stake incluye mayor seguridad, reducción de
            riesgos de centralización y eficiencia energética para Ethereum.
          </p>

          <p className="mt-4">
            El cambio de la red de Proof of Work a Proof of Stake es un logro no
            solo para la red y quienes la construyen si no también para quienes
            participamos en la misma como usuarios ya que nos permite ser parte
            de su desarrollo con menores recursos.
          </p>

          <p className="mt-4">
            El desarrollo de staking que está teniendo el ecosistema de Ethereum
            permite que más personas puedan participar de la red hasta con un
            0.1 ETH, lo que aumenta la descentralización y seguridad de la
            misma.
          </p>

          <p className="mt-4">
            A su vez, es importante destacar que el acceso a la misma y las
            ganas de participar no son (o deberían ser) solo para ganar
            incentivos económicos, si no para ser parte de uno de los mayores
            desarrollos tecnológicos que se está llevando a cabo actualmente.
          </p>

          <p className="mt-4">
            Nuestra participación, ya sea para tener un full node o un
            validador, es para contribuir y desarrollar, no para hacernos ricos.
          </p>

          <p className="mt-4">
            Ethereum se creó para hacernos libres, para construir un mundo
            mejor, más justo y eficiente.
          </p>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Fuentes
          </h2>

          <ul>
            <li className="pt-2">
              <Link
                className="font-bold underline text-md"
                href="https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51"
              >
                A Proof of Stake Design Philosophy | by Vitalik Buterin | Medium
              </Link>
            </li>
            <li className="pt-2">
              <Link
                className="font-bold underline text-md"
                href="https://vitalik.ca/general/2017/12/31/pos_faq.html"
              >
                Proof of Stake FAQ
              </Link>
            </li>
            <li className="pt-2">
              <Link
                className="font-bold underline text-md"
                href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos"
              >
                Proof-of-stake (PoS) | ethereum.org
              </Link>
            </li>
            <li className="pt-2">
              <Link
                className="font-bold underline text-md"
                href="https://ethereum.org/en/developers/docs/consensus-mechanisms"
              >
                Consensus mechanisms | ethereum.org
              </Link>
            </li>
            <li className="pt-2">
              <Link
                className="font-bold underline text-md"
                href="https://www.youtube.com/watch?v=3yrqBG-7EVE"
              >
                Ethereum 2.0: Proof of Stake vs Proof of Work | Vitalik Buterin
                and Lex Fridman
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
