function customRender(reactElement, root) {
    // version - 1
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    root.appendChild(domElement);
    */

    // version - 2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    for (const prop in reactElement.props) {
        if (prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    root.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: 'Click me to visit Google'
}

const root = document.querySelector('#root');

customRender(reactElement, root);
