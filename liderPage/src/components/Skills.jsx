import ButtonModal from "./ButtonModal";
import pensando from "../assets/icons/pensando.png";
import empatia from "../assets/icons/empatia.png";
import intercambiar from "../assets/icons/intercambiar.png";
import pensamientoCreativo from "../assets/icons/pensamiento-creativo.png";
import pensamientoDivergente from "../assets/icons/el-pensamiento-de-diseno.png";
import responsabilidad from "../assets/icons/responsabilidad-social.png";
import entorno from "../assets/icons/entorno.png";
import cuidado from "../assets/icons/cuidado.png";
export default function Skills() {
  return (
    <>
      <section className="w-[80%] lg:w-[60%]" id="skills">
        <div className="text-center my-12">
          <h4 className="text-3xl font-bold text-[#81abf5]">
            Como equipo tenemos las siguientes
          </h4>
          <h3 className="font-custom text-5xl mt-5 mb-8 text-[#1D417E]">
            "Power Skills"
          </h3>
          <div className="flex gap-5 flex-wrap items-center justify-center">
            <ButtonModal
              image={pensando}
              text="Conciencia Personal"
              info="Nosotros tenemos la capacidad de reconocer y evaluar nuestros propios pensamientos, emociones, creencias y acciones, debido que tenemos una comprensión profunda con nosotros mismos, esto incluye nuestras fortalezas, debilidades, valores, y motivaciones. Es por ello que nosotros determinamos que esta power skill es fundamental para nuestro crecimiento personal "
            />
            <ButtonModal
              image={intercambiar}
              text="Adaptación al cambio"
              info="Poseemos la capacidad de ajustarnos y responder de manera efectiva a diversas situaciones que puedan presentarse, esto implica que seamos flexibles, resilientes y la capacidad con la que contamos para modificar nuestros comportamientos, estrategias o mentalidades para enfrentar diversas problemáticas, por ellos consideramos importante en nuestras vidas profesionales y personales, porque como bien sabemos el mundo está en constante transformación "
            />
            <ButtonModal
              image={pensamientoCreativo}
              text="Pensamiento Innovador"
              info="Contamos con la capacidad de generar nuevas ideas, enfoques o soluciones para resolver problemas. Esto implica que pensamos de manera creativa y original combinando nuestras ideas de forma novedosa."
            />
            <ButtonModal
              image={pensamientoDivergente}
              text="Pensamiento Divergente"
              info="Disponemos de este proceso mental en el cual involucra que generemos multiples ideas, soluciones o respuestas a partir de un tema central. Este se caracteriza por la búsqueda de diferentes posibilidades, con la creatividad que contamos y proponer diversas opciones y lo que buscamos es tener diferentes ideas con originalidad. Es fundamental tener en cuenta esta power skill para resolver problemas.
"
            />
            <ButtonModal
              image={cuidado}
              text="Pensamiento Tri-Balance"
              info="Contamos con un enfoque en el cual buscamos tres aspectos fundamentales que son, el bienestar económico, la equidad social y la sostenibilidad ambiental, donde tratamos de considerar estos tres pilares de manera interconectada y equilibrada al tomar decisiones, reconociendo que el éxito a largo plazo depende de satisfacer las necesidades presentes sin comprometer la capacidad de generaciones futuras."
            />
            <ButtonModal
              image={responsabilidad}
              text="Responsabilidad del futuro"
              info="Nos comprometemos en tomar decisiones y acciones en el presente que tengan en cuenta las consecuencias que puedan ocasionar a largo plazo, esto puede incluir que tomemos medidas para abordar problemas como el cambio climático, preservación de recursos naturales, entre otros, para promover un futuro mejor para las próximas generaciones."
            />
            <ButtonModal
              image={entorno}
              text="Conexión con lo digital"
              info="Tenemos la habilidad de adaptarnos eficazmente en el mundo digital y consideramos que es sumamente importante en nuestra vida cotidiana y en el ámbito laboral, porque como bien sabemos la tecnología continua desempeñando un papel fundamental en la sociedad"
            />
            <ButtonModal
              image={empatia}
              text="Empatía y Escucha Activa"
              info="Contamos con la capacidad de comprender y compartir nuestros sentimientos, pensamientos y experiencias, debido a estas podemos mostrar comprensión y sensibilidad hacia las emociones y necesidades de otras personas"
            />
          </div>
        </div>
      </section>
    </>
  );
}
