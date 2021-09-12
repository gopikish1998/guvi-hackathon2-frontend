import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Home() {
    let history=useHistory()
    return (
        <div class="container">
            {window.localStorage.getItem("app_token")?<button className="btn btn-primary" onClick={() => {
          window.localStorage.removeItem("app_token");
          history.push("/login-user")
        }}>Logout</button> : <></> }
            <div class="container row">
            <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div class="card card-inverse card-info">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
                    <div class="card-block">
                        <figure class="profile profile-inline">
                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""/>
                        </figure>
                        <h4 class="card-title">Movie1</h4>
                        <div class="card-text">
                            Lorem ipsum
                        </div>
                    </div>
                    <div class="card-footer">
                        <Link class="btn btn-info btn-sm" to="/theatre1">Book Now</Link>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div class="card card-inverse card-info">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
                    <div class="card-block">
                        <figure class="profile profile-inline">
                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""/>
                        </figure>
                        <h4 class="card-title">Movie2</h4>
                        <div class="card-text">
                            Lorem ipsum
                        </div>
                    </div>
                    <div class="card-footer">
                        <Link class="btn btn-info btn-sm" to="/theatre2">Book Now</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
