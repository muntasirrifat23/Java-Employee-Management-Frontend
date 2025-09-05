import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Footer from "./components/Footer";
import Header from "./components/header";
import { Outlet, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ListEmployee from "./components/listEmployee";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<ListEmployee></ListEmployee>}></Route>
          <Route path="/employee" element={<ListEmployee></ListEmployee>}></Route>
          <Route path="/add-employee" element={<AddEmployee></AddEmployee>}></Route>
          <Route path="/update-employee/:id" element={<AddEmployee></AddEmployee>}></Route>
        </Routes>
        <Outlet></Outlet>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
