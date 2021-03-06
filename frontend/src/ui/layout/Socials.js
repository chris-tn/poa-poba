import React from 'react'
import glamorous from 'glamorous'
import { footerHeight } from '../styles/constants'
import { socialsStyles } from '../styles/layout'
import {
  twitterIconStyles,
  mediumIconStyles,
  telegramIconStyles,
  githubIconStyles
} from '../styles/icons'

const TwitterIcon = glamorous.i(twitterIconStyles)
const MediumIcon = glamorous.i(mediumIconStyles)
const TelegramIcon = glamorous.i(telegramIconStyles)
const GithubIcon = glamorous.i(githubIconStyles)

const socialAnchorStyles = {
  marginLeft: '10px',
  marginRight: '10px',
  lineHeight: footerHeight,
  height: footerHeight
}

const SocialContainer = glamorous.p('social-container', socialsStyles)

const Socials = () => (
  <SocialContainer>
    <a
      className="social-item"
      href="https://twitter.com/poanetwork"
      target="_blank"
      rel="noopener noreferrer"
      style={socialAnchorStyles}
    >
      <TwitterIcon />
    </a>
    <a
      className="social-item"
      href="https://medium.com/poa-network"
      target="_blank"
      rel="noopener noreferrer"
      style={socialAnchorStyles}
    >
      <MediumIcon />
    </a>
    <a
      className="social-item"
      href="https://t.me/oraclesnetwork"
      target="_blank"
      rel="noopener noreferrer"
      style={socialAnchorStyles}
    >
      <TelegramIcon />
    </a>
    <a
      className="social-item"
      href="https://github.com/poanetwork"
      target="_blank"
      rel="noopener noreferrer"
      style={socialAnchorStyles}
    >
      <GithubIcon />
    </a>
  </SocialContainer>
)

export default Socials
