/*
 * File: SearchBar.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-17 11:45:46 am
 * Last Modified: 2021-03-17 12:33:54 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import PropTypes from 'prop-types';
import { FaSistrix as MagnifyingGlass } from 'react-icons/fa';
import styles from '../styles/SearchBar.module.css';

/**
 * TODO: Make it responsive
 * Solution 1: under Lg Breakpoint, let the icon and create a modal for the input
 */

export default function SearchBar({ placeholder }) {
  return (
    <div className="ht_search_widget">
      <div className={styles.headerSearchWidget}>
        <form>
          <input
            type="text"
            className={styles.formControl}
            id="researchInput"
            placeholder={placeholder}
          />
          <button type="button">
            <MagnifyingGlass />
          </button>
        </form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
