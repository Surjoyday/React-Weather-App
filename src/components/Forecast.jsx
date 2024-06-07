import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Forecast({ title, forecastData }) {
  return (
    <>
      <div className="flex flex-col items-start justify-start my-6 px-14">
        <p className="font-medium uppercase">{title}</p>
        <hr className="w-full" />
      </div>

      <TableContainer
        component={Paper}
        className="my-7"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Table
          aria-label="forecast details"
          sx={{
            "& .MuiTableCell-root": {
              border: "none",
              textAlign: "center",
              verticalAlign: "middle",
            },
          }}
        >
          <TableBody>
            {forecastData?.map((data, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    minWidth: "90px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {data.title}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={data.icon}
                    alt="open-weather-icon"
                    className="w-14"
                  />
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: "90px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {data.temp}°
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Forecast;
