import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';





export default function NavbarComponent({ onSearch, setSearchQuery}) {

  const[inputValue, setInputValue] =useState('')

  function handleSubmit(e){
    e.preventDefault();
    try{

      onSearch();
    }catch(err){
      alert('도시명을 확인해주세요')
    }

  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize: '32px', display:'flex'}}><img src='./earth.png' style={{width: '48px', marginRight:'8px'}}/>Earth Weather</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Compare with other web site" id="navbarScrollingDropdown">
              <NavDropdown.Item href="">daum weather</NavDropdown.Item>
              <NavDropdown.Item href="https://weather.naver.com/" target='_blank'>
                네이버 날씨
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.weather.go.kr/w/image/radar.do" target='_blank'>
                날씨 누리
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="지역 날씨 검색"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" onClick={onSearch} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
