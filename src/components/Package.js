import React from 'react';
import styled from 'styled-components';
import { dollars } from '../utilities/formatters';

const PackageBox = styled.div`
  display: grid;
`;

const Package = props => (
  <PackageBox>
    <h3>{props.package.name}</h3>
    <p>{dollars(props.package.price)}</p>
    <ul>{props.package.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}</ul>
  </PackageBox>
);

export default Package;
