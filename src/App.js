import './App.css';
import fourofourimg from "./404-Error-img.png"

function App() {
  return (
    <div className='page-continer'>
      <img src={fourofourimg} className="img-404" alt='404-img'/>
      <h1 className='page-not-found-title'>Page Not Found</h1>
      <p className='page-not-found-desc'>The page you’re looking for might be renamed, removed, or might never exist on this planet.</p>
      <button className='go-home-button'>Go to Planet Earth</button>
    </div>
  );
}

export default App;


