import { useNavigate } from "react-router-dom";

function Dashboard(){

  const navigate = useNavigate();

  const handleLogin = () =>{
    navigate("/");
  }
  
  return(
    <div>
      <h1 className="font-bold text-3xl hover:text-red-500 transition">Hello shashi</h1>
    <button className="text-white-300 mt-4 text-lg bg-gray-500 p-4" onClick={handleLogin}>Logout</button>
    </div>
    

  );
}

export default Dashboard;