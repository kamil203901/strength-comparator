import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Button, Col, Container, Row} from "react-bootstrap";

class StrengthComparator extends React.Component {
    squatVal;

    onChangeValue = () => {
        this.squatVal = document.getElementById('squat').value;
        document.getElementById('frontsquat').value = this.squatVal * 0.85;
        document.getElementById('deadlift').value = this.squatVal * 1.2;
        document.getElementById('benchpress').value = this.squatVal * 0.75;
        document.getElementById('militarypress').value = this.squatVal * 0.45;
        document.getElementById('pullups').value = this.squatVal * 0.675;
        document.getElementById('dips').value = this.squatVal * 0.7875;
    }


    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                        <label className="col" htmlFor='squat'>Przysiad: </label>
                    </Col>
                    <Col xs={6} md={6}>
                        <input className="col" onChange={this.onChangeValue} type="number" id='squat' placeholder='kg'/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                        <label className="col-6" htmlFor='frontsquat'>Przysiad - front: </label>
                    </Col>
                    <Col xs={6} md={6}>
                        <input className="col" type="number" id='frontsquat' placeholder='kg' />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                        <label className="col" htmlFor='benchpress'>Wyciskanie sztangi leżąc: </label>
                    </Col>
                    <Col xs={6} md={6}>
                        <input className="col" type="number" id='benchpress' placeholder='kg'/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                        <label className="col" htmlFor='militarypress'>Wyciskanie sztangi stojąc: </label>
                    </Col>
                    <Col xs={6} md={6}>
                        <input className="col" type="number" id='militarypress' placeholder='kg'/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                        <label className="col" htmlFor='pullups'>Podciąganie na drążku podchwytem: </label>
                    </Col>
                    <Col xs={6} md={6}>
                        <input className="col" type="number" id='pullups' placeholder='kg'/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                        <label className="col" htmlFor='dips'>Pompki na poręczach: </label>
                    </Col>
                    <Col xs={6} md={6}>
                        <input className="col" type="number" id='dips' placeholder='kg'/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                        <label className="col" htmlFor='deadlift'>Martwy ciąg: </label>
                    </Col>
                    <Col xs={6} md={6}>
                        <input className="col" type="number" id='deadlift' placeholder='kg'/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <StrengthComparator/>,
    document.getElementById('root')
);
