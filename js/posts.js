let url = 'https://jsonplaceholder.typicode.com/posts';
let posts = document.getElementById('posts');

fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data)=>{
        for(let i =0; data.length > i; i++){

            let tr = document.createElement('tr');
            posts.appendChild(tr);
            tr.classList.add('post');
            tr.innerHTML += '<td>'+data[i].userId+'</td>';
            tr.innerHTML += '<td>'+data[i].id+'</td>';  
            tr.innerHTML += '<td>'+data[i].title+'</td>';
            tr.innerHTML += '<td>'+data[i].body+'</td>';
        }
    });

    setInterval(() => {
        $(document).ready(function(){
            $('#board').DataTable();
        })
    },300);



