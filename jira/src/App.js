import Login from "./Login"
import Dashboard from "./Dashboard"
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import {home} from  "./components/home"
import App from "./App";

/*
const code = new URLSearchParams(window.location.search).get("code")
function App() {
  
    return code ? <Dashboard code={code} /> : <Login />
}

export default App; */

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
