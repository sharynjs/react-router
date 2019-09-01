const React = require('react')
const { Route, Redirect } = require('react-router')

const e = React.createElement

const PrivateRoute = ({
  redirectPath = '/login',
  withReturnUrl = true,
  returnUrlName = 'returnUrl',
  checkAuthenticated,
  component,
  ...rest
}) =>
  e(Route, {
    ...rest,
    render: props => {
      const to = { pathname: redirectPath }
      if (withReturnUrl) {
        to.search = `?${returnUrlName}=${encodeURIComponent(
          props.location.pathname
        )}`
      }
      return checkAuthenticated() ? e(component, props) : e(Redirect, { to })
    },
  })

module.exports = PrivateRoute
