import React from 'react'
import { useForm, } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import userlogin from "../actions/userlogin";
import DashboardShow from "../actions/DashboardShow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const loginData = useSelector((state) => state.Logintoapp)
    const dispatch = useDispatch();
    let history = useHistory();

    const onSubmit = data => {
        console.log(data)
        console.log(loginData);
        let dashboard = [
            {
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            },
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"
            },
            {
                "id": 3,
                "name": "test3",

                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"
            }
        ]

        if ((loginData.username === data.username) && (loginData.password === data.password)) {
            dispatch(DashboardShow(dashboard))
            history.push("/Dashboard");
        } else {
            toast.error("username & password are incorrect")
        }

    }
    return (
        <div className="login">


            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <h1>Login</h1>
                        {errors.username && <span style={{ color: "red" }}>username is required</span>}
                        <div className="form-control">
                            <input type="text" placeholder="Enter Your Name..."
                                {...register("username", { required: true })}
                            />
                            <span className="toggle">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                        {errors.password && <span style={{ color: "red" }}>password is required</span>}
                        <div className="form-control">
                            <input id="password" type="password" placeholder="Enter Your Password..."
                                {...register("password", { required: true })}
                            />
                            <span className="toggle">
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                        <button className="btn" onClick={() => dispatch(userlogin())}>
                            <i className="fas fa-lock"></i> Login
                    </button>

                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;
