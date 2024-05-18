import { Link } from "react-router-dom";
import './LoginSignup.css'



const LoginSignup = () => {

        const handleSubmit = (event) => {
          event.preventDefault();
          // Add logic for handling form submission
        };


    return ( 
      <div className="yoga">
        <form  onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <input type="email" placeholder="Email"   required />

        <input type="password" placeholder="Password" required />

        <p>Don't have an account?<br/><Link to="/signup" style={{ textDecoration : 'none'}}>Sign Up</Link></p>
        
        
        <button type="submit" className="sign">
          Log In
        </button>

        <label htmlFor="password" className="forgot">
          Forgot Password
        </label>
        </form>
      </div>
    );
}
 
 
export default LoginSignup;