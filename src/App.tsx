import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";


function App() {
  return (
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/contacts" element={<Contacts/>}/>

</Routes>
  );
}

export default App;
