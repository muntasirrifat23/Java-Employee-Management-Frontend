import React, { useEffect, useState } from "react";
import { listEmployee } from "../services/EmployeeService";

const ListEmployee = () => {
  // const employeeData = [
  //   {
  //     employeeId: 1,
  //     firstName: "Rifat",
  //     lastName: "Fadatare",
  //     emailId: "rifat@gmail.com",
  //   },
  //   {
  //     employeeId: 2,
  //     firstName: "Rimi",
  //     lastName: "Stark",
  //     emailId: "rimi@gmail.com",
  //   },
  //   {
  //     employeeId: 3,
  //     firstName: "Babur Ma",
  //     lastName: "Cruise",
  //     emailId: "mashud@gmail.com",
  //   },
  //   {
  //     employeeId: 4,
  //     firstName: "Picci",
  //     lastName: "Fadatare",
  //     emailId: "ruma@gmail.com",
  //   },
  //   {
  //     employeeId: 5,
  //     firstName: "Tormuj",
  //     lastName: "Jadhav",
  //     emailId: "manikvai@gmail.com",
  //   },
  //   {
  //     employeeId: 6,
  //     firstName: "Godaun",
  //     lastName: "Das",
  //     emailId: "shoron@gmail.com",
  //   },
  //   {
  //     employeeId: 7,
  //     firstName: "Pondit",
  //     lastName: "Akter",
  //     emailId: "shamimavabi@gmail.com",
  //   },
  // ];

  const [employees, setEmployee] = useState([]);

  useEffect(()=>{
    listEmployee().then((response)=>{
        setEmployee(response.data);
    }).catch(error=>{
        console.log(error)
    })
  })

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">List of All Employees</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Update / Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
