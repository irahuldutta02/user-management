import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AddUser = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "company") {
      setNewUser({
        ...newUser,
        company: {
          name: e.target.value,
        },
      });
    } else if (e.target.name === "street") {
      setNewUser({
        ...newUser,
        address: {
          ...newUser.address,
          street: e.target.value,
        },
      });
    } else if (e.target.name === "suite") {
      setNewUser({
        ...newUser,
        address: {
          ...newUser.address,
          suite: e.target.value,
        },
      });
    } else if (e.target.name === "city") {
      setNewUser({
        ...newUser,
        address: {
          ...newUser.address,
          city: e.target.value,
        },
      });
    } else if (e.target.name === "zipcode") {
      setNewUser({
        ...newUser,
        address: {
          ...newUser.address,
          zipcode: e.target.value,
        },
      });
    } else {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validate = (user) => {
    if (user.name === "") {
      return false;
    }
    if (user.username === "") {
      return false;
    }
    if (user.email === "") {
      return false;
    }
    if (user.phone === "") {
      return false;
    }
    if (user.website === "") {
      return false;
    }
    if (user.address.street === "") {
      return false;
    }
    if (user.address.suite === "") {
      return false;
    }
    if (user.address.city === "") {
      return false;
    }
    if (user.address.zipcode === "") {
      return false;
    }
    if (user.company.name === "") {
      return false;
    }
    return true;
  };

  const createUser = async (user) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/createuser/`,
        user
      );
    } catch (error) {
      console.error(error);
      toast.error("Error adding user");
    }
  };

  const handleSubmit = async (user) => {
    const validateUser = validate(user);
    if (validateUser) {
      await createUser(user);
      toast.success("User added successfully");
      navigate("/");
    } else {
      toast.error("Please fill all the fields");
      return;
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-primary flex justify-center items-start pt-20">
        <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 gap-4">
          <div className="bg-secondary w-full rounded-lg shadow-lg p-4 flex justify-center items-start flex-col text-accent-2 max-w-md gap-4">
            <div className="font-bold text-xl mb-4 w-full text-center">
              Add User
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Name:</span>{" "}
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Name"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Username:</span>{" "}
              <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Username"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Email:</span>{" "}
              <input
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Email"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Phone:</span>{" "}
              <input
                type="text"
                name="phone"
                value={newUser.phone}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Phone"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Website:</span>{" "}
              <input
                type="text"
                name="website"
                value={newUser.website}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Website"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Street:</span>{" "}
              <input
                type="text"
                name="street"
                value={newUser.address.street}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Street"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Suite:</span>{" "}
              <input
                type="text"
                name="suite"
                value={newUser.address.suite}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Suite"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">City:</span>{" "}
              <input
                type="text"
                name="city"
                value={newUser.address.city}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="City"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Zipcode:</span>{" "}
              <input
                type="text"
                name="zipcode"
                value={newUser.address.zipcode}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Zipcode"
              />
            </div>
            <div className="w-full flex justify-center items-start gap-2 flex-col">
              <span className="font-semibold text-orange-300">Company:</span>{" "}
              <input
                type="text"
                name="company"
                value={newUser.company.name}
                onChange={handleChange}
                className="bg-accent rounded-lg p-2 w-full outline-none text-primary font-semibold"
                placeholder="Company"
              />
            </div>
            <div className="flex justify-center w-full">
              <button
                onClick={() => {
                  handleSubmit(newUser);
                }}
                className="bg-accent-2 text-primary rounded-lg p-2 w-1/2"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
