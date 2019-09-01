const React = require('react')
const { Route, Redirect } = require('react-router')

const e = React.createElement

const PublicOnlyRoute = ({ loggedIn, ...rest }) =>
  loggedIn ? e(Route, { ...rest }) : null

module.exports = PublicOnlyRoute
