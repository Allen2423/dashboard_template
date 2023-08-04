import { createContext, useEffect, useReducer, useState } from 'react';
import axios from "axios";
 
 const AuthContext= createContext({});

export const AuthProvider = ({children})=>{
    
    const [profile,setProfile]=useState([]);
    const token  = sessionStorage.getItem('token');
    
    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get("http://localhost:3009/auth/profile", {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
      
            const profileData = response.data;
            setProfile(profileData);
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
      
    
    //   (profile.status=='patient') ? (sessionStorage.setItem('profile', profile.fname+" "+profile.lname)): (sessionStorage.setItem('profile', profile.username));
    //   sessionStorage.setItem('profile', profile)
    return (
        <AuthContext.Provider value={{token, profile}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;