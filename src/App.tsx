import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";

const colors = {
  red: {
    100: "#E54D54",
    200: "#D01C25",
  },
  green: {
    100: "#80D579",
    200: "#35B52A",
  },
  purple: {
    100: "#E0AAFF",
    200: "#C77DFF",
    300: "#9D4EDD",
    400: "#7B2CBF",
    500: "4F2682",
  },
};

const theme = extendTheme({
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
  colors,
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
