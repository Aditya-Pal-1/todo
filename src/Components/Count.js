import React from 'react'
import "../App.css"
export default function Count({itemscount}) {
  return (
    <div className='count'>
      Pending item Count-{itemscount}
    </div>
  )
}
