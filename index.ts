var stringSimilarity = require('string-similarity');

const DOMAINS = [    
    'bol.com.br',
    'facebook.com',
    'folha.com.br',
    'globo.com',
    'gmail.com',
    'google.com',
    'hotmail.com',
    'hotmail.com.br',
    'icloud.com',
    'ig.com.br',
    'msn.com',
    'outlook.com',
    'outlook.com.br',
    'r7.com',
    'terra.com.br',
    'uol.com.br',
    'yahoo.com',
    'yahoo.com.br',
]

try {
    let currentEmail = 'gfas38@12345gmil.com'

    let { username, serverAddress } = dismountEmail(currentEmail)

    if(!DOMAINS.includes(serverAddress)){
        let { bestMatch: { target }} = stringSimilarity.findBestMatch(serverAddress, DOMAINS);

        console.log(`Você quis dizer: ${username}@${target}`)
    }
} catch (error) {
    console.log(error)
}

function dismountEmail(email: string): object {
    let index = email.indexOf('@')
    if(index === -1) throw 'E-mail inválido';
    return { 
        username: email.substr(0, index),
        serverAddress: email.substr(index + 1)
    }
}
