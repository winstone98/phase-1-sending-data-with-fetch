// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(res => res.json())
        .then(user => document.querySelector('body').append(user.id))
        .catch(errorObj => document.querySelector('body').append(errorObj.message))
} 

