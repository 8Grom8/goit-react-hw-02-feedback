import React from "react";
import PropTypes from "prop-types";
import styles from "./SectionStyles.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.title} title={title}>
        {title}
      </h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
