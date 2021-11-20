import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import LoginPage from "./components/pages/LoginPage";
import Screening from "./components/pages/Screening";
import Overview from "./components/pages/Overview";
import FullReview from "./components/pages/FullReview";

const colors = {
  red: "#E54D54",
  green: "#25B718",
  purple: {
    100: "#E0AAFF",
    200: "#C77DFF",
    300: "#9D4EDD",
    400: "#7B2CBF",
    500: "4F2682",
  }
}

const theme = extendTheme({ colors })


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Screening />} />
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
