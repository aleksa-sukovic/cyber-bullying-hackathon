import NodeCrawler from "./Crawlers/NodeCrawler.js";
import NodeValidator from "./Validators/NodeValidator.js";
import NodeFactory from "./Factories/NodeFactory.js";

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
            this.transformNode(node).then(result => {
                //
            });
        }
    }

    transformNode(node)
    {
        return NodeValidator.validate(node).then(response => {
            return NodeFactory.create(node, response);
        });
    }
}
