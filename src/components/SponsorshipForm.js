import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { slugify } from '../utilities/formatters';

const API = 'https://qzdppwz79c.execute-api.us-east-1.amazonaws.com/prod/taxprom';

const StyledForm = styled.div`
  align-content: stretch;
  align-items: center;
  background-color: ${props => props.theme.secondary};
  bottom: 0;
  display: grid;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  padding: 70px 1rem 1rem 1rem;
  position: fixed;
  right: 0;
  top: 0;

  @media (min-width: 500px) {
    padding: 70px 3rem 3rem 3rem;

    .tp-contact,
    .tp-name {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }

    .tp-address3 {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  form {
    transform: scaleY(${props => (props.success ? '0' : '1')});
    transition: transform 0.1s ease-in-out;
  }

  label {
    color: ${props => props.theme.white};
    display: block;
    margin-top: 1rem;
    padding-bottom: 0.4rem;
  }

  input,
  select,
  textarea {
    border: 0;
    color: ${props => props.theme.primary};
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
  }

  button {
    background-color: ${props => props.theme.primary};
    border: 0;
    border-radius: 4px;
    color: ${props => props.theme.white};
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0.5rem;
    transition: background-color 0.1s ease-in-out;
    text-align: center;
    width: 100%;

    &: hover {
      background-color: ${props => props.theme.primaryHighlight};
    }
  }
`;

const TextInput = props => {
  return (
    <div className={`tp-${props.item}`}>
      <label htmlFor={props.item}>{props.label}</label>
      <input
        name={props.item}
        id={props.item}
        onChange={e => props.update(props.item, e.target.value)}
        type={props.type ? props.type : 'text'}
        required={props.required || false}
      />
    </div>
  );
};

const StyledLink = styled(Link)`
  border-bottom: 1px solid ${props => props.theme.primaryHighlight};
  color: ${props => props.theme.primary};
  display: block;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  text-decoration: none;

  &:active,
  &:focus,
  &:visited {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }
`;

class SponsorshipForm extends Component {
  constructor(props) {
    super(props);

    let level = null;
    if (this.props.sponsorships) {
      this.allLevels = []
        .concat(...this.props.sponsorships.packages, ...this.props.sponsorships.tables, this.props.sponsorships.tickets)
        .sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          } else if (a.price > b.price) {
            return -1;
          }
          return 0;
        });

      level = this.allLevels.filter(l => slugify(l.name) === this.props.match.params.level)[0].name;
    }

    this.state = {
      data: {
        level: level,
        email: '',
        fName: '',
        lName: '',
        org: '',
        title: '',
        phone: '',
        comments: '',
      },
      success: false,
    };

    this.updateRequest = this.updateRequest.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  validateData() {
    return true;
  }

  submitForm(e) {
    e.preventDefault();

    if (this.validateData()) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const request = new Request(API, {
        headers: headers,
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(this.state.data),
      });

      fetch(request)
        .then(response => {
          if (response.status === 200) {
            this.setState({ success: true });
            setTimeout(() => {
              this.props.history.push('/success');
            }, 700);
          } else {
            throw new Error('Form submission did not work');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  updateRequest(item, content) {
    let newState = Object.assign({}, this.state.data);
    newState[item] = content;
    this.setState({ data: newState });
  }

  render() {
    return (
      <Fragment>
        <StyledForm success={this.state.success}>
          <form onSubmit={e => this.submitForm(e)} required>
            <StyledLink to="/">← Back to Main Page</StyledLink>
            {this.state.data.level ? (
              <div>
                <label htmlFor="level">Sponsorship Level</label>
                <select
                  name="level"
                  id="level"
                  defaultValue={this.state.data.level}
                  onChange={e => {
                    this.updateRequest('level', e.target.value);
                  }}
                >
                  {this.allLevels.map(l => (
                    <option key={`level-${slugify(l.name)}`} value={l.name}>{`${l.name}`}</option>
                  ))}
                </select>
              </div>
            ) : null}
            <div className="tp-name">
              <TextInput item="fName" label="First Name" update={this.updateRequest} required />
              <TextInput item="lName" label="Last Name" update={this.updateRequest} required />
            </div>
            <div className="tp-name">
              <TextInput item="org" label="Organization" update={this.updateRequest} />
              <TextInput item="title" label="Title" update={this.updateRequest} />
            </div>
            <div className="tp-contact">
              <TextInput item="email" label="Email Address" update={this.updateRequest} required type="email" />
              <TextInput item="phone" label="Phone Number" update={this.updateRequest} required type="tel" />
            </div>
            <div className="tp-comments">
              <label htmlFor="comments">Questions or Comments</label>
              <textarea name="comments" id="comments" onChange={e => this.updateRequest('comments', e.target.value)} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </StyledForm>
        {this.state.success ? <h1>Success! Check your email for confirmation.</h1> : null}
      </Fragment>
    );
  }
}

export default SponsorshipForm;
