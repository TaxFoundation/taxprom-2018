import React from 'react';
import { Link } from 'react-router-dom';
import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const TicketBox = SponsorLevel.extend`
  background-color: ${props => props.theme.secondaryHighlight};
  color: ${props => props.theme.primary};
`;

const Ticket = props => (
  <TicketBox>
    <h4 className="sponsorship__title">{props.ticket.name}</h4>
    <p className="sponsorship__price">{dollars(props.ticket.price)}</p>
    <ul className="sponsorship__benefits">
      {props.ticket.benefits.map((b, i) => <li key={`${props.id}-${i}`}>{b}</li>)}
    </ul>
    <Link className="sponsorship__pledge" to={`/join-tax-prom/${slugify(props.ticket.name)}`}>
      {`Buy a ${props.ticket.name} Ticket`}
    </Link>
  </TicketBox>
);

export default Ticket;
