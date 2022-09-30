import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import UserPage from "./pages/UserData/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/userdata" element={<UserPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
