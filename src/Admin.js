import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div className="container">
            <Link className="mx-3 btn btn-primary " to="/addtheatre">Add a theatre</Link>
            <Link className="mx-3 btn btn-primary " to="/addmovie ">Add a Movie</Link>
            
            <br/>
            <h2>Your Theatres</h2>
            <div class="container row">
            <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div class="card card-inverse card-info">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
                    <div class="card-block">
                        <figure class="profile profile-inline">
                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""/>
                        </figure>
                        <h4 class="card-title">Theatre 1</h4>
                        <div class="card-text">
                            Lorem ipsum
                        </div>
                    </div>
                    <div class="card-footer">
                        <Link class="btn btn-info btn-sm" to="/theatre/:id">View Shows</Link>
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
                        <h4 class="card-title">Theatre 2</h4>
                        <div class="card-text">
                            Lorem ipsum
                        </div>
                    </div>
                    <div class="card-footer">
                        <Link class="btn btn-info btn-sm" to="/theatre/:id">View Shows</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Admin
