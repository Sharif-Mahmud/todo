import { useState } from "react";
import "./Blog.css";

const Blog = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirm, setConfirm] = useState();


    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    const handleConfirmChange = (e) => {
        setConfirm(e.target.value);
    }

  return (
    <>
        <h2>Create an account</h2>
        <hr />
        <input type="text" placeholder="Name" onChange={handleNameChange} value={name}/><br />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /><br />
        <input type="password" placeholder="Password" onChange={handlePassChange} value={pass} /><br />
        <input type="password" placeholder="Confirm" value={confirm} onChange={handleConfirmChange} /><br />
        <button>Create</button>
    </>
  );
}

export default Blog