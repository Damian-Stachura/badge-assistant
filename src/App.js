import logo from './logo.png';
import './App.css';
import StartForm from "./StartForm";

function App() {
  const imageStyles = {
      maxWidth: "200px",
      maxHeight: "200px",
  };
  
    
  return (
    <div>
        <img src={logo} style={imageStyles} alt="logo" />
        <h2>
          Badge assistant
        </h2>
        <StartForm />
    </div>
  );
}

export default App;
