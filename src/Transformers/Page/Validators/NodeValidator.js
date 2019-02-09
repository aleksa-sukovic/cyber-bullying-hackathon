export default class NodeValidator
{
    static validate(node)
    {
        return fetch('/app/validator.php?word=' + node.textContent)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error while fetching words!');

                    return;
                }

                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse.valid;
            });
    }
}
