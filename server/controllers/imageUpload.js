const db = require("../db_connection");
const fetch = require('node-fetch')
const fs = require('fs');
const path = require('path')
const { spawn } = require('child_process');
var ProgressBar = require('progress');


async function updateDb(area, classType, count) {
    const Query = `INSERT INTO MuniLEIMS.statisticalreport
    (area_name, class, amount_streetlight)
    VALUES ('${area}', '${classType}', '${count}')`;

    db.query(Query, function (err, result) {
        // console.log(err, result)
    })
}

async function scanFile(fromPath) {
      // Stat the file to see if we have a file or dir
      const stat = await fs.promises.stat( fromPath );
      if( !stat.isFile() ) return [null,null]


    // console.log( "Scanning '%s'", fromPath );
    let b64file = fs.readFileSync(fromPath, {encoding: 'base64'});

    let res1 = await fetch("https://detect.roboflow.com/muni-leims/3?api_key=7nC40FBnAQ5Ymx8wBDHq", {
        "headers": {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        "body": b64file,
        method: 'POST'
    })
    let data = await res1.json()

    let count = data.predictions.length
    if (count > 0) {
        let classType = data.predictions[0].class
        return [count, classType]
    }
    return [null,null]
}

async function sliceImage(scriptPath, file, outFolder) {
    const python = spawn('python', [scriptPath, file, outFolder], {stdio: 'ignore'});
    // python.stderr.pipe(process.stderr);
    // python.stdout.pipe(process.stdout);
    await new Promise( (resolve, reject) => {
        python.on('exit', (code) => {
            if (code != 0) {
                res.status(500).send(`python execute error`);
                reject()
            } else {
                resolve()
            }
        })
    } )
}

async function uploadImage(req, res) {


    let filename = req.file.originalname
    let area = req.body.area


    let file = path.resolve(__dirname, `./py-slice/${filename}`)
    let outFolder = path.resolve(__dirname, `./py-slice/out`)
    let scriptPath = path.resolve(__dirname, `./py-slice/main.py`)
    fs.writeFileSync(file, req.file.buffer)
    res.status(200).send('Image received and will scanned...')
    await sliceImage(scriptPath, file, outFolder)
    console.log('done slicing')
 


    const files = await fs.promises.readdir( outFolder);


    var bar = new ProgressBar('  Scanning images [:bar] :percent :current/:total :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: files.length
      });
    // Loop them all with the new for...of
    for( const file of files ) {
        // Get the full paths
        const fromPath = path.join(outFolder, file );
        let [count, classType] = await scanFile(fromPath)
        if (count && classType) await updateDb(area, classType, count)
        bar.tick()
    }
}

module.exports = {uploadImage};