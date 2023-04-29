import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "./Login.css"
import { useDispatch, useSelector } from "react-redux";
import {
  setLogin,
  setUserInfo,
  setLoginGoogel,
  setUserInfoGoogle,
} from "../Redux/reducers/auth";
// import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner.js'
import { setCounterNotification } from "../Redux/reducers/noti";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handelLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/users/login", user)
      .then((result) => {
        axios
      .get(`http://localhost:5000/notifications`,{headers: {
          Authorization: result.data.token
          }})
      .then((result)=>{
        // fillterNoti(result.data.notification)
        dispatch(setCounterNotification(result.data.notification))
      })
      .catch((err)=>{
          console.log(err);
      })
        console.log(result.data);

        dispatch(setLogin(result.data));
        dispatch(setUserInfo(result.data));
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          handleClickS()
          setTimeout(() => {
            navigate("/");
            }, 2000);
            return () => clearTimeout();
        }, 3000); 
      
        return () => clearTimeout();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setDone(false);
          handleClickF()
        }, 3000); 

        return () => clearTimeout();
      
      });
  };
  // const toHome = () => {
  //   navigate("/");
  // };
  const handleClickF = () => {
    toast.error('Login Failed');
  };
  const handleClickS = () => {
    toast.success('Login Successfully', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true, 
    });
  };
    
      
  
  
  return (
    <>
    <div>
    {isLoading && <Spinner /> }
  </div>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              onChange={(e) => {
                const email = e.target.value;
                setEmail(email);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg1"
              type="password"
              size="lg"
              onChange={(e) => {
                const password = e.target.value;
                setPassword(password);
              }}
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <div>
                <MDBBtn className="mb-0 px-5"style={{backgroundColor: '#223d66'}} size="lg" onClick={handelLogin}>
                  Login
                </MDBBtn>
                <ToastContainer/>
              </div>
              
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a
                  href="#!"
                  className="link-danger"
                  onClick={() => {
                    navigate("/Register");
                  }}
                >
                  Register
                </a>
              </p>
              <hr className="hr1"/>
              <div className="google">
              <GoogleOAuthProvider clientId="623758713896-qs98f7ph84a1pgflgvg84up6i825a8mv.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    const token = credentialResponse.credential;

                    dispatch(setLoginGoogel(credentialResponse));
                    dispatch(setUserInfoGoogle(credentialResponse));
                    // toHome()
                    navigate('/')
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  auto_select
                />
              </GoogleOAuthProvider>
            </div>
            </div>
          </MDBCol>
        </MDBRow>
            
        
      </MDBContainer>
    </>
  );
};

export default Login;
