import Dashbord from "../Layout/Dashbord";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import MyAppointment from "../Pages/Dashbord/MyAppointment/MyAppointment";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import SignUp from "../Pages/Signup/SignUp";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import AdminRoute from "../Pages/Private/AdminRoute";
import AddDoctors from "../Pages/Dashbord/AddDoctors.js/AddDoctors";
import ManageDoctor from "../Pages/Dashbord/ManageDoctor/ManageDoctor";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'appointment',
                element: <PrivateRoute><Appointment/></PrivateRoute>
            }, 
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoute><Dashbord/></PrivateRoute>,
        children: [
            {
                path: '/dashbord',
                element: <MyAppointment/>
            },
            {
                path: '/dashbord/alluesrs',
                element: <AdminRoute><AllUsers/></AdminRoute>
            }, 
            {
                path: '/dashbord/addDoctors',
                element: <AdminRoute><AddDoctors/></AdminRoute>
            },
            {
                path: '/dashbord/manageDoctor',
                element: <AdminRoute><ManageDoctor/></AdminRoute>
            }
        ]
    }
])

export default router;