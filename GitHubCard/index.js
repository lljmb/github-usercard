import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')

axios
  .get('https://api.github.com/users/lljmb')
  .then((res) => {
    const newGit = res.data
    const newGitCard = gitFollowers(newGit)
    // console.log(res.data);
    cards.appendChild(newGitCard)
  })
  .catch((error) => {
    console.log(error, 'whoopsie daisy');
  });

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

const followersArray = [
 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.forEach(follower => {
  axios
  .get(`https://api.github.com/users/${follower}`)
  .then(res => {
      const followers = res.data;
      const newGitFollower = gitFollowers(followers)
      cards.appendChild(newGitFollower)
  })
  .catch(err => {
    console.log('something went wrong', err);
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

function gitFollowers(gitData){
  // instatiating the elements
  const gitCard = document.createElement('div');
  const cardInfo = document.createElement('div');
  const userImg = document.createElement('img');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const gitAddress = document.createElement('a');
  const profile = document.createElement('p');
  const followCount = document.createElement('p');
  const followerCount = document.createElement('p');
  const biography = document.createElement('p');
  const heading = document.createElement('h3');
  // setting class names, attributes & text
  userImg.src = gitData.avatar_url; 
  location.textContent = `Location: ${gitData.location}`;
  biography.textContent = `Bio: ${gitData.bio}`;
  followerCount.textContent = `Followers: ${gitData.followers}`
  followCount.textContent = `Following: ${gitData.following}`
  profile.textContent = `Profile: `
  gitAddress.textContent = gitData.html_url;
  gitAddress.href = gitData.url;
  heading.textContent = gitData.name;
  userName.textContent = `Username: ${gitData.login}`
 
  gitCard.classList.add('card');
  heading.classList.add('name');
  userName.classList.add('username');
  cardInfo.classList.add('card-info');
  // creating the hierarchy
  gitCard.appendChild(userImg);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(heading);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  profile.appendChild(gitAddress);
  cardInfo.appendChild(biography);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followCount);
  cardInfo.appendChild(followerCount);

  // return
  return gitCard

}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
