
import { React, useState } from "react";
import "../Header/Header.css";
import logo_tach from "../../Img/logo-tach.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faSignIn,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Data from "../../Data/json/Category.json";
import { Link } from "react-router-dom";

function Header() {
    var [error, setError] = useState({
        fullname: "",
        address: "",
        phone: "",
        password: "",
      });
      
    
      var [data_register, setData_register] = useState({
        fullname: "",
        address: "",
        phone: "",
        password: "",
      });
      var handleChangeregister = (event) => {
        var { name, value } = event.target;
        setData_register({ ...data_register, [name]: value });
      };
    
      var handleRegister = (event) => {
        event.preventDefault();
        var isvalid = true;
        var formErrors = { ...error };
    
        if (data_register.fullname.trim() === "") {
          formErrors.fullname = "Fullname is required";
          // setButton(true);
          isvalid = false;
        } else {
          formErrors.fullname = "";
        }
        if (data_register.address.trim() === "") {
          formErrors.address = "Address is required";
          // setButton(true);
          isvalid = false;
        } else {
          formErrors.address = "";
        }
        if (data_register.phone.trim() === "") {
          formErrors.phone = "Phone is required";
          // setButton(true);
          isvalid = false;
        } else {
          formErrors.phone = "";
        }
        if (data_register.password.trim() === "") {
          formErrors.password = "Password is required";
          // setButton(true);
          isvalid = false;
        } else {
          formErrors.password = "";
        }
        // if (isvalid==="true") {
        //   alert("Register ia successful !");
        // }
        setError(formErrors);
        return isvalid;
      };
      var DeleteRegister = () => {
        
        data_register.fullname = "";
        data_register.address = "";
        data_register.phone = "";
        data_register.password = "";
        
      };
      // end register
      const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
      };
    
      
      // login
      var [error_login, setError_login] = useState({
        username: "",
        password_login: "",
      });
      var [data_login, setData_login] = useState({
        username: "",
        password_login: "",
      });
      var handleChangelogin = (event) => {
        var { name, value } = event.target;
        setData_login({ ...data_login, [name]: value });
      };
    
      var handleLogin = (event) => {
        event.preventDefault();
        var isvalid_login = true;
        var form_error_login = { ...error_login };
        if (data_login.username.trim() === "") {
          form_error_login.username = "Username is required";
          isvalid_login = false;
        } else {
          form_error_login.username = "";
        }
        if (data_login.password_login.trim() === "") {
          form_error_login.password_login = "Password is required";
          isvalid_login = false;
        } else {
          form_error_login.password_login = "";
        }
    
        setError_login(form_error_login);
        return isvalid_login;
      };
      var DeleteLogin = () => {
        data_login.username = "";
        data_login.password_login = "";
      };
      // end login
      // password
      // const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
      // end password
      // animation
  return (
    <div>
        
        <div className="hm-header-menu">
        <div className="hm-logo">
         
          <Link to={"/home"}>
            <img src={logo_tach} alt="Origami" loading="lazy" />
          </Link>
        </div>
        {/* phần header */}
        <div className="hm-main-header-menu">
          <header className="container-fluid">
            <div className="hm-contact">
              <a href="mailto:origami@origami.com">
                <FontAwesomeIcon icon={faEnvelope} /> origami@origami.com
              </a>

              <a href="tel:+0364464373">
                <FontAwesomeIcon icon={faPhone} /> 0364 464 373
              </a>
            </div>

            <div className="hm-register-login">
              {/* <!-- Button trigger modal --> */}
              <button
                type="submit"
                className="hm-login"
                data-bs-toggle="modal"
                data-bs-target="#button-login"
              >
                <FontAwesomeIcon icon={faSignIn} /> Login
              </button>
              <button
                type="submit"
                className="hm-register"
                data-bs-toggle="modal"
                data-bs-target="#button-register"
              >
                <FontAwesomeIcon icon={faCashRegister} /> Register
              </button>
            </div>
            {/* <!-- Register --> */}
            <div
              className="modal fade"
              id="button-register"
              tabindex="-1"
              aria-labelledby="button-register-label"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="button-register-label">
                      Register
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      action=""
                      className="hm-form-login"
                      onSubmit={handleRegister}
                    >
                      <label for="">FullName</label>
                      <input
                        type="text"
                        name="fullname"
                        id=""
                        placeholder="Fullname"
                        onChange={handleChangeregister}
                      />
                      <div></div>
                      <div className="errors">{error.fullname}</div>
                      <label for="">Address</label>
                      <input
                        type="text"
                        name="address"
                        id=""
                        placeholder="Address"
                        onChange={handleChangeregister}
                      />
                      <div></div>
                      <div className="errors">{error.address}</div>
                      <label for="">Username</label>
                      <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleChangeregister}
                      />
                      <div></div>
                      <div className="errors">{error.phone}</div>
                      <label for="">Password:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                       
                        placeholder="Password"
                        onChange={handleChangeregister}
                      />

                      <div></div>
                      <div className="errors">{error.password}</div>

                      <label for=""></label>
                      <div>
                        {" "}
                        <input
                          type="checkbox"
                          name=""
                          id="check"
                          value={showPassword}
                          onChange={() => setShowPassword((prev) => !prev)}
                        />{" "}
                        <i> Show password</i>
                      </div>
                      <div></div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ margin: "0px 5px", width: "40%" }}
                          // disabled={button}
                          
                        >
                          Register
                        </button>
                        <button
                          type="reset"
                          className="btn btn-primary"
                          style={{ width: "40%" }}
                          // disabled={button}
                          onclick={DeleteRegister}
                        >
                          Clear
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="footer">
                    <div class="hm-modal-footer">
                      <span>
                        <del>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</del> Or
                        Register with{" "}
                        <del>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</del>
                      </span>
                    </div>
                    <div class="hm-login-with">
                      <button
                        type="button"
                      
                        onClick={() =>
                          openInNewTab("https://www.facebook.com/")
                        }
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="lg"
                          style={{ color: "#2028f8" }}
                        />
                        &nbsp; Facebook
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          openInNewTab(
                            "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=549970890748-5kk9hu6u2auq3phcr7r6facblspeflu9.apps.googleusercontent.com&scope=profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fshopee.vn%3Fid%3Dauth710024&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow"
                          )
                        }
                      >
                        <FontAwesomeIcon
                          icon={faGoogle}
                          size="lg"
                          style={{ color: "#e74c40" }}
                        />
                        &nbsp; Google
                      </button>
                    </div>
                    <div class="hm-modal-footer">
                      <span>
                        {" "}
                        By registering, you agree with the ORGM's <br />
                        <a href="../">terms of service</a> &{" "}
                        <a href="http://">privacy policy</a>
                      </span>
                    </div>
                    <div class="hm-modal-footer">
                      <span>
                        You have an account ?
                        <a
                          href="../"
                          data-bs-target="#button-login"
                          data-bs-toggle="modal"
                        >
                          {" "}
                          Login{" "}
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end register --> */}
            {/* <!-- Login --> */}
            <div
              className="modal fade "
              id="button-login"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Login
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      action=""
                      className="hm-form-login"
                      onSubmit={handleLogin}
                    >
                      <label for="">Username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Phone"
                        onChange={handleChangelogin}
                      />
                      <div></div>
                      <div className="errors">{error_login.username}</div>
                      <label for="">Password:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password_login"
                        
                        placeholder="Password"
                        onChange={handleChangelogin}
                      />

                      <div></div>
                      <div className="errors">{error_login.password_login}</div>

                      <label for=""></label>
                      <div>
                        {" "}
                        <input
                          type="checkbox"
                          name=""
                          id="check"
                          value={showPassword}
                          onChange={() => setShowPassword((prev) => !prev)}
                        />{" "}
                        <i> Show password</i>
                      </div>
                      <div></div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ margin: "0px 5px", width: "40%" }}
                        >
                          Login
                        </button>
                        <button
                          type="reset"
                          className="btn btn-secondary"
                          onClick={DeleteLogin}
                          style={{ width: "40%" }}
                        >
                          Clear
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="modal-footer"></div>
                  <a className="hm-forget-password" href="http://">
                    You are forgeted password ?
                  </a>

                  <span>
                    <del>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</del> Or Login
                    with <del>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</del>
                  </span>

                  <div className="hm-login-with">
                    <button
                      type="button"
                      // onclick="window.open('https://www.facebook.com/','_blank')"
                      onClick={() => openInNewTab("https://www.facebook.com/")}
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="lg"
                        style={{ color: "#2028f8" }}
                      />
                      &nbsp; Facebook
                    </button>

                    <button
                      type="button"
                     
                      onClick={() =>
                        openInNewTab(
                          "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=549970890748-5kk9hu6u2auq3phcr7r6facblspeflu9.apps.googleusercontent.com&scope=profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fshopee.vn%3Fid%3Dauth710024&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow"
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        size="lg"
                        style={{ color: "#e74c40" }}
                      />
                      &nbsp; Google
                    </button>
                  </div>

                  <div className="hm-modal-footer">
                    <span>
                      You don't have account ?{" "}
                      <a
                        href="../"
                        data-bs-target="#button-register"
                        data-bs-toggle="modal"
                      >
                        Register
                      </a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end login --> */}
           
          </header>
          {/* end header */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
              <a className="navbar-brand" href="../">
                ORGM
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll style--bs-scroll-height">
                  <li className="nav-item">
                
                    <Link to="/" className="nav-link active h-size">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                   
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>

                  
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="../"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <ul className="dropdown-menu">
                  

                      {Data.map((items, i) => (
                        <li>
                          <Link
                            to={`/category/${items.id}`}
                            className="dropdown-item"
                          >
                            {items.name}
                          </Link>
                        </li>
                      ))}

                   
                    </ul>
                  </li>

                  <li className="nav-item">
                 
                    <Link to={"/gallery"} className="nav-link">
                      Gallery{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                 
                    <Link to={"/contact"} className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link to={"/feedback"} className="nav-link">
                      Feedback
                    </Link>
                  </li>
                </ul>
              
              </div>
            </div>
          </nav>
         
        </div>
      </div>
    </div>
  )
}

export default Header