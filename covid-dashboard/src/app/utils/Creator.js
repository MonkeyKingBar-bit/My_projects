export default function create(el, classNames, child, parent, ...dataAttr) {
    let element = null;
    try {
        element = document.createElement(el);
    } catch (error) {
        throw new Error('Unable to create HTMElement!');
    }

    if (classNames) {
        element.classList.add(...classNames.split(' '));
    }

    if (child && Array.isArray(child)) {
        child.forEach((childElement) => childElement && element.appendChild(childElement))
    } else if (child && typeof child == 'object') {
        element.appendChild(child);
    } else if (child && typeof child == 'string') {
        element.innerHTML = child;
    }

    if (parent && typeof parent !== 'string') {
        parent.appendChild(element);
    } else if(parent && typeof parent === 'string') {
        // console.log(document.querySelector('.' + parent))
        document.querySelector('.' + parent).appendChild(element)
    }

    if (dataAttr.length) {
        dataAttr.forEach(([attrName, attrValue]) => {
                if (attrValue === '') {
                    element.setAttribute(attrName, '');
                }
                if (attrName.match(/src|alt/)) {
                    element.setAttribute(attrName, attrValue);
                } else {
                    element.dataset[attrName] = attrValue;
                }
            }
        )
    }
    return element;
}