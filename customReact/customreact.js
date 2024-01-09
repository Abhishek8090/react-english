function mainContainer(reactElement, container){
    const domElement = document.createElement(reactElement,type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props)
    for (const prop in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}

const reactElement = {
    type:'a',
    props:{
        href:"https:google.com",
        target:'_blank'
    },
    children:'CLick me to visit'
}

const mainContainer = document.querySelector('root')

customRender(reactElement,mainContainer)