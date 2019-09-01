const React = require('react')
const { Route, Redirect } = require('react-router')

const e = React.createElement

const PublicOnlyRoute = ({ loggedIn, ...rest }) => {
  if (loggedIn === undefined) {
    throw Error('PublicOnlyRoute requires a loggedIn prop')
  }
  return loggedIn ? e(Route, { ...rest }) : null
}

module.exports = PublicOnlyRoute
