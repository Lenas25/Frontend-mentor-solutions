export default function VidaAcademica() {
  return (
    <>
      <section
        className="w-[80%] lg:w-[60%]"
        id="vida-academica">
        <div className="text-center my-16">
          <h4 className="text-3xl font-bold text-[#81abf5]">
            Los habitos que tenemos en comun para poder adaptarnos a la
          </h4>
          <h3 className="font-custom text-5xl mt-5 mb-8 text-[#1D417E]">
            "Vida Academica"
          </h3>
          <div className="grid gap-y-5 grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 text-[#1D417E]">
            <div className="shadow-xl flex flex-col p-5 rounded-xl gap-2 hover:scale-110 transition duration-300 bg-white">
              <h2 className="font-semibold">Planificación y organización</h2>
              <p className="text-sm">
                Al principio, la vida académica fue más sencilla, pero luego nos
                agobiaron las tareas acumuladas y el estrés. Decidimos
                planificar nuestra semana y usar un organizador de tareas, ya
                sea en papel o digital, lo que nos ayudó a no dejar todo para el
                último momento. Esto nos permitió trabajar durante la semana y
                tomarnos tiempo para relajarnos y descansar.
              </p>
            </div>
            <div className="shadow-xl flex flex-col p-5 rounded-xl gap-2 hover:scale-110 transition duration-300 bg-white">
              <h2 className="font-semibold">
                Crear un ambiente de estudio adecuado
              </h2>
              <p className="text-sm">
                Como equipo también nos percatamos que nos costaba realizar las
                tareas en casa y esto se debía al espacio donde trabajamos, el
                hecho de tener un espacio desordenado no nos ayudó a
                concentrarnos, al nosotros crear un espacio adecuado de estudio
                nos ayudó con ello, u otros optaron por ir a una biblioteca
                donde se concentraban mejor y avanzan las tareas rápidamente.
              </p>
            </div>
            <div className="shadow-xl flex flex-col p-5 rounded-xl gap-2 hover:scale-110 transition duration-300 bg-white">
              <h2 className="font-semibold">Descansar y cuidar tu salud</h2>
              <p className="text-sm">
                La vida académica nos ha generado estrés, así que tomamos
                pequeños descansos durante nuestras sesiones de estudio. Algunos
                salen del dormitorio para comer una fruta, mientras que otros
                simplemente se levantan de la silla y estiran. Es vital cuidar
                nuestra salud mental, ya que no ayuda estudiar con pensamientos
                negativos; nos distraemos fácilmente aunque estemos presentes
                físicamente.
              </p>
            </div>
            <div className="shadow-xl flex flex-col p-5 rounded-xl gap-2 hover:scale-110 transition duration-300 bg-white">
              <h2 className="font-semibold">Procrastinación</h2>
              <p className="text-sm">
                Coincidimos como grupo en que procrastinábamos, dejando trabajos
                o exposiciones para el último momento. Esto afectó nuestra vida
                académica, causándonos desvelos y mala alimentación por la
                preocupación. Para reducir la procrastinación, una estrategia es
                establecer una recompensa tras completar las tareas pendientes,
                lo que nos motiva a terminarlas a tiempo y evitar posponerlas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
