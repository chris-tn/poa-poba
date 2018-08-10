import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import glamorous from 'glamorous'
import PlaidLink from 'react-plaid-link'
import plaidLinkButtonStyles from '../styles/plaidLinkButton'
import align from '../styles/align'

const RightArrowIcon = glamorous.i('svg-background-element', {
  display: 'inline-block',
  background: `url("/images/svg/arrow.svg")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '18px'
})

class PlaidButton extends Component {
  constructor() {
    super()
    this.state = { plaidToken: null }
    this.redirectToBankAccountsPage = this.redirectToBankAccountsPage.bind(this)
  }

  redirectToBankAccountsPage(token) {
    this.setState({ plaidToken: token })
  }

  render() {
    const { plaidToken } = this.state
    const bankAccountsListState = {
      pathname: '/bankaccountslist/' + plaidToken
    }

    // Redirect to list of bank accounts after successful plaid token fetch
    return plaidToken ? (
      <Redirect to={bankAccountsListState} />
    ) : (
      <PlaidLink
        clientName="Proof of Bank Account"
        env={process.env.REACT_APP_PLAID_ENV}
        institution={null}
        publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
        product={['auth']}
        onSuccess={this.redirectToBankAccountsPage}
        className={plaidLinkButtonStyles}
        style={{
          width: '200px',
          height: '44px',
          position: 'relative',
          'border-radius': '5px',
          'background-color': '#5c34a2',
          'box-shadow': '0px 5px 10px 0 rgba(92, 52, 162, 0.3)',
          'font-family': 'Nunito',
          'font-size': '16px',
          'font-weight': 'normal',
          'font-style': 'normal',
          'text-transform': 'none',
          'font-stretch': 'normal',
          'line-height': '44px',
          'letter-spacing': 'normal',
          'text-align': 'left',
          'margin-left': '30px',
          color: '#ffffff'
        }}
      >
        Continue{' '}
        <span style={align.iconRight}>
          <RightArrowIcon />
        </span>
      </PlaidLink>
    )
  }
}

export default PlaidButton
