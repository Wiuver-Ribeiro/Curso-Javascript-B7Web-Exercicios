const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const addPost = async () => {
  document.querySelector('#posts').innerHTML = 'Carregando...';
  const post = await fetch(BASE_URL,{
    method: 'POST',
    body: JSON.stringify({
      title: "Titulo de teste",
      body: 'Corpo de teste',
      userId: 4,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await post.json();
  console.log(response);
}