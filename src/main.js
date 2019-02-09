import PageTransformer from "./Transformers/Page/PageTransformer.js";
import MyMutationObserver from './Observers/MyMutationObserver.js';

const pageTransformer = new PageTransformer();

// new MyMutationObserver(document.getElementsByTagName("body")[0], mutations => {
//     console.log(mutations);
//
//     pageTransformer.transform(document.getElementsByTagName("body")[0]);
// });

pageTransformer.transform(document.getElementsByTagName("body")[0]);
