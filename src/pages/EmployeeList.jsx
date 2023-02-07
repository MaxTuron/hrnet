import "../styles/main.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import {useTable} from "react-table"
import React from "react";
export default function Accueil() {
  const userArr = useSelector(state => state.userArr.userArr)
  console.log(userArr)
 
  const data = React.useMemo(() => userArr, [userArr])
  const columns = React.useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'userFirstName', // accessor is the "key" in the data
      },
      {
        Header: 'Last name',
        accessor: 'userLastName',
      },
      {
        Header: 'Date of birth',
        accessor: 'userDateOfBirth',
      },
      {
        Header: 'Start date',
        accessor: 'userStartDate',
      },
      {
        Header: 'Street',
        accessor: 'userStreet',
      },
      {
        Header: 'City',
        accessor: 'userCity',
      },
      {
        Header: 'State',
        accessor: 'userState',
      },
      {
        Header: 'Zip code',
        accessor: 'userZipCode',
      },
      {
        Header: 'Department',
        accessor: 'userDepartment',
      },
    ],[]
  )

  const tableInstance = useTable({ columns, data })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <div>
<table {...getTableProps()}>
  <thead>
    {// Loop over the header rows
    headerGroups.map(headerGroup => (
      // Apply the header row props
      <tr {...headerGroup.getHeaderGroupProps()}>
        {// Loop over the headers in each row
        headerGroup.headers.map(column => (
          // Apply the header cell props
          <th {...column.getHeaderProps()}>
            {// Render the header
            column.render('Header')}
          </th>
        ))}
      </tr>
    ))}
  </thead>
  {/* Apply the table body props */}
  <tbody {...getTableBodyProps()}>
    {// Loop over the table rows
    rows.map(row => {
      // Prepare the row for display
      prepareRow(row)
      return (
        // Apply the row props
        <tr {...row.getRowProps()}>
          {// Loop over the rows cells
          row.cells.map(cell => {
            // Apply the cell props
            return (
              <td {...cell.getCellProps()}>
                {// Render the cell contents
                cell.render('Cell')}
              </td>
            )
          })}
        </tr>
      )
    })}
  </tbody>
</table>
    </div>
  );
}