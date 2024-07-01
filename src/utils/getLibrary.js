import { Web3Provider } from '@ethersproject/providers'

export default function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000

  library.detectNetwork().then(network => {
    // #TODO: Abstract to constant
    const networkPollingInterval = 1000
    
    library.pollingInterval = networkPollingInterval
  })
  
  return library
}