import { useEffect } from 'react';

const Patient = ({ patient, setPatient, eliminatePatient }) => {
  const { name, owner, email, date, symptoms, id } = patient;

  const handleEliminate = () => {
    const answer = confirm('Are you sure to eliminate the patient');
    if (answer) {
      eliminatePatient(id);
    }
  };
  return (
    <div className="mx-5 mt-5 bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Register Date: <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}>
          Edit
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminate}>
          Eliminate
        </button>
      </div>
    </div>
  );
};

export default Patient;
