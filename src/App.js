import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <Navbar />

      <div className="container">
        <div className="row">

          <CountriesList />

          <Routes>

            <Route path='/:id' element={ <CountryDetails />} />

          </Routes>


        </div>
      </div>
    </div>
  );
}

export default App;
