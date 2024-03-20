import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { UsersList } from "../pages/UsersList";
import { UserPage } from "../pages/UserPage";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route
          path="*"
          element={<ErrorPage status={"404"} message={"Page Not Found"} />}
        />
      </Routes>
    </>
  );
};
