const React = require('react')
const { Route, Redirect } = require('react-router')

const e = React.createElement

const PrivateRoute = ({
  redirectPath = '/login',
  withReturnUrl = true,
  returnUrlName = 'returnUrl',
  authCheck,
  component,
  ...rest
}) => {
  if (!authCheck) {
    throw Error('You must pass an authCheck function to PrivateRoute')
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
      return authCheck() ? e(component, props) : e(Redirect, { to })
    },
  })
}

module.exports = PrivateRoute
