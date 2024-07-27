import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h3>School Name</h3>
          <h4>Model Islamiyya School Ganye consist of Nursery and Primary section</h4>
          <h4>Atiku Abubakar center for Arabic and Islamic Studies (AACAIS) consist of JSS and SSS </h4>
        </div>

        <div>
          <h3>Sections</h3>
          <ul>
            <li>Nursery and Primary</li>
            <li>Junior Secondary School (JSS)</li>
            <li>Senior Secondary School (SSS)</li>
          </ul>
        </div>

        <div>
          <h3>Useful links</h3>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="/staff">Staff</Link>
            </li>{' '}
            <li>
              {' '}
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Adamawa State, Ganye LGA Opposite Gangwari's palace</li>
            <li>07034947421</li>
            <li>aacaisganye1@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="copyright"> &copy; Copyright Model Islamiyya School Ganye 2002</div>
    </>
  );
}

export default Footer;
