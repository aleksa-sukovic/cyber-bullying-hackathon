export default class HudWindow
{

   constructor(parent, onContentReveal, width = 150, height = 65)
   {
       this.width = width;
       this.height = height;
       this.parent = parent;
       this.onContentReveal = onContentReveal;

       this.panel = this.initPanel(parent, width, height);
       this.button = this.initButton(this.panel);
   }

    show(mouseEvent)
    {
        const x = Math.max(mouseEvent.clientX - this.width / 2, 0);
        const y = Math.max(mouseEvent.clientY - this.height, parseInt(this.parent.style.height));

        this.panel.style.top = y + 'px';
        this.panel.style.left = x + 'px';
        this.panel.style.display = 'block';
    }

    hide()
    {
        this.panel.style.display = 'none';
    }

    initPanel(parent, width, height)
    {
        let panel = document.createElement('div');

        panel.style.position = 'absolute';
        panel.style.display = 'none';
        panel.style.width = width + 'px';
        panel.style.height = height + 'px';
        panel.style.backgroundColor = '#fff2c3';
        panel.style.borderColor = '#6e3f29';
        panel.style.borderWidth = '1px';
        panel.style.borderRadius = '5px';
        panel.style.borderStyle = 'solid';
        panel.addEventListener('mouseleave', () => this.hide());
        parent.appendChild(panel);

        return panel;
    }

    initButton(parent)
    {
        let button = document.createElement('button');

        button.style.width = '80px';
        button.style.height = '40px';
        button.textContent = 'Pokaži original';
        button.style.marginLeft = '35px';
        button.style.backgroundColor = '#ffaf01';
        button.style.color = '#ffffff';
        button.style.borderColor = '#ff7d00';
        button.style.borderWidth = '1px';
        button.style.borderRadius = '3px';
        button.style.borderStyle = 'solid';
        button.addEventListener('click', this.onContentReveal());

        parent.appendChild(button);
    }
}
