import { useState } from "react";
import "./App.css";

import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";

import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  console.log("App is using env file", import.meta.env.VITE_APPWRITE_URL); // "123"
  // console.log(import.meta.env.DB_PASSWORD); // undefined

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false)); // in place of catch we had used finally to setLoading false so that loading icon won't show after any other page open
  }, []); // dependency array

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>// TODO {/*<Outlet/> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
