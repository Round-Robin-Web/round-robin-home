import Router from 'next/router'

export default function Button(props){
    const path = props.path
    return (
        <button id="button" onClick={() => Router.push(path)}>{props.title}</button>
    )
}