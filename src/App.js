import React, {useState} from "react";
import "./App.css";

export default function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [mobile,setMobile] = useState("");
  const [data,setData] = useState("data");
  const [personInfo, setPersonInfo] = useState({
    firstName:'',
    lastName:'',
    mobile:''
  })
  const firstNameChangeHandler=(e)=>{
    setPersonInfo({...personInfo, firstName:e.target.value});
  }
  const lastNameChangeHandler=(e)=>{
    setPersonInfo({...personInfo, lastName:e.target.value});
  }
  const mobileChangeHandler=(e)=>{
    setPersonInfo({...personInfo, mobile:e.target.value});
  }

  const showData = (e) => {
    e.preventDefault();
    setData(firstName+','+lastName+','+mobile);
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={showData}>
          <input type="text" 
          placeholder="First Name"
          onChange={firstNameChangeHandler}
          />
          <br/>
          <input type="text" 
          placeholder="Last Name"
          onChange={lastNameChangeHandler}
          />
          <br/>
          <input type="text" 
          placeholder="Mobile"
          onChange={mobileChangeHandler}
          />
          <br/>
          <input type="submit" value="Submit"/>
        </form>
        {JSON.stringify(personInfo)}
      </div>
    </div>
  );
}