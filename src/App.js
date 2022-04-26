import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__content">
        <Sidebar />
        <Main />
        <Feed />
      </div>
    </div>
  );
}

export default App;
