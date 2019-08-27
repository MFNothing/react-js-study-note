createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
} 