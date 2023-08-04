import { React, useState, useEffect, useContext } from "react";
import "../App.css";
import axios from "axios";
import AuthContext from "../store/Action";


const Admin = () => {
  
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [apiData, setApiData] = useState([]);
  
  
  const { profile } = useContext(AuthContext);
  const token = sessionStorage.getItem('token');

//  alert(myids);
useEffect(() => {
  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const childData = response.data;
      setApiData(childData);
    } catch (error) {
      console.error("Error fetching profile:", error);
      console.log("Request:", error.config);
      console.log("Response:", error.response);
    }
  };

  if (token) {
    fetchProfile();
  }
},[]);
  
  
const notfMessage =document.getElementById('message');
  
  // Handle psosts request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.length !== 8){
        notfMessage.style.color='red';
        setMessage("");
        setMessage("Password must have alteast 8 characters");
    }
    else if(password !== confirmPassword){
        notfMessage.style.color='red';
        setMessage("");
        setMessage("Password doesn't match");
    }
    else{
        setMessage("");
    let res = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        username:username,
        passwd:password,
      }),
    }).then((data) => {
      // console.log(data.response)
      // console.log(res)
      data.json()
    });
    window.location.reload();
}
  };
  
 

  return (
    <div className="patientContainer">
      {/* <h1>Vaccination</h1> */}

      <div className="row mt-4 ">
        <div className="tTitle ">
          <div className="table_title">
            <h6 className="title">Admin details</h6>
          </div>
          {/* { (role =="") && */}
          <button
            className=" btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#vaccineForm"
          >
            Add Admin
          </button>
          {/* } */}
        </div>
        <div className="table_container  col-md-12  ">
          <div
            className="modal fade "
            id="vaccineForm"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="vaccineForm">
                    <div className="modal-header ">
                      <h3 className="modal-title">Parent Form</h3>
                      <button
                        type="button"
                        className="closeBtn btn-close "
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <form className="vForm   col-md-12" onSubmit={handleSubmit}>
                      <div className="form  ">
                        <input
                          type="text"
                          name="fname"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">First Name </span>
                        </label>
                      </div>
                      <div className="form mt-2 ">
                        <input
                          type="text"
                          name="lname"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">Last Name</span>
                        </label>
                      </div>
                      <div className="form mt-2 ">
                        <input
                          type="text"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">Username</span>
                        </label>
                      </div>
                      <div className="form mt-2 ">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">Password</span>
                        </label>
                      </div>
                      <div className="form mt-2 ">
                        <input
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">Re-Enter Password</span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary mt-4 mb-4"
                      >
                        Submit
                      </button>
                      <span id="message" className="mb-3">{message}</span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vaccineContainer table-responsive  mt-2 BoxShadow">
            <table className="table  table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((value) => (
                //   (profile.status === 'patient')&&(
                  <tr key={value.pID}>
                    <td>{value.fname}</td>
                    <td>{value.lname}</td>
                    <td>{value.username}</td>
                  </tr>
            //    )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
