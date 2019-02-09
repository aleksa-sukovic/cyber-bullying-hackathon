import { words } from "./WordContainer.js"

export default class NodeValidator
{
    static validate(node)
    {
        const valid = {
            original: node.innerHTML
        };

        let censored = valid.original;
        const asterisk = "*";
        words.forEach(word => {
            censored = censored.replace(word, asterisk.repeat(word.length));
        });
        valid.changed = censored;
        valid.valid = valid.changed === valid.original;

        return new Promise((resolve) => {
            resolve(
                valid
            );
        });
    }
}
