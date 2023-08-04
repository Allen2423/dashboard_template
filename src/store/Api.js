import axios from "axios";
import { React, useState, useEffect } from "react";


const Api = () =>{
    const [data, setData]=useState([]);
    const [phoneNo, setPhoneNo]=useState('');
    const token =  sessionStorage.getItem('token');

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get("http://localhost:3009/twillo/appoint", {
              headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
              },
            });
      
            const childData = response.data;
            console.log(childData);
            setData(childData);
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
      
      const dt = "2023-07-09 23:32:00";
     
       

       // Handle posts request
       const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost:3009/twillo/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNo: phoneNo
          }),
        })
          .then((data) => data.json())
          .catch((err) => {
            console.log(err.message);
          });
      };
    return(
        <div>
            { data.map((dat)=>{
        // if(data.appointmentDate == dt.slice(0,16)){
        //     setPhoneNo(data.appointmentDate);
        //     // handleSubmit();
        //     <h3>{data.appointmentDate}</h3>
        //     console.log(data);
        // }

      <h1>{dat}</h1>
      })}
      <h1>data</h1>
        </div>
    )     
}
export default Api;