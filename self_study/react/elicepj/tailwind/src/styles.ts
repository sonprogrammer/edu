import tw  from 'twin.macro'
import styled from 'styled-components'

export const Container = styled.div`
    ${tw`
        box-border
        bg-sky-100
    `}
`
export const Title = styled.div`
    ${tw`
        text-5xl
        text-white
        bg-blue-700
        p-5
        rounded-xl
        mb-10
    `}
`
export const Lon = styled.div`
    ${tw`

    `}
`
export const Lat = styled.div`
    ${tw`

    `}
`
export const Temp = styled.div`
    ${tw`
        text-3xl
        mb-3
        font-bold
    `}
`
export const Weather = styled.div`
    ${tw`
        flex
        text-8xl
        text-center
        justify-center
        items-center
    `}
`