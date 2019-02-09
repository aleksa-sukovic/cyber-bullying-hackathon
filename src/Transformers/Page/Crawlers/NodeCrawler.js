import NodeFilter from '../Filters/NodeFilter.js';

export default class NodeCrawler
{
    constructor()
    {
        this.nodeFilter = new NodeFilter();
    }

    parseNode(node, nodes){
        if (node.nodeType == Node.TEXT_NODE && NodeFilter.isValidNode(node)){
            nodes.push(node);
        }
        
        node.childNodes.forEach(element => {
            this.parseNode(element, nodes);
        });
    }

    parseNodes(root)
    {
        let nodes = new Array();
        this.parseNode(root, nodes);
        return nodes;
    }
}
