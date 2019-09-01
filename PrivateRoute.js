const React = require('react')
const { Route, Redirect } = require('react-router')

const e = React.createElement

const PrivateRoute = ({
  redirectPath = '/login',
  checkAuthenticated,
  component,
  ...rest
}) =>
  e(Route, {
    ...rest,
    render: props =>
      checkAuthenticated()
        ? e(component, props)
        : e(Redirect, { to: { pathname: redirectPath, state: { returnUrl: 'TODO' } } }),
  })

module.exports = PrivateRoute
