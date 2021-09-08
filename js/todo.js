let url = 'https://jsonplaceholder.typicode.com/todos';
let tasks = document.getElementById('tasks');



fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data)=>{
        
        for(let i =0; data.length > i; i++){
                let tr = document.createElement('tr');
                tasks.appendChild(tr);
                tr.classList.add('task');
                tr.innerHTML += '<td>'+data[i].userId+'</td>';
                tr.innerHTML += '<td>'+data[i].id+'</td>';  
                tr.innerHTML += '<td>'+data[i].title+'</td>';
                tr.innerHTML += '<td>'+data[i].completed+'</td>';
        }
        
    });
    setInterval(() => {
        $(document).ready(function(){
            $('#todo').DataTable();
        })
    },300);
    
