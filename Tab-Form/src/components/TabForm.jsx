// import react from "react"
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";


function TabForm(){
  const [activeTab, setActiveTab]  = useState(0);
  const [data, setData]  = useState({
     name: "smriti",
     age: "23",
     email: "smriti@123",
     interest : ["chess", "music"],
     theme: "dark",
  })

  const [errors, setErrors] = useState({})
   
   const tabs = [
                      { name: "profile",
                        component: Profile,
                        validate: () => {
                          const err = {};
                          if(! data.name || data.name.length < 2){
                            err.name = "Name is not valid !";
                          }
                            if(! data.age || data.age < 18){
                            err.age = "age is not valid !";
                          }
                            if(! data.email || data.email.length < 2){
                            err.email = "Email is not valid !";
                          }
                  
              setErrors(err);
               return err.name || err.age || err.email ? false : true
                        }
                       },
                        { name: "interest",
                        component: Interest,
                        validate: () => {
                          const err = {};
                          if(data.interest.length === 0){
                            err.interest = "Please select at least one interest !"
                          }
                          setErrors(err)
                          // return err.interest ? false : true 
                          return Object.keys(err).length === 0;
                        }
                        
                       },
                        { name: "settings",
                        component: Settings,
                        validate: () => true
                       } 
                      ]

    const ActiveTabComponent = tabs[activeTab].component;

    const handleNextClick = () => {
      if(tabs[activeTab].validate()){
        setActiveTab(prev => prev + 1)
      }
      
    }
    const handlePrevClick = () => {
      //   if(tabs[activeTab].validate()){
      //   setActiveTab(prev => prev - 1)
      // }
      setActiveTab(prev => prev - 1)
    }
    const handleSubmitClick = () => {
      console.log("hello");
    }

   return(
            <> 
            <div className="container"> 
            <div className="heading-container"> 
                {tabs.map((t, index) => {
                      return <div 
                       className="headings"
                       key={index}
                       onClick={() =>{

                      console.log("Clicked tab:", t.name);
                      console.log("Clicked index:", index); 
                      tabs[activeTab].validate() && setActiveTab(index)}}
                        > {t.name}
                       </div>
                }
                )}
            </div>
                <div className="active-component">
                       <ActiveTabComponent data={data} setData={setData} errors={errors}/>
                        </div>  
                        <div> {activeTab > 0  && <button onClick={handlePrevClick}> Prev</button>}
                        {activeTab < tabs.length-1 && <button onClick={handleNextClick}> Next </button>}
                        {activeTab === tabs.length-1 && <button onClick={handleSubmitClick}> Submit </button>}
                          </div>                          
           </div> 
           </>
   )
}
export default TabForm;