import "../styles/main.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import {useSortBy, useTable} from "react-table"
import React from "react";
import "../styles/table.css"
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable ( { columns, data, }, useSortBy)
  const firstPageRows = rows.slice(0, 20)
  
  return (
    <div>
      <h1>Current Employees</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    
<Link className="indexRedirect" to="/">Home</Link>
    </div>
  );
}