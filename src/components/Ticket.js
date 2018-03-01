import React from 'react';
import styled from 'styled-components';
import { dollars } from '../utilities/formatters';

const TicketBox = styled.div`
  display: grid;
`;

const Ticket = props => (
  <TicketBox>
    <h3>{props.ticket.name}</h3>
    <p>{dollars(props.ticket.price)}</p>
    <ul>{props.ticket.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}</ul>
  </TicketBox>
);

export default Ticket;
