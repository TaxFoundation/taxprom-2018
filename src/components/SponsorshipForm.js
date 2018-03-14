import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import { slugify, dollars } from '../utilities/formatters';

/* 
level
first name
last name
email
org
title
address 1
address 2
city
state
zip
country
*/

class SponsorshipForm extends Component {
  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitForm(e)}>
          {/* <label htmlFor="level">Sponsorship Level</label>
          <select name="level" id="level">
            {this.props.levels.map(l => <option value={slugify(l.name)}>{`${l.name} - ${dollars(l.price)}`}</option>)}
          </select> */}
          <label htmlFor="">Email Address</label>
          <input name="email" id="email" type="text" />
          <label htmlFor="">First Name</label>
          <input name="fname" id="fname" type="text" />
          <label htmlFor="">Last Name</label>
          <input name="lname" id="lname" type="text" />
          <label htmlFor="organization">Organization</label>
          <input name="organization" id="organization" type="text" />
          <label htmlFor="">Title</label>
          <input type="text" />
          <label htmlFor="">Address Line 1</label>
          <input type="text" />
          <label htmlFor="">Address Line 2</label>
          <input type="text" />
          <label htmlFor="">City</label>
          <input type="text" />
          <label htmlFor="">State / Provine</label>
          <input type="text" />
          <label htmlFor="">ZIP / Postal Code</label>
          <label htmlFor="">Country</label>
          <label htmlFor="comments">Questions or Comments</label>
          <input name="comments" id="comments" type="textarea" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SponsorshipForm;
