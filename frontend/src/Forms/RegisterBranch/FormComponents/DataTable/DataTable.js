import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    IconButton,
    Select,
    MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "24px",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  button: {
    marginTop: "16px",
  },
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
    } else {
        setRowsData([...rowsData, newRow]);
    }

  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, fieldName, evnt) => {
    const { value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][fieldName].data = value;
    setRowsData(rowsInput);
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.columns.map((column, index) => (
                <TableCell key={index}>{column.headerName}</TableCell>
              ))}
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={addTableRows}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*Only map if rowsData was passed*/}
            {rowsData != null && rowsData.map((data, index) => (
              <TableRow key={index}>
                {props.columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex} component="th" scope="row">
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
                  </TableCell>
                ))}
                {/* {only show delete button if editable key is true } */}
                
                {Object.keys(data).some((key) => !data[key].editable) ? (
                    <TableCell align="right"></TableCell>
                ) : (
                    <TableCell align="right">
                        <IconButton aria-label="delete" onClick={() => deleteTableRows(index)}>
                            <Delete/>
                        </IconButton>
                    </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
