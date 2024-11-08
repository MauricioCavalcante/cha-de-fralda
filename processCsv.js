const axios = require('axios');
const fs = require('fs');
const Papa = require('papaparse');
require('dotenv').config();

// URL da planilha (protegida como variável de ambiente)
const sheetURL = process.env.SHEET_URL;

axios.get(sheetURL)
  .then(response => {
    const csvData = response.data;
    Papa.parse(csvData, {
      header: true,
      complete: function(results) {
        const items = results.data;
        // Salva os dados processados como JSON na pasta public/
        fs.writeFileSync('./public/data.json', JSON.stringify(items, null, 2));
        console.log('Dados processados e salvos em public/data.json');
      },
      error: function(error) {
        console.error('Erro ao processar CSV:', error);
      }
    });
  })
  .catch(error => {
    console.error('Erro ao acessar a URL da planilha:', error);
  });
