const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaObject = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaObject;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch error here
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button 
    button.disabled = true;
    // Request Picture in Pucture
    await videoElement.requestPictureInPicture();
    // Enabled button
    button.disabled = false;
});

// On Load
selectMediaStream();