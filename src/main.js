import PageTransformer from "./Transformers/Page/PageTransformer.js";
import NodeCrawler from "./Transformers/Page/Crawlers/NodeCrawler.js";

//const pageTransformer = new PageTransformer();

// new MyMutationObserver(document.getElementsByTagName("body")[0], mutations => {
//     console.log(mutations);
//
//     pageTransformer.transform(document.getElementsByTagName("body")[0]);
// });

//pageTransformer.transform(document.getElementsByTagName("body")[0]);

const crawler = new NodeCrawler();
const parsedNodes = crawler.parseNodes(document.getElementsByTagName("body")[0]);

parsedNodes.forEach(element => {
    console.log(element.textContent);
});
