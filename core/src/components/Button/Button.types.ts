import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export interface ButtonProps extends Omit<MuiButtonProps, 'onClick'> {
    dictCode: string
    permissionCode?: string | number | Array<string | number>
    callback?: () => void | (() => Promise<void>)
}
