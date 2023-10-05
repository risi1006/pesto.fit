import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/HomeScreen/index';
import PlanWorkout from './screens/PlanWorkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/plan-workout" Component={PlanWorkout} />
      </Routes>
    </Router>
  );
}

export default App;
