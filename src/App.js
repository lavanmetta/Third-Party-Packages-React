import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Components/Charts/main";
import Home from "./Components/Home/Home";
import PopUp from "./Components/Popup/PopUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={ <Main/> } />
        <Route path="/popup" element={ <PopUp/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
