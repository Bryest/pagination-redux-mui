import { Provider } from "react-redux";
import "./App.css";
import compstore from "./Redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./Component/Company";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={compstore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Company></Company>}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-right"></ToastContainer>
      </Provider>
    </>
  );
}

export default App;
