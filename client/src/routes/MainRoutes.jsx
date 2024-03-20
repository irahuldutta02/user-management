import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { UsersList } from "../pages/UsersList";
import { UserPage } from "../pages/UserPage";
import { AddUser } from "../pages/AddUser";
import { EditUser } from "../pages/EditUser";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/adduser/" element={<AddUser />} />
        <Route path="/updateuser/:id" element={<EditUser />} />
        <Route
          path="*"
          element={<ErrorPage status={"404"} message={"Page Not Found"} />}
        />
      </Routes>
    </>
  );
};
