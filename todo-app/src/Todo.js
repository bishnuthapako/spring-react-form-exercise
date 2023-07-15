import React from 'react'

function Todo({remove, data, id, handleEdit}) {
  return (
    <>
     <div className="row justify-content-md-center mb-1">
                <div className="col col-lg-9 bg-white rounded">
                <p className="fw-bold text-start fs-5 text-info">{data.todo}</p>
                </div>
                <div className="col-md-auto d-flex gap-2">
                <button type='button' onClick={()=> handleEdit(id)} className='btn btn-warning'>Edit</button>
                <button type='button' onClick={()=>remove(id)} className="btn btn-warning">Del</button>
                </div>
     </div>
    </>
  )
}

export default Todo