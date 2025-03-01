import React, { useState } from 'react'
import supabase from '../helper/supabaseClient';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        
        if (error) {
            setMessage(error.message);
            return;
        }

        if (data) {
            setMessage("User Account has been Created!");
        }
        setEmail("");
        setPassword("");
    } 


  return (
      <div>
          <h2>Sign up Page</h2>
          <br />
          {message && <span>{message}</span>}
          <form onSubmit={handleSubmit}>
              <input onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email" placeholder='Email'
                  required
              />
              <br />
              <input onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password" placeholder='Password'
                  required 
              />
              <br />
              <button type='submit'>Create an Account</button>
          </form>
    </div>
  )
}

export default Signup;