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

    let serverAddress = extractServerAddress(currentEmail)

    if(!DOMAINS.includes(serverAddress)){
        let matches = stringSimilarity.findBestMatch(serverAddress, DOMAINS);
        
        let bestMatches = matches.ratings
                            .sort((a:any, b:any) => b.rating - a.rating)
                            .map((item:any) => item.target)
                            .slice(0, 3)

        console.log(`O domínio do e-mail informado está correto? Sugestões: ${matches.bestMatch.rating >= 0.7 ? 
            matches.bestMatch.target : bestMatches.join(', ')}`)
    }
} catch (error) {
    console.log(error)
}

function extractServerAddress(email: string): string {
    let index = email.indexOf('@')
    if(index > -1) return email.substr(index + 1)
    throw 'E-mail inválido';
}
