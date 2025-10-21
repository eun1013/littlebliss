import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import TopMenu from "./components/TopMenu/TopMenu";
import MainPage from "./components/MainPage/MainPage";


const App = () => {

  return (
    <BrowserRouter>
    <TopMenu/>
    <div>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;