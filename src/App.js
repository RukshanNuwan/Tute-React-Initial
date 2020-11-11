import './App.css';

// ----------------------------------------------------------------------
// Import another component
// ----------------------------------------------------------------------
import Post from './Post'
import MainComponent from './components/MainComponent'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

// Router Components
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';

// function App() {
// return (
//   <div className="App">
//     <h1>First React App</h1>
//   </div>
// );
// }

// --------------------------------------------------------------------
// ES6 - Recommended
// --------------------------------------------------------------------
const App = () => {
  // Function Body
  return (
    <div className="App">
      <h2>App Component</h2>
      <button className="btn btn-info mb-2">Click</button>

      {/* Use imported Post component */}
      <Post />

      <MainComponent />
      {/* ---------------------------------------------------------------------------------------------------------- */}
      {/* Navbar */}
      <Navbar />

      {/* Wrap the whole application from Router */}
      <Router>
        {/* Switch */}
        <Switch>
          <Route path="/signup">
            {/* SignUp Component(UI) */}
            <SignUp />
          </Route>

          <Route path="/login">
            {/* Login Component(UI) */}
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
