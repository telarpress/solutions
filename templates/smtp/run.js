import MailDev from 'maildev'

const serviceName = 'smtp'

async function run({config},tBus) {
    if (!config.smtpPort) {
        throw Error('SMTP port is required.')
    }
    if (!config.webPort) {
        throw Error('Web port is required.')
    }
    let smtpPort = config.smtpPort
    let webPort = config.webPort
    const maildev = new MailDev({ smtp: smtpPort, web: webPort, silent: true })
    maildev.on('new', function () {
        console.log(`New email received on http://localhost:${webPort}`)
    })
    maildev.listen()
    console.log(`SMTP is listening on http://0.0.0.0:${smtpPort}`)
    console.log(`Email inbox is accessible from http://localhost:${webPort}`)
    tBus.resolve({ port: smtpPort, host: 'localhost', serviceName, log: `` }, [
                {
                    type: 'link',
                    label: 'web',
                    value: `http://localhost:${webPort}`,
                },
                {
                    type: 'text',
                    label: 'smtp',
                    value: `http://0.0.0.0:${smtpPort}`,
                },
            ],
        )
    
}

/**
 * stop smtp
 */
async function stop() {}
