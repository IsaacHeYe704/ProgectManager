import React from 'react'
import SideBarStyle from "./SideBarStyle.module.css"
import {RiTeamFill} from "react-icons/ri"
import {BsFolderFill} from "react-icons/bs"

const SideBar = () => {
    return (
        <div className={SideBarStyle.container}>
            <div className={SideBarStyle.leftMenu}>
                <hr></hr>
                <ul className={SideBarStyle.list}>
                    <li className={SideBarStyle.ListName}><RiTeamFill className={SideBarStyle.ListIcon}/> Equipos  </li>
                    <li className={SideBarStyle.ListName}><BsFolderFill className={SideBarStyle.ListIcon}/>Proyectos</li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;