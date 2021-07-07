import "./App.css";
import SignIn from "./Components/SignIn";
import Chat from "./Components/Chat";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
