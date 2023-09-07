import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import Alert from "./Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleShowAlert } from "./store/slices/alertSlice";
import { changeStyle } from "./store/slices/myStyleSlice";
import { changeBtnStyle } from "./store/slices/btnStyleSlice";
import { setTextAreaStyle } from "./store/slices/textAreaStyle";
import { setAboutCompStyle } from "./store/slices/aboutCompStyleSlice";

function App() {
  const removeClass = () => {
    document
      .getElementById("navbar")
      .classList.remove(
        "bg-danger",
        "bg-success",
        "bg-primary",
        "navbar-light",
        "bg-light",
        "bg-dark",
        "navbar-dark"
      );
  };
  const addClass = (bgClass, navBarType, bodyBgColor) => {
    document.getElementById("navbar").classList.add(bgClass, navBarType);
    document.body.style.backgroundColor = bodyBgColor;
  };

  const dispatch = useDispatch();

  const combinedAllFunctions = (
    navBarBg,
    navBarType,
    bodyBg,
    alrtMsg,
    alrtType,
    homeFontColor,
    btnColor,
    textAreaBg,
    textAreaTextColor,
    aboutCompBg,
    aboutCompTextColor
  ) => {
    removeClass();
    addClass(navBarBg, navBarType, bodyBg);
    dispatch(handleShowAlert(alrtMsg, alrtType));
    dispatch(changeStyle(homeFontColor));
    dispatch(changeBtnStyle(btnColor));
    dispatch(
      setTextAreaStyle({
        backgroundColor: textAreaBg,
        color: textAreaTextColor,
      })
    );
    dispatch(
      setAboutCompStyle({
        backgroundColor: aboutCompBg,
        color: aboutCompTextColor,
      })
    );
  };
  const themeChanger = (cls) => {
    switch (cls) {
      case "light":
        combinedAllFunctions(
          "bg-light",
          "navbar-light",
          "white",
          "Light theme enabled",
          "success!",
          "black",
          "primary",
          "white",
          "black",
          "white",
          "black"
        );

        break;
      case "dark":
        combinedAllFunctions(
          "bg-dark",
          "navbar-dark",
          "#1d304c",
          "Dark theme enabled",
          "success!",
          "white",
          "dark",
          "black",
          "white",
          "#1d304c",
          "white"
        );

        break;
      case "primary":
        combinedAllFunctions(
          "bg-primary",
          "navbar-dark",
          "#14aff1",
          "Blue theme enabled",
          "success!",
          "red",
          "primary",
          "#cee3ff",
          "black",
          "#14aff1",
          "white"
        );

        break;
      case "danger":
        combinedAllFunctions(
          "bg-danger",
          "navbar-dark",
          "rgb(255 155 165)",
          "Red theme enabled",
          "success!",
          "green",
          "danger",
          "rgb(255 228 230)",
          "black",
          "rgb(255 155 165)",
          "white"
        );

        break;
      case "success":
        combinedAllFunctions(
          "bg-success",
          "navbar-dark",
          "#84ffc6",
          "Green theme enabled",
          "success!",
          "blue",
          "success",
          "#c7ffe5",
          "black",
          "#84ffc6",
          "white"
        );

        break;
      default:
        break;
    }
  };
  return (
    <>
      <Router>
        <Navbar theme={themeChanger} />
        <Alert />
        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/textForm" element={<TextForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
