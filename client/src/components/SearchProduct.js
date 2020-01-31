import React, { Component } from 'react'
import {Container,Row,Col,FormGroup, Form} from 'reactstrap'
import {getItemsByName} from '../redux/actions/itemActions'
import {connect} from 'react-redux'

const productSearchStyle = {
    marginTop: 30
}

class SearchProduct extends Component {

    handleHeader = e => {
        let target = e.target;
        let value = target.value;
        // this.props.handleHeader(value);
        this.props.getItemsByName(value);
    }

    handleCopyText = e => {
        alert('text copied');
    }

    handleSubmit = e => e.preventDefault();

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm={{ size: 10, offset: 1}}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup style={productSearchStyle}>
                                <input
                                    type="text"
                                    className="form-control search"
                                    name="productSearch" 
                                    id="productSearch" 
                                    placeholder="Find your product here. iPhone, Jacket.etc."
                                    autoComplete="off"
                                    onChange={this.handleHeader}
                                    onCopy={this.handleCopyText}
                                />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(null,{getItemsByName})(SearchProduct);
