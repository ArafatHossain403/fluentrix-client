// import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


const SocialLogin = () => {
    // const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const auth =getAuth(app);
    const provider =new GoogleAuthProvider();

    const from = location.state?.from?.pathname || "/";
   
    
    const handleGoogleSignIn =()=> {
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
        })


    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-3">
             
                <button onClick={handleGoogleSignIn} to={'/'} className="btn btn-warning"> <FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;