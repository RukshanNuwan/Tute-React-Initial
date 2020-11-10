import './App.css';

// ----------------------------------------------------------------------
// Import another component
// ----------------------------------------------------------------------
import Post from './Post'
import MainComponent from './components/MainComponent'

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

        <MainComponent/>
      </div>
    );
  }

export default App;
