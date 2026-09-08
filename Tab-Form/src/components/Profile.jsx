
function Profile({data, setData, errors}){

    const {name, age, email} = data;
   const handleChange = (e, item) => {
     setData((prevState) => ({
     // The ( is being used because we want the arrow function to return an object directly.
          ...prevState,
          [item] : e.target.value,

          // Don't use the word item as the property name. Go look inside the variable item, and use whatever value it contains. [] = dynamic key.
     }))
   }

 return (
       <div> 
          
          <div> <label> name :</label>
           <input type="text" value={name} onChange={(e) => handleChange(e, "name")}/> 
           {errors.name && <span className="errors"> {errors.name} </span>}
           <label> age :</label>
           <input type="number" value={age} onChange={(e) => handleChange(e, "age")}/>
           {errors.age && <span className="errors"> {errors.age} </span>}
           <label> email :</label>
           <input type="text" value={email} onChange={(e) => handleChange(e, "email")}/>
           {errors.email && <span className="errors"> {errors.email} </span>}
          </div>
          </div>
          
        
 )
}
export default Profile;