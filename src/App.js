import "./App.css";
import Content from "./components/Content";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
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
