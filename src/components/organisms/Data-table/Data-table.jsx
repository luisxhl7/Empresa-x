import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material";
import { addDotEveryThreeDigits } from "../../../utils/addDotEveryThreeDigits";
import "./data-table.scss";

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#F1F4F9',
      color: '#202224',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd), &:nth-of-type(even)': {
      backgroundColor: '#0000000',
    },
    '&:nth-of-type(odd):hover, &:nth-of-type(even):hover': {
      backgroundColor: '#ededed',
    },
    '&:last-child td, &:last-child th': {
      border: 'none',
    },
  }));

export const DataTable = ({ data }) => {
  return (
    <div className="data-table">
      <h2 className="data-table__title">Detalles</h2>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "none", borderRadius: "5px" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mes</StyledTableCell>
              <StyledTableCell align="right">Hospitalizaciones</StyledTableCell>
              <StyledTableCell align="right">Fallecidos</StyledTableCell>
              <StyledTableCell align="right">Pruebas</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <StyledTableRow key={row.mes}>
                <StyledTableCell component="th" scope="row">
                  {row.mes}
                </StyledTableCell>
                <StyledTableCell align="right">{addDotEveryThreeDigits(row.hospitalizaciones)}</StyledTableCell>
                <StyledTableCell align="right">{addDotEveryThreeDigits(row.fallecidos)}</StyledTableCell>
                <StyledTableCell align="right">{addDotEveryThreeDigits(row.pruebas)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
