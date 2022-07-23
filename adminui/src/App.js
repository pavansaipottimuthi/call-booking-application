import { BrowserRouter,Routes,Route, Navigate,} from "react-router-dom";
import Admin from './admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/admin' element={<Admin/>} />
        <Route path="/" element={<Navigate replace to="/admin" />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
