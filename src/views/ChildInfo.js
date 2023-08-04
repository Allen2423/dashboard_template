import {React, useState, useEffect} from "react";
import axios from "axios";
const ChildInfo = () => {
  const [apiData, setApiData] = useState([]);
  
  const [facultName, setFacultName] = useState("");
  const [department, setDepartment] = useState("");
  const [cName, setCName] = useState("");
  const [gender, setGender] = useState("");
  const [cClinicNo, setCClinicNo] = useState("");
  const [firstSeenDate, setFirstSeenDate] = useState("");
  const [cBdy, setCBdy] = useState("");
  const [cHome, setCHome] = useState("");
  const [cFathersName, setCFathersName] = useState("");
  const [cMothersName, setCMothersName] = useState("");
  const [cFathersBdt, setCFathersBdt] = useState("");
  const [cMothersBdt, setCMothersBdt] = useState("");
  const [cRegion, setCRegion] = useState("");
  const [estate, setEstate] = useState("");
  const [poBox, setPoBox] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pid, setPid] = useState("");
  
  
  const token = sessionStorage.getItem('token');

  //retreving parents data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_BASE_URL}/patient`, {
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
    let res = await fetch(`${process.env.REACT_BASE_URL}/childcard/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({    
        facultName: facultName,
        department: department,
        childNames: cName,
        sex:gender,
        clinicCardNo: cClinicNo,
        FirstSeenDate: firstSeenDate,
        birthDate: cBdy,
        birthPlace: cHome,
        fathersName: cFathersName,
        mothersName: cMothersName,
        fBirthDate: cFathersBdt,
        mBirthDate: cMothersBdt,
        region: cRegion,
        district: district,
        ward: ward,
        street: street,
        village: estate,
        poBox: poBox,
        phoneNo: phoneNo,
        pID: 	pid
      }),
    })
    .then((data) => data.json());
    window.location.reload();
  
  };
  const d = new Date();
  const month = d.getMonth()+1;
  const currentDate = d.getFullYear()+'-'+"0"+month+'-'+"0"+d.getDate();
// const miniDAte = d.setMonth(d.getMonth());
  
  return (
    <div className="childInfo">
      {/* <h3>Immunization</h3> */}

      <div className="row  mt-4 BoxShadow">
        <div className="imTable_title">
          <h6 className="title">Child Health Card</h6>
        </div>
        <div className="select mt-2 px-4">
                      <h4>Select parent</h4>
                      <select className="form-control" onChange={(e)=>setPid(e.target.value)}>
                        <option>--Select --</option>
                        {apiData.map((value) => {
                          return (
                              <option key={value.pID} value={value.pID}>
                                {value.fname} {value.lname}
                              </option>
                          );
                        })}
                      </select>
                    </div>
        <div className="table_container firstTable table-responsive mt-4 px-4">
          <form className="table-responsive" onSubmit={handleSubmit}>
          <table className="table table-hover table-sm-3" border="1">
            <thead className="table-light">
              {/* <tr>
              <th scope="col">POLIO VACCINE: </th>
              <th scope="col">Date given</th>
              <th scope="col">Date of next visit</th>
            </tr> */}
            </thead>
            <tbody>
              <tr>
                <th>HEALTH FACULT NAME:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="facultName"
                    value={facultName}
                    onChange={(e) => setFacultName(e.target.value)}
                    required
                  />{" "}
                </td>
              </tr>
              <tr>
                <th>DEPARTMENT</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  />{" "}
                </td>
              </tr>
              <tr>
                <th>CHILD's NAME </th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="cName"
                    value={cName}
                    onChange={(e) => setCName(e.target.value)}
                    required
                  />{" "}
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  SEX
                  <p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender("Male")}
                    />
                    MALE
                  </p>
                </th>
                <th colSpan="2">
                  <p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender("Female")}
                    />
                    FEMALE
                  </p>
                </th>
              </tr>
              <tr>
                <th>CHILD'S CLINIC NO.</th>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    name="cClinicNo"
                    value={cClinicNo}
                    onChange={(e) => setCClinicNo(e.target.value)}
                    required
                  />{" "}
                </td>
                <th>DATE OF FIRST SEEN</th>
                <td>
                  <input
                    className="form-control"
                    type="Date"
                    name="firstSeenDate"
                    min={currentDate}
                    value={firstSeenDate}
                    onChange={(e) => setFirstSeenDate(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>DATE OF BIRTH</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="date"
                    name="cBdy"
                    max={currentDate}
                    value={cBdy}
                    onChange={(e) => setCBdy(e.target.value)}
                    required
                  />{" "}
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  PLACE OF BIRTH
                  <p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cHome"
                      value=""
                      onChange={(e) => setCHome("Home")}
                    />{" "}
                    HOME
                  </p>
                </th>
                <th colSpan="2">
                  <p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cHome"
                      value={cHome}
                      onChange={(e) => setCHome("Health Facult")}
                      required
                    />
                    HEALTH FACULT
                  </p>
                </th>
              </tr>
              <tr>
                <th>FATHER'S NAME:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="cFathersName"
                    value={cFathersName}
                    onChange={(e) => setCFathersName(e.target.value)}
                    required
                  />{" "}
                </td>
              </tr>
              <tr>
                <th>MOTHER'S NAME:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="cMothersName"
                    value={cMothersName}
                    onChange={(e) => setCMothersName(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>FATHER'S DATE OF BIRTH:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="date"
                    name="cFathersBdt"
                    max="2002-12-31"
                    value={cFathersBdt}
                    onChange={(e) => setCFathersBdt(e.target.value)}
                    required
                  />{" "}
                </td>
              </tr>
              <tr>
                <th>MOTHER'S DATE OF BIRHT:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="date"
                    name="cMothersBdt"
                    max="2002-12-31"
                    value={cMothersBdt}
                    onChange={(e) => setCMothersBdt(e.target.value)}
                    required
                  />{" "}
                </td>
              </tr>
              <tr>
                <th>REGION:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="cRegion"
                    value={cRegion}
                    onChange={(e) => setCRegion(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>DISTRICT:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>WARD:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="ward"
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>STREET:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>ESTATE/VILLAGE:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="estate"
                    value={estate}
                    onChange={(e) => setEstate(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>P.O BOX:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="poBox"
                    value={poBox}
                    onChange={(e) => setPoBox(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>PHONE NUMBER:</th>
                <td colSpan="4">
                  <input
                    className="form-control"
                    type="text"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
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
  );
};

export default ChildInfo;
