// Title: GSP344 Challenge Lab
// Author: Rich Rose

// const REST_API_SERVICE = "data/netflix.json"
//const REST_API_SERVICE = "https://XXXX-SERVICE.run.app/2020" 

function setTileData(items) {
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
    const response = await (fetch(file));
    const local = await response.json();
    return local;
  }
  catch (error) {
    console.log(`Fetch: ${error}`);
  }
}


async function getPageInfo() {
  // Changed by nov05, 2026-05-16
  // const info = await fetchLocalData(REST_API_SERVICE)
  let url;
  if (window.REST_API_SERVICE && window.REST_API_SERVICE !== "") {
    url = `${window.REST_API_SERVICE}/${window.YEAR}`;
  } else {
    url = "data/netflix.json";
  }
  htmlContent = document.querySelector('#info');
  htmlContent.innerHTML = setTileData(info.content);
}


window.addEventListener('load', () => {
  getPageInfo();
});

