import {useAsyncDebounce} from "react-table"
import {matchSorter} from 'match-sorter'
import React from "react";
import "../styles/table.css"
// Define a default UI for filtering
export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <span>
        
        <label htmlFor="Search">Search</label>
        <input
        id="search"
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
          style={{
            fontSize: '1.1rem',
            border: '0',
          }}
        />
      </span>
    )
  }
  
  function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
  }
  // Let the table remove the filter if the string is empty
  fuzzyTextFilterFn.autoRemove = val => !val
  
  