import React, { useState } from 'react'

function NewBoxForm({addOnData}) {

  const INITIAL_STATE = {
    height: "",
    width: "",
    color: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e)=>{
    e.preventDefault()
    addOnData({...formData})
    setFormData(INITIAL_STATE)

  }
  const handleInput = (e)=>{
    const { name, value } = e.target;
    setFormData(data=>({...data, 
    [name]: value
    }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-2">
          <label htmlFor='height' className="form-label fw-bold">Height:</label>
          <input type="number" onChange={handleInput} id="height" className="form-control" name="height" placeholder="Enter Height" value={formData.height} />
        </div>
        <div className="mb-3">
          <label htmlFor="width" className="form-label fw-bold">Width: </label>
          <input type="number" onChange={handleInput} id="width" className="form-control" name="width" value={formData.width} placeholder="Enter Width" />
        </div>
        <div className="mb-3">
          <label htmlFor='folor' className="form-label fw-bold">Color:</label>
          <input id='color' type="color" onChange={handleInput} name="color" value={formData.color} placeholder='Select the color' />
        </div>
        <button type='submit' className='btn btn-info'>Add Div</button>
      </form>
    </div>
  )
}

export default NewBoxForm