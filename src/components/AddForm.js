import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

function AddForm() {

  return (
    <div>
        <Form>
            <FormGroup>
                <FormControl
                type='text'
                placeholder='Enter Name'
                required
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                type='email'
                placeholder='Enter Email'
                required
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                as='textarea'
                placeholder='Enter Address'
                rows={3}
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                type='number'
                placeholder='Enter Mobile Number'
                required
                />
            </FormGroup>

            <Button variant="success" type='submit'>Add New Employee</Button>
        </Form>
    </div>
  )
}

export default AddForm