export default function Mensaje() {
  return (
    <>
      <section className="w-[80%] lg:w-[60%] mt-12" id="mensajes">
        <div class="grid pb-11">
          <div class="flex gap-2.5 mb-4">
            <img
              src="https://pagedone.io/asset/uploads/1710412177.png"
              alt="Shanay image"
              class="w-10 h-11"
            />
            <div>
              <div class="grid mb-2">
                <h5 class="text-gray-900 text-sm font-semibold leading-snug pb-1">
                  Bianca Muñoz Suarez
                </h5>
                <div class="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex md:w-[60%]">
                  <h2 class="text-gray-900 text-sm font-normal leading-snug">
                  Hola a todos los líderes creativos, no se olviden que su capacidad para innovar y pensar más allá de los límites de hoy es fundamental para construir un futuro vibrante y sostenible, así mismo recuerden siempre mantenerse abiertos a nuevas ideas, tecnologías y perspectivas, ¡y es importante que utilicen las power Skills para ser un líder creativo!
                  </h2>
                </div>
                <div class="justify-start items-center inline-flex">
                  <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    05:14 PM
                  </h3>
                </div>
              </div>
              <div class="w-max grid">
                <div class="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
                  <h5 class="text-gray-900 text-sm font-normal leading-snug">
                    Let me know
                  </h5>
                </div>
                <div class="justify-end items-center inline-flex mb-2.5">
                  <h6 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    05:14 PM
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-2.5 justify-end pb-36">
          <div>
            <div class="grid mb-2">
              <h5 class="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
                You
              </h5>
              <div class="px-3 py-2 bg-[#1D417E] rounded">
                <h2 class="text-white text-sm font-normal leading-snug">
                  Yes, let’s see, send your work here
                </h2>
              </div>
              <div class="justify-start items-center inline-flex">
                <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">
                  05:14 PM
                </h3>
              </div>
            </div>
            <div class="justify-center">
              <div class="grid w-fit ml-auto">
                <div class="px-3 py-2 bg-[#1D417E] rounded ">
                  <h2 class="text-white text-sm font-normal leading-snug">
                    Anyone on for lunch today
                  </h2>
                </div>
                <div class="justify-start items-center inline-flex">
                  <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    You
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1704091591.png"
            alt="Hailey image"
            class="w-10 h-11"
          />
        </div>
      </section>
    </>
  );
}
