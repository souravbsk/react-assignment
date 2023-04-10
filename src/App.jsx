import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <div>
        <Header></Header>
        <main className="mb-32">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
  );
}

export default App;
