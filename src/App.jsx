import { useState, useEffect } from 'react';

import Header from './Components/Headers';
import PatientList from './Components/PatientList';
import PatientForm from './Components/PatientForm';

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients] = useState(INITIAL);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const eliminatePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <PatientForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          eliminatePatient={eliminatePatient}
        />
      </div>
    </div>
  );
}

export default App;
