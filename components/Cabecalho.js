import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/cursos">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="/cursos">Cursos</Nav.Link>
            <Nav.Link className='nav-link' href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link className='nav-link' href="/alunos">Alunos</Nav.Link>
            <Nav.Link className='nav-link' href="/professores">Professores</Nav.Link>
            <Nav.Link className='nav-link' href="/turmas">Turmas</Nav.Link>
            <Nav.Link className='nav-link' href="/salas">Salas</Nav.Link>
            <Nav.Link className='nav-link' href="/semestres">Semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho