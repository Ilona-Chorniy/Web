(function(global) {
    const getInfo = (what) => {
      fetch(`${what}.json`)
        .then((response) => response.json())
        .then((jsonObject) => {
          createInfo(jsonObject);
        })
        .catch((error) => console.error("Помилка:", error));
    };
  
    const getRadians = (degrees) => {
      return degrees * (Math.PI / 180);
    };
  
    const createInfo = ({ name, description, image_name }) => {
      let content = document.getElementById("content");
      content.innerHTML = "";
  
      let nameDiv = document.createElement("div");
      nameDiv.style.marginTop = 10 + "px";
      nameDiv.style.fontWeight = "bold";
      nameDiv.style.fontSize = 20 + "px";
      content.appendChild(nameDiv);
      nameDiv.textContent = `${name}`;
  
      let img = document.createElement("img");
      img.style.marginTop = 10 + "px";
      content.appendChild(img);
      img.setAttribute("src", `${image_name}`);
  
      let descriptionDiv = document.createElement("div");
      descriptionDiv.style.marginTop = 10 + "px";
      content.appendChild(descriptionDiv);
      descriptionDiv.textContent = `${description}`;
    };
  
    const buttons = (rofl) => {
      let oper1Value = parseFloat(oper1.value);
      let radians = getRadians(oper1Value);
      let result;
      switch (rofl) {
        case "sin":
          result = Math.sin(radians);
          break;
          case "log":
            if (oper1Value == 0 || oper1Value < 0) {
                document.getElementById("res").textContent = "Result: operand 1 is less or equal to"
                return;
            }
            result = Math.log(oper1Value);
            break;
        
          result = Math.log(oper1Value);
          break;
        case "tan":
          result = Math.tan(radians);
          break;
      }
      if (isNaN(oper1Value) || oper1.value.trim() === "") {
        document.getElementById("res").textContent = "Result: please enter a valid number.";
        document.getElementById("content").innerHTML = "";
        return;
      }
      document.getElementById("res").textContent = `Result: ${result}`;
      getInfo(rofl);
    };
  
    let oper1 = document.getElementById("op1");
  
    document.getElementById("log-button").addEventListener("click", () => {
      buttons("log");
    });
  
    document.getElementById("sin-button").addEventListener("click", () => {
      buttons("sin");
    });
  
    document.getElementById("tan-button").addEventListener("click", () => {
      buttons("tan");
    });

    document.getElementById("add-button").addEventListener("click", () => {
      getFunc("add");
    });

    document.getElementById("sub-button").addEventListener("click", () => {
      getFunc("sub");
    });

    document.getElementById("mul-button").addEventListener("click", () => {
      getFunc("mul");
    });

    document.getElementById("div-button").addEventListener("click", () => {
      getFunc("div");
    });
})(window);

(function(global) {
  let oper1 = document.getElementById("op1");
  let oper2 = document.getElementById("op2");

  const getFunc = (AAA) => {
    let oper1Value = parseFloat(oper1.value);
    let oper2Value = parseFloat(oper2.value);
    let result;
    if (isNaN(oper1Value) || isNaN(oper2Value) || oper1.value.trim() === "") {
      document.getElementById("res").textContent = "Result: please enter a valid number.";
      document.getElementById("content").innerHTML = "";
      return;
    }
    switch (AAA) {
      case "add":
        result = oper1Value + oper2Value;
        break;
      case "mul":
        result = oper1Value * oper2Value;
        break;
      case "sub":
        result = oper1Value - oper2Value;
        break;
      case "div":
        result = oper1Value / oper2Value;
        if (oper2Value === 0) {
          result = "operand 2 is equal to 0";
        }
        break;
    }

    document.getElementById("res").textContent = `Result: ${result}`;
  };
  document.getElementById("add-button").addEventListener("click", () => {
    getFunc("add");
  });

  document.getElementById("sub-button").addEventListener("click", () => {
    getFunc("sub");
  });

  document.getElementById("mul-button").addEventListener("click", () => {
    getFunc("mul");
  });

  document.getElementById("div-button").addEventListener("click", () => {
    getFunc("div");
  });
})(window);
