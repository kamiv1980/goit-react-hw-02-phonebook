import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Section = ({ title, children }) => {
  return (
      <>
          <section className={styles.section}>
              <h3 className={styles.title}>{title}</h3>
              {children}
          </section>
      </>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;
