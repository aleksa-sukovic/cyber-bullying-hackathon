function findTextNodes(element)
{
    let node;
    let result = [];
    let walk = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT,null,false);

    while((node = walk.nextNode())){
        result.push(node);
    }

    return result;
}

function filterNodes(nodes)
{
    let filtered = [];

    nodes.forEach(node => {
        const text = node.textContent.trim();

        if (text.length < 2) {
            return;
        }

        filtered.push(node);
    });

    return filtered;
}

function transform()
{
    let textNodes = filterNodes(
        findTextNodes(
            document.getElementsByTagName('body')[0]
        )
    );

    textNodes.forEach(node => {
        if (node.childElementCount == 0 && node.textContent.match('Hakaton')) {

            const original = node.textContent;
            node.textContent = "*****";

            node.addEventListener('mouseenter', function () {
                node.textContent = original;
            });

            node.addEventListener('mouseleave', function () {
                node.textContent = '*****';
            });
        }
    });
}

transform();
