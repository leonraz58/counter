type PropsButtonType = {
    name: string,
    callBack: () => void
    disabled: boolean
}
export const Button = (props: PropsButtonType) => {
    return (
        <button className={'buttons'} disabled={props.disabled} onClick={props.callBack}>{props.name}</button>
    )
}