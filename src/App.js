import logo from "./logo.svg";
import imageInSrc from "./imageInSrc.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{"border":"solid 1px black","maxWidth":"100vw"}}>
        <h1 className="title red">Votre nom ici</h1>
        <br />
        <img src={imageInSrc} alt="imageInSrc" />
        <br />
        <img src="/imageInPublic.jpg" alt="imageInPublic" />
      </div>
      <video width="320" height="240" controls>
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
