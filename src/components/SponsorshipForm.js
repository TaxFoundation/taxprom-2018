import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import validator from 'validator';
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
        // address1: '',
        // address2: '',
        // city: '',
        // state: '',
        // zip: '',
        // country: 'United States',
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
            {this.state.level ? (
              <div>
                <label htmlFor="level">Sponsorship Level</label>
                <select name="level" id="level" defaultValue={this.state.level}>
                  {this.allLevels.map(l => <option value={l.name}>{`${l.name}`}</option>)}
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
            <div className="tp-address">
              <TextInput item="address1" label="Address Line 1" update={this.updateRequest} required />
              <TextInput item="address2" label="Address Line 2 (optional)" update={this.updateRequest} required />
              <div className="tp-address3">
                <TextInput item="city" label="City" update={this.updateRequest} required />
                <TextInput item="state" label="State / Province" update={this.updateRequest} required />
                <TextInput item="zip" label="ZIP / Postal Code" update={this.updateRequest} required />
              </div>
              <div className="tp-country">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  defaultValue="United States"
                  required
                  onChange={e => this.updateRequest('country', e.target.value)}
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="India">India</option>
                  <option value="Brazil">Brazil</option>
                  <option value="----">----</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                  <option value="Republic of the Congo">Republic of the Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="C&ocirc;te d'Ivoire">C&ocirc;te d'Ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="North Korea">North Korea</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Curacao">Curacao</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Sint Maarten">Sint Maarten</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands, British">Virgin Islands, British</option>
                  <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
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
