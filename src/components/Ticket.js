import React from 'react';
import SponsorLevel from './SponsorLevel';
import { dollars } from '../utilities/formatters';

const TicketBox = SponsorLevel.extend`
  background-color: #bada55;
`;

const Ticket = props => (
  <TicketBox>
    <h4>{props.ticket.name}</h4>
    <p>{dollars(props.ticket.price)}</p>
    <ul>{props.ticket.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}</ul>
  </TicketBox>
);

export default Ticket;
