import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="fixed w-full flex justify-center items-center p-4 bg-secondary z-50">
        <div className="flex justify-between items-center w-full max-w-6xl">
          <div className="text-3xl font-bold text-accent-2">
            <Link to="/">User Management</Link>
          </div>
        </div>
      </div>
    </>
  );
};
