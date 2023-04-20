import { Navigate ,useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = ({ children }) => {


    const token = localStorage.getItem('token');



            if (token == '') {
                return <Navigate to="/login" replace/>
            }
    
            return children;


       

}

export default Protected