import Spline from '@splinetool/react-spline';
import logo from './kk-codes-logo.png';
import './App.css';
export default function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Spline className = "Spline" scene="https://prod.spline.design/Dl2RAeXjIDjgxq7m/scene.splinecode" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    // <div style={{ height: '100vh', width:'100wv' }}>
      
      
    //   {/* <Spline scene="https://prod.spline.design/Dl2RAeXjIDjgxq7m/scene.splinecode" /> */}
    //   {/* <Spline width="100%" height="100%" scene="https://prod.spline.design/
    //   Dl2RAeXjIDjgxq7m/scene.splinecode" /> */}
    //   <Spline scene="https://prod.spline.design/Dl2RAeXjIDjgxq7m/scene.splinecode" />
    // </div>

  )
  // <Spline scene="https://prod.spline.design/a0jpSfqsUR1UAqJu/scene.splinecode" />
}


