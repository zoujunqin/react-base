import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import Button from './../core/src/components/Button/Button'

const originAddEventListener = window.addEventListener
window.addEventListener = (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => {
    if (type === 'click') {
        console.log('click')
    }
    return originAddEventListener.call(window, type, listener, options)
}

const handleClick = () => {
    console.log('你是猪吗')
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Button onClick={handleClick}>你是猪吗</Button>
    </StrictMode>
)
