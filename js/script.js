fetch('/config')
  .then((response) => response.json())
  .then((config) => {
    const sheetURL = config.sheetURL; 
    
    fetch(sheetURL)
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          complete: function (results) {
            const items = results.data;
            const itensContainer = document.getElementById("itens");

            items.forEach((item) => {
              const card = document.createElement("div");
              card.id = "card";

              const itemName = item["Item"];
              const itemQuantity = item["Quantidade maxima"];
              const itemValue = item["Valor"];

              card.innerHTML = `
                <div><h3><strong>${itemName}</strong></h3></div>
                <p><strong>${itemQuantity}</strong></p>
                <p><strong>Valor:</strong> ${itemValue}</p>
                <button>
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">Button</span>
                </button>
              `;

              itensContainer.appendChild(card);
            });
          },
        });
      })
      .catch((error) => console.error("Erro ao carregar os dados:", error));
  });
