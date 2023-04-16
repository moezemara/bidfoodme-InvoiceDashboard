import React, { useState } from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  TableFooter,
  IconButton
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import { CustomTable } from '../FormComponentsStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "24px",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  }

}));

function DataTable(props) {
  const classes = useStyles();
  const [rowsData, setRowsData] = useState(props.defaultRows);

  const addTableRows = () => {
    const newRow = {};
    props.columns.forEach((col) => {
      newRow[col.field] = { data: "", editable: true };
    });

    if (rowsData == null) {
      setRowsData([newRow]);
      props.onDataTableChange([newRow])
    } else {
      const rows = [...rowsData];
      rows.push(newRow);
      setRowsData(rows);
      props.onDataTableChange(rows);
    }

  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    props.onDataTableChange(rows);
  };

  const handleChange = (index, fieldName, evnt) => {
    const { value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][fieldName].data = value;
    setRowsData(rowsInput);
    props.onDataTableChange(rowsInput);
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} key={props.unique_key}>
        <CustomTable className={classes.table} aria-label="simple table" cellPadding={0} cellSpacing={0}>
          <TableHead>
            <TableRow>
              {props.columns.map((column, index) => (
                <TableCell key={index} align="center" width={!column.cellWidth === '' ? column.cellWidth : ''}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/*Only map if rowsData was passed*/}
            {rowsData != null && rowsData.map((data, index) => (
              <TableRow key={index}>
                {props.columns.map((column, columnIndex) => (
                  <>
                    <TableCell key={columnIndex} component="th" scope="row" align={column.CellAlign === 'center' ? 'center' : column.CellAlign === 'right' ? 'right' : ''} className={column.CellBg === true ? 'cell_bg' : '---------'}>
                      {column.type === "text" ? (
                        <TextField
                          name={column.field}
                          value={data[column.field].data}
                          onChange={(evnt) =>
                            data[column.field].editable &&
                            handleChange(index, column.field, evnt)
                          }
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          disabled={!data[column.field].editable}
                        />
                      ) : (
                        <Select
                          name={column.field}
                          value={data[column.field].data}
                          onChange={(evnt) =>
                            data[column.field].editable &&
                            handleChange(index, column.field, evnt)
                          }
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          disabled={!data[column.field].editable}
                        >
                          {column.options.map((option, optionIndex) => (
                            <MenuItem key={optionIndex} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    </TableCell >
                  </>
                ))}
                {/* {only show delete button if editable key is true } */}

                {Object.keys(data).some((key) => !data[key].editable) || (
                  <TableCell align="right">
                    <IconButton aria-label="delete" onClick={() => deleteTableRows(index)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody >
          <TableFooter>
            <TableRow />
            {
              !props.addRow_bTn_ColsPan === ''
                ?
                <TableCell align="center" colSpan={props.addRow_bTn_ColsPan}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="addBtn"
                    onClick={addTableRows}
                  >
                    <AddIcon />
                  </Button>
                </TableCell>
                :
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    className="addBtn mt_5"
                    onClick={addTableRows}
                  >
                    <AddIcon />
                  </Button>
                </TableCell>

            }

            <TableRow />
          </TableFooter>
        </CustomTable>
      </TableContainer>
    </div >
  );
}

export default DataTable;
