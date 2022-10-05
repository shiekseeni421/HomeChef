import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import UserPage from "./pages/UserData/UserPage";
import TestimonialData from "./pages/testimonialPage/TestimonialData";
import Homepage from "./pages/home/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/home" element={<Homepage />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/userdata" element={<UserPage />}></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/testimonialdata"
          element={<TestimonialData />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
