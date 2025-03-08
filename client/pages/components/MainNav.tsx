import { Container, Nav, Navbar } from 'react-bootstrap';

export default function MainNav() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >Cody MacDonald</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Listings</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    )
}