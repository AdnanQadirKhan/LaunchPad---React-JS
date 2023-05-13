import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
// import  Newsletters from '../components/layouts/Newsletters';
import { Newsletters } from '../components/layouts/home/Newsletters';
import Footer from '../components/footer/FooterStyle2';
import http from '../Services/httpService';
import { enqueueSnackbar } from "notistack";
import img1 from '../assets/images/background/img-login.jpg';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [login, setLogin] = useState({
        email: null,
        password: null,
    });
    const navigate = useNavigate();

    const handleAdd = async () => {

        const { email, password } = login;
        if (
            email === null ||
            email.trim() === "" ||
            password === null ||
            password.trim() === ""
        ) {
            enqueueSnackbar("All fields are required", { variant: "info" });
            return;
        }
        try {
            const res = await http.post("auth", login);
            console.log(res);
            setLogin({
                email: "",
                password: "",
            });
            enqueueSnackbar("Successfully Logged In", { variant: "success" });
            navigate('/admin');
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error while Login: " + error.message, {
                variant: "error",
            });
        }
    };

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };
    return <div>
        <Header />
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">Log In</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Log In</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="tf-section login-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Login as Admin</h3>
                                    {/* <p className="desc">Most popular gaming digital nft market place </p> */}
                                </div>
                                <div id="create-item-1">
                                    <input
                                        name="email"
                                        type="text"
                                        placeholder="Username"
                                        value={login.email}
                                        onChange={(e) => handleChange(e)}
                                        required />
                                    <input name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={login.password}
                                        onChange={(e) => handleChange(e)}
                                        required />
                                    <div className="input-group style-2 ">
                                        {/* <div className="btn-check">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label htmlFor="html">Remember Me</label>
                                    </div> */}
                                    </div>
                                    <button
                                        // name="submit"
                                        // id="submit"
                                        // type="submit"
                                        onClick={handleAdd}
                                        className="sc-button style letter style-2">
                                        <span>Log in</span>{" "}
                                    </button>
                                </div>
                                {/* <div className="other-login">
                                <div className="text">Or</div>
                                <div className="widget-social">
                                    <ul>
                                        <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            </div>
                            <div className="form-background">
                                {/* <img src={img1} alt="Bidzen" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Newsletters />
        <Footer />
    </div>;
};

export default Login;
