import "../App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import DescriptionCard from "../components/DescriptionCard";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main-layout">
        <DescriptionCard />
      </div>
      <div className="main-layout">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
