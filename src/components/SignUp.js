import React from 'react'
import 'SignUp.css'

function SignUp() {
  return (
    
    <div  className="container">

        

  
    <h1>Sign Up</h1>
    <p>Please fill in this htmlform to create an account.</p>
    <hr/>

    <label htmlfor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label htmlfor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label htmlfor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"/> Remember me
    </label>

    <p>By creating an account you agree to our <a href="/" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
 

</div>
    
    
    
  )
}

export default SignUp