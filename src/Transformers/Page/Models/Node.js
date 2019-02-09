import HudWindow from "./HudWindow.js";

export default class Node
{
    constructor(node, valid, validatorResponse)
    {
        this.validatorResponse = validatorResponse;
        this.valid = valid;

        node.textContent = valid ? node.textContent : validatorResponse.changed;
        node.addEventListener('mouseenter', (event) => this.onMouseEnter(event));
        node.addEventListener('mouseleave', (event) => this.onMouseLeave(event));

        this.hudWindow = new HudWindow(node, () => this.onContentReveal());
        this.node = node;
    }

    onContentReveal()
    {
        if ( ! this.valid) {
            console.log('Revealing text');
            this.node.textContent = this.validatorResponse.original;
        }
    }

    onMouseEnter(event)
    {
        this.hudWindow.show(event);
    }

    onMouseLeave(event)
    {
        if ( ! this.valid) {
            this.node.textContent = this.validatorResponse.changed;
        }
    }
}
