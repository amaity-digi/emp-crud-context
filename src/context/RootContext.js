import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const  EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        {
          id: uuidv4(),
          name: "Thomas Hardy",
          email: "thomas23@gmail.com",
          address: "89, chart road, Bangalore",
          phone: "9826786213",
        },
        {
          id: uuidv4(),
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          address: "123 Main Street, New York",
          phone: "555-123-4567",
        },
        {
          id: uuidv4(),
          name: "John Smith",
          email: "john.smith@example.com",
          address: "456 Elm Avenue, Los Angeles",
          phone: "555-987-6543",
        },
        {
          id: uuidv4(),
          name: "Maria Garcia",
          email: "maria.garcia@example.com",
          address: "789 Oak Lane, Chicago",
          phone: "555-555-5555",
        },
      ]);

    return (
        <EmployeeContext.Provider value={{employees}}>
         {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;
 