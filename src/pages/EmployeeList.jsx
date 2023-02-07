import "../styles/main.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import {useSortBy, useTable, usePagination} from "react-table"
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
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable ( { columns, data, initialState: { pageIndex: 0 }, }, useSortBy, usePagination)
  
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
          {page.map(
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
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
<Link className="indexRedirect" to="/">Home</Link>
    </div>
  );
}