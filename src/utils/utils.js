import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
// import { LIVE_NETWORK_CHAIN_ID } from '../constants'

export function isAddress(value) {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked()
}

function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library
}

export function getContract(address, ABI, library, account) {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' param '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account))
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str

export function isNetworkSupported(chainId) {
  return chainId === LIVE_NETWORK_CHAIN_ID
}

export function getNetwork() {
  return process.env('REACT_APP_NETWORK')
}

export function isToday(inputDate) {
  var today = new Date();
  var recordDate = new Date(inputDate)
  return today.setHours(0,0,0,0) === recordDate.setHours(0,0,0,0)
}

export function getRPCErrorMessage(err){
  var open = err.stack.indexOf('{')
  var close = err.stack.lastIndexOf('}')
  var j_s = err.stack.substring(open, close + 1);
  var j = JSON.parse(j_s);
  var reason = j.data[Object.keys(j.data)[0]].reason;
  return reason;
}

export function formatDate(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function shortenAddress(address) {
  return address.substring(0,4) + '...' + address.substring(address.length - 4)
}

export function displayNumber(number){
  return Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(number)
}