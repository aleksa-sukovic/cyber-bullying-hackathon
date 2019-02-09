export default class MyMutationObserver
{
    constructor(root, onMutationCallback)
    {
        this.onMutationCallback = onMutationCallback;
        this.mutationObserver = new MutationObserver(this.onMutationCallback);
        this.root = root;
    }

    observe() {
        this.mutationObserver.observe(this.root, {
            attributes: false,
            subtree: true,
            childList: true
        });
    }
}


