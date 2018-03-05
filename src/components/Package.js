import React from 'react';
import SponsorLevel from './SponsorLevel';
import { dollars } from '../utilities/formatters';

const PackageBox = SponsorLevel.extend`
  background-color: #d1337b;
`;

const Package = props => (
  <PackageBox>
    <h4>{props.package.name}</h4>
    <p>{dollars(props.package.price)}</p>
    <ul>{props.package.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}</ul>
  </PackageBox>
);

export default Package;
