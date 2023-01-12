import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getFilteredCapitals = () => {
    const {activeCapitalId} = this.state

    const filteredCapitals = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return filteredCapitals.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getFilteredCapitals(activeCapitalId)
    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1 className="country">Countries And Capitals</h1>
          <select onChange={this.onChangeCapital} value={activeCapitalId}>
            {countryAndCapitalsList.map(eachCapital => (
              <option key={eachCapital.id} value={eachCapital.id}>
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="span-item">is capital of which country?</span>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
