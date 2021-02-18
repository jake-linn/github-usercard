// import axios 
import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/jake-linn')
//   STEP 4: Pass the data received from Github into your function,and append the returned markup to the DOM as a child of .cards
.then((res => {
  const info = res.data;
  const cardClass = document.querySelector('.cards');
  const maker = cardMaker(info);
  cardClass.appendChild(maker);
  console.log (cardClass);
}))
.catch((err => {
  console.log('error', err);
}));


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
// github user url's 
const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/zoelud',
  'https://api.github.com/users/ BrityHemming',
  'https://api.github.com/users/DanielleKoduru',
  'https://api.github.com/users/Ladrillo'
];

followersArray.forEach(follower => {
  axios.get(`${follower}`)
  .then(res => {
    const card = cardMaker(res.data);
    const cardClass = document.querySelector('.cards');
    cardClass.appendChild(card);
  })
});



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardMaker = (data) => {
  // creating the elements 

const cardDiv = document.createElement('div');
const profilePic = document.createElement('img');
const profile = document.createElement('div');
const name = document.createElement('h3');
const userame = document.createElement('p');
const location = document.createElement('p');
const profileLink = document.createElement('p');
const href = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

// adding class lists to elements 
// data is being pulled from the axios get request from github

cardDiv.classList.add('card');
profilePic.setAttribute('src', data.avatar_url);
profile.classList.add('profile');
name.classList.add('name');
name.textContent = data.name;
userame.classList.add('username');
userame.textContent = data.login;
location.textContent = `Location: ${data.location}`;
profile.textContent = `Profile: ${data.url}`;
href.setAttribute('href', data.url);
followers.textContent = `Followers: ${data.followers}`;
following.textContent = `Following ${data.following}`;
bio.textContent = `Bio: ${data.bio}`;

// appending the elements to the page

cardDiv.appendChild(profilePic);
cardDiv.appendChild(profile);
profile.appendChild(name);
profile.appendChild(userame);
profile.appendChild(location);
profile.appendChild(profileLink);
profileLink.appendChild(href);
profile.appendChild(followers);
profile.appendChild(following);
profile.appendChild(bio);

// return the main div 

return cardDiv;

};



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
