import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [version,setVersion] = useState(null)

  const fetchVersion=async ()=>{
    const res = await fetch(`${process.env.REACT_APP_PROXY_API}/version`)
    const data = await res.json()
    return data?.version
  }

  useEffect(()=>{
    fetchVersion().then(setVersion)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {version ? <b>API version {version}</b> : "loading.."}
      </header>
    </div>
  );
}

export default App;
