import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoadingPage from "./Components/LoadingPage/LoadingPage";

function App() {
  const navigation = useNavigation();
  console.log();
  return (
      <div>
        <Header></Header>
        {navigation.state === "loading" && <LoadingPage></LoadingPage>}
        <main className="md:mb-32 mb-8">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
  );
}

export default App;
