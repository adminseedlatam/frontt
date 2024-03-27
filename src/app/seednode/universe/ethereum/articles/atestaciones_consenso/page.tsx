import styles from "../articles.module.css";
import Image from "next/image";
import portada from "@/app/assets/img/seednode/articles/atestaciones_consenso/portada_dentro_art.png";
import foto1 from "@/app/assets/img/seednode/articles/atestaciones_consenso/foto1.jpg";
import foto2 from "@/app/assets/img/seednode/articles/atestaciones_consenso/foto2.jpg";
import foto3 from "@/app/assets/img/seednode/articles/atestaciones_consenso/foto3.jpg";
import foto4 from "@/app/assets/img/seednode/articles/atestaciones_consenso/foto4.jpg";
import foto5 from "@/app/assets/img/seednode/articles/atestaciones_consenso/foto5.jpg";
import foto6 from "@/app/assets/img/seednode/articles/atestaciones_consenso/foto6.jpg";

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
          El pilar de la seguridad de Ethereum: atestaciones y consenso
        </h1>
        <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
          Introdución
        </h1>
        <p className="mt-4">
          ¿Cuál es el pilar de la seguridad de Ethereum? ¿Los nodos, su
          ejecución o las atestaciones?
        </p>
        <p className="mt-4">
          Antes de continuar, los invitamos a leer un artículo previo sobre el
          Proof of Stake{" "}
          <Link
            className="font-bold underline text-md"
            href="https://mirror.xyz/seedlatam.eth/ddwMgu_S0Ie5T7V0KWxSjx_-AsXm7mQGQ4-2jXFRIrg"
          >
            “PoS - De Full Node a Validator Node”
          </Link>
          , donde encontrarán una clara explicación sobre el proceso de una
          transacción realizada por nodo validador.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          ¿Consensuar o no consensuar?
        </h2>
        <p className="mt-4">
          El mecanismo de Proof of Stake es parte del consenso de la red,
          permitiendo a los validadores acordar la veracidad de las
          transacciones y la creación de nuevos bloques en la cadena.
        </p>
        <p className="mt-4">
          Más allá del Proof of Stake, existen otros aspectos del consenso que
          no abordaremos en detalle aquí, aunque es crucial entender que PoS
          ofrece resistencia a ataques Sybil, no siendo exactamente un protocolo
          de consenso. Los protocolos de consenso son LLMD Ghost y Casper FFG,
          que juntos formaron “Gasper”.
        </p>
        <p className="mt-4">
          Siguiendo, el consenso en Ethereum se lleva a cabo por el algoritmo,
          Gasper. que detalla el funcionamiento de los incentivos en la red,
          cómo se añaden nuevos bloques a la cadena, y cómo los nodos determinan
          la cadena canónica (la cadena con mayor cantidad de bloques). Este
          algoritmo también establece los intervalos temporales para eventos en
          la cadena dividiendo el tiempo en &quot;slots&quot; de 12 segundos y
          epochs de 32 slots, y cómo un validador asume el rol de proponedor de
          bloques.
        </p>
        <p className="mt-4">
          En este artículo, nos enfocaremos específicamente en el papel del
          cliente validador, encargado de avalar el bloque actual en el bloque
          header de la cadena y los bloques “checkpoints”, que marcan el último
          bloque al inicio de la época.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          El punto de vista del validador
        </h2>
        <p className="mt-4">
          Para entender el punto de vista del validador, tenemos que entender
          qué significa atestar.
        </p>
        <p className="mt-4">
          Atestar es la acción que llevan a cabo los validadores de un comité,
          en cada slot, para confirmar que un bloque es válido y puede ser
          incorporado a la cadena. Cada atestación se emite por un slot
          específico y se propone por época. Su objetivo es respaldar el punto
          de vista del validador. ¿Qué implica esto? Significa que el validador
          confirma que el estado de la cadena refleja la misma información que
          el bloque verificado, y la atestación permite que otros validadores
          voten a favor o en contra de esta percepción, apoyando así el punto de
          vista del validador. Al lograr un consenso entre los demás
          validadores, se confirma el bloque propuesto.
        </p>
        <p className="mt-4">
          Las atestaciones de cada validador individual se recopilan
          inicialmente dentro de subredes, antes de su propagación más amplia,
          debido a la carga que supone compartir esta información. Por ello,
          cada atestación incluye datos de consenso, su firma y la de otros
          validadores que coinciden con la información. El
          &quot;agregador&quot;, un validador seleccionado de cada subred en
          cada época, recolecta atestaciones con datos de la “gossip network” y
          luego difunde la atestación agregada (attestation aggregate) a una red
          más amplia. Posteriormente, estas atestaciones son recopiladas por el
          “creador de bloques&quot; (block proposer) en cada slot, formando un
          &quot;paquete&quot; de datos.
        </p>
        <p className="mt-4">
          Una agregación está compuesta de la siguiente forma:
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold">aggregation_bits:</span> una lista de
            bits de validadores donde la posición marca el index del validador
            en su comité seguido del valor (0/1) que indica si está de acuerdo
            con la información.
          </li>
          <li className="pt-2">
            <span className="font-bold">signature:</span> una firma BLS que suma
            la firma de validadores individuales.
          </li>
          <li className="pt-2">
            <span className="font-bold">data:</span> los siguientes detalles de
            la atestación
          </li>
        </ul>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="GovInWeb3"
            src={foto1}
          />
        </div>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Detalles:
        </h3>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold">slot:</span> el número de slot de la
            atestación
          </li>
          <li className="pt-2">
            <span className="font-bold">index:</span> el número correspondiente
            al comité del validador según el slot.
          </li>
          <li className="pt-2">
            <span className="font-bold">beacon_block_root:</span> Root hash del
            bloque que el validador ve al bloque header de la cadena.
          </li>
          <li className="pt-2">
            <span className="font-bold">source:</span> Parte de la finalidad del
            voto que indica que el validador ve el bloque justificado más
            reciente.
          </li>
          <li className="pt-2">
            <span className="font-bold">target:</span> Parte de la finalidad del
            voto que indica que el validador ve como el primer bloque en la
            época actual.
          </li>
        </ul>
        <p className="mt-4">
          El validador que atesta primero debe construir la data con la
          información detallada anteriormente, una vez que la data es construida
          el validador puede cambiar el index del bit de “aggregation_bits”
          correspondiente a su validador para demostrar que han participado en
          el voto.
        </p>
        <p className="mt-4">
          Finalmente el validador firma la atestación y la propaga a la red.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          El ciclo de vida de la atestación
        </h2>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold">Generation:</span> Los validadores crean
            atestaciones usando los datos especificados previamente.
          </li>
          <li className="pt-2">
            <span className="font-bold">Propagation:</span> Estas atestaciones
            se difunden a los agregadores a través de la red de difusión (gossip
            network).
          </li>
          <li className="pt-2">
            <span className="font-bold">Aggregation:</span> El agregador combina
            su firma con las de otros validadores en la atestación.
          </li>
          <li className="pt-2">
            <span className="font-bold">Propagation:</span> La atestación
            agregada se distribuye a través de la gossip network y es
            recolectada por el validador que produce los bloques (block
            producer). Cada productor recopila varias atestaciones y formará un
            bloque con las mismas.
          </li>
          <li className="pt-2">
            <span className="font-bold">Inclusión:</span> El block proposer
            agrega el bloque finalizado a la cadena canónica.
          </li>
        </ul>
        <div className="mx-auto">
          <Image
            className="max-w-3xl pt-10 mx-4 pr-4 w-full h-auto rounded-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl"
            width={1200}
            height={500}
            alt="GovInWeb3"
            src={foto2}
          />
        </div>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          El triple propósito:
        </h3>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>Casper FFG voto</li>
          <li className="pt-2">
            Estabilizar la opción de fork cortoplacista de bloque por bloque al
            votar en el bloque header actual
          </li>
          <li className="pt-2">Dividir la votación de los bloques</li>
        </ul>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Escenario de atestaciones:
        </h3>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            {" "}
            <span className="font-bold">Oportunidad de voto perdida</span>
          </li>
          <p className="mt-2">
            Los validadores tienen un máximo de una época para asumir su
            atestación. Si la pierden en la época 0, pueden subirla con
            inclusión delay en la época 1.
          </p>
          <li className="mt-4">
            {" "}
            <span className="font-bold">Agregadores perdidos</span>
          </li>
          <p className="mt-2">
            Validadores random se suscriben a dos subredes como backup en caso
            de que se pierda alguno de los 16 agregadores que hay por época en
            total.
          </p>
          <li className="mt-4">
            {" "}
            <span className="font-bold">Productores de bloques perdidos</span>
          </li>
          <p className="mt-2">
            Si el productor de bloques se pierde, el siguiente productor será
            quien elija la atestación agregada y la incluya en el siguiente
            bloque. Esto provocara que la inclusion delay aumente 1 punto.
          </p>
        </ul>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          No pain No gain
        </h3>
        <p className="mt-4">
          Los validadores son recompensados por sus atestaciones, con la
          cantidad de recompensa variando según las banderas de participación
          (source, target, head), la base de recompensa y la tasa de
          participación.
        </p>
        <p className="mt-4">
          Cada bandera de participación puede ser verdadera o falsa, dependiendo
          de la presentación en la atestación y el retraso de inclusión. El
          escenario ideal es cuando las tres banderas son verdaderas.
        </p>
        <p className="mt-4">
          Inclusion Delay: Es el lapso entre el momento esperado de la
          atestación y cuando efectivamente se incluye en la cadena.
        </p>
        <p className="mt-4">
          Si el bloque header de la cadena es el “bloque n”, y la atestación es
          incluida en el “bloque n+1” por lo que la inclusión es 1 en su mayoría
          de veces. Si por alguna razón, la tardanza se duplica, la recompensa
          será menor.
        </p>
        <p className="mt-4">
          <span>
            Esto es particularmente relevante para los nodos validadores en
            Latinoamérica, donde la escasez de nodos puede incrementar el
            retraso de inclusión (inclusion delay) y, por ende, disminuir las
            recompensas. Esta es una de las razones por las cuales es importante
            contar con más nodos validadores en LATAM, ya que con más nodos se
            puede mejorar la comunicación entre los mismos alrededor del mundo y
            reducir la inclusión delay.{" "}
          </span>
        </p>
        <p className="mt-4">
          Así como hay posibilidades de ganar, también existen riesgos de
          perder. Un validador puede ser penalizado, o &quot;slasheado&quot;,
          perdiendo una parte de su participación económica si realiza
          atestaciones contradictorias.
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          BLS Signature
        </h3>
        <p className="mt-4">
          BLS (Boneh-Lynn-Shacham) es una firma digital utilizada para firmar
          las transacciones de los usuarios.
        </p>
        <p className="mt-4">
          El proceso de esta firma está compuesto por 4 piezas de información:
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold">La llave secreta:</span> Cada validador
            tiene una llave secreta, a veces llamada llave privada. Esta llave
            es utilizada para firmar los mensajes propagados y mantenerlos en
            secreto utilizando criptografía.
          </li>
          <li className="pt-2">
            <span className="font-bold">La llave pública: </span> Esta llave
            deriva de la llave secreta. Esta llave representa la identidad de un
            validador y es conocida por todo el mundo.
          </li>
          <li className="pt-2">
            <span className="font-bold">El mensaje:</span> los siguientes
            detalles de la atestación
          </li>
          <li className="pt-2">
            <span className="font-bold">La firma:</span> Es el resultado del
            proceso de firma. La firma es creada al combinar el mensaje con la
            llave secreta.
          </li>
        </ul>
        <p className="mt-4">
          Algo importante de este proceso es que el mensaje, su firma y una
          llave pública permiten que verifiques el validador que firmó el
          mensaje ya que la llave pública deriva de la llave privada por lo que
          nadie más podría haber firmado ese mensaje.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Además de la atestación
        </h2>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Firmas
        </h3>
        <p className="mt-4">
          En la cadena Beacon, los únicos mensajes que son firmados son “hash
          tree roots” de objetos llamados “signing roots”
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
        <p className="mt-4">
          (Un validador aplica su llave secreta a un mensaje que genera una
          firma digital única)
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Verificación
        </h3>
        <p className="mt-4">
          Para verificar una firma necesitamos conocer la llave pública del
          validador que la firmó. Cada validador tiene su llave pública guardada
          en el estado de la beacon chain y puede ser fácilmente consultada con
          el índice del validador.
        </p>
        <p className="mt-4">
          La verificación de firmas puede ser tratada como una caja negra:
          enviamos el mensaje, la llave pública y la firma del verificador,
          luego de magia criptográfica las firmas coinciden con la llave pública
          y el mensaje por lo que lo declaramos válido. Si esto no sucede, la
          firma está corrompida, la llave secreta fue errónea o el mensaje no
          fue lo que se firmó;
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
          La verificación volverá como válida sólo si la firma corresponde a la
          llave pública y al mensaje, si no volverá como falso.
        </p>
        <p className="mt-4">
          A continuación podemos encontrar una representación de todo el
          proceso:
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
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Penalidades & Slashing
        </h2>
        <p className="mt-4">Penalidades</p>
        <p className="mt-4">
          Los validadores reciben recompensas por su contribución a la seguridad
          de la cadena y enfrentan penalizaciones por acciones que van en contra
          de esta. Aunque estas sanciones suelen ser moderadas, cumplen con el
          propósito de incentivar a que los validadores mantengan un desempeño
          óptimo en sus operaciones.
        </p>
        <p className="mt-4">
          Estas penalizaciones se descuentan de los saldos de los validadores en
          la beacon chain y se eliminan de la circulación, contribuyendo así a
          la reducción de la emisión total de la cadena.
        </p>
        <p className="mt-4">
          Importante: Las penalidades no son lo mismo que el slashing
        </p>
        <p className="mt-4">
          El rango para que un validador mantenga un equilibrio entre ganancias
          y penalizaciones es aproximadamente del 43%.
        </p>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Tipos de Penalizaciones:
        </h3>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            <span className="font-bold">Penalizaciones por Atestación:</span> Se
            aplican a las atestaciones ausentes, tardías o incorrectas. Las
            penalizaciones incluyen votos perdidos en el marco de Casper FFG,
            específicamente votos de fuente o objetivo. No se penaliza la
            ausencia de un voto de head.
          </li>
          <li className="pt-2">
            <span className="font-bold">
              Penalizaciones del Comité de Sincronización:{" "}
            </span>{" "}
            Aquellos en el comité de sincronización que no firmen el bloque
            líder correcto, o no participen en absoluto, enfrentan una
            penalización idéntica a la recompensa que habrían recibido por
            actuar correctamente.
          </li>
          <li className="pt-2">
            <span className="font-bold">Nota*:</span> No existen penalizaciones
            específicas dirigidas a los proponentes de bloques en cuanto a la
            inclusión de depósitos de la cadena Eth1, aunque omitir depósitos
            conocidos por la red invalida el bloque propuesto, sirviendo esto
            como incentivo para su inclusión.*
          </li>
        </ul>
        <h3 className="pt-6 pb-4 text-shadow-lg text-xl lg:text-2xl xl:text-3xl font-extrabold leading-10 lg:leading-12 tracking-tight ">
          Slashing
        </h3>
        <p className="mt-4">
          El Slashing se aplica a acciones que violan reglas críticas del
          protocolo, potencialmente amenazando la seguridad de la cadena. La
          expulsión implica la pérdida significativa de participación y la
          exclusión del protocolo, representando más un castigo severo que una
          simple penalización. Los validadores pueden evitar la expulsión
          tomando medidas preventivas básicas.
        </p>
        <p className="mt-4">
          Las acciones que pueden llevar a la expulsión incluyen:
        </p>
        <ul className="pt-4 list-disc ml-5 text-white">
          <li>
            Atestar de manera contradictoria para el mismo punto de control
            objetivo.
          </li>
          <li className="pt-2">
            Proponer múltiples bloques para la misma altura o atestar por
            distintos bloques de cabeza con los mismos puntos de control de
            fuente y objetivo, acciones que pueden ser interpretadas como
            intentos de manipulación o ataque.
          </li>
        </ul>
        <p className="mt-4">
          Estas infracciones están relacionadas con la &quot;equivocación&quot;,
          es decir, cuando un validador emite información contradictoria a lo
          previamente anunciado a la red.
        </p>
        <p className="mt-4">
          Al igual que con las penalizaciones menores, los fondos retirados de
          los validadores por expulsión son eliminados de la circulación,
          afectando la emisión total de la cadena de balizas.
        </p>
        <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
          Conclusión
        </h2>
        <p className="mt-4">
          Finalmente, al analizar el rol de los validadores en el mecanismo de
          consenso y las atestaciones podemos darnos cuenta de que son
          fundamentales para mantener la seguridad y la integridad de la red de
          Ethereum.
        </p>
        <p className="mt-4">
          Las atestaciones no sólo facilitan la verificación y validación de los
          bloques dentro de la cadena, si no que también sostienen el consenso
          alrededor del estado actual de la red, reforzando su resistencia
          contra ataques y manipulaciones.
        </p>
        <p className="mt-4">
          Las sanciones y penalizaciones, terminan siendo cruciales para
          incentivar a los validadores a mantener un alto nivel de rendimiento y
          compromiso. Es importante destacar la distinción entre ambas acciones
          para que exista una diferencia entre quien comete un error o corre su
          nodo validador en un estado de bajas condiciones (mal internet, alta
          inclusión delay, cortes de luz, etc.). No es lo mismo tener una
          conducta responsable en un “mal ambiente” que una gran negligencia por
          sobre cómo debemos actuar con nuestro nodo.
        </p>
        <p className="mt-4">
          La efectividad de PoS y la seguridad de Ethereum dependen en gran
          medida de la precisión, puntualidad y honestidad (por sobre todo) de
          las atestaciones producidas por los validadores.
        </p>
        <p className="mt-4">
          A través de un sistema de incentivos, la red puede asegurar que sus
          participantes actúen de manera que promueva el bienestar de la
          comunidad y el ecosistema.
        </p>

        {/* FIN */}
      </div>
    </div>
  );
}
