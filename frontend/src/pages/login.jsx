

import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/appcontext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'  // Importing useNavigate

const Login = () => {
  const { backendUrl, setToken } = useContext(AppContext)
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()  // Initialize useNavigate

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (state === 'Sign Up') {
        console.log("Registering with: ", { name, email, password })
        const { data } = await axios.post(backendUrl + '/api/user/register', {
          name,
          password,
          email,
        })

        console.log("Register response: ", data)
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          navigate('/')  // Redirect to homepage after successful registration
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', {
          password,
          email,
        })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
          navigate('/')  // Redirect to homepage after successful login
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome To <span className="text-blue-600">DocMeet</span>
          <img src={null} alt="logo" className="inline-block w-8 h-8 ml-2" />
        </h1>
        <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
          <div>
            <p className="text-2xl font-semibold">
              {state === 'Sign Up' ? 'Create Account' : 'Login'}
            </p>
            <br />
            <div>
              <p>
                Please {state === 'Sign Up' ? 'Signup' : 'Log in'} to Book Appointment
              </p>
              {state === 'Sign Up' && (
                <div className="mt-3">
                  <label className="font-semibold">Full Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border p-2 rounded-md w-full"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              )}
            </div>
          </div>

          <label className="font-semibold">Enter Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border p-2 rounded-md w-full"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label className="font-semibold">Enter Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="border p-2 rounded-md w-full"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            type="submit"
            className="text-white bg-green-500 hover:bg-blue-600 w-full py-2 rounded-md text-base transition-all duration-400 hover:scale-105"
          >
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          {state === 'Sign Up' ? (
            <p>
              Already Have an Account?{' '}
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState('Login')}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p>
              Create an Account?{' '}
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState('Sign Up')}
              >
                Click Here
              </span>
            </p>
          )}
        </form>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <img
          src={null}
          alt="SignupImage"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg -skew-x-6"
        />
      </div>
    </div>
  )
}

export default Login
