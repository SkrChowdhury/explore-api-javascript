function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  for (const post of posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
      const div = document.createElement('div');
      div.classList.add('post');
      div.innerHTML = `
        <h4>User-${post.userId} </h4>
        <h5>Post: ${post.title}</h5>
        <p> ${post.body}</p>`;
      postsContainer.appendChild(div);
    }
  }
}

loadPost();
