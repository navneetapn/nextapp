import React from 'react'

export default function Heading1(props) {
    return (
        <h1 className={props.setclass} title={props.settitle}>{props.text}</h1>
    )
}
