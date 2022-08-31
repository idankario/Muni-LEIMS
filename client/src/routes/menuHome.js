import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { TypeOffice } from "../Api";

const MenuMinistryConfig = [
  {
    title: "TOP/LAST RATED MUNICIPALITIES",
    path: "/municipalities",
  },
  {
    title: "STATISTICAL REPORTS MUNICIPALITIES",
    path: "/StatisticalReportsMunicipalties",
  },
  {
    title: "VISUALIZED MAP",
    path: "/map",
  },
];
const MenuMunicipalityConfig = [
  {
    title: "TOP/LAST RATED SWITCHBOARDS",
    path: "/toplast",
  },
  {
    title: "STATISTICAL REPORTS",
    path: "/statisticalReports",
  },
  {
    title: "UPLOAD IMAGE",
    path: "/imgUpload",
  },
  {
    title: "UPDATE/INSERT SWITCHBOARDS",
    path: "/switchboards",
  },
  {
    title: "VISUALIZED MAP",
    path: "/map",
  },
  {
    title: "STREETLIGHT DISTANCE COMPOTATION",
    path: "/imagelist",
  },
];
function MenuHome() {
  const navigate = useNavigate();
  const [menuConfig, setMenuConfig] = useState([{}]);
  useEffect(() => {
    async function getDataDB() {
      const typeOffice = await TypeOffice();
      if (typeOffice) setMenuConfig(MenuMinistryConfig);
      else setMenuConfig(MenuMunicipalityConfig);
    }
    getDataDB();
  }, []);

  return (
    <section>
      {menuConfig.map((navigation) => (
        <Button
          onClick={() => navigate(navigation.path)}
          key={`${navigation.path}`}
        >
          <h2>{navigation.title} </h2>
        </Button>
      ))}
    </section>
  );
}
export default MenuHome;
