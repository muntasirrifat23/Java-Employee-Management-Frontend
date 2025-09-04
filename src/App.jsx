import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Footer from "./components/Footer";
import Header from "./components/header";
import ListEmployee from "./components/ListEmployee";
import { Outlet, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<ListEmployee></ListEmployee>}></Route>
          <Route path="/employee" element={<ListEmployee></ListEmployee>}></Route>
          <Route path="/add-employee" element={<AddEmployee></AddEmployee>}></Route>
          <Route path="/" element={<ListEmployee></ListEmployee>}></Route>
        </Routes>
        <Outlet></Outlet>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
