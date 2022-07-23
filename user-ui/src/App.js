import { BrowserRouter,Routes,Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBooking from './bookings/CreateBooking';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<CreateBooking/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
