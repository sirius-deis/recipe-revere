import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/Loader";
import EmptyLayout from "./layouts/EmptyLayout";
import RootLayout from "./layouts/RootLayout";
import ApolloAppProvider from "./components/apollo/ApolloProvider";

const StartPage = lazy(() => import("./pages/startPage/StartPage"));
const SignInPage = lazy(() => import("./pages/signInPage/SignInPage"));
const SignUpPage = lazy(() => import("./pages/signUpPage/SignUpPage"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));
const ForgetPasswordPage = lazy(
  () => import("./pages/forgotPasswordPage/ForgotPasswordPage")
);
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const ProfilePage = lazy(() => import("./pages/profilePage/ProfilePage"));
const SingleRecipePage = lazy(
  () => import("./pages/singleRecipePage/SingleRecipePage")
);
const SearchPage = lazy(() => import("./pages/searchPage/SearchPage"));
const ShoppingListPage = lazy(
  () => import("./pages/shoppingListPage/ShoppingListPage")
);
const ShoppingListSinglePage = lazy(
  () => import("./pages/shoppingListSinglePage/ShoppingListSinglePage")
);

function App() {
  return (
    <ApolloAppProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmptyLayout />}>
            <Route
              path="/get-started"
              element={
                <Suspense fallback={<Loader />}>
                  <StartPage />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loader />}>
                  <SignInPage />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<Loader />}>
                  <SignUpPage />
                </Suspense>
              }
            />
            <Route
              path="/forgot"
              element={
                <Suspense fallback={<Loader />}>
                  <ForgetPasswordPage />
                </Suspense>
              }
            />
          </Route>
          <Route path="/" element={<RootLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<Loader />}>
                  <ProfilePage />
                </Suspense>
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={
                <Suspense fallback={<Loader />}>
                  <SingleRecipePage />
                </Suspense>
              }
            />
            <Route
              path="/search"
              element={
                <Suspense fallback={<Loader />}>
                  <SearchPage />
                </Suspense>
              }
            />
            <Route
              path="/shopping-list"
              element={
                <Suspense fallback={<Loader />}>
                  <ShoppingListPage />
                </Suspense>
              }
            />
            <Route
              path="/shopping-list/:recipeId"
              element={
                <Suspense fallback={<Loader />}>
                  <ShoppingListSinglePage />
                </Suspense>
              }
            />
          </Route>

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
    </ApolloAppProvider>
  );
}

export default App;
