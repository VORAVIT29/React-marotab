import { Navbar, Container, Nav, NavDropdown, Form, Image } from "react-bootstrap";
import './NavBar.css'
import { LoadLanguage } from "../SpinerLoadPage/LoadLanguage";
import { useState } from "react";
import { BsBoxArrowLeft } from "react-icons/bs";


function NavBar(props) {
    const { name } = props;
    const [change, setChange] = useState(false);
    // sessionStorage.clear()

    const handleLanguageChange = (event) => {
        const { checked } = event.target;
        // console.log(checked);
        setChange(true);
        setTimeout(() => {
            sessionStorage.setItem('languageENG', checked);
            window.location.reload();
            // setChange(false);
        }, 5000);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                {/* sticky="top" */}
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
                            <Nav.Link href="/">
                                {sessionStorage.getItem('languageENG') === 'true' ? 'Home' : 'หน้าผู้เช่า'}
                            </Nav.Link>
                            <Nav.Link href="/back-end/main">
                                {sessionStorage.getItem('languageENG') === 'true' ? 'Main' : 'หน้าเจ้าของหอพัก'}
                            </Nav.Link>
                            <NavDropdown title={sessionStorage.getItem('languageENG') === 'true' ? 'Menu' : 'เมนู'}
                                id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/back-end/main">
                                    {sessionStorage.getItem('languageENG') === 'true' ? 'Tenant information' : 'ข้อมูลผู้เช่า'}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/back-end/camera">
                                    {sessionStorage.getItem('languageENG') === 'true' ? 'Camera' : 'กล้องถ่ายรูป'}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/back-end/call">
                                    {sessionStorage.getItem('languageENG') === 'true' ? 'Calculate' : 'คำนวณ'}
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav style={{ marginRight: '1rem' }}>
                            <Navbar.Text>
                                {sessionStorage.getItem('languageENG') === 'true' ? name.eng : name.th}
                            </Navbar.Text>
                        </Nav>
                        <Nav>
                        <NavDropdown title={<Image src="/images/electric-meter.png" width={35} roundedCircle className="nav-profile" />}>
                                <NavDropdown.ItemText>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="TH/ENG"
                                        defaultChecked={sessionStorage.getItem('languageENG') === 'true' ? true : false}
                                        // checked={sessionStorage.getItem('languageENG')}
                                        onChange={handleLanguageChange}
                                    />
                                </NavDropdown.ItemText>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/back-end/logout">
                                    <BsBoxArrowLeft /> {sessionStorage.getItem('languageENG') === 'true' ? 'Logout' : 'ออกจากระบบ'}
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <LoadLanguage showLoad={change} />
        </>
    );
}

export default NavBar;