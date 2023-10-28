import NavBar from '../../components/nav/NavBar'
import ProjectBar from '../../components/projectBar/ProjectBar'
import SidePanel from '../../components/sidePanel/SidePanel'
import './style.css'

const Home = () => {
    return (
        <div>
            <NavBar />
            <ProjectBar />
            <SidePanel />
        </div>
    )
}

export default Home