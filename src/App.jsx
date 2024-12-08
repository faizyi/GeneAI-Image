import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
