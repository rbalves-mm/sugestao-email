let fulldomains = [    
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

let domains = fulldomains
                .map(item => item.substr(0, item.indexOf('.')))
                .filter((index, value, array) => array.indexOf(index) === value)
                .sort()

try {
    let currentEmail = '3079831@yaho.com'

    let serverAddress = extractServerAddress(currentEmail)
    let domain = extractDomain(serverAddress)

    let lastFoundDomains: string[] = []
    let currentSearch: string[]

    let foundDomains = findDomains(domain)

    currentSearch = findSuggestions(foundDomains)

    if(currentSearch.length > 0) {
        lastFoundDomains = currentSearch
    } 
        
    console.log(lastFoundDomains.join(', '))
} catch (error) {
    console.log(error)
}

function extractServerAddress(email: string): string {
    let index = email.indexOf('@')
    if(index > -1) return email.substr(index + 1)
    throw 'E-mail inválido';
}

function extractDomain(serverAddress: string): string {
    let index = serverAddress.indexOf('.');
    return (index > -1) ? serverAddress.substr(0, index) : serverAddress
}

function findDomains(domain: string): any[] {
    return domains.filter(item => item.charAt(0) === domain.charAt(0))
}

function findSuggestions(domains: string[]): any[] {
    let arrayToReturn = []
    for (let d of domains) {
        for (let f of fulldomains) {
            if(f.includes(d)) {
                arrayToReturn.push(f)
            }
        }
    }
    return arrayToReturn
}
