import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css'; 
import './App.css'; 
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, SetDevs] = useState([]);



  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      SetDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    SetDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  
  );
}

export default App;