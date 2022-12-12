fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(json => {
            json.forEach(student => {  
                var content = `
                    <h3 class="text-center">Name: ${student.name}</h3>
                    <p>Age: ${student.age}</p>`;

                var div = document.createElement('div');
                div.innerHTML = content;
                div.className = 'col-sm-6 col-md-3';
                document.getElementById('r').appendChild(div);
            });
});


function AddStudent(){
    var namevalue = document.getElementById('txtname').value;
    var agevalue = document.getElementById('txtage').value;
    fetch('https://api-service-7fpg.onrender.com/addstudent', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'name': namevalue , 'age': agevalue}),
        }).then(()=>{
            clearFields();
            getStudents();
        })               
}

function clearFields()
{
    document.getElementById('txtname').value ='';
    document.getElementById('txtage').value ='';
}

getStudents();