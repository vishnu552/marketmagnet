import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
function LoginSingup() {
    return (
        <section className='w-full  flex justify-center bg-chick'>
            {/* <div className='LoginContainer' id='LoginContainer'>
                <div className='FormContainer SingUp'>
                    <form>
                        <h1>Create Account</h1>
                        <div className="LoginSocialIcons">
                            <a href="#" className="LoginIcon"><FaLinkedin /></a>
                            <a href="#" className="LoginIcon"><FaFacebook /></a>
                            <a href="#" className="LoginIcon"><FaGithub /></a>
                            <a href="#" className="LoginIcon"><FaLinkedin /></a>
                        </div>

                        <span>or use your email for registeration</span>

                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className='FormContainer SingIn'>
                    <form>
                        <h1 className='text-5xl text-bold'>Sign In</h1>
                        <div className="LoginSocialIcons">
                            <a href="#" className="LoginIcon"><FaLinkedin /></a>
                            <a href="#" className="LoginIcon"><FaFacebook /></a>
                            <a href="#" className="LoginIcon"><FaGithub /></a>
                            <a href="#" className="LoginIcon"><FaLinkedin /></a>
                        </div>

                        <span>or use your email password</span>

                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1 className='text-6xl'>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="LoginContainer">
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="LoginChix">
                        <form className="formChix ">
                            <label for="chk" aria-hidden="true">Log in</label>
                            <input className="inputchix" type="email" name="email" placeholder="Email" required />
                            <input className="inputchix" type="password" name="pswd" placeholder="Password"  />
                            <button>Log in</button>
                        </form>
                    </div>

                    <div className="registerChix">
                        <form className="formChix">
                            <label for="chk" aria-hidden="true">Register</label>
                            <input className="inputchix" type="text" name="txt" placeholder="Username" required />
                            <input className="inputchix" type="email" name="email" placeholder="Email" required />
                            <input className="inputchix" type="number" name="Phone" placeholder="Enter your number" required />
                            <input className="inputchix" type="password" name="pswd" placeholder="Password" required />
                            <button>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginSingup
