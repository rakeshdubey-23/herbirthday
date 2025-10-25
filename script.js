// Password protection
var password = prompt("Enter our secret code 💌");
if(password !== "herbirthday29") {
  document.body.innerHTML = "<h1>Access Denied 🚫</h1>";
}

// Sections logic
const sections = document.querySelectorAll('.section');
let current = 0;

function showSection(index) {
  sections.forEach(s => s.classList.remove('active'));
  sections[index].classList.add('active');
}

showSection(current);

// Auto move between sections
setTimeout(() => { showSection(1); }, 4000);
setTimeout(() => { showSection(2); }, 9000);
setTimeout(() => { showSection(3); 
  document.getElementById('next-level-btn').style.display = 'inline-block';
}, 14000);

document.getElementById('next-level-btn').addEventListener('click', () => {
  alert("Next level coming soon! 🎮");
});
