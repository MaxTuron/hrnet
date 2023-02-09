import "../styles/main.css"
import { useSelector } from "react-redux"
import {useSortBy, useTable, usePagination, useFilters, useGlobalFilter} from "react-table"
import Header from "../components/header"
import React from "react";
import "../styles/table.css"
import GlobalFilter from "../components/globalFilter"

export default function Accueil() {
  const userArr = useSelector(state => state.userArr.userArr)
  console.log(userArr)
 
  const data = React.useMemo(() => userArr, [userArr])
  const columns = React.useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'userFirstName',
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
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    state,
    previousPage,
    setPageSize,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable ( { columns, data, initialState: { pageIndex: 0 }, },useFilters, useGlobalFilter, useSortBy, usePagination )
  
  return (
    <div>
      <Header title="Home">Current employee</Header>
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
            <p
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </p>
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

      </div>
    </div>
  );
}