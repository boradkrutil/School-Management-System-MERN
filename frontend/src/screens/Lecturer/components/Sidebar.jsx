import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../../actions/userActions'
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { Button } from "react-bootstrap"

const Sidebar = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  

    return (

<aside class="main-sidebar sidebar-dark-primary elevation-4" style={{minHeight:"100vh"}}>
  
    <a href="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{opacity: .8}}/>
      <span class="brand-text font-weight-light">EVE SMS</span>
    </a>


    <div class="sidebar">

    <div className="live-date-time  text-muted" style={{paddingLeft: "0.8rem"}}>
            {currentDateTime.toLocaleString()}
          </div>

      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="https://avatars.githubusercontent.com/u/41146306?v=4" class="img-circle elevation-2" alt="User Image"/>
        </div>
        <div class="info">
          <a  class="d-block">{userInfo.firstName}</a>
        </div>
      </div>

    

      {/* <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div> */}

  
<nav className="mt-2">
  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    <li className="nav-item">
      <NavLink to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        <i className="nav-icon fas fa-tachometer-alt"></i>
        <p>Dashboard </p>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/courses" className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`}>
        <i className="nav-icon fas fa-book"></i>
        <p>Courses Assigned</p>
      </NavLink>
    </li>
  
    <li className="nav-item">
      <NavLink to="/students" className={`nav-link ${location.pathname === '/students' ? 'active' : ''}`}>
        <i className="nav-icon fas fa-users"></i>
        <p>My Students</p>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/announcements" className={`nav-link ${location.pathname === '/announcements' ? 'active' : ''}`}>
        <i className="nav-icon fas fa-bullhorn"></i>
        <p>Announcements</p>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/assignments" className={`nav-link ${location.pathname === '/assignments' ? 'active' : ''}`}>
        <i className="nav-icon fas fa-tasks"></i>
        <p>Assignments</p>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/grades" className={`nav-link ${location.pathname === '/grades' ? 'active' : ''}`}>
        <i className="nav-icon fas fa-clipboard"></i>
        <p>Grades</p>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
        <i className="nav-icon fas fa-user"></i>
        <p>Profile</p>
      </NavLink>
    </li>

  

    <li class="nav-item">
          <Button variant="danger" className="w-100" onClick={logoutHandler}>
          <i className="nav-icon fas fa-sign-out-alt"></i>
            <p>LOGOUT</p>
          </Button>
        </li>

  </ul>
</nav>

      
    </div>
  
  </aside>

  )}


  export default Sidebar;