import React from 'react';
import styles from './Rights.module.scss';

const Rights: React.FC = () => (
  <section className={styles.rightsPage}>
    <h1 className={styles.rightsPage__title}>Rights & License</h1>

    <p>
      This project is distributed under the terms of the license available in
      the repository. You can view the full license on GitHub:
    </p>

    <p>
      <a
        href="https://github.com/Vladokvl/react_phoneCatalog/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
      >
        View LICENSE on GitHub
      </a>
    </p>
  </section>
);

export default Rights;
