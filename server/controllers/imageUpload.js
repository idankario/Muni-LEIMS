const db = require("../db_connection");
const fetch = require('node-fetch')


module.exports = {

    async uploadImage(req, res) {
        
        result = {}

        let b64file = req.file.buffer.toString('base64')
        let res1 = await fetch("https://detect.roboflow.com/muni-leims/3?api_key=7nC40FBnAQ5Ymx8wBDHq", {
            "headers": {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            "body": b64file,
            method: 'POST'
        })
        result.data = await res1.json()

        res1 = await fetch("https://detect.roboflow.com/muni-leims/3?api_key=7nC40FBnAQ5Ymx8wBDHq&format=image", {
            "headers": {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            "body": b64file,
            method: 'POST'
        })

        result.image = await res1.buffer()
        result.image = await result.image.toString('base64')
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));


    }

};