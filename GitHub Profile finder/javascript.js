const searchbar=document.querySelector(".Search-bar")
const searchglass=document.querySelector(".searchinglass")

const profilepicture=document.querySelector(".profile-pic")
const name=document.querySelector(".name")
const bio=document.querySelector(".bio")
const repository=document.querySelector(".repo")
const followers=document.querySelector(".followers")

const following=document.querySelector(".following")
const userlocation=document.querySelector(".location") //mistake--->don't location as it conflicts with window location in broswer
const gitlink=document.querySelector(".github link")

const blog=document.querySelector(".linked-in")
const twitter=document.querySelector(".twitter")

const repo1=document.querySelector(".repo-card1")
const repo2=document.querySelector(".repo-card2")
const repo3=document.querySelector(".repo-card2")
const repo4=document.querySelector(".repo-card3")

const star1=document.querySelector(".stars1")
const fork1=document.querySelector(".forks1")

const star2=document.querySelector(".stars2")
const fork2=document.querySelector(".forks2")

const star3=document.querySelector(".stars3")
const fork3=document.querySelector(".forks3")

const star4=document.querySelector(".stars4")
const fork4=document.querySelector(".forks4")

const giturl="https://api.github.com/users/"
const repourl="https://api.github.com/users/aayushi1403/repos"


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
  }
}


searchglass.addEventListener('click',()=>{
  githubfind(searchbar.value);
})