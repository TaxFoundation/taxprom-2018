import React from 'react';
import SponsorLevel from './SponsorLevel';
import { dollars } from '../utilities/formatters';

const TableBox = SponsorLevel.extend`
  background-color: #c0ffee;
`;

const Table = props => {
  let currentPrice = 0;
  const now = Date.now();
  if (now > new Date(props.dates.regular)) {
    currentPrice = props.table.latePrice;
  } else if (now > new Date(props.dates.early)) {
    currentPrice = props.table.regularPrice;
  } else {
    currentPrice = props.table.earlyPrice;
  }

  return (
    <TableBox>
      <h4>{props.table.name}</h4>
      <p>{dollars(currentPrice)}</p>
      <ul>{props.table.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}</ul>
    </TableBox>
  );
};

export default Table;
