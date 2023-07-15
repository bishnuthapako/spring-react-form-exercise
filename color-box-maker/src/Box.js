import React from 'react'

function Box({data, remove, id}) {
  // console.log(data, 'data')
  const {height, width, color} = data;
  console.log(color, 'color')
  return (
    <div style={{height: `${height}px`, width: `${width}px`, backgroundColor: `${color}`}} className='mb-2 rounded'>
      <button onClick={()=>remove(id)} type='button' className='btn btn-warning mt-2'>X</button>
    </div>
  )
}

export default Box