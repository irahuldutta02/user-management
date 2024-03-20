import { useNavigate } from "react-router-dom";

export const ErrorPage = ({ status, message }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen w-screen bg-primary flex justify-center items-start pt-20">
        <div className="flex justify-center flex-col items-center w-full max-w-6xl p-4 ">
          <div className="flex flex-col gap-4 justify-end items-center">
            <div className="text-9xl font-bold text-orange-300">{status}</div>
            <div className="text-4xl font-bold text-orange-300">{message}</div>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="px-2 py-1 bg-orange-300 text-primary rounded-md font-bold"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
