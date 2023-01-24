import React from 'react';
import '../App.css';
import Dashboard from './Dashboard';


const StartView = () => {
  
  return (
    <div>


      <div class="container-fluid">
        <section>
          <div class="row">
            <div class="col-12 mt-3 mb-1">
              <h5 class="text-uppercase">Loan Statistics </h5>
              {/* <p>Statistics on minimal cards.</p> */}
            </div>
          </div>
         
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12 mb-4">
              <div class=" BoxShadow">
                <div class="card-body">
                  <div class="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 class="text-info">578</h3>
                      <p class="mb-0">Total Deptors</p>
                    </div>
                    <div class="align-self-center">
                      <i class="fas fa-book-open text-info fa-3x"></i>
                    </div>
                  </div>
                  {/* <div class="px-md-1">
                    <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 80%;" aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12 mb-4">
              <div class="BoxShadow">
                <div class="card-body">
                  <div class="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 class="text-danger">135</h3>
                      <p class="mb-0">Deptors not Returned</p>
                    </div>
                    <div class="align-self-center">
                      <i class="fas fa-map-signs text-danger fa-3x"></i>
                    </div>
                  </div>
                  {/* <div class="px-md-1">
                    <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 40%;" aria-valuenow="40"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12 mb-4">
              <div class="BoxShadow">
                <div class="card-body">
                  <div class="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 class="text-warning">1 200 000</h3>
                      <p class="mb-0">Amount Provided</p>
                    </div>
                    <div class="align-self-center">
                      <i class="far fa-comments text-warning fa-3x"></i>
                    </div>
                  </div>
                  {/* <div class="px-md-1">
                    <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 35%;" aria-valuenow="35"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12 mb-4">
              <div class="BoxShadow">
                <div class="card-body">
                  <div class="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 class="text-success">870 000</h3>
                      <p class="mb-0">Amount Returned</p>
                    </div>
                    <div class="align-self-center">
                      <i class="fas fa-mug-hot text-success fa-3x"></i>
                    </div>
                  </div>
                  {/* <div class="px-md-1">
                    <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 60%;" aria-valuenow="60"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>




      <div class=" mt-4 BoxShadow">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>


      <div class="row mt-4">
        <div class="col-sm-6 ">
          <div class=" BoxShadow">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 ">
          <div class=" BoxShadow">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>


      <div class="table-responsive BoxShadow  mt-4 ">
      <table class="table">
        <thead className='table-dark'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      </div>



      <div class="row mt-4 ">
        <div class="col-sm-6 ">
          <div class=" BoxShadow ">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 ">
          <div class=" BoxShadow">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default StartView;