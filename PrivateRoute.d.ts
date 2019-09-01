export default function PrivateRoute({
  redirectPath,
  withReturnUrl,
  returnUrlName,
  loggedIn,
  component,
  ...rest
}: {
  redirectPath?: string
  withReturnUrl?: boolean
  returnUrlName?: string
  loggedIn: boolean
  component: any
  rest?: any
}): any
