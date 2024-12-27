import { useState } from "react";
import { useAuth } from "../AuthProvider";

const Login = () => {
    const auth = useAuth();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.email !== "" && input.password !== "") {
            auth.loginAction(input);
            return;
        }
        alert("pleae provide a valid input");
        
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form className="form-signin" onSubmit={handleSubmitEvent}>
            <img className="mb-4" src="./img/admin.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email</label>
            <input onChange={handleInput} type="text" id="inputEmail" className="form-control" name="email" placeholder="Username" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input onChange={handleInput} type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required />
            
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2024-2025</p>
        </form>
    );
};
export default Login;