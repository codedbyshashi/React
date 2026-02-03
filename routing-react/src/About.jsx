import { Link, Outlet, useSearchParams } from "react-router-dom";

function About(){

  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "general";

  const handleTopic = (newTopic) =>{
    setSearchParams({topic:newTopic});
  }


 // js fuction we need to update manually but router hook renders automatically main use is manipute
  const urlParams = new URLSearchParams(window.location.search);


  const topicFromURL = urlParams.get("topic");
  console.log("useSearchParam: ",topic);
  console.log("URLSearchParam: ",topicFromURL);
  

  // console.log(searchParams);
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

      <div className="mt-4">
        <h3 className="text-xl text-gray-800 font-bold">Choose the topic : </h3>
        <div className="mt-4 space-x-4 ">
          <button 
          onClick={()=>handleTopic("team")}
          className="px-4 py-2 bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600 transition">Team</button>
          <button 
          onClick={()=>handleTopic("Mission")}
          className="px-4 py-2 bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600 transition">Mission</button>
          <button 
          onClick={()=>handleTopic("Vision")}
          className="px-4 py-2 bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600 transition">Vision</button>
        </div>
      </div>

      <div className="mt-8 text-lg text-gray-700">
        <p>Current Topic: {topic}</p>

      </div>

      <div className="mt-8 w-full max-w-7xl">
        <Outlet/>

      </div>

    </div>
  );
}

export default About;