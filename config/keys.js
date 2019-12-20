require('dotenv').config();

module.exports = {
    mongoURI: `mongodb+srv://SebastianOtero:${process.env.PASSWORD_DB}@socluster-yyn7k.azure.mongodb.net/mindhub?retryWrites=true&w=majority`,
    google: {
        clientID: '338638479121-nhrtoi27qk17ccdf0tl7afns1un0f4g5.apps.googleusercontent.com',
        clientSecret: 'M00DQ8TAGiEToK6VtjJ5OfZk'
    },
    URIRedirect: 'http://localhost:5000/users/loginGoogleRedirect',
    token: {
        secretOrKey: 'secret'
    }
}

