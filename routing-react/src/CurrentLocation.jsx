import { useLocation } from "react-router-dom";

const CurrentLocation = () =>{

  const location = useLocation();

  return (
    <h3 className="container mx-auto py-4">Current Path:{location.pathname}</h3>
  );

};

export default CurrentLocation;