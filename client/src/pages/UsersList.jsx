import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const UsersList = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const filteredUsers = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/getusers/`
        );
        setUser(response?.data?.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/delete/${id}`
      );

      const newUsers = user.filter(
        (user) => user._id !== response?.data?.data?._id
      );
      setUser(newUsers);

      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Something went wrong while deleting user!");
    }
  };

  return (
    <>
      {!loading && !error && user.length > 0 && (
        <div className="min-h-screen w-screen bg-primary flex justify-center items-start pt-20">
          <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 gap-4">
            <div className="text-3xl text-center font-bold text-accent-2 w-full">
              User List
            </div>

            <div className="flex w-full items-center justify-end gap-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-secondary text-accent-2 px-4 py-2 rounded-lg focus:outline-none outline-none"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    navigate("/adduser");
                  }}
                  className="bg-secondary text-accent-2 px-4 py-2 rounded-lg font-medium"
                >
                  Add User
                </button>
              </div>
            </div>

            <div className="flex w-full">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-accent-2">
                  <thead className="text-xs uppercase bg-accent text-primary">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Company
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user._id} className="border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-accent-2 whitespace-nowrap "
                        >
                          {user.name}
                        </th>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.company.name}</td>
                        <td className="px-6 py-4 text-center flex justify-center items-center gap-2">
                          <a
                            onClick={() => {
                              navigate(`/user/${user._id}`);
                            }}
                            className="font-medium text-blue-600  hover:underline cursor-pointer"
                          >
                            View
                          </a>
                          <a
                            onClick={() => {
                              navigate(`/updateuser/${user._id}`);
                            }}
                            className="font-medium text-yellow-600  hover:underline cursor-pointer"
                          >
                            Edit
                          </a>
                          <a
                            onClick={() => {
                              deleteUser(user._id);
                            }}
                            className="font-medium text-red-600  hover:underline cursor-pointer"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                    {filteredUsers.length === 0 && (
                      <tr className="border-b">
                        <td
                          colSpan="4"
                          className="px-6 py-4 font-medium text-accent-2 whitespace-nowrap text-center"
                        >
                          No users found with the search term
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && user.length === 0 && (
        <div className="min-h-screen w-screen bg-primary flex justify-center items-start pt-20">
          <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 gap-4">
            <div className="text-3xl text-center font-bold text-accent-2 w-full">
              User List
            </div>

            <div className="flex w-full">
              <div className="flex justify-end w-full">
                <button
                  onClick={() => {
                    navigate("/adduser");
                  }}
                  className="bg-secondary text-accent-2 px-4 py-2 rounded-lg font-medium"
                >
                  Add User
                </button>
              </div>
            </div>

            <div className="flex w-full">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-accent-2">
                  <thead className="text-xs uppercase bg-accent text-primary">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Company
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td
                        colSpan="4"
                        className="px-6 py-4 font-medium text-accent-2 whitespace-nowrap text-center"
                      >
                        No users found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="h-screen w-screen bg-primary flex justify-center items-center">
          <div className="text-3xl text-accent-2 p-4 text-center">
            Loading...
          </div>
        </div>
      )}

      {error && (
        <div className="h-screen w-screen bg-primary flex justify-center items-center">
          <div className="text-3xl  p-4 text-center text-orange-300">
            Something went wrong while fetching data!
          </div>
        </div>
      )}
    </>
  );
};
