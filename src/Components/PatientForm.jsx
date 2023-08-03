import { useState, useEffect } from 'react';
import Error from './Error';

const PatientForm = ({ patients, setPatients, patient }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, owner, email, date, symptoms].includes('')) {
      setError(true);
      return;
    } else {
      setError(false);

      const objectPatient = {
        name,
        owner,
        email,
        date,
        symptoms
      };

      if (patient.id) {
        //Edit data
        objectPatient.id = patient.id;

        const updatedPatients = patients.map((patientState) =>
          patientState.id === patient.id ? objectPatient : patientState
        );
        setPatients(updatedPatients);
      } else {
        //New data
        objectPatient.id = generateId();
        setPatients([...patients, objectPatient]);
      }

      //reset the form
      setName('');
      setOwner('');
      setEmail('');
      setDate('');
      setSymptoms('');
    }
  };

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  return (
    <div className="px-5 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient Follow Up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and{' '}
        <span className="text-indigo-60 font-bold text-indigo-600">Administrate</span>
      </p>

      <form onSubmit={handleSubmit} className="mt-5 bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && (
          <Error>
            <p>All fields are manadory</p>
          </Error>
        )}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="pet">
            Mascot Name
          </label>
          <input
            id="pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
            type="text"
            placeholder="Mascot Name"
            value={name}
            onChange={handleChange(setName)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="owner">
            Owner Name
          </label>
          <input
            id="owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
            type="text"
            placeholder="Owners Name"
            value={owner}
            onChange={handleChange(setOwner)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
            type="email"
            placeholder="Owners Email"
            value={email}
            onChange={handleChange(setEmail)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="register">
            Register
          </label>
          <input
            id="register"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
            type="date"
            value={date}
            onChange={handleChange(setDate)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
            placeholder="Describe symptoms"
            value={symptoms}
            onChange={handleChange(setSymptoms)}
          />
        </div>

        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          type="submit"
          value={patient.id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>
    </div>
  );
};

export default PatientForm;
