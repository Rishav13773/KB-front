/* eslint-disable no-unused-vars */
import { FcFolder } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";
import { DataGrid } from '@mui/x-data-grid';

import { Link, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";

import "./style.css";
import axios from "axios";
import ProjectBar from "../../components/projectBar/ProjectBar";
import NavBar from "../../components/nav/NavBar";
import SidePanel from "../../components/sidePanel/SidePanel";
import ModifyDrop from "../../components/home/modified/ModifyDrop";
import TypeDropdown from "../../components/home/type/TypeDropdown";

const Home = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => ({ ...state })); //Getting user id
  // const [visible, setVisible] = useState(false);
  // const [modifyview, setModifyview] = useState(false);
  // const dropdownRef = useRef(null);
  // const dropdownWrapRef = useRef(null);

  console.log(user.id);

  useEffect(() => {
    if (!user) {
      return redirect("/login")
    }
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

  //Add columns according to need
  const columns = [
    {
      field: 'projectName',
      headerName: 'Project Name',
      flex: 1,
      renderCell: (params) => (
        <Link to={`/projects/${params.row._id}`} className="items">
          <FcFolder className="folder-icon" style={{ fontSize: "25px" }} />
          <p>{params.row.projectName}</p>
        </Link>
      )
    },
    { field: 'owner', headerName: 'Owner', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'size', headerName: 'Size', flex: 1 },
  ];

  const rows = [
    ...data.map((item, id) => ({
      id,
      _id: item._id,
      projectName: item.projectName,
      owner: 'Rishav',
      date: 'Sep 10 2023',
      size: '2.9 MB',
    })),
  ];
  return (
    <div className="main">
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <NavBar />
        <SidePanel />
      </div>

      <div className="container">
        <ProjectBar />

        <div className="filter-contain">
          <TypeDropdown />
          <ModifyDrop />
        </div>


        {/* //Display folders and files */}
        {/* <div className="table-container">
          <table className="folders-table">
            <thead>
              <tr className="table-title">
                <th>Name</th>
                <th>Owner</th>
                <th>Last Modified</th>
                <th>File Size</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, id) => (
                  <tr key={id}>
                    <td>
                      <Link to={`/projects/${item._id}`} className="items">
                        <FcFolder className="folder-icon" style={{ fontSize: "25px" }} />
                        <p>{item.projectName}</p>
                      </Link>
                    </td>
                    <td>Rishav</td>
                    <td>Sep 10 2023</td>
                    <td>2.9 MB</td>
                  </tr>

                ))}
            </tbody>
          </table>
        </div> */}
        <div style={{ height: 400 }} className="table-container">
          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnMenu
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
