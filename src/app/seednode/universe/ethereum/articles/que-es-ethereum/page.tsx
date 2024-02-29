import styles from "../articles.module.css";

export default function Articulo2() {
  return (
    <div className={styles.secondContainer}>
      <div className="mx-8 md:mx-20 lg:mx-72">
        <h1 className="py-20 pb-10 text-shadow-lg text-4xl lg:text-5xl font-extrabold leading-16 tracking-tight">
          ¿Qué es Ethereum?
        </h1>
        <div className="">
          <p className="text-lg font-normal leading-7 tracking-tight">
            Ethereum es un protocolo que permite desarrollar aplicaciones,
            comunidades u organizaciones descentralizadas. Wikipedia lo define
            como una plataforma de código abierto para ejecutar smart contracts,
            lo cuál es correcto, sin embargo vamos a ver más una definición más
            amplia a continuación.
          </p>
          <p className="pt-4">
            Ethereum es una cadena de bloques{" "}
            <strong>PoS (Proof of Stake)</strong> que como mencionamos, permite
            desarrollar distintas aplicaciones u organizaciones sobre él, al
            utilizar smart contracts con el lenguaje de código Solidity. Las
            dApps (aplicaciones descentralizadas) pueden ser creadas por
            cualquier individuo sin necesidad de pedir permiso a alguna entidad.
            Por esto mismo se conoce a Ethereum como la máquina infinita o el
            jardín infinito, ya que a partir de su tecnología se puede crear un
            internet más abierto para todos.
          </p>
          <p className="pt-4">
            Ethereum funciona como una red de computadoras interconectadas que
            corren un software llamado cliente, estas validan las transacciones
            llevadas a cabo en el protocolo y se encuentran distribuidas
            alrededor del mundo, sin embargo hay una mayor concentración en
            Estados Unidos y Europa. Más adelante también veremos nuestro
            trabajo para que esto cambie y logremos una mejor descentralización
            geográfica.
          </p>
          <p className="pt-4">
            Ethereum busca ser la infraestructura para una nueva economía para
            el internet, como lo planteó uno de sus fundadores, Vitalik Buterin
            y ahí es donde yace el valor intrínseco del protocolo.
          </p>

          <p className="pt-4">
            <strong>
              “Ownership lies within the people creating the value”
            </strong>
          </p>
          <p className="pt-4">
            <strong>
              “La propiedad reside en las personas que crean valor”.
            </strong>
          </p>

          <p className="pt-4">
            Esta red, es la tierra fértil de esta nueva tecnología, y se
            encuentra en pleno crecimiento. Es el principio de toda innovación
            dentro del ecosistema crypto. Esto explica los principios básicos de
            esta red:
          </p>
          <p className="pt-4">
            <strong>Resistencia a la censura: </strong>
            Ningún gobierno o compañía tiene control sobre Ethereum.
            <br /> <br />
            <strong>Descentralización:</strong> El desarrollo y funcionamiento
            de Ethereum es decidido en comunidad, no recae en un solo individuo
            u organización.
            <br /> <br />
            <strong>Productos compatibles:</strong> Las aplicaciones construidas
            sobre Ethereum pueden estar interconectadas entre ellas, ofreciendo
            mejores productos y experiencias al usuario. <br /> <br />{" "}
            <strong> Desarrollo (innovación) sin permisos:</strong> Cualquiera
            puede construir sobre la red o interactuar con la misma. Esto
            permite un mayor control para los individuos de su identidad y
            activos. 
          </p>
          <p className="pt-4">
            Ethereum puede ser utilizado como una red financiera para los no
            bancarizados, la capa de data para un sistema de reputación
            descentralizada o hasta un marketplace descentralizado. Comenzó
            siendo solo para unos pocos y hoy abarca un mundo tan grande que
            pueden aprovechar sus beneficios tanto inversores como
            desarrolladores, artistas, músicos, escritores y muchos más!
          </p>
          <p className="pt-4">
            Si quieres aprender más sobre Ethereum y su funcionamiento, no dudes
            en revisar más contenido de SeedNode, como la historia de Ethereum,
            y el rol crucial de los nodos en la red.
          </p>
        </div>

        {/* Aquí puedes agregar más contenido si lo necesitas */}
      </div>
    </div>
  );
}
