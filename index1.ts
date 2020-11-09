let domains = [
    'gmail',
    'hotmail',
    'outlook',
    'yahoo',
    'terra',
]

try {
    let invalidEmail = '3079831@g'
    let serverAddress = extractServerAddress(invalidEmail)
    let domain = extractDomain(serverAddress)
    let suggestion: string

    if(!isInDomainsList(domain)) {
        suggestion = findSuggestion(domain)
        if(suggestion.length > 0) {
            console.log(`Você quis dizer ${suggestion} em vez de ${domain}?`)
        }
    }
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

  function isInDomainsList(domain: string): boolean{
    return domains.indexOf(domain) > -1
  }

  function findSuggestion(domain: string): string {
    for (let item of domains.sort()) {
        if(isFirstCharacterSame(domain, item))
            return item
    }
    return ''
  }

  function isFirstCharacterSame(firstWord: string, secondWord: string): boolean {
    return firstWord.charAt(0) === secondWord.charAt(0)
  }