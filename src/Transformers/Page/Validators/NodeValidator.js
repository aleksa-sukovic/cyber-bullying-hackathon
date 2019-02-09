import { words } from "./WordContainer.js"

export default class NodeValidator
{
    static validate(node)
    {
        const valid = {
            original: node.innerHTML
        };
        let censored = valid.original;
        const asterisk = "*"
        words.forEach(word => {
            censored = censored.replace(word, asterisk.repeat(word.length));
            //node.innerHTML = node.innerHTML.replace(word, asterisk.repeat(word.length));
        });
        valid.changed = censored;
        valid.valid = valid.changed === valid.original;
        if (!valid.valid) {
            node.innerHTML = valid.changed;
        }
        console.log(valid);
        return new Promise((resolve) => {
            resolve(
                valid
            );
        });
    }
}
