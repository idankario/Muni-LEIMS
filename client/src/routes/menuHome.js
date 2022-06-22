import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { TypeOffice } from "../Api";

import { H2 } from "../components/h2";

const MenuMinistryConfig = [
  {
    title: "TOP/LAST MUNICIPALITIES",
    path: "/municipalities",
  },

  {
    title: "STATISTICAL REPORTS MUNICIPALITIES",
    path: "/StatisticalReportsMunicipalties",
  },
  {
    title: "VISUALIZED MAP",
    path: "/mappage",
  },
  // {
  //   title: "MANAGE USERS",
  //   path: "/mangeuser",
  // },
];
const MenuMunicipalityConfig = [
  {
    title: "TOP/LAST SWITCHBOARDS",
    path: "/switchboards",
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
    title: "VISUALIZED MAP",
    path: "/mappage",
  },
  // {
  //   title: "MANAGE USERS",
  //   path: "/mangeuser",
  // },
];
function MenuHome() {
  const navigate = useNavigate();
  const [menuConfig, setMenuConfig] = useState([{}]);
  useEffect(() => {
    function getDataDB() {
      const typeOffice = TypeOffice();
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
          <H2>{navigation.title} </H2>
        </Button>
      ))}
    </section>
  );
}
export default MenuHome;
