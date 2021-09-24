
import React, { Component } from 'react';
import Modal from "react-awesome-modal"
import cart from "../../Images/cart.png"
import { Row, Col, Container } from 'reactstrap';


export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section >
                <input type="button" value="OpenKRO" onClick={() => this.openModal()} />
                <Modal
                    style={{ overflow: "scroll" }}
                    visible={this.state.visible}
                    width="860"
                    height="525"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <Row style={{ display: "flex", }}>
                        <Col md="5"  >
                            <img style={{ height: '525px' }} src={cart} alt='1' />

                        </Col>

                        <Col md="6" style={{ padding: "20px" }}>
                            <h4>Zara Solly White Shirt</h4>
                            <p style={{color:"gray"}}>For a chic and smart look, don this white shirt from Solly by Allen Solly. Crafted from a cotton-nylon blend with a hint of stretch,
                                this design features a dotted pattern. Wear this 3/4th sleeves shirt with trousers and wedges to a client meeting.</p>
                            <h4>1200 PKR</h4>
                            <p>Size : </p>
                            <div style={{ display: 'flex' }}>
                                <p>Any</p>
                            </div>
                            <p>Color : </p>
                            <div style={{ display: 'flex' }}>
                                <p>Any</p>
                            </div>
                            <p>CART: </p>
                            <div style={{ display: 'flex' }}>
                                <p>Any</p>
                            </div>

                        </Col>
                    </Row>
                </Modal>
            </section>
        );
    }
}