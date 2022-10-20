import { UserProvider } from "../contexts/userContext";
import { RoutesMain } from "../routes";
import { ToastContainer } from "react-toastify";
import { PasswordView } from "../contexts/viewPasswordContext";

function App() {
  return (
    <>
      <ToastContainer />

      <UserProvider>
        <PasswordView>
          <RoutesMain />
        </PasswordView>
      </UserProvider>
    </>
  );
}

export default App;
