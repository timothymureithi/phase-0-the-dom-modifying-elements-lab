// Write your code here!

document.getElementById('main').remove();

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = 'Timothy is the champion';