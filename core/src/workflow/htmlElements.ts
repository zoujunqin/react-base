export const htmlElements = {
    documentStructure: ['html', 'head', 'body', 'title', 'meta', 'link', 'style', 'script'],
    textContent: [
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'span',
        'div',
        'br',
        'hr',
        'pre',
        'code',
        'blockquote',
        'q',
        'cite',
        'time',
        'mark',
        'small',
        'sub',
        'sup'
    ],
    lists: ['ul', 'ol', 'li', 'dl', 'dt', 'dd'],
    tables: ['table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'colgroup', 'col'],
    forms: ['form', 'input', 'textarea', 'button', 'select', 'option', 'optgroup', 'label', 'fieldset', 'legend', 'datalist', 'output'],
    media: ['img', 'picture', 'figure', 'figcaption', 'audio', 'video', 'source', 'track', 'canvas', 'svg'],
    interactive: ['a', 'details', 'summary', 'dialog', 'menu', 'menuitem'],
    semantic: ['header', 'footer', 'nav', 'main', 'article', 'section', 'aside', 'address'],
    embedding: ['iframe', 'embed', 'object', 'param'],
    other: ['noscript', 'template', 'slot', 'portal', 'wbr']
} as const

// Flattened array of all HTML elements
export const allHtmlElements = Object.values(htmlElements).flat()

// Type for HTML element names
export type HtmlElementName = (typeof allHtmlElements)[number]
