const videos = document.querySelectorAll("video");
//This is how to click play on the video and fastforward or rewind or even stop
videos.forEach(video => {
    const playButton = document.createElement("button");
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => video.play());

    const pauseButton = document.createElement("button");
    pauseButton.textContent = "Pause";
    pauseButton.addEventListener("click", () => video.pause());

    const rewindButton = document.createElement("button");
    rewindButton.textContent = "Rewind";
    rewindButton.addEventListener("click", () => {
        video.currentTime -= 10; // Adjust the rewind time as needed
    });

    const fastForwardButton = document.createElement("button");
    fastForwardButton.textContent = "Fast Forward";
    fastForwardButton.addEventListener("click", () => {
        video.currentTime += 10; // Adjust the fast-forward time as needed
    });


});
