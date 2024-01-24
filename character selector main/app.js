// local reviews data
const reviews = [
  {
    id: 1,
    name: "Dante",
    job: "Devil Hunter",
    img: "https://th.bing.com/th/id/R.ac198d58d9ddaa225673eeea0664a18b?rik=5cYODRkfWKgRsw&pid=ImgRaw&r=0",
    text: "a devil hunter dedicated to exterminating them and other supernatural foes in revenge for losing his mother Eva and having his older twin brother, Vergil, lost."
  },
  {
    id: 2,
    name: "Vergil",
    job: "Rival To Dante",
    img: "https://th.bing.com/th/id/OIP.htMCOoVw_qy0dGb4ohQfHwHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7",
    text: "Twin brother of dante who was thought to have been lost in a fire"
  },
  {
    id: 3,
    name: "Nero",
    job: "Devil Hunter",
    img: "https://th.bing.com/th/id/OIP.0ITbV7sowr6JQ1MxBMjwNwHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7",
    text: "The abandoned son of Vergil"
  },
  {
    id: 4,
    name: "Morrison",
    job: "Mayor",
    img: "https://th.bing.com/th/id/OIP.YMveCqdCvdALah0meqFvhwHaEK?w=328&h=184&c=7&r=0&o=5&pid=1.7",
    text: "Morrison is a good friend of dante"
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn')
const endBtn = document.querySelector('.end-btn');
 
// set starting item
let currentItem = 0;
 
// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});
 
// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');
 
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// show start person
startBtn.addEventListener('click', function () {
  console.log('start');
  currentItem = 0;
  showPerson(currentItem);
});

// show end person
endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});