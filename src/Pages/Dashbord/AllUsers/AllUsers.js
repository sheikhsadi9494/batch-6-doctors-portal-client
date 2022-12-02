import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import Tost from '../../Tost/Tost';

const AllUsers = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data =  await res.json();
            return data;
        }
    })

    const updateAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                notifySuccess();
            }
            
        })
    }

    const notifySuccess = () =>
    toast.success("Promoterd to admin SuccessFully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return (
       <div>
        <Tost/>
      <div className="overflow-x-auto">
        <div className=" px-4 lg:px-0 lg:w-4/5 mx-auto mt-14">
          <h1 className="text-3xl pb-5">All Users</h1>
          <table className="table w-full">
            {/* <!-- head -->  */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Promote</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role === 'admin' && <p>Admin</p>}{user.role !== 'admin' &&  <button onClick={() => updateAdmin(user._id)} className='btn btn-primary btn-sm'>Make Admin</button>}</td>
                  <td><button className='btn btn-error btn-sm'>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default AllUsers;