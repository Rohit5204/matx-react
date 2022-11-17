import * as React from 'react';
import { styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Box, MenuItem, FormControl, Select } from '@mui/material';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Div = styled('div')(() => ({
    margin: '6px 0px 0px 350px',
}));
const EditEMI = ({ theEditEMI }) => {
    console.log(theEditEMI)
    const [id, setId] = useState(theEditEMI.id);
    const [instalmentNumber, setInstalmentNumber] = useState(theEditEMI.instalmentAmount);
    const [instalmentAmount, setinstalmentAmount] = useState(theEditEMI.instalmentNumber);
    const [instalmentDate, setinstalmentDate] = useState(theEditEMI.instalmentNumber);
    const [fineAmount, setfineAmount] = useState(theEditEMI.instalmentNumber);

    const UpdateData = {
        instalmentId: id,
        instalmentNumber: instalmentNumber,
        instalmentAmount: instalmentAmount,
        instalmentDate: instalmentDate,
        fineAmount: fineAmount,
        hasPaid: 1,
        updatedBy: 1
    };
    const updateInstallment = (e) => {
        const items = localStorage.getItem('accessToken');
        console.log({ UpdateData });
        e.preventDefault();
        axios.post(`http://35.89.6.16:4002/api/updateProductInstalment`, UpdateData, { headers: { "x-access-token": items } }).then(() => useEffect);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Form Form onSubmit={handleSubmit} >
                <Row>
                    <Col className="mt-1">
                        <Form.Label>Installment No</Form.Label>
                        <Form.Control
                            disabled
                            onChange={(e) => setInstalmentNumber(e.target.value)}
                            value={instalmentNumber}
                            placeholder="Enter the Name"
                        />
                    </Col>
                    <Col className="mt-1">
                        <Form.Label>Installment Amount</Form.Label>
                        <Form.Control
                            onChange={(e) => setinstalmentAmount(e.target.value)}
                            value={instalmentAmount}
                            placeholder="Enter the EMI Amount"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-1">
                        <Form.Label>Installment Date</Form.Label>
                        <Form.Control
                            type='date'
                            onChange={(e) => setinstalmentDate(e.target.value)}
                            value={instalmentDate}
                            placeholder="Enter the Price"
                        />
                    </Col>
                    <Col className="mt-1">
                        <Form.Label>Penatly Charges</Form.Label>
                        <Form.Control
                            type='number'
                            onChange={(e) => setfineAmount(e.target.value)}
                            value={fineAmount}
                            placeholder="Enter the Fine Amount"
                        />
                    </Col>
                </Row>
                <Div>
                    <Row>
                        <Col>
                            <button
                                type="submit"
                                className="btn btn-success"
                                style={{ marginTop: 5 + 'px' }}
                                onClick={updateInstallment}
                            > Update
                            </button>
                        </Col>
                    </Row>
                </Div>
            </Form>
        </>
    );
};

export default EditEMI;
