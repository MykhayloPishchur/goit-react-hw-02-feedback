import React from "react";
import PropTypes from "prop-types";
import styles from "./section.module.css";

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;