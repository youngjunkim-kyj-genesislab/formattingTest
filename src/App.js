import logo from './logo.svg';
import './App.css';
import Todo from './pages/Todo.js';
import MaterialTest from './pages/MaterialTest';
import AnimationTest from './pages/AnimationTest';
import Carousel from './component/Carousel';
import RouteTest from './component/route-test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PathTest from './component/path-test';
import VideoStudy from './pages/video-study/video-study';

function App() {
  // console.log('??');

  // console.log(process.env);
  return (
    <Router>
      <Switch>
        {/* <Todo /> */}
        {/* <hr /> */}
        {/* <MaterialTest /> */}
        {/* <hr /> */}
        <Route path='/animation' component={AnimationTest} />
        {/* <Carousel /> */}
        <Route path='/video-study' component={VideoStudy} />
        <Route path='/' component={PathTest} />
      </Switch>
    </Router>
  );
}

export default App;
