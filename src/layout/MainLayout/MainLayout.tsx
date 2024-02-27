import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main-layout">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
