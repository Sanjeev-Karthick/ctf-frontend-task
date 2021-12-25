import React from 'react'

export default function Navbar(props) {

    return (
        <div className="row" style={{width:"100%"}}>
            <div className="col-md-6">
                <h1 className="title"><i class='fas fa-rainbow'></i>   Sunshine Weather</h1>
            </div>

            <div className="col-md-6">

            <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>

                  <div className="input-group mb-3" >

                
                    <input
                    
                      type="text"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={(e) => { props.changeRegion(e.target.value) }}
                    /> 
                    <button class="input-group-text btn btn-info " type="submit" id="basic-addon2" >
                      <i className="fas fa-search "></i>
                    </button>
                  </div>

                </form>

                
            </div>

        </div>
    )
}

