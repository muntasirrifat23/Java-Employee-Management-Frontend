import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

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
  const navigator = useNavigate([]);

  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    listEmployee()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/update-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id)
      .then(() => {
      getAllEmployee()
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center my-2">
        <h2 className="mb-0">List of All Employees</h2>
        <button
          type="button"
          className="btn btn-success my-2"
          onClick={addNewEmployee}
        >
          Add Employee
        </button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Update / Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  type="button"
                  className="m-2 btn btn-warning"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="m-2 btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
