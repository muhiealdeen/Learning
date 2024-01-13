export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Unlock the art of culinary creativity with our curated collection of
            recipes, guiding you through a flavorful journey that transforms
            everyday ingredients into extraordinary dishes.
          </p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: *********************</p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
