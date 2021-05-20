const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const loadPosts = () => {
  document.getElementById('posts').innerHTML =  ' Carregando posts...'
  fetch(BASE_URL)
    .then(reponse => reponse.json())
    .then((data) => {
      montarBlog(data);
    })
}

const montarBlog = (post) => {
  let html = '';
  post.map(post => {
    html += `<h3> Título: ${post.title}</h3>
            <p> Descrição: ${post.body}</p>
            <hr>
    `
  })
  document.getElementById('posts').innerHTML = html;
}