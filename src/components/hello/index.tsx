import * as React from "react"

import "./style.less"

interface IHelloProps {
    name: string;
}

export class Hello extends React.PureComponent<IHelloProps>{
    public render() {
        const { name } = this.props
        return (
            <h1>Hello, <span>{name}</span></h1>
        )
    }
}