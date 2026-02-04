# 👶 Chá de Fralda

> Uma aplicação web moderna e interativa para gerenciar chás de fralda com lista de presentes em tempo real, doações via PIX integradas e confirmação de presença digital.

![Status do Projeto](https://img.shields.io/badge/status-ativo-success.svg)
![Licença](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 Sobre

**Chá de Fralda** é uma solução digital projetada para modernizar a experiência tradicional de chás de bebê. Ele resolve problemas comuns como presentes duplicados e gestão complexa de convidados, oferecendo uma plataforma centralizada onde os convidados podem:

*   Visualizar uma lista interativa de presentes disponíveis.
*   "Comprar" presentes simbolicamente via doação PIX (perfeito para convidados remotos ou contribuições em dinheiro).
*   Confirmar presença (RSVP) informando a quantidade de acompanhantes.
*   Visualizar o local do evento e detalhes.

Construído com uma abordagem **serverless** para o backend usando Google Apps Script, o projeto demonstra como criar aplicações full-stack escaláveis e econômicas com React.

## ✨ Funcionalidades Principais

*   **🎁 Lista de Presentes Interativa**: Rastreamento em tempo real dos presentes disponíveis. Itens são automaticamente marcados como "Esgotado" ou desabilitados assim que a quantidade limite é atingida.
*   **💸 Doações Simplificadas**: Integração de um clique para doações PIX. Os convidados podem selecionar um presente e ver imediatamente o QR Code/Chave Copia e Cola para pagamento.
*   **📅 RSVP Digital**: Formulário simples para os convidados confirmarem presença e indicarem o número de acompanhantes.
*   **📍 Detalhes do Evento**: Visualização integrada do Google Maps para facilitar a localização.
*   **📱 Totalmente Responsivo**: Otimizado para visualização detalhada em desktops e interações rápidas em dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

### Frontend
*   **[React.js](https://reactjs.org/)**: Arquitetura de UI baseada em componentes.
*   **[Bootstrap 5](https://getbootstrap.com/)**: Layout responsivo e componentes pré-construídos (Modals, Cards).
*   **[Styled Components](https://styled-components.com/)**: CSS-in-JS escopado para estilização personalizada e temas.
*   **[Axios](https://axios-http.com/)**: Cliente HTTP baseado em Promises para requisições API.
*   **`react-qrcode-pix`**: Biblioteca especializada para gerar QR codes de pagamento instantâneo PIX.

### Backend & Banco de Dados
*   **[Google Apps Script](https://developers.google.com/apps-script)**: Atua como um backend serverless para lidar com requisições GET/POST.
*   **[Google Sheets](https://www.google.com/sheets/about/)**: Utilizado como um banco de dados leve e fácil de gerenciar para armazenar dados dos presentes e confirmações.

## 🚀 Como Começar

Siga estes passos para rodar o projeto localmente.

### Pré-requisitos
*   Node.js (v14 ou superior)
*   npm

### Instalação

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/seu-usuario/cha-de-fralda.git
    cd cha-de-fralda
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    # ou
    npm i
    ```

3.  **Configuração de Ambiente**
    Crie um arquivo `.env` na raiz do projeto e adicione a URL do seu Web App no backend:
    ```env
    REACT_APP_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
    ```
    *(Nota: O backend requer uma implementação do Google Apps Script implantada que sirva os dados JSON dos presentes e aceite requisições POST para RSVP)*

4.  **Rode a aplicação**
    ```bash
    npm start
    ```
    O app abrirá em modo de desenvolvimento em [http://localhost:3000](http://localhost:3000).

## 📂 Estrutura do Projeto

```bash
src/
├── components/       # Componentes de UI reutilizáveis
│   ├── GiftList.js       # Lógica principal para buscar e exibir presentes
│   ├── DonationModal.js  # Modal para pagamentos PIX
│   ├── PresenceModal.js  # Formulário para RSVP
│   ├── QRCodeComponent.js # Wrapper para geração do QR Code PIX
│   └── ...
├── pages/
│   └── Home.js           # Página principal (Landing page)
├── styles/           # Estilos globais e temas
└── App.js            # Ponto de entrada da aplicação
```

## 🤝 Contato

Criado por **Mauricio Cavalcante** - [@omauricio.dev](https://instagram.com/omauricio.dev)

---
*Se você achou este projeto útil, por favor dê uma estrela no GitHub!* ⭐️
