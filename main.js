const $ = document.querySelector.bind(document);

windows.onload = function()
{
    this.fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(r => r.json())
    .then(data => {
        Object.keys(data.message)
        .forEach( createButton )
    })
}
function createButton(txt)
{
    var btn = document.createElement('button');
    btn.innerText = txt;
    $('#button').appendChild(btn);
}