import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Appbar from "./Component/Appbar";
import { Box } from "@mui/material";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <Box sx={{
      p : {
        xs: 0,
        sm: 0,
        md: 0,
        lg: 1,
        xl: 1,
        xxl: 1,
      }
    }} >
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
