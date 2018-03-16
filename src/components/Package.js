import React from 'react';
import { Link } from 'react-router-dom';
import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const PackageBox = SponsorLevel.extend`
  background-color: ${props => props.theme.secondary};
  color: #fff;
`;

const Package = props => (
  <PackageBox>
    <h4 className="sponsorship__title">{props.package.name}</h4>
    <p className="sponsorship__price">{dollars(props.package.price)}</p>
    <ul className="sponsorship__benefits">
      {props.package.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}
    </ul>
    <Link className="sponsorship__pledge" to={`/join-tax-prom/${slugify(props.package.name)}`}>
      {`Sponsor the ${props.package.name}`}
    </Link>
  </PackageBox>
);

export default Package;
