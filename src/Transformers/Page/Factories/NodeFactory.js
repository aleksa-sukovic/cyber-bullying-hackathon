import Node from '../Models/Node.js';

export default class NodeFactory
{
    static create(node, validatorResponse)
    {
        if ( ! validatorResponse.valid) {
            return new Node(node, true, {});
        }

        return new Node(node, false, validatorResponse);
    }
}
