
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/Homepage";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { use } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { useProductStore } from "./store/product";
function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;

