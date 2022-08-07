import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Home from "./pages/Home";
import Documentos from "./pages/Documentos";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/documentos' exact component={Documentos} />

          {/*<Route path='/overview' exact component={Overview} />*/}
          <Route path='/reports' exact component={Reports} />
          <Route path='/reports/reports1' exact component={ReportsOne} />
          <Route path='/reports/reports2' exact component={ReportsTwo} />
          <Route path='/reports/reports3' exact component={ReportsThree} />
          <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
