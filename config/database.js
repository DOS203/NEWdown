if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI:
        'mongodb://heroku_fw9f58vn:newdown19@ds263927.mlab.com:63927/heroku_fw9f58vn'}

}else{
    module.exports = {mongoURI: 'mongodb://localhost/LocalDev'}

}