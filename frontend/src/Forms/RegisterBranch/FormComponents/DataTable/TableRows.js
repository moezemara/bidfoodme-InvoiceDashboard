import { Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

function TableRows({ rowsData, deleteTableRows, handleChange }) {
    return (
      <>
        {rowsData.map((data, index) => {
          const { fullName, emailAddress, salary } = data;
          return (
            <TableRow key={index}>
              <TableCell>
                <input
                  type="text"
                  value={fullName}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="fullName"
                  className="form-control"
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={emailAddress}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="emailAddress"
                  className="form-control"
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={salary}
                  onChange={(evnt) => handleChange(index, evnt)}
                  name="salary"
                  className="form-control"
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => deleteTableRows(index)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </>
    );
  }

export default TableRows;