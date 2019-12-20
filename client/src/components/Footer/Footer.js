import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/images/homeIcon.png';
import BackIcon from '../../assets/images/BackIcon.png';
import './Footer.css'


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    back = () => {
        window.history.back();
    }

    render() {
        return (
            <div className="fixed-bottom footer">
                <Row>
                    <Col id="bloqueFooter" xs={4}>
                        <img className="BackIcon" onClick={this.back} src={BackIcon} alt="Back" />
                    </Col>
                    <Col id="bloqueFooter" xs={4}>
                        <Link to="/">
                            <img className="HomeIcon" src={HomeIcon} alt="Home" />
                        </Link>
                    </Col>
                    <Col id="bloqueFooter" xs={4}>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer