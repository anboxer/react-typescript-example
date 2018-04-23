import * as React from "react"

import { MainLayout } from "./../main-layout"

interface IMainProps {
    t?: string
}
export class Main extends React.PureComponent<IMainProps> {
    public render() {
        return (
            <MainLayout>Main</MainLayout>
        );
    }
}