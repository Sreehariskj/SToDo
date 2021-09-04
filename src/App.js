 import {useState} from 'react'
 import './app.css'
 import moment from "moment";
 
 function App() {
   const [toDos,setToDos]=useState([])
   const [toDo,setToDo]=useState('')
  const [removedToDos,setRemovedToDos]=useState([])
  
  const DATE_OPTIONS = { weekday: 'long'};
  return (
      
   <div className="app">
      <div className="mainHeading">
        <h1> <span>S</span> ToDo</h1>
      </div>
      
      <div className="subHeading">
        <h2>whooo! it's {''}
      {(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)} ☕</h2>

      </div>
      
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        
        <i onClick={()=>{if (toDo) {setToDos([...toDos,{id:Date.now(),text:toDo,time: moment().format("llll"), status:false}])
          setToDo('')
        }
        
        }} className="fas fa-plus"></i>
      </div>
     
      <br/>
      <div className="todos">
     
      {toDos.map((obj)=>{
      
      return (
   
     <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
             
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                 obj2.status=e.target.checked
                }
                return obj2
              }))
            }}
            value={obj.status} type="checkbox" name="" id="" />
           <label>{obj.text}</label>
          </div>
          <div className="center">
          </div>
          <div className="right">
            <i onClick={() => {
            if (window.confirm("Are you sure you want to remove this ?")) {
            if(toDos){
            console.log('work')
            setRemovedToDos([...removedToDos, obj]);}
             setToDos(toDos.filter(obj2 => {
               if (obj2.id !== obj.id) {
                 console.log('ff')       
                        return obj2;
                            }
                         return null;
                         }))
                        }
                      }} value={obj.removeStatus} className="fas fa-times "></i>
          </div>
        </div> )
    
      })}
    
      <div className="active">
           <h4 className="text-center">Active ToDos</h4>
          <hr/>
          <div className="Table">
          <table className="shadow-1-strong table table-hover table-responsive-sm table-bordered mt-2 mb-5">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">To Do</th>
                <th scope="col">Finished</th>
              </tr>
            </thead>
            <tbody>
              {
                toDos.length !== 0 ?
                  toDos.map((obj) => {
                   return (
                      <tr key={obj.id}>
                        <th scope="row">{obj.time}</th>
                        <td>{obj.text}</td>
                        <td>
                          {obj.status ? (
                            <i className="shadow-3 fas fa-check text-success"></i>
                          ) : (
                            <i className="shadow-3 fas fa-times text-danger"></i>
                          )}
                        </td>
                      </tr>
                    );
                  }) : <tr><td colSpan={3} className="text-center"> Empty </td></tr> }
            </tbody>
          </table>
          </div>
          </div>
          <div className="removed">
          <div className="shadow-1-strong accordion mb-1" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="shadow-3 accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Removed ToDos
                </button>
              </h2>
              <div
                id="collapseOne"
                className="shadow-3 accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-mdb-parent="#accordionExample"
              >
                <div className="shadow-3 accordion-body">
                  <table className="shadow-1 table table-hover table-responsive table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Time</th>
                        <th scope="col">To Do</th>
                        <th scope="col">Finished</th>
                      </tr>
                    </thead>
                    <tbody>
                      {removedToDos.map((obj) => {
                        return (
                          <tr key={obj.id}>
                            <th scope="row">{obj.time}</th>
                            <td>{obj.text}</td>
                            <td>
                              {obj.status ? (
                                <i className="shadow-3 fas fa-check text-success"></i>
                              ) : (
                                <i className="shadow-3 fas fa-times text-danger"></i>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </div>
        
         

     
      </div>
    </div>
 
  );
}

export default App;

