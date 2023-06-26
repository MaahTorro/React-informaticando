import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Cabeca() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Informaticando</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre nós</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabeca;