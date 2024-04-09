function validateNumber(element) {
  const inputValue = element.target.value;

  if (isNaN(inputValue)) {
    element.target.value = inputValue.slice(0, -1);
  }
}

function validateComplete(container, element, title) {
  const message = container.querySelector("h6");
  const message2 = container.querySelector("h5");
  if (message2) message2.remove();
  if (element.value === "") {
    if (!message) {
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
    }
  } else {
    if (message && message2) {
      element.classList.remove("border-[#FF5757]");
      title.classList.remove("text-[#FF5757]");
      message.remove();
    }
    // llama si los datos no estan vacios
    validateDays(element, container, title);
  }
}

function validateDays(element, container, title) {
  const message = container.querySelector("h5");
  const message2 = container.querySelector("h6");
  const attribute = title.getAttribute("for");
  if (message2) message2.remove();
  if (!(Number(element.getAttribute("data-length")) === element.value.length)) {
    if (!message) {
      const message = document.createElement("h5");
      message.classList.add(
        "text-[#FF5757]",
        "mt-1",
        "italic",
        "text-xs",
        "leading-2"
      );
      element.classList.add("border-[#FF5757]");
      title.classList.add("text-[#FF5757]");
      message.innerHTML = "Must be a valid " + attribute;
      container.appendChild(message);
    }
  } else {
    switch (attribute) {
      case "day":
        if (Number(element.value) <= 31 && Number(element.value) > 0) {
          console.log("entro");
          element.classList.remove("border-[#FF5757]");
          title.classList.remove("text-[#FF5757]");
          if (message) message.remove();
        }
        break;
      case "month":
        if (Number(element.value) <= 12 && Number(element.value) >= 1) {
          element.classList.remove("border-[#FF5757]");
          title.classList.remove("text-[#FF5757]");
          if (message) message.remove();
        }
        break;
      case "year":
        if (
          Number(element.value) >= 1900 &&
          Number(element.value) <= new Date().getFullYear()
        ) {
          console.log("entro");
          element.classList.remove("border-[#FF5757]");
          title.classList.remove("text-[#FF5757]");
          if (message) message.remove();
        }
        break;
    }
  }
}

function addErrorMessage(){
  
}