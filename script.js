const photoExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'webp'];
const videoExtensions = ['mp4', 'webm', 'ogg', 'avi', 'mov', 'wmv', 'flv', 'mkv'];

function isPhoto(fileName) {
return photoExtensions.some(ext => fileName.toLowerCase().endsWith('.' + ext));
}

function isVideo(fileName) {
return videoExtensions.some(ext => fileName.toLowerCase().endsWith('.' + ext));
}

function createThumbnail(fileName, type) {
const thumbContainer = document.createElement('div');
thumbContainer.classList.add('thumbnail-container');

let thumb;

if (type === 'photo' || type === 'video') {
  thumb = document.createElement(type === 'photo' ? 'img' : 'video');
  thumb.src = fileName;
  thumb.classList.add('thumbnail');
  if (type === 'video') {
    thumb.controls = true;
  }
  thumb.addEventListener('click', () => showFullsize(fileName, type));
} else {
  thumb = document.createElement('div');
  thumb.classList.add('not-supported');
  thumb.textContent = 'Not supported';
}

const downloadLink = document.createElement('a');
downloadLink.href = fileName;
downloadLink.download = '';
downloadLink.textContent = 'Download';
downloadLink.classList.add('download-link');

thumbContainer.appendChild(thumb);
thumbContainer.appendChild(downloadLink);

return thumbContainer;
}

function showFullsize(fileName, type) {
const fullsizeContainer = document.getElementById('fullsize-container');
const fullsizeImage = document.getElementById('fullsize-image');
const fullsizeVideo = document.getElementById('fullsize-video');
const fullsizeVideoSource = document.getElementById('fullsize-video-source');

fullsizeImage.style.display = 'none';
fullsizeVideo.style.display = 'none';

if (type === 'photo') {
  fullsizeImage.src = fileName;
  fullsizeImage.style.display = 'block';
} else {
  fullsizeVideoSource.src = fileName;
  fullsizeVideo.load();
  fullsizeVideo.style.display = 'block';
}

fullsizeContainer.style.display = 'block';
}

fetch('medias.json')
.then(response => response.json())
.then(files => {
  const photoContainer = document.getElementById('photo-container');
  const videoContainer = document.getElementById('video-container');

  files.forEach(fileName => {
    if (isPhoto(fileName)) {
      const photoThumb = createThumbnail(fileName, 'photo');
      photoContainer.appendChild(photoThumb);
    } else if (isVideo(fileName)) {
      const videoThumb = createThumbnail(fileName, 'video');
      videoContainer.appendChild(videoThumb);
    } else {
      const notSupportedThumb = createThumbnail(fileName, 'not-supported');
      if (fileName.includes('photo')) {
        photoContainer.appendChild(notSupportedThumb);
      } else {
        videoContainer.appendChild(notSupportedThumb);
      }
    }
  });
})
.catch(error => console.error('Error fetching media files:', error));