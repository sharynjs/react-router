const React = require('react')
const { Route, Redirect } = require('react-router')

const e = React.createElement

const PublicOnlyRoute = ({ loggedIn, ...rest }) =>
  loggedIn ? null : e(Route, { ...rest })

module.exports = PublicOnlyRoute
