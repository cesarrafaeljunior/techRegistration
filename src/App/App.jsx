import { UserProvider } from "../contexts/userContext";
import { RoutesMain } from "../routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />

      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
