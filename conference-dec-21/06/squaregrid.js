const getTemplateCols = (size) => {
    let str = "";
    for (let i = 0; i < size; i++) {
      str += "auto ";
    }
    return str;
  };
  
  const input = document.querySelector("input");
  
  if (input) {
    input.addEventListener("change", (evt) => {
      const size = evt.target.value;
      const container = document.querySelector(".board-container");
      container.innerHTML = "";
      //  const containerStyle = getComputedStyle(container);
      container.style.gridTemplateColumns = getTemplateCols(size);
      for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
          const item = document.createElement("div");
          item.innerText = row * size + col;
          document.querySelector(".board-container").appendChild(item);
        }
      }
    });
  }
  