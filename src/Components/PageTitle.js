import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({title}) => {
    const location = useLocation();
    useEffect(()=>{
        document.title = "Cognito Solutions | " + title;
    }, [title, location]);
}
 
export default PageTitle;