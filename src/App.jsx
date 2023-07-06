import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Proyectos" component={Projects} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
