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
  IconButton,
  RadioGroup,
  Radio,
  InputAdornment
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
    paddingBottom: "15px",
  },
  table: {
    minWidth: 650,
  }

}));

function DataTable(props) {
  const classes = useStyles();
  const [rowsData, setRowsData] = useState(props.defaultRows);
  const [selectedRadio, setSelectedRadio] = useState(-1);

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
    if(selectedRadio === index) {setSelectedRadio(-1)}
    rows.splice(index, 1);
    setRowsData(rows);
    props.onDataTableChange(rows);
  };

  const handleChange = (index, fieldName, evnt) => {
    let { value } = evnt.target;
    const rowsInput = [...rowsData];

    if (fieldName === "Authorised_Signature") {
      // set all others to "No"
      rowsInput.forEach((row, rowIndex) => {
        if (rowIndex !== index) {
          row[fieldName].data = "";
        }
      })

      setSelectedRadio(index);
      value = "Yes"
    }

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
                    <TableCell key={columnIndex} component="th" scope="row" align={column.CellAlign === 'center' ? 'center' : column.CellAlign === 'right' ? 'right' : undefined} className={column.CellBg === true ? 'cell_bg' : '---------'}>
                      {
                        column.type === "text" ? (
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
                            InputProps={{
                              endAdornment: column.props === 'percentage' ? <InputAdornment position="end">%</InputAdornment> : undefined
                            }}
                            sx={{ width: 170 }}
                          />
                        ) : column.type === "select" ? (
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
                        ) : column.type === "radio" ? (
                          <RadioGroup
                          onClick={(evnt) =>
                            data[column.field].editable &&
                            handleChange(index, column.field, evnt)
                          }>
                          <Radio
                            checked={data[column.field].data === "Yes"}
                          />              
                          </RadioGroup>       
                        ) : null
                      }
                    </TableCell >
                ))}

                {/* {only show delete button if editable key is true } */}

                {Object.keys(data).some((key) => !data[key].editable || props.preventDelete) ? <></> : (
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
            <TableRow>
            {
              props.maxRows === rowsData.length ? undefined :
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

            </TableRow>
          </TableFooter>
        </CustomTable>
      </TableContainer>
    </div >
  );
}

export default DataTable;
