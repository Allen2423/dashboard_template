import React, { useState } from 'react';
import '../App.css';
import Dashboard from './Dashboard';
import StreetviewIcon from '@mui/icons-material/Streetview';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PregnantWomanIcon from '@mui/icons-material/BabyChangingStation';
import BookOnlineIcon from '@mui/icons-material/BookOnline';


const StartView = () => {
  const cardBod = (
    <div>
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  );

  const notes = (
    <div>
      <h1>This is the ntoes bar
      </h1>
    </div>
  );

  const announcements = (
    <div>
      <h1>This is the annoucement bar so take care of annocements</h1>
    </div>
  )

  const [content, setContent] = useState(notes);

  const contentFunc1 = () => {
    setContent(notes);
    // document.getElementById('notes').style.backgroundColor = "red";
  }

  const contentFunc = () => {
    // document.getElementById('event').style.background = "blue";
    setContent(cardBod);
  }

  const contentFunc2 = () => {
    setContent(announcements);
    // document.getElementById('ann').style.color = "blue";
  }

  const statisticData = [
    {id: 1, class: 'text-info', value: '15', icon: <PregnantWomanIcon fontSize='large' className='text-info'/>, description: 'parents'},
    {id: 2, class: 'text-secondary', value: '13', icon: <BookOnlineIcon fontSize='large' className='text-secondary'/>, description: 'Appointments'},
    {id: 3, class: 'text-success', value: '15', icon: <HealthAndSafetyIcon fontSize='large' className='text-success'/>, description: 'Childrens'},
     {id: 4, class: 'text-danger', value: '2', icon:  <MonitorHeartIcon fontSize='large' className='text-danger'/>, description: 'Critical conditions'}
  ];

  const statisticBox = statisticData.map((value) => {
    return (
      <div className="col-xl-3 col-sm-6 col-12 mb-4" key={value.id}>
        <div className="BoxShadow">
          <div className="card-body">
            <div className="d-flex justify-content-between px-md-1">
              <div>
                <h3 className={value.class}>{value.value}</h3>
                <p className="mb-0">{value.description}</p>
              </div>
              <div className="align-self-center">
                {value.icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  });


  return (
    <div>
      <div className="container-fluid">
        <section>
          <div className="row">
            <div className="col-12 mt-3 mb-1">
              <h5 className="text-uppercase">clinic Statistics</h5>
            </div>
          </div>
          <div className="row">
            {statisticBox} </div>
        </section>
      </div>
      <div className='mt-4'>
        {/* <h6 className="e">Today</h6> */}
        {/* <div className="  BoxShadow">
          <div className="card-header">
            <h5 className='header_text' id='notes' onClick={contentFunc1}>Notes</h5>
            <h5 className='header_text' id='event' onClick={contentFunc}>Events</h5>
            <h5 className='header_text' id="ann" onClick={contentFunc2}>Announcements</h5>
          </div>
          <div className="card-body" id='cardBody'>
            {content} </div>
        </div> */}
      </div>
    </div>
  );
}

export default StartView;
