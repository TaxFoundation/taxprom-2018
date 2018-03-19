import React from 'react';
import { Link } from 'react-router-dom';
import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const TableBox = SponsorLevel.extend`
  background-color: ${props => props.theme[props.bg]};
  color: ${props => (props.bg === 'white' ? props.theme.primary : props.theme.white)};

  .sponsorship__price {
    border-bottom: 1px solid ${props => (props.bg === 'white' ? props.theme.primary : props.theme.white)};
  }

  .sponsorship__pledge {
    background-color: ${props => (props.bg === 'white' ? props.theme.primary : props.theme.white)};
    color: ${props => (props.bg === 'white' ? props.theme.white : props.theme.primary)};

    &:active,
    &:focus,
    &:visited {
      color: ${props => (props.bg === 'white' ? props.theme.white : props.theme.primary)};
    }
  }
`;

const Table = props => {
  return (
    <TableBox bg={props.table.color}>
      <h4 className="sponsorship__title">{props.table.name}</h4>
      <p className="sponsorship__price">{dollars(props.table[props.price])}</p>
      <ul className="sponsorship__benefits">
        {props.table.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}
      </ul>
      <Link className="sponsorship__pledge" to={`/join-tax-prom/${slugify(props.table.name)}`}>
        {`Sponsor a ${props.table.name} Table`}
      </Link>
    </TableBox>
  );
};

export default Table;
