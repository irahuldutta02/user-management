import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UsersList = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {!loading && !error && user.length > 0 && (
        <div className="min-h-screen w-screen bg-primary flex justify-center items-start pt-20">
          <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 gap-4">
            <div className="text-3xl text-center font-bold text-accent-2 w-full">
              User List
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
                    {user.map((user) => (
                      <tr key={user.id} className="border-b">
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
                              navigate(`/user/${user.id}`);
                            }}
                            className="font-medium text-blue-600  hover:underline cursor-pointer"
                          >
                            View
                          </a>
                          <a className="font-medium text-yellow-600  hover:underline cursor-pointer">
                            Edit
                          </a>
                          <a className="font-medium text-red-600  hover:underline cursor-pointer">
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
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
