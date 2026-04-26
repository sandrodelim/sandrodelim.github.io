const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-button');
const postList = document.getElementById('postList');
const recentPosts = document.getElementById('recentPosts');
const themeToggle = document.getElementById('themeToggle');

function toggleNav() {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
}

function resolvePostUrl(url) {
  const path = window.location.pathname;
  const isBlogIndex = path.endsWith('/blog/') || path.endsWith('/blog/index.html');
  return isBlogIndex ? `../${url}` : url;
}

function renderPosts(posts) {
  if (!postList) return;
  postList.innerHTML = posts.map(post => {
    const tags = post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('');
    const postUrl = resolvePostUrl(post.url);
    return `
      <article class="card post-card">
        <div class="card-content">
          <p class="post-meta">${post.category} · ${post.date}</p>
          <h3><a href="${postUrl}">${post.title}</a></h3>
          <p>${post.summary}</p>
          <div class="post-tags">${tags}</div>
        </div>
        <a class="card-link" href="${postUrl}">Leia o artigo</a>
      </article>
    `;
  }).join('');
}

function renderRecentPosts() {
  if (!recentPosts) return;
  const recent = window.blogPosts.slice(0, 3);
  recentPosts.innerHTML = recent.map(post => {
    const postUrl = resolvePostUrl(post.url);
    return `
      <article class="card recent-card">
        <h3><a href="${postUrl}">${post.title}</a></h3>
        <p>${post.summary}</p>
        <p class="post-meta">${post.category} · ${post.date}</p>
      </article>
    `;
  }).join('');
}

function filterPosts(query = '', category = 'Todos') {
  let filtered = window.blogPosts;
  if (category && category !== 'Todos') {
    filtered = filtered.filter(post => post.category === category);
  }
  if (query) {
    const term = query.toLowerCase();
    filtered = filtered.filter(post => {
      return post.title.toLowerCase().includes(term) ||
             post.summary.toLowerCase().includes(term) ||
             post.tags.some(tag => tag.toLowerCase().includes(term));
    });
  }
  renderPosts(filtered);
}

function setActiveFilter(button) {
  filterButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

function initBlogPage() {
  if (!postList) return;
  renderPosts(window.blogPosts);

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      filterPosts(event.target.value, document.querySelector('.filter-button.active')?.dataset.category || 'Todos');
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      setActiveFilter(button);
      const query = searchInput?.value || '';
      filterPosts(query, button.dataset.category);
    });
  });
}

function initRecentPosts() {
  if (!recentPosts) return;
  renderRecentPosts();
}

function initThemeToggle() {
  if (!themeToggle) return;
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', storedTheme);
  themeToggle.textContent = storedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? 'Light Mode' : 'Dark Mode';
  });
}

if (navToggle) {
  navToggle.addEventListener('click', toggleNav);
}

window.addEventListener('DOMContentLoaded', () => {
  initBlogPage();
  initRecentPosts();
  initThemeToggle();
});
