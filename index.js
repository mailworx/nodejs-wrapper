var mailworxApi = require('./api'),
    credentials = {
        account: "<Account>",
        username: "<Username>",
        password: "<Password>",
        source: "<Source>"
    }

mailworxApi(credentials)

mailworxApi.setMethod('<Method>')
mailworxApi.setProperty('<PropertyName>', '<PropertyValue>');

mailworxApi.getData((json) => {
    console.log(json)
})