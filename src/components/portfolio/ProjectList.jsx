export const ProjectList = (props) => {
  const { projects } = props;  

  return (
    <div className="projects">
      { projects.map(project => <img key={project.id} src={project.img} alt={project.category} />) }
    </div>
  )
}
