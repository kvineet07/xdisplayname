import React,{useState} from "react";
import Styles from "./displayname.module.css"
function Displayname(){
    const [fname,setfName] = useState("");
    const [lname,setLname] = useState("");
    const [fullname,setFullname] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (!fname|| !lname) {
        setError("Both fields are required.");
        return;
      }
      setError("");
      setFullname(`${fname} ${lname}`)

    }

    return(
        <div className={Styles.displayname}>
           <h1>Full Name Display</h1>
           <div>
              <form action="">
                <h5>First Name: <input type="text" value={fname}    onChange={(e)=>setfName(e.target.value)} required/></h5>
                <h5>Last Name: <input type="text" value={lname}  onChange={(e) =>setLname(e.target.value)} required /></h5>
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </form>
              {fullname && (
                <div>
                  <h2> Full Name: {fullname}</h2>
                </div>)
              }
              {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
           </div>



        </div>
        
    )
}

export default Displayname
