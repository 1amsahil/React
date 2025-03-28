export default function Sidebar({tab, HandleSelectedTab})
{
    return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar " style = {{width: "200px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() => HandleSelectedTab("Home")} >
        <a href="#" className={"nav-link text-white "+ (tab === "Home" ? "active" : null)} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li  onClick={() => HandleSelectedTab("Create Post")} >
        <a href="#" className={"nav-link text-white "+ (tab === "Create Post" ? "active" : null)}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>
      
    </ul>

    <div className="dropdown">
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>

  </div>
}