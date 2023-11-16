import { useEffect, useState, useRef } from "react";
import NavBar from "../../components/nav/NavBar";
import ProjectBar from "../../components/projectBar/ProjectBar";
import SidePanel from "../../components/sidePanel/SidePanel";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { FcFolder } from "react-icons/fc";
import { Link } from "react-router-dom";
import Dropmenu from "../../components/home/Dropmenu";

const Home = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => ({ ...state })); //Getting user id
  const [visible, setVisible] = useState(false);
  // const dropmenuRef = useRef(null);
  console.log(user.id);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/getprojectbyid/${user.id}`) ///fetching all projects of user
        .then((response) => setData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <SidePanel />
      <div className="container">
        <ProjectBar />
        <div className="folders">
          {data &&
            data.map((item, id) => {
              return (
                <Link to={`/projects/${item._id}`} className="items" key={id}>
                  <FcFolder style={{ fontSize: "50px" }} />
                  <p>{item.projectName}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
