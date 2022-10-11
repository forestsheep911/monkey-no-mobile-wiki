const app = () => {
  const theHost = window.location.host
  if (theHost.indexOf('.m.') !== -1) window.location.host = theHost.replace('.m.', '.')
}

export default app
