function validateNumber(element) {
  const inputValue = element.target.value;

  if (isNaN(inputValue)) {
    element.target.value = inputValue.slice(0, -1);
  }
}

function validateComplete(container, element, title) {
  removeMessage(container);
  if (element.value === "") {
    // llama si los datos estan vacios para colocar un mensage o un borde rojo
    setMessage(container, title, true, element);
  } else {
    // llama si los datos no estan vacios
    return validateDays(element, container, title);
  }
}

function validateDays(element, container, title) {
  removeMessage(container);
  const attribute = title.getAttribute("for");
  // limites de los atributos
  const attributeLimits = {
    day: [1, 31],
    month: [1, 12],
    year: [1900, new Date().getFullYear()],
  };
  // si el atributo esta en los limites
  if (attribute in attributeLimits) {
    // destructuring de los limites
    const [min, max] = attributeLimits[attribute];
    if (!isBtwn(Number(element.value), min, max)) {
      // llama si los datos no estan en los limites
      setMessage(container, title, false, element, attribute);
      return false;
    }
  }

  removeStyle(container, title);
  return true;
}

function removeMessage(container) {
  const message = container.querySelector("h6");
  if (message) message.remove();
}
function removeStyle(container, title) {
  container.querySelector("input").classList.remove("border-[#FF5757]");
  title.classList.remove("text-[#FF5757]");
}

function isBtwn(val, min, max) {
  if (val >= min && val <= max) return true;
}

function setMessage(container, title, empty, element, attribute = "") {
  if (empty) {
    const message = document.createElement("h6");
    message.innerHTML = "This field is required";
    message.classList.add(
      "text-[#FF5757]",
      "mt-1",
      "italic",
      "text-xs",
      "leading-2"
    );
    container.appendChild(message);
    element.classList.add("border-[#FF5757]");
    title.classList.add("text-[#FF5757]");
  } else {
    const message = document.createElement("h6");
    message.innerHTML = "Must be a valid " + attribute;
    message.classList.add(
      "text-[#FF5757]",
      "mt-1",
      "italic",
      "text-xs",
      "leading-2"
    );
    container.appendChild(message);
    element.classList.add("border-[#FF5757]");
    title.classList.add("text-[#FF5757]");
  }
}

function calculateAge(results) {
  const year = results[2].value;
  const month = results[1].value;
  const day = results[0].value;

  if (!validateDate(day, month, year)) return;

  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  let prevMothCalc=false;

  //calcular la diferencia en milisegundos
  const differenceInMs = currentDate - birthDate;

  //convertir milisegundos a dias que es 1000 milisegundos por 60 segundos por 60 minutos por 24 horas
  const msInDay = 1000 * 60 * 60 * 24;
  const msInYear = msInDay * 365.25;
  //math.floor redondea hacia abajo, se divide porque se quiere saber cuantos años son con milisegundos en un year y el residuo se guarda en remainingMs
  const yearsAge = Math.floor(differenceInMs / msInYear);
  const remainingMs = differenceInMs % msInYear;
  //se divide porque se quiere saber cuantos meses son con el residuo de los years se divide por 30.44 porque es el promedio de dias en un mes
  const monthsAge = Math.floor(remainingMs / (msInDay * 30.44));
  //el residuo de los meses se divide por los dias en un mes para saber cuantos dias son y se redondea hacia abajo
  const daysAge = Math.floor((remainingMs % (msInDay * 30.44)) / msInDay);

  print(yearsAge, monthsAge, daysAge);
}

function print(yearsAge, monthsAge, daysAge) {
  const years = document.getElementById("years");
  years.innerHTML = yearsAge;
  const months = document.getElementById("months");
  months.innerHTML = monthsAge;
  const days = document.getElementById("days");
  days.innerHTML = daysAge;
}

function validateDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === Number(day) &&
    date.getMonth() === Number(month - 1) &&
    date.getFullYear() === Number(year)
  );
}
