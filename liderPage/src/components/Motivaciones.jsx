import React from "react";
import { PopoverButton } from "./PopoverButton";

export default function Motivaciones() {
  const lista1 = [
    "• Poder ayudar a nuestras Familias económicamente.",
    "• Las experiencias que nos dan.",
    "• Nos gusta la carrera que escogimos.",
    "• El adquirir conocimientos.",
    "• Satisfacción personal por terminar una carrera.",
    "• Poder independizarnos.",
    "• Conseguir un trabajo donde podamos ejercer nuestra carrera profesional.",
    "• El seguir ascendiendo.",
    "• El ser profesional.",
    "• Nos divierte mucho el poder estudiar acá en tls",
  ];
  const lista2 = [
    "• Un buen sueldo.",
    "• Terminar la carrera.",
    "• Ser el orgullo de nuestros Familiares.",
    "• Aprobar los cursos.",
    "• Reconocimiento.",
    "• Ser el ejemplo de nuestros hermanos.",
    "• El obtener nuestro título.",
    "• El poder disfrutar la Fiesta de graduación con nuestros amigos.",
    "• El ejercer una carrera me da muchas más oportunidades.",
  ];

  return (
    <>
      <section className="w-[80%] lg:w-[60%]" id="motivaciones">
        <div className="my-12">
          <div className="text-center bg-gradient-to-b from-[#b7e1fc] to-[#81abf5] rounded-xl p-[1px] mb-5">
            <div className="bg-white m-1 rounded-xl p-5">
              <h3 className="relative bottom-10 bg-white w-fit mx-auto px-5 text-2xl md:text-3xl font-semibold text-[#81abf5]">
                Motivaciones
              </h3>
              <p className="text-base md:text-lg font-medium  text-[#1D417E] -mt-5">
                Es importante para mejorar nuestra productividad, incrementa
                nuestro esfuerzo y persistencia en las cosas que hacemos, Nos
                lleva a actuar y conseguir lo que queremos, nos volvemos más
                rápidos y eficientes. Existen 2 clasificaciones en la motivación
                y estas recaen desde el lugar que parten ya sean o bien internas
                (intrínseca ) o externa (extrínseca).
              </p>
            </div>
          </div>

          <div className="flex text-center gap-16 md:gap-10 flex-col md:flex-row">
            <div className="border-2 border-[#81abf5] p-2 rounded-xl relative">
              <h3 className="text-[#1D417E] font-semibold mb-2">
                Motivaciones Intrínsecas
              </h3>
              <p className="text-base md:text-lg text-[#1D417E]">
                Esta motivación nace de nosotros mismos sin recibir nada a
                cambio es amor propio, satisfacción personal y creatividad.
              </p>
              <PopoverButton info={lista1} />
            </div>
            <div className="border-2 border-[#81abf5] p-2 rounded-xl">
              <h3 className="text-[#1D417E] font-semibold mb-2">
                Motivaciones Extrínseca
              </h3>
              <p className="text-base md:text-lg text-[#1D417E]">
                Esta motivación nace a partir de un deseo que quiere obtener o
                ganar una recompensa ya sea un ascenso, elogio, premio o
                compensación.
              </p>
              <PopoverButton info={lista2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
