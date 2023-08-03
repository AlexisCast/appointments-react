import { useState } from 'react';

const PatientForm = ({ patients, setPatients }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

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
      setPatients([...patients, objectPatient]);
      
      //reset the form
      setName('')
      setOwner('')
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
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            There is an Error...
          </div>
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
          value="Add Patient"
        />
      </form>
    </div>
  );
};

export default PatientForm;
