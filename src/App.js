import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
    <TopBar/>
    <Routes>
    <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
