import axios from "axios"
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'


function App() {
  const [breweries, setbrewery] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get("https://api.openbrewerydb.org/breweries?by_state=texas");
    //const {data} = await axios.get("http://localhost:3002/api/get");

    setbrewery(data)
  }

  return (
    <div className="App">
      <h1>TEXAS BREWERIES</h1>
      <Card style = {{backgroundColor: "#fff0ae", marginTop: 40, marginRight: 150, marginBottom: 100, marginLeft: 150}}>
        <Card.Text>
        {breweries.map(brewery => (
          <div key={brewery.id}>
            <h3>{brewery.name}</h3>
            <p>Phone: {brewery.phone}</p>

          </div>
        ))}
        </Card.Text>
    </Card>

    </div>
  );
}

export default App;
