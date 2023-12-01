/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import NavBar from "../../components/nav/NavBar";
import ProjectBar from "../../components/projectBar/ProjectBar";
import SidePanel from "../../components/sidePanel/SidePanel";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { FcFolder } from "react-icons/fc";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import TypeDropdown from "../../components/home/type/TypeDropdown";
import ModifyDrop from "../../components/home/modified/ModifyDrop";
import { DataGrid } from '@mui/x-data-grid';

const Home = () => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => ({ ...state })); //Getting user id
  const [visible, setVisible] = useState(false);
  const [modifyview, setModifyview] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownWrapRef = useRef(null);

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

  const showTypeDrop = () => {
    setVisible(!visible);
  }
  const showModifyDrop = () => {
    setModifyview(!modifyview);
  }

  //Add columns according to need
  const columns = [
    {
      field: 'projectName', headerName: 'Project Name', flex: 1, renderCell: (params) => (
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
    <>
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <NavBar />
        <SidePanel />
      </div>

      <div className="container">
        <ProjectBar />

        <div className="filter-contain">
          <div className="drop-type" onClick={showTypeDrop} ref={dropdownWrapRef}>
            <p>Type</p>
            <IoMdArrowDropdown style={{ color: "rgb(58, 58, 58)" }} />
          </div>
          <div className="drop-modify" onClick={showModifyDrop} ref={dropdownWrapRef}>
            <p>Modified</p>
            <IoMdArrowDropdown style={{ color: "rgb(58, 58, 58)" }} />
          </div>
        </div>


        {/* Type drpwndown */}
        {visible && <div className="type-wrap" ref={dropdownRef}>
          <TypeDropdown dropdownRef={dropdownRef} dropdownWrapRef={dropdownWrapRef} setVisible={setVisible} />
        </div>}


        {/* Modify dropdown */}
        {modifyview && <div className="modify-wrap" ref={dropdownRef}>
          <ModifyDrop dropdownRef={dropdownRef} dropdownWrapRef={dropdownWrapRef} setModifyview={setModifyview} />
        </div>}


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
    </>
  );
};

export default Home;
