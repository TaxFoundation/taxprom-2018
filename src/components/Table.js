import React from 'react';
import styled from 'styled-components';
import { dollars } from '../utilities/formatters';

const TableBox = styled.div`
  display: grid;
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
      <h3>{props.table.name}</h3>
      <p>{dollars(currentPrice)}</p>
      <ul>{props.table.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}</ul>
    </TableBox>
  );
};

export default Table;
