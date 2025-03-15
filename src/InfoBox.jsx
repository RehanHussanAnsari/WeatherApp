import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import "./InfoBox.css"


export default function InfoBox({ weatherInfo }) {

    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    }));

    return (

        <Card sx={{ maxWidth: 600, height: 400 }} className='cardBox'>
            <Div className='cityName'>{weatherInfo.city}</Div>
            <Table aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>{"Weather Conditions"}</b>
                        </TableCell>
                        <TableCell align="right">{weatherInfo.weather_conditions}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>{"Temperature"}</b>
                        </TableCell>
                        <TableCell align="right">{weatherInfo.temp} °C</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>{"Feels_Like"}</b>
                        </TableCell>
                        <TableCell align="right">{weatherInfo.feels_like} °C</TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>{"Max-Temperature"}</b>
                        </TableCell>
                        <TableCell align="right">{weatherInfo.temp_max} °C</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>{"Min-Temperature"}</b>
                        </TableCell>
                        <TableCell align="right">{weatherInfo.temp_min} °C</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>{"Humidity"}</b>
                        </TableCell>
                        <TableCell align="right">{weatherInfo.humidity}%</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell component="th" scope="row">
                            <b>{"Pressure"}</b>
                        </TableCell>
                        <TableCell align="right">{weatherInfo.pressure} hPa</TableCell>
                    </TableRow>

                </TableBody>

            </Table>
        </Card>

    );
}