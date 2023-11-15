import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './acc.css';
import toast, { Toaster } from 'react-hot-toast';

function AccountCreation() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        return usernameRegex.test(username);
    };

    const validatePassword = (password) => {
        // Password must be at least 6 characters long and alphanumeric
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return passwordRegex.test(password);
    };

    const submitData = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !pass) {
            toast.error("Empty Fields!!");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Invalid Email!");
            return;
        }

        if (!validatePhone(phone)) {
            toast.error("Invalid Phone Number!");
            return;
        }

        if (!validateUsername(name)) {
            toast.error("Invalid Username! Use alphanumeric characters only.");
            return;
        }

        if (!validatePassword(pass)) {
            toast.error("Invalid Password! Password must be at least 6 characters long and alphanumeric.");
            return;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
        const obj = {
            Username: name,
            Email: email,
            Password: pass,
            Phone: phone,
            Creation_Date: formattedDate
        };

        // Check if the email is already registered
        const existingUserRes = await fetch(`https://user-mngmnt.onrender.com/accounts?Email=${email}`, {
            method: 'GET'
        });

        const existingUserData = await existingUserRes.json();
        if (existingUserData.length > 0) {
            toast.error("Email already registered! Please use a different email.");
            return;
        }

        const res = await fetch('https://user-mngmnt.onrender.com/accounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        if (res.ok) {
            toast.success("Registration Successful !!");
            setTimeout(() => {
                window.location.reload(true);
            }, 3000);
        } else {
            toast.error("Invalid Registration");
        }
    }

    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-10 col-md-8 col-lg-12 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">

                        <div className="text-center mt-4">
                            <h1 className="h2">Get started</h1>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="m-sm-4">
                                    <form>
                                        <div className="form-group">
                                            <label>UserName</label>
                                            <input className="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Contact Number</label>
                                            <input className="form-control form-control-lg" type="tel" name="company" placeholder="Enter your contact number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="input-group">
                                                <input className="form-control form-control-lg" type={showPassword ? "text" : "password"} name="password" placeholder="Enter password" value={pass} onChange={(e) => setPass(e.target.value)} />
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? "Hide" : "Show"}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center mt-3">
                                            <button
                                                type="button"
                                                className="btn btn-lg btn-primary"
                                                onClick={submitData}
                                            >
                                                Sign up
                                            </button>
                                            <Toaster />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountCreation;