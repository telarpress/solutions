import express from 'express'
import multer from 'multer'
import path from 'node:path'
import fs from 'node:fs'

const serviceName = 'file-storage'
let runningApp = null

async function run({ config },tBus) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            const { uid, dir } = req.params
            const dest = 'uploads/' + uid + '/' + dir
            fs.mkdirSync(dest, { recursive: true })
            cb(null, dest)
        },

        filename: function (req, file, cb) {
            1
            const fileName =
                file.fieldname +
                '-' +
                Date.now() +
                path.extname(file.originalname)
            cb(null, fileName)
        },
    })

    const upload = multer({ storage: storage })

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    function uploadFile(req, res) {
        const { uid, dir } = req.params

        res.json({
            payload: `http://localhost:${config.port}/uploads/${uid}/${dir}/${req.file.filename}`,
        })
    }

    const downloadFiles = (req, res) => {
        const { uid, dir, name } = req.params
        const path = 'uploads/' + uid + '/' + dir + '/' + name
        res.download(path, (err) => {
            if (err) {
                res.status(500).send({
                    message: 'File can not be downloaded: ' + err,
                })
            }
        })
    }

    app.post('/:uid/:dir', upload.single('file'), uploadFile)
    app.get('/:uid/:dir/:name', downloadFiles)
    runningApp = app.listen(config.port)
    console.log(
        `
        File storage runningApp is listening on http://localhost:${config.port}
        Upload file: [POST http://localhost:${config.port}/:uid/:dir]
        Download file: [GET http://localhost:${config.port}/:uid/:dir/:name]`
    )
    const host = 'http://localhost:' + config.port
    tBus.resolve({ host, serviceName , log: ''},
            [{ type: 'text', label: 'host', value: host }])
    
}

/**
 * stop storage
 */
function stop() {
    return new Promise((resolve, reject) => {
        if (runningApp) {
            runningApp.close((error) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(null)
                }
            })
        } else {
            resolve(null)
        }
    })
}
