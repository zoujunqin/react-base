import React from 'react'

interface BaseProps {
    permissionCode?: string
    data?: Record<string, any> | Array<any> | Map<any, any>

    getData?: () => Promise<any>
    formatData?: (data: any) => any
}

export default class BaseComponent extends React.Component {
    /* component that using data flow */
    readonly _useDataFlow?: boolean = true

    permissionCode?: BaseProps['permissionCode']
    getData?: BaseProps['getData']
    formatData?: BaseProps['formatData']

    data?: BaseProps['data']

    constructor(props: BaseProps) {
        super(props)

        this.permissionCode = props.permissionCode
        this.getData = props.getData
        this.formatData = props.formatData

        this._getData().then(() => {
            this._formatData()
        })
    }

    async _getData() {
        this.data = (await this.getData?.()) || {}
    }

    async _formatData() {
        this.data = (await this.formatData?.(this.data)) || this.data
    }

    componentDidMount() {
        // this._getData()
    }

    componentWillUnmount(): void {
        // this._formatData()
    }
}
