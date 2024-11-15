import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {

  const { user, Logout } = useContext(AuthContext)

  // const auth = getAuth();
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email} </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        {
          user && user?.email ? (
            <button onClick={Logout} className="btn btn-neutral rounded-none">LogOut</button>
          ) : (
            <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>)}
      </div>
    </div>
  );
};

export default Navbar;
