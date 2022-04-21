import axios from "axios"
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [breweries, setbrewery] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get("https://api.openbrewerydb.org/breweries?by_state=texas");

    setbrewery(data)
  }

  return (
    <div className="App">
      <h1>TEXAS BREWERIES</h1>

      {breweries.map(brewery => (
          <div key={brewery.id}>
            <h3>Name: {brewery.name}</h3>
            <p>Phone: {brewery.phone}</p>

          </div>
        ))}
    </div>
  );
}

export default App;
