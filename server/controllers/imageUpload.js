import db from "../db_connection";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import ProgressBar from "progress";
import commandExists from "command-exists";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

async function updateDb(city, area, consumption, classType, count) {
  const query = `INSERT INTO MuniLEIMS.statisticalreport
    (city, area, consumption, class, amount_streetlight)
    VALUES ('${city}', '${area}', ${consumption}, '${classType}', '${count}')`;

  db.query(query, function (err, result) {
    if (err) console.log(err);
  });
}

async function scanFile(fromPath) {
  // Stat the file to see if we have a file or dir
  const stat = await fs.promises.stat(fromPath);
  if (!stat.isFile()) return [null, null];

  let b64file = fs.readFileSync(fromPath, { encoding: "base64" });

  let res1 = await fetch(
    "https://detect.roboflow.com/muni-leims/3?api_key=7nC40FBnAQ5Ymx8wBDHq",
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: b64file,
      method: "POST",
    }
  );
  let data = await res1.json();

  let count = data.predictions.length;
  if (count > 0) {
    let classType = data.predictions[0].class;
    return [count, classType];
  }
  return [null, null];
}

<<<<<<< HEAD
function checkProc(proc, procName) {
  return new Promise((resolve, reject) => {
    proc.on("error", (err) => {
      reject(`Failed to spawn ${procName}`);
    });
    proc.on("exit", (code) => {
      if (code != 0) {
        proc.stdout.on("data", (data) =>
          console.log(`process[stdout]: ${data.toString()}`)
        );
        proc.stderr.on("data", (data) =>
          console.log(`process[stderr]: ${data.toString()}`)
        );
        reject("Python exited with error");
      }
      resolve();
    });
  });
}
async function sliceImage(scriptPath, file, outFolder) {
  let py3_exists = false;
  try {
    py3_exists = await commandExists("python3");
  } catch {} // throws error or true...
  let procName = "python" + (py3_exists ? "3" : "");
  const proc = spawn(procName, [scriptPath, file, outFolder]);
  await checkProc(proc, procName);
=======

function checkProc(proc, procName) {
    return new Promise((resolve, reject) => {
        proc.on('error', err => {
            reject(`Failed to spawn ${procName}`)
        })
        proc.on('exit', code => {
            if (code != 0) {
                proc.stdout.on('data', data => console.log(`process[stdout]: ${data.toString()}`))
                proc.stderr.on('data', data => console.log(`process[stderr]: ${data.toString()}`))
                reject('Python exited with error')
            }
            resolve()
        })
    }) 
}
async function sliceImage(scriptPath, file, outFolder) {    
    let py3_exists = false
    try { py3_exists = await commandExists('python3') } catch {} // throws error or true...
    let procName =  'python' + (py3_exists ? '3' : '')
    const proc = spawn(procName, [scriptPath, file, outFolder]);
    await checkProc(proc, procName)
>>>>>>> d575c30f48cb674b8f3f5faa4782b648122fa246
}

async function scanImages(files, outFolder, city, area, consumption) {
  var bar = new ProgressBar(
    "  Scanning images [:bar] :percent :current/:total",
    {
      complete: "=",
      incomplete: " ",
      width: 20,
      total: files.length,
    }
  );
  // Loop them all with the new for...of
  for (const file of files) {
    // Get the full paths
    const fromPath = path.join(outFolder, file);
    let [count, classType] = await scanFile(fromPath);
    console.log(city, area, consumption, classType, count);
    if (count && classType)
      await updateDb(city, area, consumption, classType, count);
    bar.tick();
  }
}

export async function uploadImage(req, res) {
  let filename = req.file.originalname;
  let area = req.body.area;
  let city = req.body.city;
  let consumption = req.body.consumption;

  let file = path.resolve(_dirname, `./py-slice/${filename}`);
  let outFolder = path.resolve(_dirname, `./py-slice/out`);
  let scriptPath = path.resolve(_dirname, `./py-slice/main.py`);
  fs.writeFileSync(file, req.file.buffer);
  try {
    await sliceImage(scriptPath, file, outFolder);
    res.status(200).send("Image received and will scanned...");
    const files = await fs.promises.readdir(outFolder);
    await scanImages(files, outFolder, city, area, consumption);
    console.log("done slicing");
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
}
