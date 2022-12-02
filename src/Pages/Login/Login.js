import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Tost from "../Tost/Tost";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "../hooks/useToken";

const Login = () => {
  const {login} = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)

  const from = location.state?.from?.pathname || '/'

  if(token){
    navigate(from, {replace: true})
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    login(data.email, data.password)
      .then((res) => {
        const user = res.user;
        event.target.reset();
        notifySuccess();
        setLoginUserEmail(data.email)
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        notifyError();
      });
  };

  const notifySuccess = () =>
    toast.success("Login SuccessFully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () => {
    toast.error(`${error}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  return (
    <div className="min-h-screen">
      <Tost/>
      <div className="md:w-2/4 lg:w-1/4 md:mx-auto border shadow-xl mx-4 rounded-2xl px-6 py-11 mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3 mt-1"
            {...register("email", { required: 'email is required'})}
          />{errors.email && <p className="text-red-600 -mt-1">{errors.email.message}</p>}
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-6 mt-1"
            {...register("password", { required: "password is required", minLength: {value: 6, message: 'password must be six character long'}})}
          />{errors.password && <p className="text-red-600 -mt-5">{errors.password.message}</p>}
          <br />
          <input className="btn btn-accent w-full text-white" value="Login" type="submit" />
          <p className="text-center mt-2">
            Don't have an account? Please{" "}
            <Link className="font-bold" to="/signup">
              Sign up
            </Link>
          </p>
          <p className="text-center mt-5">---------- OR ----------</p>
          <button className="btn btn-outline w-full mt-3">
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
