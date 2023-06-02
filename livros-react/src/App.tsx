import { Routes, Route } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap');
      
      *{font-family: 'Prompt', sans-serif; }
      .nav-link, .navbar-brand{font-weight: 600}
    `}</style>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src="https://www.svgrepo.com/show/394388/react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Livros React
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Catálogo</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/dados">
                <Nav.Link>Novo</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </>
  );
}

export default App;
