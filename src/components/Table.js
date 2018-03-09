import React from 'react';
import SponsorLevel from './SponsorLevel';
import { dollars } from '../utilities/formatters';

const TableBox = SponsorLevel.extend`
  background-color: #c0ffee;
`;

const Table = props => {
  return (
    <TableBox>
      <h4 className="sponsorship__title">{props.table.name}</h4>
      <p className="sponsorship__price">{dollars(props.table[props.price])}</p>
      <ul className="sponsorship__benefits">
        {props.table.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}
      </ul>
      <a className="sponsorship__pledge" href="#">{`Sponsor a ${props.table.name} Table`}</a>
    </TableBox>
  );
};

export default Table;
