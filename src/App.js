import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Components/Charts/main";
import Home from "./Components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={ <Main/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
