import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Buttons from './Buttons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Modals({ product }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Open the modal
        handleShow();
      };

    return (
        <>
            <Buttons onClick={handleShow}>View Details</Buttons>


            <Modal show={show} onHide={handleClose} size='lg' centered animation>




                <Container fluid>
                    <Row>
                        {/* First Column (Image) */}
                        <Col className='modalsmall' xs={12} md={6} sm={6} style={{ padding: "30px" }}>

                            <img src={product.img} alt="" width="100%" fluid />

                        </Col>

                        {/* Second Column (Text Content) */}
                        <Col xs={12} md={6} sm={6} className='modalsmall2' >
                            <div style={{ margin: "30px -21px", width: "108%" }} className='small'>
                                <h1 style={{ marginTop: 0, fontSize: '33px', fontWeight: 700 }}>{product.name}</h1>
                                {/* Add your price, description, and checkout button here */}
                                <p style={{ marginTop: "35px", fontSize: "23px", fontWeight: "700" }}>Product Price: {product.price}</p>
                                <p style={{ marginTop: 0, fontSize: '18px' }}>{product.description}</p>

                                <div className="d-flex justify-content-center ">
                                    <Link to={`/checkout/${product.id}`}>
                                        <Button variant="dark">Buy Now</Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>


            </Modal >
        </>
    );
}

export default Modals;