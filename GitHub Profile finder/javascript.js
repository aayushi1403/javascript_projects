const searchbar=document.querySelector(".Search-bar")
const searchglass=document.querySelector(".searchinglass")

const profilepicture=document.querySelector(".profile-pic")
const name=document.querySelector(".name")
const bio=document.querySelector(".bio")
const repository=document.querySelector(".repo")
const userfollowers=document.querySelector(".followers")

const userfollowing=document.querySelector(".following")
const userlocation=document.querySelector(".location") //mistake--->don't location as it conflicts with window location in broswer
const gitlink=document.querySelector(".github-link")

const userblog=document.querySelector(".blog")
const usertwitter=document.querySelector(".twitter")

const repo1=document.querySelector(".repo-card1")
const repo2=document.querySelector(".repo-card2")
const repo3=document.querySelector(".repo-card3")
const repo4=document.querySelector(".repo-card4")

const star1=document.querySelector(".stars1")
const fork1=document.querySelector(".forks1")

const star2=document.querySelector(".stars2")
const fork2=document.querySelector(".forks2")

const star3=document.querySelector(".stars3")
const fork3=document.querySelector(".forks3")

const star4=document.querySelector(".stars4")
const fork4=document.querySelector(".forks4")

const giturl="https://api.github.com/users/"
const repourl="https://api.github.com/users/"

async function githubfind(username) {
  const response = await fetch(giturl+username)
  if(response.status==404){
    alert("please put a valid username");
    return;
  }
  else{
    var data=await response.json();
    profilepicture.src=data.avatar_url;
    name.innerHTML=data.login;
    document.querySelector(".Username span").innerHTML=data.name
    bio.innerHTML=data.bio;
    repository.innerHTML=data.public_repos;

    
    userfollowers.innerHTML=data.followers;
    userfollowing.innerHTML=data.following;

    userlocation.innerHTML=data.location;
    gitlink.innerHTML=data.url;

    if(data.blog!=""){
      userblog.innerHTML=data.blog;
    }
    else{
      userblog.innerHTML="no blog available";
    }

    usertwitter.innerHTML=data.twitter_username || "no twitter available";
  }
}

async function gitRepos(username){
  const response1=await fetch(repourl+username+"/repos")

  if(response1.status==404){
    alert("please put a valid username");
    return;
  }
  else{

    // FIX
    var data2 = await response1.json();

    if(data2.length>0){
      repo1.querySelector("h3").innerHTML=data2[0].name
      repo1.querySelector("p").innerHTML=data2[0].description || "No description"
      star1.innerHTML = `<i class="fa-solid fa-star"></i> ${data2[0].stargazers_count}`;
fork1.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${data2[0].forks_count}`;
    }

    if(data2.length>1){
      repo2.querySelector("h3").innerHTML=data2[1].name
      repo2.querySelector("p").innerHTML=data2[1].description || "No description"
      star2.innerHTML = `<i class="fa-solid fa-star"></i> ${data2[1].stargazers_count}`;
fork2.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${data2[1].forks_count}`;
    }

    if(data2.length>2){
      repo3.querySelector("h3").innerHTML=data2[2].name
      repo3.querySelector("p").innerHTML=data2[2].description || "No description"
      star3.innerHTML = `<i class="fa-solid fa-star"></i> ${data2[2].stargazers_count}`;
fork3.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${data2[2].forks_count}`;
    }

    if(data2.length>3){
      repo4.querySelector("h3").innerHTML=data2[3].name
      repo4.querySelector("p").innerHTML=data2[3].description || "No description"
      star4.innerHTML = `<i class="fa-solid fa-star"></i> ${data2[3].stargazers_count}`;
fork4.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${data2[3].forks_count}`;
    }

  }
}

searchglass.addEventListener('click',()=>{
  githubfind(searchbar.value)
  gitRepos(searchbar.value)
})