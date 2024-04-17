import { Gallery } from "./Gallery";
export default function RecursosPersonales() {
  return (
    <>
      <section className="w-[80%] lg:w-[60%] " id="recursos-personales">
        <div className="text-center my-12">
          <h4 className="text-3xl font-bold text-[#81abf5]">
            Como equipo nosotros contamos con los siguientes
          </h4>
          <h3 className="font-custom text-5xl my-5 text-[#1D417E]">
            "Recursos Personales"
          </h3>
          <p className="mb-5 text-[#1D417E] font-semibold">
            Los recursos personales son autoevaluaciones positivas vinculadas a
            la percepción de la capacidad propia para controlar e influir en el
            entorno. Estas autoevaluaciones predicen el establecimiento de
            metas, la motivación, el rendimiento laboral y satisfacción con la
            vida
          </p>
          <Gallery />
        </div>
      </section>
    </>
  );
}
