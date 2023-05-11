import { Navbar, Container } from "react-bootstrap";
import './NavBar.css'

function NavBar(props) {
    const { name } = props;
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/images/icon_wab.png"
                            width="90"
                            // height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        {/* Marotab */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {name}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;