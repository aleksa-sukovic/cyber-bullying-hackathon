import NodeCrawler from "./Crawlers/NodeCrawler.js";
import NodeValidator from "./Validators/NodeValidator.js";
import Node from "./Models/Node.js";

export default class PageTransformer
{
    constructor()
    {
        this.nodeCrawler = new NodeCrawler();
    }

    transform(pageRoot)
    {
        let availableNodes = this.nodeCrawler.parseNodes(pageRoot);
        for (let node of availableNodes) {
            this.transformNode(node);

            if (node) {
            }
        }
    }

    transformNode(node)
    {
        NodeValidator.validate(node).then(response => {
            if ( ! response.valid) {
                new Node(node, response);
            }
        });
    }
}
