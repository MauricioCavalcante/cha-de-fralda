// URL do arquivo CSV
const sheetURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIcHSOB0tDMHfNhxXyHM53vf1-iBAnORxinLpuGxoAFFyM7gs5RqPa8mvs034vO3xquYKbuErWjDps/pub?gid=0&single=true&output=csv";

// Função para carregar os dados da planilha
fetch(sheetURL)
  .then((response) => response.text())
  .then((csvData) => {
    // Converte o CSV em JSON usando a biblioteca PapaParse
    Papa.parse(csvData, {
      header: true,
      complete: function (results) {
        const items = results.data;
        const itensContainer = document.getElementById("itens");

        // Loop através dos itens da planilha
        items.forEach((item) => {
          const card = document.createElement("div");
          card.id = "card";

          const itemName = item["Item"];
          const itemImage = item["Links"];
          const itemQuantity = item["Quantidade maxima"];
          const itemValue = item["Valor"];
          const itemDonated = item["Doado"];
          const itemDonor = item["Presenteador"];

          // Estrutura do card
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
