import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Appbar from "./Component/Appbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
