
let btn = document.querySelector('button');

btn.onclick = function(event){
    event.preventDefault();
    let user = {
        name: document.querySelector('.name').value,
        password: document.querySelector('.pass').value
    }
    console.log(user);
    fetch ("https://httpbin.org/post",
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": 'application/json; charsset=utf-8'
            },
        })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
   
}
