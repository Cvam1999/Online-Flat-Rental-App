import React from 'react';

function Footer()
{
    return(
        <>
        
        <div className='container-fluid' style={{position:"absolute",backgroundImage: "linear-gradient(15deg, #5680e9 0%, #5ab9ea 100%)"}}>

    <div className="row">
    <div className="col ">

    
      <h5 className="font-weight-bold text-uppercase text-light mt-3 mb-4 text-center">Contact Us</h5>

      <ul className="list-unstyled">
      <li>
         Email- <br></br>
         Abhishek Pandey- abhishek.99sahilp@gmail.com<br></br>
         Sourabh Kumar- sourabhkumar22102000@gmail.com<br></br>
         Shivam Gupta- shivamgupta019902@gmail.com<br></br>
         Aashish Yadav- aashishrao432@gmail.com<br></br>
         Savin- savinlamba24@gmail.com
        </li>
       
      </ul>

    </div>
    
    <div className="col ">

   
      <h5 className="font-weight-bold text-uppercase mt-3 text-light mb-4 text-center">Follow Us</h5>

      <ul className="list-unstyled text-center">
        <li>
          <a className="text text-dark" href="#!"style={{textDecoration:"none"}}>Instagram</a>
        </li>
        <li>
          <a className="text text-dark" href="#!" style={{textDecoration:"none"}}>LinkedIn</a>
        </li>
        <li>
          <a className="text text-dark" href="#!"style={{textDecoration:"none"}}>Twitter</a>
        </li>
      </ul>

    </div>
  

    
    <div className="col ">

   
      <h5 className="font-weight-bold text-uppercase text-light mt-3 mb-4 text-center">Our Branches</h5>

      <ul className="list-unstyled text-center">
        <li>
          Mumbai
        </li>
        <li>
          Jaipur
        </li>
        <li>
          Hyderabad
        </li>
      </ul>

    </div>
  
</div>

<hr/>

<div className=" text-center " ><p>© OnlineFlatRental: Team-3</p>
</div>

            
        </div>
        </>

    )
}

export default Footer;