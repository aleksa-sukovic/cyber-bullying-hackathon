export default class Node
{
    constructor(node, validatorResponse)
    {
        node.innerHTML = validatorResponse.changed;
        node.addEventListener('dblclick', () => {
            node.innerHTML = validatorResponse.original;
        });
    }
}
