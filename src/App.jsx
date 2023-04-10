import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import { createContext } from "react";
import Footer from "./Components/Footer/Footer";

export const JobsContext = createContext([]);
function App() {
  const jobsData = "hello"
  return (
    <JobsContext.Provider value={jobsData}>
      <div>
        <Header></Header>
        <main className="mb-32">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </JobsContext.Provider>
  );
}

export default App;
