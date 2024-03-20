import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./routes/MainRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
