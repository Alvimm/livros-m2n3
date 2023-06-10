import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import styles from '../styles/Menu.module.css'

export const Menu: React.FC = () => {
  return (
    // Adicionei React-bootstrap para aplicar de uma maneira mais simples um navbar responsivo

    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="">
          <Image
            src="/nextjs.png"
            width={30}
            height={30}
            alt="Next logo"
            className="d-inline-block align-top"
          />{' '}
          Livros Next
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="LivroLista" className="nav-link">
              Catálogo
            </Link>
            <Link href="LivroDados" className="nav-link">
              Novo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
