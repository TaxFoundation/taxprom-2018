import React from 'react';
import SponsorLevel from './SponsorLevel';
import { dollars } from '../utilities/formatters';

const PackageBox = SponsorLevel.extend`
  background-color: #d1337b;
`;

const Package = props => (
  <PackageBox>
    <h4 className="sponsorship__title">{props.package.name}</h4>
    <p className="sponsorship__price">{dollars(props.package.price)}</p>
    <ul className="sponsorship__benefits">
      {props.package.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}
    </ul>
    <a className="sponsorship__pledge" href="#">{`Sponsor the ${props.package.name}`}</a>
  </PackageBox>
);

export default Package;
