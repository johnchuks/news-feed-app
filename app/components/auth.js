function requireAuth(nextState, replace) {
  if (!userExists()) {
    replace({
      pathname: '#/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
