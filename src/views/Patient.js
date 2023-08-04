import {React, useState, useEffect, useContext} from 'react';
import '../App.css';
import axios from 'axios';
import AuthContext from '../store/Action';
import $ from 'jquery';

const Patient = () => {
  const [fname, setFname] = useState ('');
  const [lname, setLname] = useState ('');
  const [phoneNo, setPhoneNo] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ('');
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');
  const [apiData, setApiData] = useState ([]);

  const {profile} = useContext (AuthContext);
  const myid = sessionStorage.getItem ('id');
  const token = sessionStorage.getItem ('token');

  useEffect (() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get (`${process.env.REACT_APP_BASE_URL}/patient`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const childData = response.data;
        setApiData (childData);
      } catch (error) {
        console.error ('Error fetching profile:', error);
        console.log ('Request:', error.config);
        console.log ('Response:', error.response);
      }
    };

    if (token) {
      fetchProfile ();
    }
  }, []);

  // Handle psosts request
  const handleSubmit = async e => {
    e.preventDefault ();
    let res = await fetch (`${process.env.REACT_APP_BASE_URL}/patient/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        fname: fname,
        lname: lname,
        phoneNo: phoneNo,
        username: username,
        password: password,
        email: email,
      }),
    }).then (data => {
      data.json ();
    });
    window.location.reload ();
  };

  $ (document).ready (function () {
    var table = $ ('#example').DataTable ({
      select: false,
      columnDefs: [
        {
          className: 'Name',
          targets: [0],
          visible: false,
          searchable: false,
        },
      ],
    }); //End of create main table

    $ ('#example tbody').on ('click', 'tr', function () {
      alert (table.row (this).data ()[0]);
    });
  });

  return (
    <div className="patientContainer">
      {/* <h1>Vaccination</h1> */}

      <div className="row mt-4 ">
        <div className="tTitle ">
          <div className="table_title">
            <h6 className="title">Parent details</h6>
          </div>
          {/* { (role =="") && */}
          <button
            className=" btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#vaccineForm"
          >
            Add parent
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
                          onChange={e => setFname (e.target.value)}
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
                          onChange={e => setLname (e.target.value)}
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
                          name="phoneNo"
                          value={phoneNo}
                          onChange={e => setPhoneNo (e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">Phone Number</span>
                        </label>
                      </div>
                      <div className="form mt-2 ">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={e => setEmail (e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">Email</span>
                        </label>
                      </div>
                      <div className="form mt-2 ">
                        <input
                          type="text"
                          name="username"
                          value={username}
                          onChange={e => setUsername (e.target.value)}
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
                          onChange={e => setPassword (e.target.value)}
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
                          onChange={e => setConfirmPassword (e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">
                            Re-Enter Password
                          </span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary mt-4 mb-4"
                      >
                        Submit
                      </button>
                      <span className="mt-4">{message}</span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vaccineContainer table-responsive  mt-2 BoxShadow">
            <table className="table  table-hover" id="example">
              <thead className="table-light">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map (
                  (
                    value // (value.pID === profile.id || value.role === 'patient')&&(
                  ) => (
                    <tr key={value.pID}>
                      <td>{value.fname}</td>
                      <td>{value.lname}</td>
                      <td>0{value.phoneNo}</td>
                      <td>{value.email}</td>
                    </tr>
                  )
                  //  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
