import React, {useState} from 'react';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import "./BoxList.css"
import { v4 as uuid} from 'uuid';


function BoxList() {
  const initial_state = [
    // {id: uuid(),
    // height: 200,
    // width: 300,
    // color: "#ffff"
    // },
    // {id: uuid(),
    //   height: 200,
    //   width: 300,
    //   color: "#df0c0c"
    //   }
  ]
    const [state, setState] = useState(initial_state);

      function addOnData(newInput){
        setState(prev=>[{id: uuid(), ...newInput}, ...prev])
      }

      function remove(id){
        setState((data)=>data.filter(data=> data.id !== id))
      }



  return (
    <div className="boxlists">
      <div>
      <NewBoxForm addOnData={addOnData} />
      <hr class="mt-1 mb-1"/>
      {
        state.map(data=>(<Box id={data.id} data={data} key={data.id} remove={remove} />))
      }
      </div>
    </div>
  )
}

export default BoxList