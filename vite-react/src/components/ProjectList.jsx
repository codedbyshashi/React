function ProjectList(){
  const projects = [
    {
      title : "Project One",
      description:"A web application built using React and nodeJs",
      link:"#"
    },
     {
      title : "Project One",
      description:"A web application built using React and nodeJs",
      link:"#"
    }
  ]
  return( 
      <section id = 'projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((projects,index)=>(
            <div key={index} className='project-item'>
              <h3>{projects.title}</h3>
              <h3>{projects.description}</h3>
              <a href={projects.link} target='_blank' rel="noopener noreferrer">View Project</a>
            </div>
          )
          )}
           </div>
      </section>
      );
}

export default ProjectList;