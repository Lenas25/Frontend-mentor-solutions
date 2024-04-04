document.querySelector("#app").innerHTML = `
<main
      class="w-[90%] bg-white py-10 px-5 md:py-20 md:px-10 rounded-2xl rounded-br-[100px] lg:w-[45%]">
      <div class="grid gap-3 grid-cols-3 md:gap-5 lg:w-[75%]">
        <div class="container-input flex flex-col gap-1">
          <label for="day">DAY</label>
          <input
            id="day-input"
            type="text"
            placeholder="DD"
            data-length="2"
            class="text-xl w-full border rounded-md p-2 text-[#141414] font-semibold placeholder:text-[#716F6F] outline-[#854DFF]" />
        </div>
        <div class="container-input flex flex-col gap-1">
          <label for="month">MONTH</label>
          <input
            id="month-input"
            type="text"
            data-length="2"
            placeholder="MM"
            class="text-xl w-full border rounded-md p-2 text-[#141414] font-semibold placeholder:text-[#716F6F] outline-[#854DFF]" />
        </div>
        <div class="container-input flex flex-col gap-1">
          <label for="year">YEAR</label>
          <input
            id="year-input"
            type="text"
            placeholder="YYYY"
            data-length="4"
            class="text-xl w-full border rounded-md p-2 text-[#141414] font-semibold placeholder:text-[#716F6F] outline-[#854DFF]" />
        </div>
      </div>
      <div class="relative py-16 md:py-12">
        <div class="h-[1px] bg-[#F0F0F0] w-full"></div>
        <button
          class="bg-[#854DFF] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 flex items-center justify-center rounded-full p-4 size-16 md:right-0 md:left-auto md:translate-x-1/2 md:me-5 hover:bg-[#141414] focus:bg-[#141414]">
          <img src="./assets/icon-arrow.svg" alt="" />
        </button>
      </div>
      <div id="age-container" class="flex flex-col gap-2">
        <div class="flex gap-3 items-center italic text-4xl md:text-6xl">
          <span id="years">--</span>
          <p>years</p>
        </div>
        <div class="flex gap-3 items-center italic text-4xl md:text-6xl">
          <span id="months">--</span>
          <p>months</p>
        </div>
        <div class="flex gap-3 items-center italic text-4xl md:text-6xl">
          <span id="days">--</span>
          <p>days</p>
        </div>
      </div>
    </main>
`;

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.onkeyup = (event) => {
    validateNumber(event);
  };
});

const button = document.querySelector("button");
const containersInputs = [...document.querySelectorAll(".container-input")];
button.onclick = () => {
  //metorna un array
  const results = containersInputs.map((container) => {
    //metodo que busca un input dentro de un container
    const input = container.querySelector("input");
    //metodo que valida si el input esta vacio
    const isValid = validateComplete(
      container,
      input,
      container.querySelector("label")
    );
    //retorna un objeto con el valor del input y si es valido o no
    return { isValid, value: input.value };
  });

  //recorre el array y si todos los valores son validos llama a la funcion calculateAge
  const allInputsValid = results.every((result) => result.isValid === true);
  if (allInputsValid) calculateAge(results);
};
