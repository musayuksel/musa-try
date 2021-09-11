//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  const myUl = document.createElement('ul');
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
 episodeList.forEach(episode => {
   const myLi =document.createElement('li');

  const header = document.createElement('h2');
  const seasonNum = (episode.season)+'';
  const formatseasonNum = seasonNum.padStart(2 , '0')


const episodeNum = (episode.number)+'';
const formatepisodeNum = episodeNum.padStart(2 , '0')
  

const latsFormat = `S${formatseasonNum}E${formatepisodeNum}`//S02E07


  header.innerText = `${episode.name} - ${latsFormat}`;
  myLi.appendChild(header);
  
  const image = document.createElement('img');
  image.src = episode.image.medium;
  image.alt = episode.name;
  myLi.appendChild(image);

  const paraDiv = document.createElement('div');
  paraDiv.innerHTML = episode.summary;
  myLi.appendChild(paraDiv);

  // 5 +'5'
 










   myUl.appendChild(myLi)
    
  });

  rootElem.appendChild(myUl)
}

window.onload = setup;
