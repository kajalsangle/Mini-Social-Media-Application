import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      alert(res.data.message);

      navigate("/");

    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>MiniSocial</h1>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleSignup}>
          Sign Up
        </button>

        <p>
          Already have an account?

          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;