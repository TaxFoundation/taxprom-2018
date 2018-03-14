import React from 'react';
import SponsorLevel from './SponsorLevel';
import { dollars } from '../utilities/formatters';

const TableBox = SponsorLevel.extend`
  background-color: ${props => props.theme[props.bg]};
  color: ${props => (props.bg === 'white' ? props.theme.primary : props.theme.white)};
`;

const Table = props => {
  return (
    <TableBox bg={props.table.color}>
      <h4 className="sponsorship__title">{props.table.name}</h4>
      <p className="sponsorship__price">{dollars(props.table[props.price])}</p>
      <ul className="sponsorship__benefits">
        {props.table.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}
      </ul>
      <div className="sponsorship__pledge" href="#">{`Sponsor a ${props.table.name} Table`}</div>
    </TableBox>
  );
};

export default Table;
