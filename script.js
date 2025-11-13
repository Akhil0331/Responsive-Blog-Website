*/
// Demo data - replace with your dynamic data
const posts = [
{
id:1,
title:'Building Responsive Layouts',
excerpt:'Learn practical techniques for responsive CSS using Grid and Flexbox.',
image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
author:'Akhil',
date:'Nov 14, 2025',
content:`<p>This is a sample post content. Write your paragraphs here. Use semantic HTML for content — headings, lists, code blocks, and images.</p>
<h3>Tips</h3>
<ul><li>Mobile-first CSS</li><li>Use responsive units</li><li>Test at real device sizes</li></ul>`
},
{
id:2,
title:'Accessibility Basics',
excerpt:'Simple changes that make your site accessible to more people.',
image:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
author:'Akhil',
date:'Oct 20, 2025',
content:`<p>Accessibility improves UX for everyone — keyboard navigation, proper alt text, and color contrast matter.</p>`
},
{
id:3,
title:'CSS Grid vs Flexbox',
excerpt:'When to use Grid and when to use Flexbox in your layouts.',
image:'https://images.unsplash.com/photo-1526378721561-3b2b2d3c4b9f?auto=format&fit=crop&w=800&q=60',
author:'Akhil',
date:'Sep 5, 2025',
content:`<p>Both powerful — Grid for 2D layouts, Flexbox for 1D alignment. Combine them for best results.</p>`
}
];


const postsGrid = document.getElementById('posts-grid');
const postTemplate = (p)=>{
const div = document.createElement('div');
div.className='post';
div.dataset.id = p.id;
div.innerHTML = `
<img src="${p.image}" alt="${p.title}">
<div class="post-body">
<div class="post-title">${p.title}</div>
<div class="post-excerpt">${p.excerpt}</div>
<div class="post-meta">${p.author} • ${p.date}</div>
</div>`;
div.addEventListener('click',()=>openPost(p.id));
return div;
}


function renderPosts(filter=''){
postsGrid.innerHTML='';
const filtered = posts.filter(p=>p.title.toLowerCase().includes(filter) || p.excerpt.toLowerCase().includes(filter));
filtered.forEach(p=>postsGrid.appendChild(postTemplate(p)));
}


// search
const search = document.getElementById('search');
search.addEventListener('input',(e)=>{
renderPosts(e.target.value.toLowerCase());
});


// menu toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
menuToggle.addEventListener('click',()=>{
nav.classList.toggle('open');
});


// single post view
const single = document.getElementById('single-post');
const backBtn = document.getElementById('back-to-list');
backBtn.addEventListener('click',()=>{
single.hidden = true;
document.getElementById('posts').scrollIntoView({behavior:'smooth'});
});


function openPost(id){
const p = posts.find(x=>x.id===id);
if(!p) return;
document.getElementById('post-title').textContent = p.title;
document.getElementById('post-meta').textContent = `${p.author} • ${p.date}`;
const img = document.getElementById('post-image');
img.src = p.image; img.alt = p.title;
document.getElementById('post-content').innerHTML = p.content;
single.hidden = false;
window.scrollTo({top:0,behavior:'smooth'});
}


// init
renderPosts();
document.getElementById('year').textContent = new Date().getFullYear();
})();
