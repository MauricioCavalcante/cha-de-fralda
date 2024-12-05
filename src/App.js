import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return(
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
