import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import LoginPage from "./components/pages/LoginPage";
import Screening from "./components/pages/Screening";
import Overview from "./components/pages/Overview";
import FullReview from "./components/pages/FullReview";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/screening" element={<Screening />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/fullreview" element={<FullReview />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
