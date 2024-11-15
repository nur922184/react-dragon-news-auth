
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {crateNewUser, setUser} =useContext(AuthContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = new FormData(e.target); 
        const name = form.get('name')
        const photoUrl = form.get('photo')
        const email = form.get('email')
        const Password = form.get('password')
        console.log({name, photoUrl, email, Password})
        crateNewUser(email, Password)
        .then(result =>{
            const user = result.user;
            setUser(user)
            alert('successfully register')
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
          });
        
    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className='text-center text-2xl font-semibold mt-5 mb-6'>Register a new Account</h2>
                <hr />
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="PhotoUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className='text-center'>Already Have An Account ? <Link to="/auth/login" className='text-blue-700 font-semibold'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;