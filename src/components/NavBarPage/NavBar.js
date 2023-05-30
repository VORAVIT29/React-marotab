import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './NavBar.css'


function NavBar(props) {
    const { name } = props;
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/images/icon_wab.png"
                            width="90"
                            // height="30"
                            className="d-inline-block align-top"
                        /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Back-End/Main">Main</Nav.Link>
                            <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/Back-End/Main">ข้อมูลผู้เช่า</NavDropdown.Item>
                                <NavDropdown.Item href="/Back-End/Camera">
                                    กล้องถ่ายรูป
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/Back-End/Call">คำนวณ</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Back-End/Logout">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">{name}</Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                | Logout
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;