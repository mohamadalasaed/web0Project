fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(json => {
            json.forEach(student => {  
                var content = `
                    <h3 class="text-center">Name: ${student.name}</h3>
                    <p>Age: ${student.age}</p>`

                var div = document.createElement('div');
                div.innerHTML = content;
                div.className = 'col-sm-6 col-md-3';
                document.getElementById('r').appendChild(div);
            });
})