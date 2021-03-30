/*
 * File: LibraryMenu.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-16 9:08:55 pm
 * Last Modified: 2021-03-18 12:16:02 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Link from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FaAngleDown, FaAngleRight, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/LibraryMenu.module.css';

/**
 * ToDO: Add next.js Link to <a>
 */

export default function LibraryMenu({ categories }) {
  return (
    <div className={styles.libraryMenu}>
      <div className={styles.verticalWrapper}>
        <h2 className={clsx(styles.titleVertical, styles.home5)}>
          <span className={styles.textTitle}>Catalogue</span>
          <FaAngleDown className={styles.icon} />
        </h2>
        <div className={clsx(styles.contentVertical, styles.home5)}>
          <ul id="vertical-menu" className={clsx(styles.megaVerticalMenu)}>
            {categories.map((item) =>
              item.subcategories.length === 0 ? (
                <li key={item.id}>
                  <Link href={item.link}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ) : (
                <li key={item.id}>
                  <Link href={item.link}>
                    <a className={styles.dropdownToggle}>
                      <span>{item.name}</span>
                      <FaAngleRight className={styles.icon} />
                    </a>
                  </Link>
                  <div
                    className={clsx(
                      styles.dropdownMenu,
                      styles.verticalMegamenu
                    )}
                  >
                    <div className={styles.dropdownMenuInner}>
                      <div className={styles.elementInner}>
                        <div className={styles.elementSectionWrap}>
                          <div className={styles.elementContainer}>
                            <div className={styles.elementRow}>
                              {/* Topics Section */}
                              <div>
                                <div className={styles.elementWrapper}>
                                  <div className={styles.titleWrapper}>
                                    <div className={styles.elementWrapperTitle}>
                                      Sujets
                                    </div>
                                  </div>
                                  <div className={styles.widgetNavMenu}>
                                    <div
                                      className={clsx(
                                        styles.elementListWrapper,
                                        styles.wnMenu
                                      )}
                                    >
                                      <ul className={styles.elementMenuList}>
                                        {item.subcategories.map((subItem) => (
                                          <li key={subItem.id}>
                                            <Link href={subItem.link}>
                                              <a>{`- ${subItem.name}`}</a>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className={styles.elementWarapperBtn}>
                                    <Link href="#">
                                      <a>
                                        <div
                                          className={
                                            styles.elementWrapperSubTitle
                                          }
                                        >
                                          <span>Voir Plus</span>
                                          <FaArrowRight
                                            className={styles.icon}
                                          />
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>

                              {/* Popular Section */}
                              <div className="">
                                <div className={styles.elementWrapper}>
                                  <div className={styles.titleWrapper}>
                                    <div className={styles.elementWrapperTitle}>
                                      Populaire
                                    </div>
                                  </div>
                                  <div className={styles.widgetNavMenu}>
                                    <div
                                      className={clsx(
                                        styles.elementListWrapper,
                                        styles.wnMenu
                                      )}
                                    >
                                      <ul className={styles.elementMenuList}>
                                        {item.subcategories
                                          .sort(
                                            (a, b) =>
                                              b.popularity - a.popularity
                                          )
                                          .map((subItem) => (
                                            <li key={subItem.id}>
                                              <Link href={subItem.link}>
                                                <a>{`- ${subItem.name}`}</a>
                                              </Link>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className={styles.elementWarapperBtn}>
                                    <Link href="#">
                                      <a>
                                        <div
                                          className={
                                            styles.elementWrapperSubTitle
                                          }
                                        >
                                          <span>Voir Plus</span>
                                          <FaArrowRight
                                            className={styles.icon}
                                          />
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

LibraryMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      link: PropTypes.string,
      subcategories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          link: PropTypes.string,
          popularity: PropTypes.number,
        })
      ),
    })
  ).isRequired,
};
