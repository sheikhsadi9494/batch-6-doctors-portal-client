import React from "react";

const DoctorDeleteModal = ({deleteDoctor, setDeleteDoctor, handleDelete}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="doctor-delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {deleteDoctor.name}
          </h3>
          <h3 className="font-bold text-md">
          specialty:{deleteDoctor.specialty}
          </h3>
          <p className="py-4">
            Are you sure to remove doctor {deleteDoctor.name} permently ?
          </p>
          <div className="modal-action">
            <button onClick={() => handleDelete(deleteDoctor._id)} className="btn bg-green-600 text-black hover:bg-green-600 border-none">Delte</button>
            <button onClick={() => setDeleteDoctor(null)} className="btn btn-error">cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDeleteModal;
