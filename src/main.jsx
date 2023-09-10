import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
const root = document.getElementById("root");
const rootContainer = createRoot(root);
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icon.min.css";
import Context from "./utils/Context.jsx";
import "./global.css";


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "hi", "ch", "kr","bn"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/local/{{lng}}/translation.json",
    },
  });

const loading = (
  <div className="py-4 text-center">
    <h3>Rukiye jara...</h3>
  </div>
);

rootContainer.render(
  <Context>
    <Suspense fallback={loading}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </Context>
);
