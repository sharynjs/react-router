const React = require('react')
const { Route, Redirect } = require('react-router')

const e = React.createElement

const PrivateRoute = ({
  redirectPath = '/login',
  withReturnUrl = true,
  returnUrlName = 'returnUrl',
  loggedIn,
  component,
  ...rest
}) => {
  if (loggedIn === undefined) {
    throw Error('PrivateRoute requires a loggedIn prop')
  }
  return e(Route, {
    ...rest,
    render: props => {
      const to = { pathname: redirectPath }
      if (withReturnUrl) {
        to.search = `?${returnUrlName}=${encodeURIComponent(
          props.location.pathname
        )}`
      }
      return loggedIn ? e(component, props) : e(Redirect, { to })
    },
  })
}

module.exports = PrivateRoute
