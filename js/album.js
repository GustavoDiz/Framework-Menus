let url = 'https://jsonplaceholder.typicode.com/albums';
let albuns = document.getElementById('albuns');

fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data)=>{
        for(let i =0; data.length > i; i++){
            let tr = document.createElement('tr');
            albuns.appendChild(tr);
            tr.classList.add('album');
            tr.innerHTML += '<td>'+data[i].userId+'</td>';
            tr.innerHTML += '<td>'+data[i].id+'</td>';  
            tr.innerHTML += '<td>'+data[i].title+'</td>';
        }
    });

    setInterval(() => {
        $(document).ready(function(){
            $('#album').DataTable();
        })
    },300);