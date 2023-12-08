import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page_1 from "./Pages/Page_1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page_1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
