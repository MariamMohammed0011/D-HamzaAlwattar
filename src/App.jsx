import { useState } from "react";
import ScreenSplach from "./components/Auth/ScreenSplach";
import Login from "./components/Auth/Login"
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <ScreenSplach onFinish={() => setShowSplash(false)} />
  ) : (
    <Login />
  );
}