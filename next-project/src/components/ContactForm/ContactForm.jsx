import styles from './ContactForm.module.css';
import Link from 'next/link';

const ContactForm = () => {
  return (
    <div className={styles.ContactForm}>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <Link href={'/'}>
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
