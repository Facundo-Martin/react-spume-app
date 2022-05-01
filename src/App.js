import { useEffect } from "react";
import "./App.css";
import Content from "./components/Content";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(`Welcome back ${userName}!`, {
      style: {
        background: "#06223c",
        color: "#fff",
      },
    });
  };

  // This code should be executed when user succesfully connect to app using Metamask/other
  useEffect(() => {
    let userName = "@kenny";
    welcomeUser(userName);
  }, []);

  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />

      <div className="app__content">
        <Sidebar />
        <Content />
        <Feed />
      </div>
    </div>
  );
}

export default App;
