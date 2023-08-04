import { React, useState, useEffect, useContext } from "react";
import AuthContext from "../store/Action";


const ChildCardView = () => {
  const [childcard, setChildcard] = useState([]);
  
  const [pid, setPid] = useState("");
  
  const { profile } = useContext(AuthContext);
  
  //retriving child health data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/childcard`)
      .then((response) => response.json())
      .then((data) => {
        setChildcard(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
      // window.location.reload();
  },[]);
  
  // const myChangeHandler=(e)=>{
  //   e.preventDefault();
  //   let nam = e.target.name;
  //   let val = e.target.value;
  //   setInputs({[nam]: val});
  // }

  return (
    <div className="childCardView">
      {/* <h3>Immunization</h3> */}

      <div className="row  mt-4 BoxShadow">
        <div className="imTable_title">
          <h6 className="title">Child Card Information</h6>
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
        {childcard.map((element) => {
          return element.ccID === Number(pid) ? (
            <div  className="table_container firstTable table-responsive mb-4 mt-4 px-4">
              <form className="table-responsive">
                <table className="table table-hover table-sm-3" border="1">
                  <thead className="table-light">
                  </thead>
                  <tbody>
                    <tr>
                      <th>HEALTH FACULT NAME:</th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="facultName"
                          value={element.facultName}
                          readOnly
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
                          value={element.department}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>CHILD's NAME </th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="cName"
                          value={element.childNames}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="1">
                        SEX
                      </th>
                      <th colSpan="4">
                      <input
                          className="form-control"
                          type="text"
                          name="sex"
                          value={element.sex}
                          readOnly
                        />
                      </th>
                    </tr>
                    <tr>
                      <th>CHILD'S CLINIC NO.</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          name="cClinicNo"
                          value={element.clinicCardNo}
                          readOnly
                        />
                      </td>
                      <th>DATE OF FIRST SEEN</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          name="firstSeenDate"
                          value={element.FirstSeenDate}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>DATE OF BIRTH</th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="cBdy"
                          value={element.birthDate}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colSpan="1">
                        PLACE OF BIRTH
                      </th>
                      <th colSpan="3">
                          <input
                            className="form-control"
                            type="text"
                            name="cHome"
                            value={element.birthPlace}
                            readOnly
                          />
                      </th>
                    </tr>
                    <tr>
                      <th>FATHER'S NAME:</th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="cFathersName"
                          value={element.fathersName}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>MOTHER'S NAME:</th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="cMothersName"
                          value={element.mothersName}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>FATHER'S DATE OF BIRTH:</th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="cFathersBdt"
                          value={element.fBirthDate}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>MOTHER'S DATE OF BIRHT:</th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="cMothersBdt"
                          value={element.mBirthDate}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>REGION:</th>
                      <td colSpan="4">
                        <input
                          className="form-control"
                          type="text"
                          name="cRegion"
                          value={element.region}
                          readOnly
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
                          value={element.district}
                          readOnly
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
                          value={element.ward}
                          readOnly
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
                          value={element.street}
                          readOnly
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
                          value={element.village}
                          readOnly
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
                          value={element.poBox}
                          readOnly
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
                          value={element.phoneNo}
                          readOnly
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          ) : (
            <h1></h1>
          );
        })}
      </div>
    </div>
  );
};

export default ChildCardView;
