import './App.css';
import CheckUrl from './Pages/CheckUrl';
import UrlForm from './Pages/UrlForm';

function App() {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
    <UrlForm/>
    <CheckUrl/>
    </div>
    </>
  );
}

export default App;
