import { parseFixed } from '@ethersproject/bignumber'

// convert amount string (large unit) to smallest unit of token
export const toSmallUnit = (amount, token) => parseFixed(amount, token.decimals)