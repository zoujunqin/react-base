import BaseComponent from './BaseComponent'

const map: WeakMap<any, unknown> = new WeakMap()

export function useDataFlow(components: BaseComponent[]) {
    const timestamp = new Date().getTime()

    const data = map.get(timestamp)

    const componentMap = components.reduce((acc, component) => {
        console.log(component.prototype.constructor.prototype)
        acc[component.id] = component.bind(component, data)
        return acc
    }, {})

    return { data }
}
