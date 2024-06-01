import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function RGBValuesDisplay() {
    console.log("display rgb")
    const [rgbValues, setRgbValues] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/get_rgb_values")
            .then((response) => {
                setRgbValues(response.data.rgb_values);
            })
            .catch((error) => {
                console.error("Gagal mendapatkan data RGB:", error);
            });
    }, []);

    return (
        <div>
            <h3>Nilai RGB per Pixel</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Red</th>
                        <th>Green</th>
                        <th>Blue</th>
                    </tr>
                </thead>
                <tbody>
                    {rgbValues.map((pixel, index) => (
                        <tr key={index}>
                            <td>{pixel.red}</td>
                            <td>{pixel.green}</td>
                            <td>{pixel.blue}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RGBValuesDisplay;