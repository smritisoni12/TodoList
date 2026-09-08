
function Settings({data, setData}){
   const {theme} = data;

   const handleDataChange = (e) => {  // e is the event object.    React gives it to us automatically when the event happens.
      setData((...prevState) =>  ({
         ...prevState,  // Keep everything that was already in the state.
          theme: e.target.name}))
   }  // Why ({?  =>  I am implicitly returning something. The thing I'm returning is an object.
   return(
    <div> 
                        <div> 
                           <label> <input 
                           type="radio" 
                           name="dark"
                           checked={theme === "dark"}
                           onChange={handleDataChange}
                              /> Dark
                               </label>
                          </div>
                            <div> 
                           <label> 
                           <input 
                           type="radio" 
                           name="light"
                           checked={theme === "light"}
                           onChange={handleDataChange}
                              /> Light
                               </label>
                          </div>
      </div>
   )
}
export default Settings;