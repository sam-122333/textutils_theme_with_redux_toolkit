import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleShowAlert } from "./store/slices/alertSlice";
import { changeStyle } from "./store/slices/myStyleSlice";
import { changeBtnStyle } from "./store/slices/btnStyleSlice";
import { setTextAreaStyle } from "./store/slices/textAreaStyleSlice";
import { setAboutCompStyle } from "./store/slices/aboutCompStyleSlice";

const Navbar = (props) => {
  const manageClass = (bgClass, navBarType, bodyBgColor) => {
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
    manageClass(navBarBg, navBarType, bodyBg);
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
          "red"
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
          "green"
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
          "blue"
        );

        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/textForm">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div
            className="bg-light rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid black",
            }}
            onClick={() => {
              themeChanger("light");
            }}
          ></div>
          <div
            className="bg-dark rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              themeChanger("dark");
            }}
          ></div>
          <div
            className="bg-primary rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              themeChanger("primary");
            }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              themeChanger("danger");
            }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              themeChanger("success");
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// again changed something
