// Title: GSP344 Challenge Lab
// Author: Rich Rose

const REST_API_SERVICE = "data/netflix.json"
//const REST_API_SERVICE = "https://XXXX-SERVICE.run.app/2020" 

function setTileData(items){
  const dynamicView = items.map((item) => {
    return `<tr>
        <td>${item.title}</td>
        <td>${item.type}</td>
        <td>${item.rating}</td>
        <td>${item.director}</td>
        <td>${item.duration}</td>
        <td>${item.date_added}</td>
      </tr>`;
  });

  let header = `<div class="table-wrapper">
    <table>
      <thead>
      <tr>
        <th>Title</th>
        <th>Type</th>
        <th>Rating</th>
        <th>Director</th>
        <th>Duration</th>
        <th>Date</th>
      </thead><tbody>`;
      
  let footer = `</tbody></table>
		</div>`

  return (header + dynamicView.join("") + footer);  
}


async function fetchLocalData(file) {
  try {
    const response = await(fetch(file));
    const local = await response.json();
    return local;
  }
  catch (error) {
    console.log(`Fetch: ${error}`);
  }
}


async function getPageInfo(){
  // Changed by nov05, 2026-05-15
  // const info = await fetchLocalData(REST_API_SERVICE)
  const year = window.YEAR || "2020";
  let url;
  if (REST_API_SERVICE === "data/netflix.json") {
    url = REST_API_SERVICE;
  } else {
    url = `${REST_API_SERVICE}/${year}`;
  }
  const info = await fetchLocalData(url);
  htmlContent = document.querySelector('#info');
  htmlContent.innerHTML = setTileData(info.content);
}


window.addEventListener('load', () => {
  getPageInfo();
});

