import React from 'react';
import SponsorLevel from './SponsorLevel';
import { dollars } from '../utilities/formatters';

const TicketBox = SponsorLevel.extend`
  background-color: #bada55;
`;

const Ticket = props => (
  <TicketBox>
    <h4 className="sponsorship__title">{props.ticket.name}</h4>
    <p className="sponsorship__price">{dollars(props.ticket.price)}</p>
    <ul className="sponsorship__benefits">
      {props.ticket.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}
    </ul>
    <a className="sponsorship__pledge" href="#">{`Buy a ${props.ticket.name} Ticket`}</a>
  </TicketBox>
);

export default Ticket;
