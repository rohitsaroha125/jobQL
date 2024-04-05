import Link from "next/link";

export default function LoginPage() {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" href="/">
          Home
        </Link>
      </div>
      {/* {loggedIn ? (
        <div className="navbar-end">
          <span className="navbar-item has-text-grey">{user.email}</span>
          <Link className="navbar-item" to="/jobs/new">
            Post Job
          </Link>
          <a className="navbar-item" onClick={handleLogout}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navbar-end">
          <Link className="navbar-item" to="/login">
            Login
          </Link>
        </div>
      )} */}
    </nav>
  );
}
