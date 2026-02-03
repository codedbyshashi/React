import { useNavigate } from "react-router-dom";

function Home(){

  const navigate = useNavigate();

  const handleLogin = () =>{
    // navigate(-1) go to previous page
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h2 className="text-2xl font-bold text-blue-600">Home Page</h2>
      <p className="text-black-300 mt-4 text-lg">Welcome to the Home Page! explore this site to learn more.</p>
      <button className="text-white-300 mt-4 text-lg bg-gray-500 p-4" onClick={handleLogin}>Login</button>

    </div>
  );
}

export default Home;