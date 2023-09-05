import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="mx-auto"> {/* Use mx-auto for center alignment */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/createTask" className="nav-link">Create Task</Link>
            </li>
            <li className="nav-item">
              <Link href="/editTask" className="nav-link">Edit Task</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
