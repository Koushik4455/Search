import React, { useState, useEffect } from "react";
import Data from "./Search.json";
const Values = () => {
  const [search, setSearch] = useState("");
  const [data,setData] =useState({})
  const onSubmit = (e) =>{
    setData(validate(search))

  }
  useEffect(() => {
    console.log(data)
   
  }, [data])
  const validate =(values)=>{
    const errors ={};
    if (!values.value) {
        errors.value = 'Enter a correct value'
      }
  }

 
  return (
    <div>
      <center>
        <form onSubmit={(e) => onSubmit(e)}>
          <label>Enter a value</label>
          <input
            type="value"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            palceholder="Enter a value"
          />
           <p className="lerr">{data.search}</p>
          <button>Search</button>
          
        </form>
        <br />
        <br />
        <div>
          <div className="Search">
            {Data.filter((value) =>
              value.value.toLowerCase().includes(search.toLowerCase())
            ).map((value, index) => {
              return (
                <>
                  <div
                    style={{
                      margin: "5px",
                      border: "1px solid #000",
                      padding: "4px 10px",
                      textAlign: "center",
                      width: "50%",
                    }}
                  >
                    {value.value}
                  </div>
                </>
              );
            })}
            {/* <h3>{Data?.value?.value ===  search ? <>Data is there</> : <>No Data</>}</h3> */}
          </div>
        </div>
      </center>
    </div>
  );
};

export default Values;
