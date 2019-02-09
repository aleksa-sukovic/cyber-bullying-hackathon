import PageTransformer from "./Transformers/Page/PageTransformer.js";
import NodeCrawler from "./Transformers/Page/Crawlers/NodeCrawler.js";
import MyMutationObserver from "./Observers/MyMutationObserver.js";

const pageTransformer = new PageTransformer();

const partial = (func, ...args) => (...rest) => func(...args, ...rest);

function subscriber_wrapper(transofrmer, mutations) {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            transofrmer.transform(node);
        });
    });
}

const subscriber = partial(subscriber_wrapper, pageTransformer);
const root = document.getElementsByTagName("body")[0];
pageTransformer.transform(root);

let observer = new MyMutationObserver(root, subscriber);
observer.observe();
