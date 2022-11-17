import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthGuard = (props) => {
    const name = props.name;
    const history = useHistory();
  
    useEffect(() => {
        const user = sessionStorage.getItem("userName");
        if(user == null){
            history("/login");
        }
    });

    return (<div></div>)
}

export default AuthGuard; 