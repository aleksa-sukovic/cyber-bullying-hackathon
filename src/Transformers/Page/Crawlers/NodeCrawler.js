import NodeFilter from '../Filters/NodeFilter.js';

export default class NodeCrawler
{
    constructor() {
        this.nodeFilter = new NodeFilter();
    }

    parseNode(node, parsedNodes) {
        if (node.nodeType == Node.TEXT_NODE && NodeFilter.isValidNode(node)){
            parsedNodes.push(node.parentElement);
            return;
        }
        
        node.childNodes.forEach(element => {
            this.parseNode(element, parsedNodes);
        });
    }

    parseNodes(root) {
        const parsedNodes = new Array();
        this.parseNode(root, parsedNodes);
        
        return parsedNodes
    }
}
