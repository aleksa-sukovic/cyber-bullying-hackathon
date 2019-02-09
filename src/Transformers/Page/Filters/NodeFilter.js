export default class NodeFilter
{
    static isValidNode(node)
    {
        if (node.textContent.trim().length < 2){
            return false;
        }
        
        return true;
    }
}
