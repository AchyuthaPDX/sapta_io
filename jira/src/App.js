import Login from "./Login"
import Dashboard from "./Dashboard"
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from  "./components/home"


const code = new URLSearchParams(window.location.search).get("code")
function App() {
  
    // return code ? <Dashboard code={code} /> : <Login />


return(
  <BrowserRouter>
    <Routes>
     
      <Route path="/home" element={< Home />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;
