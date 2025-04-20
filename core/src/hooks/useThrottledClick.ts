import { throttle } from 'lodash'
import { useCallback } from 'react'

export function useThrottledClick(props: { onClick?: React.MouseEventHandler<HTMLElement> | undefined } & React.JSX.IntrinsicAttributes) {
    const { onClick } = props

    const throttledOnClick = useCallback(
        throttle((event: React.MouseEvent<HTMLButtonElement>) => {
            onClick?.(event)
        }, 1000),
        [onClick]
    )

    return { throttledOnClick }
}
