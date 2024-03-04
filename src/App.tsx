import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/Loader";
import EmptyLayout from "./layouts/emptyLayout";
import RootLayout from "./layouts/rootLayout";

const StartPage = lazy(() => import("./pages/startPage/startPage"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EmptyLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <StartPage />
              </Suspense>
            }
          />
        </Route>
        <Route path="/" element={<RootLayout />}></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
