import { Link, Outlet } from "react-router-dom";

function About(){
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h2 className="text-2xl font-bold text-blue-600">About Page</h2>
      <p className="text-black-300 mt-4 text-lg">This page provide information about us. Learn more about our mission,value,...</p>

      <nav className="mt-6">
        <ul className="flex space-x-3">
          <li><Link to = 'team' className="text-blue-600 hover:underline">Our Team</Link></li>
          <li><Link to ="/" className="text-blue-600 hover:underline">Back to Home</Link></li>
        </ul>

      </nav>

      <div className="mt-8 w-full max-w-7xl">
        <Outlet/>

      </div>
    </div>
  );
}

export default About;