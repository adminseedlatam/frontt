import styles from "../articles.module.css";
import portada from "@/app/assets/img/seednode/articles/articuloMedidasDeSegNodos.png";
import Image from "next/image";
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
          Medidas de Seguridad para Operadores de Nodos
        </h1>
        <div className="mt-4">
          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Introducción
          </h2>
          <p>
            La red Ethereum depende en gran medida de la integridad y seguridad
            de sus nodos distribuidos. Los operadores de nodos Ethereum
            desempeñan un papel fundamental al mantener la estabilidad y
            confiabilidad de la red. Sin embargo, con la creciente sofisticación
            de las amenazas cibernéticas, los nodos son propensos a ataques
            (Malware, Ataque DDoS, etc.) y es de suma importancia que los
            operadores adopten medidas sólidas de seguridad para proteger sus
            nodos. De esta forma, los operadores de nodos Ethereum no únicamente
            protegen sus propios nodos, sino que también contribuyen a la salud
            y viabilidad a largo plazo de la red Ethereum en su conjunto.
          </p>
          <p className="mt-4">
            Las medidas que se recomiendan tomar como prevención y preservación
            de la seguridad de los nodos son los siguientes:
          </p>

          <ol className="pt-4 list-disc ml-5 text-white">
            <li>
              <h3>Tener una máquina dedicada para el nodo.</h3>
              <p className="mt-2">
                Para minimizar el impacto en la computadora primaria ante un
                ataque.
              </p>
            </li>
            <li className="mt-4">
              <h3>
                Monitorear constantemente el estado de los nodos e
                infraestructura
              </h3>
              <p className="mt-2">
                Supervisar activa y regularmente el estado de los nodos y la
                infraestructura para detectar actividades sospechosas o posibles
                amenazas.
              </p>
            </li>
            <li className="mt-4">
              <h3>Mantener el nodo en un ambiente físico seguro</h3>
              <p className="mt-2">
                En caso de contar con un nodo físico, verificar que esté
                instalado en un entorno seguro y controlado, con medidas de
                protección contra accesos físicos no autorizados.
              </p>
            </li>
            <li className="mt-4">
              <h3>Utilizar un Disco Separado</h3>
              <p className="mt-2">
                El uso de un disco separado para el almacenamiento de datos de
                nodo facilitará una gestión más conveniente de la misma.
              </p>
            </li>

            <li className="mt-4">
              <h3>Mantener el sistema operativo actualizado</h3>
              <p className="mt-2">
                La mayoría de los clientes admiten los principales sistemas
                operativos: Linux, MacOS, Windows. Asegurar que esté actualizado
                para evitar posibles problemas y vulnerabilidades de seguridad.
              </p>
            </li>
            <li className="mt-4">
              <h3>
                Efectuar la descarga de clientes mediante páginas oficiales
              </h3>
              <p className="mt-2">
                Con el fin de proteger el nodo contra la descarga involuntaria
                de código malicioso desde una fuente adversa.
              </p>
            </li>
            <li className="mt-4">
              <h3>Mantener el software de cliente actualizado</h3>
              <p className="mt-2">
                Actualizar el software a la última versión estable con
                regularidad para mitigar posibles vulnerabilidades y mejorar la
                seguridad.
              </p>
            </li>
            <li className="mt-4">
              <h3>Revisar y evaluar configuraciones</h3>
              <p className="mt-2">
                Evalúa las configuraciones contra vulnerabilidades comunes, como
                los CVE (Vulnerabilidades y Exposiciones Conocidas), para
                fortalecer la seguridad. Una buena práctica es tratar de
                vulnerar nuestro propio nodo simulando ser un atacante para
                asegurarnos a que se tiene acceso y a que no.
              </p>
            </li>
            <li className="mt-4">
              <h3>Almacenar claves privadas de forma segura</h3>
              <p className="mt-2">
                Asegura el almacenamiento de claves privadas y otras claves
                sensibles de manera segura. Es un elemento indispensable en el
                caso de que el nodo necesite una restauración .
              </p>
            </li>
            <li className="mt-4">
              <h3>
                Mantener información sensible fuera de repositorios públicos
              </h3>
              <p className="mt-2">
                Evitar almacenar información sensible relacionada con el código
                en repositorios públicos y herramientas de código abierto,
                impidiendo el acceso a datos sensibles por parte de actores
                maliciosos.
              </p>
            </li>
            <li className="mt-4">
              <h3>Ejecutar un antivirus</h3>
              <p className="mt-2">
                Utiliza un antivirus para detectar y prevenir que un malware
                utilice el nodo de forma incorrecta.
              </p>
            </li>
            <li className="mt-4">
              <h3>Utilizar un Firewall</h3>
              <p className="mt-2">
                Proteger la infraestructura blockchain mediante Firewall u otras
                medidas de seguridad similares con el fin de efectuar un control
                del tráfico de la red entrante y saliente del nodo, limitando de
                esta forma el acceso a puertos y direcciones IP indispensables.
              </p>
              <p className="mt-2">
                Bloquear todo el tráfico al puerto 8545, o cualquier puerto
                personalizado que se haya definido para las solicitudes JSON-RPC
                al nodo, excepto el tráfico proveniente de máquinas
                explícitamente definidas como confiables.
              </p>
              <p className="mt-2">
                Permitir el tráfico en TCP 30303 o cualquier puerto
                personalizado que se haya definido para comunicaciones de par a
                par. Esto permite que el nodo se conecte con sus pares.
              </p>
              <p className="mt-2">
                Permitir el tráfico en UDP 30303 o cualquier puerto
                personalizado que se haya definido para comunicaciones de par a
                par. Esto permite la detección de nodos.
              </p>
            </li>
            <li className="mt-4">
              <h3>Utilizar algoritmos de consenso seguros</h3>
              <p className="mt-2">
                Implementa algoritmos de consenso, como Prueba de Trabajo (PoW)
                o Prueba de Participación (PoS), para prevenir ataques Sybil y
                de 51%.
              </p>
            </li>
            <li className="mt-4">
              <h3>Monitorear las pools de minería</h3>
              <p className="mt-2">
                Supervisar las pools de minería y establecer alertas para
                desviar a los mineros si superan un límite del ~40%.
              </p>
            </li>
            <li className="mt-4">
              <h3>Implementar protocolos de enrutamiento seguros</h3>
              <p className="mt-2">
                Utiliza protocolos de enrutamiento seguros, como certificados,
                para prevenir ataques de enrutamiento.
              </p>
            </li>
            <li className="mt-4">
              <h3>Identifica y descarta transacciones spam</h3>
              <p className="mt-2">
                Evita que las transacciones de spam se incluyan en el registro,
                lo que podría tener efectos negativos en la red.
              </p>
            </li>
            <li className="mt-4">
              <h3>Realizar pruebas de penetración y auditorías de seguridad</h3>
              <p className="mt-2">
                Conducir pruebas regulares para evaluar la seguridad de la red
                blockchain y su infraestructura.
              </p>
            </li>
            <li className="mt-4">
              <h3>Implementar IAM y PAM con autenticación multifactorial</h3>
              <p className="mt-2">
                Establece controles de acceso y autenticación robustos para
                proteger el acceso a los nodos, es importante aclarar que IAM
                administra identidades para accesos comunes que ocurren en
                actividades de rutina (Usuarios); PAM controla el acceso de
                usuarios privilegiados y activos en entornos críticos del
                sistema.
              </p>
            </li>

            <li className="mt-4">
              <h3>Prácticas de seguridad del API</h3>
              <p className="mt-2">
                Aplicar las mejores prácticas de seguridad para las interfaces
                de programación de aplicaciones. Para evitar el riesgo de
                crashes debido a falta de memoria; el riesgo de intentos de robo
                de fondos a través de solicitudes de firma falsas; por último,
                mantenerse al día con la progresión de la cadena, puede suceder
                debido a la escasez de recursos del nodo.
              </p>
            </li>
            <li className="mt-4">
              <h3>Utilizar TLS estándar para comunicaciones</h3>
              <p className="mt-2">
                Asegura las comunicaciones internas y externas mediante el uso
                de TLS (Seguridad de la capa de transporte) estándar, una buena
                práctica es el uso del software Teamviewer con medidas de
                seguridad f2a para conectarnos remotamente al nodo, este tráfico
                está protegido mediante el intercambio de claves pública /
                privada RSA y el cifrado de sesión AES (256 bits).
              </p>
            </li>
            <li className="mt-4">
              <h3>
                Realizar autenticación y autorización mediante tokens seguros
              </h3>
              <p className="mt-2">
                Implementa sistemas de autenticación, verificación y
                autorización utilizando tokens seguros (one time password,
                reconocimiento facial, etc.).
              </p>
            </li>
            <li className="mt-4">
              <h3>
                Desplegar cifrado de extremo a extremo y técnicas de privacidad
              </h3>
              <p className="mt-2">
                Asegura la privacidad y la integridad de los datos (claves
                privadas, contraseñas, etc.) mediante el cifrado de extremo a
                extremo. Evitando accesos no autorizados.
              </p>
            </li>
            <li className="mt-4">
              <h3>
                Utilizar servidores efímeros para la infraestructura de nodos
              </h3>
              <p className="mt-2">
                Emplea servidores efímeros para reducir la exposición a posibles
                amenazas.
              </p>
            </li>
            <li className="mt-4">
              <h3>Practicar las mejores prácticas de Secure SDLC</h3>
              <p className="mt-2">
                Implementa las mejores prácticas de desarrollo de ciclo de vida
                de software seguro (SDLC) para la infraestructura y el
                desarrollo de código.
              </p>
            </li>
            <li className="mt-4">
              <h3>Vetado de smart contracts</h3>
              <p className="mt-2">
                Revisar todos los smart contracts en busca de errores y
                vulnerabilidades antes de usarlos en producción.
              </p>
            </li>
            <li className="mt-4">
              <h3>Elegir un cliente minoritario para el nodo</h3>
              <p className="mt-2">
                La diversidad de clientes es fundamental para los nodos de
                consenso que ejecutan validadores, si la mayoría utiliza una
                única implementación de cliente, la seguridad de la red se
                encontrará en riesgo.
              </p>
            </li>
            <li className="mt-4">
              <h3>Usar VPN</h3>
              <p className="mt-2">
                Con el uso de VPN permite el acceso a las personas que iniciaron
                sesión en la VPN para acceder a los recursos internos.
              </p>
            </li>
          </ol>

          <h2 className="pt-6 pb-4 text-shadow-lg text-3xl lg:text-4xl font-extrabold leading-16 tracking-tight ">
            Conclusión
          </h2>
          <p className="mt-4">
            En resumen, la seguridad de los nodos Ethereum no es solo una
            responsabilidad técnica, sino un compromiso continuo para adaptarse
            a las amenazas emergentes y garantizar la integridad de la red
            descentralizada. La implementación diligente de prácticas de
            seguridad contribuirá a un ecosistema Ethereum más resistente y
            confiable.
          </p>

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
              participación activa en las gobernanzas de mayor impacto.
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
        </div>
      </div>
    </div>
  );
}
