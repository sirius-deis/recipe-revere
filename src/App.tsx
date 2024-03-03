import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const StartPage = lazy(() => import("./pages/startPage"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<StartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
