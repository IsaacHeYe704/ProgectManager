import NoProjects from "../../Components/NoProjects/NoProjects";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import { Project } from "../../Components/Project/Project";
import ProjectsStyle from "./ProjectsStyle.module.css"
import { connect } from "react-redux";
import ProjectZoomIn from "../../Components/ProjectZoomIn/ProjectZoomIn";

function Projects(props) {
  return (
    
    <div className={ProjectsStyle.container}>
      <div>
        <h2>Mis Proyectos</h2>
        <div className={ProjectsStyle.buttonContainer}>
          <GenericButton2 text="Agregar Proyecto" />
        </div>
        
      </div>
        <div className= {ProjectsStyle.ProjectsContainer}>
        { 
            props.projects.length>0?
                props.projects.map(  TheProject => (<Project ProjectName={TheProject.proyectName} TeamName={TheProject.teamName} projectId={TheProject.proyectId}/>))
            :
                <NoProjects/>
        }
        </div>
        
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      projects: state.UserInfo.proyects
  };
};


export default connect(mapStateToProps)(Projects) ;