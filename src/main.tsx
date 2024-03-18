import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { store } from "./redux/index.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
