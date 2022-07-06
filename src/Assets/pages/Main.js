import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Main = () => {
  return <>
    <CssBaseline />
    <Navbar />
    <Outlet />
  </>;
};

export default Main;