import React from "react";
import Header from "../header";

function Employee({ employees, tableHeader, sortHandler }) {
  return (
    <table className="table table-striped mt-0">
      <thead>
        <tr>
          {tableHeader.map((header) => {
            return (
              <Header
                key={header.name}
                header={header}
                sortHandler={sortHandler}
              />
            );
          })}
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.id.value}>
              <td>
                <img src={employee.picture.medium} alt={employee.name.first} />
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Employee;
