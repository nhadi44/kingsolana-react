import { Route, Routes } from "react-router-dom";
// Page Imported
import Home from "../src/pages/index";
import NotFound from "../src/pages/404";
// Component Imported

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
