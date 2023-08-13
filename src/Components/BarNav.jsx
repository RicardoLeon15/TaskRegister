import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import IconButton from '@mui/material/IconButton'
// import { lightBlue } from '@mui/material/colors';
// import NotificationsIcon from '@mui/icons-material/Notifications'
// import Badge from '@mui/material/Badge'

function NavbarH(){
  return (
    <Navbar bg="dark" variant="dark">
      <Container className='mt-1'>
        <Navbar.Brand>
            <Link to="/" className='link-N-under'>Ayuda la tarea</Link>
            </Navbar.Brand>
        <Nav className="me-auto">
          <Link className='p-2 link-N-under' to="/">Inicio</Link>
          <Link className='p-2 link-N-under' to="/complete">Completadas</Link>
        </Nav>
        {/* <IconButton>
          <Badge color="secondary" badgeContent={3} showZero>
            <NotificationsIcon sx={{ color: lightBlue[50] }}/>
          </Badge>
        </IconButton> */}
        
      </Container>
    </Navbar>
  )
}

export default NavbarH;