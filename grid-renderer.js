const gridData = [
    {
      image1: "images/rotten.gif",
      content1: "Ditching the cheeky, self-aware wink that helped to excuse the concept's inherent corniness, the movie attempts to look polished and 'cool,' but the been-there animation can't compete with the then-cutting-edge puppetry of the 1990 live-action movie.",
      image2: "images/critic.gif",
      critic: "Peter Debruge",
      source: "Variety"
    },
    {
      image1: "images/fresh.gif",
      content1: "TMNT is a fun, action-filled adventure that will satisfy longtime fans and generate a legion of new ones.",
      image2: "images/critic.gif",
      critic: "Todd Gilchrist",
      source: "IGN Movies"
    }
  ];
  
  const gridContainer = document.getElementById('review-details');
  
  gridData.forEach(data => {
    const horizontalGrid = document.createElement('div');
    horizontalGrid.classList.add('horizontal-grid');
  
    const verticalGrid1 = document.createElement('div');
    verticalGrid1.classList.add('vertical-grid');
  
    const reviewContentParent1 = document.createElement('div');
    reviewContentParent1.classList.add('review-content-parent');
  
    const image1 = document.createElement('img');
    image1.src = data.image1;
  
    const content1 = document.createElement('p');
    content1.textContent = `"${data.content1}"`;
  
    reviewContentParent1.appendChild(image1);
    reviewContentParent1.appendChild(content1);
  
    const reviewCriticParent1 = document.createElement('div');
    reviewCriticParent1.classList.add('review-critic-parent');
  
    const image2 = document.createElement('img');
    image2.src = data.image2;
  
    const criticInfo = document.createElement('p');
    criticInfo.innerHTML = `${data.critic}<br>${data.source}`;
  
    reviewCriticParent1.appendChild(image2);
    reviewCriticParent1.appendChild(criticInfo);
  
    verticalGrid1.appendChild(reviewContentParent1);
    verticalGrid1.appendChild(reviewCriticParent1);
  
    horizontalGrid.appendChild(verticalGrid1);
  
    gridContainer.appendChild(horizontalGrid);
  });
  