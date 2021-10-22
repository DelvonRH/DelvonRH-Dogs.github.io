const $ = document.querySelector.bind(document);

window.onload = function()
{
    this.fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(r => r.json())
    .then(data => {
        Object.keys(data.message)
        .forEach( createButton )
    });
}

function createButton(txt)
{
    var btn = document.createElement('button');
    btn.innerText = txt;
    $('#buttons').appendChild(btn);
    btn.onclick = showImage;
}

function showImage(event)
{
    var breed = this.innerText
    var priorSelected  = $('.selected');
    if(priorSelected)
    {
        priorSelected.className = " ";
    }
    this.classList.add('selected');
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(r =>r.json())
    .then(data => {
        $('#dog').src = data.message;
    });
}