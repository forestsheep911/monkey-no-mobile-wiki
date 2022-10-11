const app = () => {
  console.log(window.location.host);
    var theHost = window.location.host;
    if (theHost.indexOf('.m.') !== -1)
        window.location.host = theHost.replace('.m.', '.');
}

export default app
