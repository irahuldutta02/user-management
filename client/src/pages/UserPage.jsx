import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//       }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//   }
// }

export const UserPage = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = response.data;
        setUser(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <>
      {!loading && !error && Object.keys(user).length > 0 && (
        <div className="h-screen w-screen bg-primary flex justify-center items-start pt-20">
          <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 ">
            <div className="bg-secondary rounded-lg shadow-lg p-6 flex justify-center items-start flex-col text-accent-2 w-full max-w-96">
              <div className="font-bold text-xl mb-4 text-center w-full">
                {user?.name}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-orange-300">Username:</span>{" "}
                {user?.username}
              </div>

              <div className="mb-2">
                <span className="font-semibold text-orange-300">Address:</span>{" "}
                {user?.address?.street}, {user?.address?.suite},{" "}
                {user?.address?.city}, {user?.address?.zipcode}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-orange-300">Email:</span>{" "}
                {user?.email}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-orange-300">Phone:</span>{" "}
                {user?.phone}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-orange-300">Website:</span>{" "}
                {user?.website}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-orange-300">Company:</span>{" "}
                {user?.company?.name}
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="h-screen w-screen bg-primary flex justify-center items-start pt-20">
          <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 ">
            <div className="text-4xl font-bold text-orange-300">
              User not found
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="h-screen w-screen bg-primary flex justify-center items-start pt-20">
          <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 ">
            <div className="text-4xl font-bold text-accent-2">Loading...</div>
          </div>
        </div>
      )}
    </>
  );
};
