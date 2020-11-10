import logo from './logo.svg';
import './App.css';

// ----------------------------------------------------------------------
// Import another component
// ----------------------------------------------------------------------
import Post from './Post'

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

        {/* Use imported Post component */}
        <Post/>
      </div>
    );
  }

export default App;
