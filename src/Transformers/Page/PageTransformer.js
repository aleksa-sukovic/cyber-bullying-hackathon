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
            let transformedNode = this.transformNode(node);
            //transformedNode.apply();
        }
    }

    transformNode(node)
    {
        NodeValidator.validate(node).then(valid => {
            // return valid ? new ValidNode(node) : new InvalidNode(node);
            //console.log(valid);
        });
    }
}
