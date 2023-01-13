import { styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Box, MenuItem, FormControl, Select } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));
const Div = styled('div')(() => ({
  margin: '0px 0px 0px 441px',
}));
const AddCatalogue = () => {

  const navigate = useNavigate();
  const changePage = () => {
    navigate('/catalogues/manageCatalogue');
  };
  const [catType, setCatType] = useState('Service');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0)

  //empty the form Text
  const blankForm = () => {
    setCatType('');
    setPrice('');
    setDescription('');
  };
  //Add data in the table
  const postData = () => {
    const items = localStorage.getItem('accessToken');
    console.log({
      catType: catType,
      price: price,
      description: description,
    });
    axios.post('https://43.204.38.243:3000/api/upsertCatalogue',
      {
        catId: 0,
        catType: catType,
        price: price,
        gsName: name,
        description: description,
        catStatus: 1,
        actionBy: 1,
      }, { headers: { "x-access-token": items } }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    blankForm();
    changePage();
    // alert('Catalogue Successfully Created');
  };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: 'Catalogue', path: '/catalogues/manageCatalogue' },
            { name: 'Add Catalogue Page' },
          ]}
        />
      </Box>
      <Row>
        <Col>
          <SimpleCard title="Fill Catalogue Detail's">
            <Row>
              <Col md="6">
                <FormControl sx={{ m: 0, minWidth: 480 }} size="small" className="mt-1">
                  <Form.Label>Type</Form.Label>
                  <Select value={catType} label="Type" onChange={(e) => setCatType(e.target.value)}>
                    <MenuItem value="">Select the Type</MenuItem>
                    <MenuItem value="Service">Service</MenuItem>
                    <MenuItem value="Product">Product</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col className="mt-1" md="6">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter the Name"
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormControl sx={{ m: 0, minWidth: 480 }} size="small" className="mt-1">
                  <Form.Label>Duration</Form.Label>
                  <Select value={duration} label="Type" onChange={(e) => setDuration(e.target.value)}>
                    <MenuItem value="0">30 Days [1 Month]</MenuItem>
                    <MenuItem value="1">60 Days [2 Months]</MenuItem>
                    <MenuItem value="2">90 Days [3 Months]</MenuItem>
                    <MenuItem value="3">180 Days [6 Months]</MenuItem>
                    <MenuItem value="4">365 Days [1 Year]</MenuItem>
                  </Select>
                </FormControl>

              </Col>
              <Col md="6" className="mt-1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  min={500}
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  placeholder="Enter the Price"
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Write Description"
                  />
                </Form.Group>
              </Col>
            </Row>
          </SimpleCard>
        </Col>
      </Row>
      <Div className="mt-2">
        <Row>
          <Col>
            <Button variant="secondary" onClick={changePage}>
              Cancel
            </Button>
            &nbsp;
            {/* <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button> */}
            <button type="button" className="btn btn-success" onClick={handleSubmit}>
              Save
            </button>
          </Col>
        </Row>
      </Div>
    </Container>
  );
};

export default AddCatalogue;
