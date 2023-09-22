import React from 'react'
import { Button } from 'react-bootstrap'

  function Employee({employee}) {
   

  return (
    <>
       <td>{employee.name}</td>
       <td>{employee.email}</td>
       <td>{employee.address}</td>
       <td>{employee.phone}</td>
       <td>
        <Button className='edit' data-toggle="model"><i className='material-icons'>&#xE147;</i><span>Add New Employee</span></Button>
       </td>
    </>
  )
}

export default Employee