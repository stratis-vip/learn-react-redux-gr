import React, {useEffect} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";
import {MainStore} from "../intefaces";
import {connect} from 'react-redux'
import {setRoute} from "../actions/route";
import {bindActionCreators} from "redux";

interface LocalProps {
  route: string
}

const PoemNavbar = (props: { route: string, setPage: any }): JSX.Element => {
  let history = useHistory();
  useEffect(() => {
    console.log(history.location.pathname)
    props.setPage(history.location.pathname)
  }, [history.location.pathname]);

  let localPathname

  const getUrlTo = () => {


    console.log('GET URL TO ', window.location.pathname)
    localPathname = window.location.pathname
    const el = (document.getElementById('showOptions')) as HTMLElement;
    let retVal
    if (localPathname === '/options') {
      if (el !== null) el.innerText = 'Απόκρυψη Επιλογών';
      retVal = '/home'
    } else {
      retVal = '/options';
      if (el !== null) el.innerText = 'Εμφάνιση Επιλογών'
    }
    console.log(retVal, el)
    return retVal
  }

  const setTextTo = () => {
    console.log('setTextTo ', window.location.pathname)
    localPathname = window.location.pathname
    let retVal
    if (localPathname !== '/options') {
      retVal = 'Εμφάνιση Επιλογών'
    } else {
      retVal = 'Απόκρυψη Επιλογών'
    }
    console.log(retVal)
    return retVal
  }

  const getLink = (url: string, text: string): JSX.Element => {
    if (props.route === url) {
      return (<span>{text}</span>)
    } else {
      return (<Link to={url}>{text}</Link>)
    }
  }

  return (<div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="mainTitle text-center">ΒΑΣΗ ΔΕΔΟΜΕΝΩΝ <br/>ΚΕΙΜΕΝΩΝ ΧΡΙΣΤΟΔΟΥΛΟΥ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Navbar.Text className="ml-2 ">{getLink("/home", "Περιήγηση")}</Navbar.Text>
            <Navbar.Text className="ml-2">{getLink("/options", "Εμφάνιση Επιλογών")}</Navbar.Text>
            <Navbar.Text className="ml-2">{getLink("/help", "Οδηγίες")}</Navbar.Text>
            <Navbar.Text className="ml-2">{getLink("/statistics", "Στατιστικά στοιχεία")}</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state: MainStore): LocalProps => {
  return {
    route: state.route
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setPage: setRoute}, dispatch)
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(PoemNavbar)