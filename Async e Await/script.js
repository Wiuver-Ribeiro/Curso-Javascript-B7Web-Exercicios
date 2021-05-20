const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const loadPosts = async () => {
  document.querySelector('#posts').innerHTML = 'Carregando...';
  const posts = await fetch(BASE_URL);
  const response = await posts.json();
  montarBlog(response);
}

const montarBlog = (posts) => {
  let html = '';
  posts.map(post => {
    html += `<h3> ${post.title}</h3>
            <p>${post.body}</p>
            <hr>
    `
  })
  document.querySelector('#posts').innerHTML = html;
}