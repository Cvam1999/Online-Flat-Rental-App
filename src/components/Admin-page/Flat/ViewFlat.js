// pending

// After redirection page
// validation
// user added success message

import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ViewFlat() {

   return (
      <React.Fragment>
        
        <form className="view-form">
    <h1 className="form-text ">View Flat By ID</h1>
    <br/>
    <input name="username" type="number" placeholder="Flat ID*" className="username"/>
    <br/>
    <button className="btn">View Flat</button>
   </form>
   


    </React.Fragment>
    );
}

export default ViewFlat;