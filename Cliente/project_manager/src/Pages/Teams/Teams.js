import NoTeams from "../../Components/NoTeams/NoTeams";
import GenericButton2 from "../../Components/GenericButton2/GenericButton2";
import Team from "../../Components/Team/Team"
import TeamsStyle from "./TeamsStyle.module.css"
import { connect } from 'react-redux';
function Teams(props) {
  

  return (
    <div>
        <h2 className={TeamsStyle.title}>Mis Equipos</h2>
        <div className={TeamsStyle.buttonContainer}>
            <GenericButton2 text="Agregar Equipo"/>
        </div>
        
        <div className= {TeamsStyle.teamsContainer}>
        { 
            props.teams.length>0?
                props.teams.map(  (theTeam,index) => (<Team name={theTeam.name} key={index} TeamMembers={theTeam.Participants}/>))
            :
                <NoTeams/>
        }
        </div>
        
    </div>
  );
}


const mapStateToProps = (state) => {
    return {
        teams: state.UserInfo.teams
    };
  };

export default connect(mapStateToProps)(Teams);