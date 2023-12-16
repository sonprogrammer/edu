import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavbarComponent() {

  return (
    <> 
      <Navbar expand='lg' className='bg-body-tertiary' style={{width: '50%'}}>
        <Container fluid>
          <Navbar.Brand href='#' style={{ fontSize: '32px', display: 'flex' }}>
            <img
              src='./earth.png'
              style={{ width: '48px', marginRight: '8px' }}
            />
            Earth Weather
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
        </Container>   
      </Navbar>
    </>
  )
}
