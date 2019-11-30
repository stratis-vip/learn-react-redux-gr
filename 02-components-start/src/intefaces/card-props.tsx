export interface CardProps{
    headerText?: string
    mainText?: string
    errorText?: string
    child?: JSX.Element
    isInError?: boolean 
    isReady?: boolean
}