import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.footerSection}>
      <h2>Contact Us</h2>
      <p>Email: contact@example.com</p>
      <p>Phone: *********************</p>

      <ContactForm />
    </div>
  );
}
