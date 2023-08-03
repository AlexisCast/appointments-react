import { useState } from 'react';

import Header from './Components/Headers';
import PatientList from './Components/PatientList';
import PatientForm from './Components/PatientForm';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <PatientForm patients={patients} setPatients={setPatients} patient={patient} />
        <PatientList patients={patients} setPatient={setPatient} />
      </div>
    </div>
  );
}

export default App;
