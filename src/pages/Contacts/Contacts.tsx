import React from 'react';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => (
  <section className={styles.contactsPage}>
    <h1 className={styles.contactsPage__title}>Contacts</h1>

    <p>
      If you need to contact the project owner, you can use one of the options
      below:
    </p>

    <ul className={styles.contactsList}>
      <li>
        <a
          href="https://github.com/Vladokvl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub (@Vladokvl)
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Vladokvl/react_phoneCatalog/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue on this repo
        </a>
      </li>
      <li>
        <a href="mailto:hello@example.com">Email: hello@example.com</a>
      </li>
    </ul>
  </section>
);

export default Contacts;
