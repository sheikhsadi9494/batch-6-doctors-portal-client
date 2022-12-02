import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Pages/hooks/useAdmin";
import Header from "../Pages/Shered/Header/Header";

const Dashbord = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  // console.log(user.email, isAdmin)
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content" style={{ backgroundColor: "#F1F5F9" }}>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashbord">My Appontment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashbord/alluesrs">All Users</Link>
                </li>
                <li>
                  <Link to="/dashbord/addDoctors">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashbord/manageDoctor">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
