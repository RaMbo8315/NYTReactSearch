import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn, Label } from "../../components/Form";
import { Card, CardBody, CardHeader } from "../../components/Card";
import Selectgroup from "../../components/Selectgroup";
import HeadFive from "../../components/HeadFive";
import Ptag from "../../components/Ptag";

class Search extends Component {
    state = {
      search: []
    };
  
    componentDidMount() {
      
    }
  
    render() {
      return (
        <Container >
              <Jumbotron>
                <h1 className="text-center"><strong> New York Times Search</strong></h1>
              </Jumbotron>
            <Row>
              <Col size="md-12">
                <Card>
                  <CardHeader>
                    {"Search Parameters"}
                  </CardHeader> 
                  <CardBody> 
                  <form>
                    <Label for="searchTerm">Search Term:</Label>
                    <Input name="searchTerm" />
                    <Label for="numRecords">Number of Records to Retrieve:</Label>
                    <Selectgroup name="numRecords" />
                    <Label for="start-year">Start Year (Optional):</Label>
                    <Input name="start-year" />
                    <Label for="end-year">End Year (Optional):</Label>
                    <Input name="end-year" />
                    <FormBtn type="submit">Search</FormBtn>
                    <FormBtn type="button">Clear Results</FormBtn>
                  </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col size="md-12">
                <Card>
                  <CardHeader>
                    {"Search Results"}
                  </CardHeader> 
                  <CardBody>
                      <HeadFive>Card title</HeadFive>
                      <Ptag>With supporting text below as a natural lead-in to additional content.</Ptag>
                      <FormBtn>Save</FormBtn>
                      <br/>
                      <br/>
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="" class="btn btn-primary">Button</a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </Container>
            )
        }
    }

    export default Search;