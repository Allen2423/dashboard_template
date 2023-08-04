import { React, useEffect, useState, useContext } from "react";
import "../App.css";
import axios from "axios";
import AuthContext from "../store/Action";

const ParentView = ({myid}) => {
  const [apiData, setApiData] = useState([]);
  const [motherhealth, setMotherhealth] = useState([]);
  
  const [weeks, setWeeks] = useState("");
  const [bp, setBp] = useState("");
  const [weight, setWeight] = useState("");
  const [others, setOthers] = useState("");
  const [nextdate, setNextdate] = useState("");
  const [pid, setPid] = useState("");
  const [message, setMessage] = useState("");
  const {profile}=useContext(AuthContext);
  const token = sessionStorage.getItem('token');
  

  //retriving child health data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/motherhealth`)
      .then((response) => response.json())
      .then((data) => {
        setMotherhealth(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
    let res = await fetch(`${process.env.REACT_APP_BASE_URL}/motherhealth/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weeks: weeks,
        weight: weight,
        bp: bp,
        others: others,
        nextdate: nextdate,
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
    <div className="parentInformation">
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
            Add Information
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
                      <h3 className="modal-title">Pregrant Mother form</h3>
                      <button
                        type="button"
                        className="closeBtn btn-close "
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                      <div className="select mt-2 px-4">
                        <h4>Select parent</h4>
                        <select
                          className="form-control"
                          onChange={(e) => setPid(e.target.value)}
                        >
                          <option>--Select Parent--</option>
                          {apiData.map((value) => {
                            return (
                              <option key={value.pID} value={value.pID}>
                                {value.fname} {value.lname}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    <div className="tablecontainer py-1 px-3  mt-2 ">
                      <form className="table-responsive" onSubmit={handleSubmit}>
                        <table className="table table-hover" border="1">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Duration(Weeks)</th>
                              <th scope="col">Weight(kg)</th>
                              <th scope="col">BP (Blood Pressure)</th>
                              <th scope="col">Others</th>
                              <th scope="col">Date of next visit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="weeks"
                                  value={weeks}
                                  onChange={(e) => setWeeks(e.target.value)}
                                  required
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="weight"
                                  value={weight}
                                  onChange={(e) => setWeight(e.target.value)}
                                  required
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Bp"
                                  value={bp}
                                  onChange={(e) => setBp(e.target.value)}
                                  required
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="others"
                                  value={others}
                                  onChange={(e) => setOthers(e.target.value)}
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  type="date"
                                  name="nextDate"
                                  value={nextdate}
                                  onChange={(e) => setNextdate(e.target.value)}
                                  required
                                />
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="3">
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
              <h6 className="title px-3">Mother Health Details</h6>
            </div>
            <div className="tablecontainer py-1 px-3  mt-2 table-responsive ">
              <table className="table table-hover" border="1">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Duration(Weeks)</th>
                    <th scope="col">Weight(kg)</th>
                    <th scope="col">BP (Blood Pressure)</th>
                    <th scope="col">Others</th>
                    <th scope="col">Date given</th>
                    <th scope="col">Date of next visit</th>
                  </tr>
                </thead>
                <tbody>
                  {motherhealth.map((value) => (
                    ((value.pID === profile.id) || (profile.status === 'admin'))&&(
                    <tr key={value.mhID}>
                      <td>{value.weeks}</td>
                      <td>{value.weight}</td>
                      <td>{value.bp}</td>
                      <td>{value.others}</td>
                      <td>{value.dategiven}</td>
                      <td>{value.nextdate}</td>
                    </tr>
                  )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentView;
