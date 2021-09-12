import React from 'react'

function Addmovie() {
    return (
        <div className="container">
            <form >
                <div className="row">
                    <div className="col col-md-6">
                        <label>Movie Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col-md-6">
                        <label>Show Time</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col col-md-6">
                        <label>Poster URL</label>
                        <input type="url" className="form-control"/>
                    </div>
                    <div className="col col-md-12">
                            <input type="submit" value="Submit" className="btn btn-primary mt-3" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addmovie
