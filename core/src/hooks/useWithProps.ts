import { ReactElement, cloneElement } from 'react'

type Props = Record<string, any>

export function useWithProps(components: ReactElement[], props: Props) {
    // Convert props object to array of entries
    const propsEntries = Object.entries(props)

    // Map through components and assign props based on index
    const enhancedComponents = components.map((component, index) => {
        // Get props for this index
        const componentProps = propsEntries.reduce((acc, [key, value]) => {
            // If value is an array, use the index to get the corresponding value
            if (Array.isArray(value)) {
                acc[key] = value[index]
            } else {
                // If value is not an array, use the same value for all components
                acc[key] = value
            }
            return acc
        }, {} as Props)

        // Clone the component with new props
        return cloneElement(component, componentProps)
    })

    return {
        components: enhancedComponents,
        props
    }
}

/* Usage Example:
const MyComponent = () => {
    const components = [
        <Button key="1" />,
        <Button key="2" />,
        <Button key="3" />
    ];

    const props = {
        onClick: [(e) => console.log('1'), (e) => console.log('2'), (e) => console.log('3')],
        variant: 'contained',  // This will be applied to all components
        color: ['primary', 'secondary', 'error']  // Different for each component
    };

    const { components: enhancedComponents } = useWithProps(components, props);

    return (
        <div>
            {enhancedComponents}
        </div>
    );
};
*/
