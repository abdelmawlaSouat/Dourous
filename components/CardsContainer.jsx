/*
 * File: CardsContainer.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-20 10:31:10 am
 * Last Modified: 2021-03-20 11:31:56 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import CourseCard from './CourseCard';

export default function CardsContainer({ type }) {
  return (
    <div>
      <span>{type}</span>
      {Array(5)
        .fill(0)
        .map((i, j) => (
          <CourseCard key={j} />
        ))}
    </div>
  );
}
