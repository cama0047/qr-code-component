
import './App.css';
import qr from './Assets/image-qr-code.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <div className="card">
        <div className="QRContainer">
            <img alt="qr code img" src={qr}></img>
        </div>
        <div className = "QRBody">
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next lavel</p>
        </div>
      </div>

      </header>
    </div>
  );
}

export default App;
