import { React, useContext, useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import AuthContext from "../store/Action";

const ChildFormView = ({myid}) => {
  const [apiData, setApiData] = useState([]);
  const [childcard, setChildCard] = useState([]);
  const [childHealth, setChildHealth] = useState([]);
  
  const [weeks, setWeeks] = useState("");
  const [vaccineTypes, setvaccineTypes] = useState("");
  const [weight, setWeight] = useState("");
  const [others, setOthers] = useState("");
  const [nextdate, setNextdate] = useState("");
  const [pid, setPid] = useState("");
  const [ccID, setCcID] = useState("");
  const [patientID, setPatieneID] = useState();
  
  const [message, setMessage] = useState("");
  const token = sessionStorage.getItem('token');
  const { profile }=useContext(AuthContext);

  // alert(childHealth)
  //retriving child health data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/childhealth`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        const childData = response.data;
        setChildHealth(childData);
      } catch (error) {
        console.error("Error fetching profile:", error);
        console.log("Request:", error.config);
        console.log("Response:", error.response);
      }
    };
  
    if (token) {
      fetchProfile();
    }
  },[token]);

    //retreving parents data
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/childcard`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
    
          const childData = response.data;
          setChildCard(childData);
        } catch (error) {
          console.error("Error fetching profile:", error);
          console.log("Request:", error.config);
          console.log("Response:", error.response);
        }
      };
    
      if (token) {
        fetchProfile();
      }
    },[token]);
  
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
  },[token]);
  
  useEffect(()=>{
    childcard.map((value)=>{
      if(value.ccID === Number(ccID)){
        setPatieneID(value.pID);
      }
    })
  },[]);
  
  // Handle posts request
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // childcard.map((value)=>{
    //   if(value.ccID === Number(ccID)){
    //     setPatieneID(value.pID);
    //   }
    // })

    alert(Number(patientID))
    let res = await fetch(`${process.env.REACT_APP_BASE_URL}/childhealth/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weeks: weeks,
        vaccineTypes: vaccineTypes,
        weight: weight,
        others: others,
        nextdate: nextdate,
        ccID: ccID,
        pID: patientID
      }),
    })
    .then((data) => data.json())
    .catch((err) => {
        console.log(err.message);
      });
      window.location.reload();
  };

  return (
    <div className="childform">
      {/* <h1>Vaccination</h1> */}
      
      <div className="row mt-4 ">
        {(profile.status === 'admin')&&
        (<div className="tTitle ">
          <div className="table_title"></div>
          <button
            className=" btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#vaccineForm"
          >
            Add
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
                      <h3 className="modal-title">Child health Form</h3>
                      <button
                        type="button"
                        className="closeBtn btn-close "
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div><div className="select mt-2 px-4">
          <h4>Select Child</h4>
          <select
            className="form-control"
            onChange={(e) => setCcID(e.target.value)}
          >
            <option>--Select --</option>
            {childcard.map((value) => {
              return (
               <option key={value.ccID} value={value.ccID} >
               {value.childNames}
             </option>
              )
            })}
          </select>
        </div>
                    <div className="tablecontainer py-1 px-3  mt-2 ">
                      <form onSubmit={handleSubmit} className="table-responsive">
                        <table className="table table-hover" border="1">
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Duration(Weeks){ccID}</th>
                              <th scope="col">Type of vaccine{patientID}</th>
                              <th scope="col">Weight(kg)</th>
                              <th scope="col">Others</th>
                              <th scope="col">Date of next visite</th>
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
                                  name="vaccineType"
                                  value={vaccineTypes}
                                  onChange={(e) =>
                                    setvaccineTypes(e.target.value)
                                  }
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
              <h6 className="title px-3">Child Health Details</h6>
            </div>
            <div className="select mt-2 px-4">
          <h4>Select Child</h4>
          <select
            className="form-control"
            onChange={(e) => setPid(e.target.value)}
          >
            <option>--Select --</option>
            {childcard.map((value) => {
              return (
                (value.pID === profile.id ) ?(
                <option key={value.ccID} value={value.ccID} >
                  {value.childNames}
                </option>
               ):( (profile.status === 'admin') &&
               <option key={value.ccID} value={value.ccID} >
               {value.childNames}
             </option>
               ) );
            })}
          </select>
        </div>
            <div className="tablecontainer py-1 px-3  mt-2 table-responsive ">
              <table className="table table-hover" border="1">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Duration(Weeks)</th>
                    <th scope="col">Type of vaccine</th>
                    <th scope="col">Weight(kg)</th>
                    <th scope="col">Others</th>
                    <th scope="col">Date given</th>
                    <th scope="col">Date of next visit</th>
                  </tr>
                </thead>
                <tbody>
                  {childHealth.map((value) => (
                    ((value.pID === profile.id && value.ccID === Number(pid)) || (profile.status === 'admin' && value.ccID === Number(pid)))&&(
                    <tr key={value.chID}>
                      <td>{value.weeks}</td>
                      <td>{value.vaccineTypes}</td>
                      <td>{value.weight}</td>
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

export default ChildFormView;
