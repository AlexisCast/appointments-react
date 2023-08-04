import Patient from './Patient';

const PatientList = ({ patients, setPatient, eliminatePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administer your <span className="text-indigo-600 font-bold">Patients and Dates</span>
          </p>

          <div className="h-screen md:overflow-y-scroll">
            {patients.map((patient, index) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                eliminatePatient={eliminatePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start to add patients{' '}
            <span className="text-indigo-600 font-bold">and they will start to appear here</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
