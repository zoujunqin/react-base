import MuiButton from '@mui/material/Button'
import { useThrottledClick } from '../../hooks/useThrottledClick'
import type { ButtonProps } from './Button.types'
import BaseComponent from '../../workflow/BaseComponent'
import { useDataFlow } from '../../workflow/useDataFlow'
import IconButton from '../IconButton/IconButton'

export default class Button extends BaseComponent {
    name = 'Button'

    constructor(props: ButtonProps) {
        super(props)

        useDataFlow([IconButton])
    }

    // async onClick(event: React.MouseEvent<HTMLButtonElement>) {
    //     await this.props.callback?.()
    //     this.props.onClick?.(event, 1)
    // }

    render() {
        return (
            <div>11</div>
            // <MuiButton onClick={useThrottledClick({ onClick: this.onClick }).throttledOnClick} {...this.props}>
            //     {this.props.children}
            // </MuiButton>
        )
    }
}
