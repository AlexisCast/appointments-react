import { useState } from 'react';

import Header from './Components/Headers';
import PatientList from './Components/PatientList';
import PatientForm from './Components/PatientForm';

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header numbers={1} />
      <div className="mt-12 md:flex">
        <PatientForm patients={patients} setPatients={setPatients} />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
