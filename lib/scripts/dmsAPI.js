const baseUrl = {
  const host = window.location.hostname
  if(host === "localhost" || "127.0.0.1") {
    return 'http://localhost:3000'
  } else {
    return 'https://desolate-oasis-56246.herokuapp.com'
  }
}

module.exports = baseUrl
