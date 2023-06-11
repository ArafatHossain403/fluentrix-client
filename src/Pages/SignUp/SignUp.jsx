import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    };

    return (
        <div>
            <Helmet>
                <title>fluentrix | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex">
                    <div className="text-center  lg:text-left">
                        <h1 className="text-4xl font-bold"> Please Signup </h1>
                        
                    </div>
                    <div className="card  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name"  placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-700">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true,  minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-700">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-700">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-700">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-700">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Conform Password</span>
                                </label>
                                <input type="password" {...register("conformPassword")} name="password" placeholder=" Conform password" className="input input-bordered" />
                                {errors.password && <span className="text-red-700">This field is required</span>}
                                
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo"  placeholder="PhotoUrl" className="input input-bordered" />
                                {errors.photo && <span className="text-red-700">This field is required</span>}
                            </div>
                            
                            
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center font-bold'><small>Already have an account? <Link className='text' to="/login"> Login</Link> </small></p>
                       <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;