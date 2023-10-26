import React from 'react'
type RandomNo = {
    value: number
}

type PositiveNo = RandomNo & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never,
}

type NegativeNO = RandomNo & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never,
}

type Zero = RandomNo & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never,
}

type NumberType = PositiveNo | NegativeNO | Zero

function Restrict({value, isPositive, isNegative, isZero}: NumberType) {
  return (
    <div>
        {value} {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
    </div>
  )
}

export default Restrict