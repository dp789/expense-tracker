/* eslint-disable react/prop-types */
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { format } from "date-fns";

export default function TableComponent({ transactionsData }) {
  return (
    <Box mt={2} width="50%">
      <Stack direction={"row"} justifyContent="space-between">
        <Typography color={"primary"}>Recent History</Typography>
      </Stack>
      <TableContainer component={Paper}>
        <Table aria-label="recent-expenses">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...transactionsData]
              ?.reverse()
              .slice(0, 5)
              .map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.amount}
                  </TableCell>
                  <TableCell>{row?.Description}</TableCell>
                  <TableCell>{row?.categories[0] ?? ""}</TableCell>
                  <TableCell align="right">
                    {format(new Date(row.date), "dd/MMMM/yyyy")}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
