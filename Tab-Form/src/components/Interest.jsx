
function Interest({data, setData, errors}){

     const {interest} = data;
     const handleDataChange = (e) => {
   setData((prevState) => ({
      ...prevState,
      interest: e.target.checked 
      ? [...prevState.interest, e.target.name] 
      : prevState.interest.filter((i)  => i !== e.target.name),
   }))
     }
   return(
                      <div>
                        <div> 
                           <label> <input type="checkbox" 
                           name="coding"
                           checked={interest.includes("coding")}
                           onChange={handleDataChange}
                              /> Coding
                               </label>
                        </div>
                         <div> 
                           <label> <input type="checkbox" 
                           name="music"
                           checked={interest.includes("music")}
                           onChange={handleDataChange}
                              /> Music
                               </label>
                        </div>
                         <div> 
                           <label> <input type="checkbox" 
                           name="chess"
                           checked={interest.includes("chess")}
                           onChange={handleDataChange}
                              /> Chess
                               </label>

                        </div>
                        {errors.interest && <span className="errors"> {errors.interest} </span>}
                         </div> 
   )                    


}
export default Interest;