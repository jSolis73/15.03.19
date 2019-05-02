export default {
    bind(el, bindings, vnode) {
        el.style.background = 'green';
        el.style.fontSize = '20px';
        el.style.fontStyle = 'italic';

        const delayColor = bindings.modifiers['delayColor'];
        if (delayColor) {
            function randomColor() {
                let r = Math.floor(Math.random() * (256)),
                    g = Math.floor(Math.random() * (256)),
                    b = Math.floor(Math.random() * (256));
                return el.style.color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            }
            setInterval (randomColor, 1000)
        }
    }
}