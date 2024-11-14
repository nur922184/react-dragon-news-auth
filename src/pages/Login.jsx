import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className='text-center text-2xl font-semibold mt-5 mb-6'>Login Your Account</h2>
                <hr />
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className='text-center'>Don't Have An Account ? <Link to="/auth/register" className='text-blue-700 font-semibold'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;