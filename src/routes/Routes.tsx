import React from "react";
import { useRoutes } from "react-router-dom";
import ContactPage from "../views/ContactPage";
import MainLayout from "../layout/MainLayout";
import VegetablePage from "../views/VegetablePage";
import FruitPage from "../views/FruitPage";

export const VEGETABLE_URL = "/vegetable";
export const FRUIT_URL = "/fruit";
export const CONTACT_URL = "/contact";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: VEGETABLE_URL,
          element: <VegetablePage />,
        },
        {
          path: FRUIT_URL,
          element: <FruitPage />,
        },
        {
          path: CONTACT_URL,
          element: <ContactPage />,
        },
      ],
    },
  ]);
}
