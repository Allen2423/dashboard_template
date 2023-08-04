import { React, useEffect, useState, useContext } from "react";
import "../App.css";
import axios from "axios";
import AuthContext from "../store/Action";

const Appointment = () => {
    const [apiData, setApiData] = useState([]);
    const [appointment, setAppointment] = useState([]);
    
    const [message, setMessage] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [nextDate, setNextDate] = useState("");

    const [pid, setPid] = useState("");
    const token = sessionStorage.getItem('token');
    
    const [errorMessage, setErrorMessage] = useState("");
    
  const { profile } = useContext(AuthContext);
   
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/appointment`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
    
          const childData = response.data;
          setAppointment(childData);
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
  
    //retreving parents data
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/patient`, {
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
    
    // Handle posts request
    const handleSubmit = async (e) => {
      e.preventDefault();
      let res = await fetch(`${process.env.REACT_APP_BASE_URL}/appointment/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          phoneNo: phoneNo,
          appointmentDate: nextDate,
          pID: pid,
        }),
      })
        .then((data) => data.json())
        .catch((err) => {
          console.log(err.message);
        });
      window.location.reload();
    };

  return (
    <div className="appointment">
      {/* <h1>Vaccination</h1> */}
      <div className="row mt-4 ">
      {profile.status === 'admin' && (
        <div className="tTitle ">
          <div className="table_title"></div>
          <button
            className=" btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#vaccineForm"
          >
            Add Appointment
          </button>
        </div>
        )}
        <div className="table_container  col-md-12  ">
          <div
            className="modal fade in out"
            id="vaccineForm"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md modal-xl">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="vaccineForm">
                    <div className="modal-header ">
                      <h3 className="modal-title">Appointment form</h3>
                      <button
                        type="button"
                        className="closeBtn btn-close "
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="tablecontainer py-1 px-3  mt-2 ">
                      <form className="table-responsive" onSubmit={handleSubmit}>
                        <table className="table table-hover" border="1">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Patient</th>
                              <th scope="col">Message</th>
                              <th scope="col">Phone Number</th>
                              <th scope="col">Date of Appointment</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                        <select className="form-control" onChange={(e)=>setPid(e.target.value)} required>
                          
                        <option defaultValue='' >-- Select --</option>
                          {apiData.map((value) => {
                            return (
                                <option name="select" key={value.pID}  value={value.pID}>
                                  {value.fname} {value.lname}
                                </option> );
                          })}{" "}
                        </select>
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="message"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  required
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="phoneNo"
                                  value={phoneNo}
                                  onChange={(e) => setPhoneNo(e.target.value)}
                                  required
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="datetime-local"
                                  name="nextDate"
                                  value={nextDate}
                                  onChange={(e) => setNextDate(e.target.value)}
                                  required
                                />
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="5">
                                <input
                                  className="btn btn-primary"
                                  type="submit"
                                  value="Submit"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tableDiv BoxShadow  mt-2">
            <div className="imTable_title">
              <h6 className="title px-3">Appointments</h6>
            </div>
            <div className="tablecontainer py-1 px-3  mt-2 table-responsive">
              <table className="table table-hover" border="1">
                <thead className="table-light">
                  <tr>
                  {(profile.status === 'admin')&&
                    (<th scope="col">Patient</th>)}
                    <th scope="col">Message</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Date of Appointment</th>
                  </tr>
                </thead>
                <tbody>
                  {appointment.map((value) => (
                    (value.pID === profile.id ||  profile.status === 'admin')&&(
                    <tr key={value.aID}>
                     {(profile.status === 'admin')&&
                     (<td>{value.pID}</td>)}
                      <td>{value.message}</td>
                      <td>0{value.phoneNo}</td>
                      <td>{value.dateCreated.slice(0,10)}</td>
                      <td>{value.appointmentDate.slice(0,16)}</td>
                    </tr>
                 ) ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
