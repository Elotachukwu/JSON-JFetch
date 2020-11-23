const storySection = document.querySelector('#story-section');
const storyTemplate = document.querySelector('#story-template');

getData()
.catch(err => console.error(err));

async function getData() {
const storyStream = await fetch('info.json');
const storys = await storyStream.json();
let i = 0;

// throw 'Get Data Error';
// console.log(posts);

storys.forEach(story => {
  i++;
  if(i = 10) {
    const heading = story.heading;
    const author = story.author;
    const body = story.body;

    fetch('https://unsplash.it/300/200')
      .then(res => res.blob())
      .then(blob => {
        const newStory = document.importNode(storyTemplate.content, true);
        const storyHeading = newStory.querySelector('.storyHead');
        const storyBody = newStory.querySelector('.story-body');
        const storyAuthor = newStory.querySelector('.author');
        const storyImg = newStory.querySelector('.story-img');

        // throw 'Image Fetch Error';

        storyImg.src = URL.createObjectURL(blob);
        storyHeading.innerText = heading;
        storyBody.innerText = body;
        storyAuthor.innerText = author;
        storySection.appendChild(newStory);
      })
      // .catch(err => console.error(err));
  }
})
}
