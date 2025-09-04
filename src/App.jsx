import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import ListEmployee from "./components/listEmployee";

function App() {
  return (
    <div className="text-center">
      <Header></Header>
      <ListEmployee></ListEmployee>
      <Footer></Footer>
    </div>
  );
}

export default App;
