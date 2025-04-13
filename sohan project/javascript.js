const quotes = {
    happy: [
      "Be so happy that when others look at you ,they become happy too.",
      "Happiness is not something ready made.It comes from your actions.",
      "The purpose of our lives is to be happy.",
      " Happiness looks good at you.",
      "Let your smile change the world,but don't let the world change your smile.",
    ],
    sad: [
      "Behind every smile,there is a story you will never understand.",
      "The worst kind of sadness is not being able to explain why.",
      "Every storm runs out of rain.",
      "Tears come from the heart and not from the brain.",
      "It’s okay to not be okay."
    ],
    chill: [
      "Relax.Nothing is under control.",
      "Inhale confidence,exhale doubt.",
      "Peace begins with a smile.",
      "Relax. Nothing is under control.",
      "Do less, be more."
    ],
    motivated: [
      "Dream it.Believe it.Build it.",
      "Wake up with determination.Go to bed with satisfaction.",
      "Push yourself, because no one else is going to do it for you.",
      "The future depends on what you do today.",
      "Don’t watch the clock; do what it does. Keep going."
    ]
  };
  
  const music = {
    happy: "Happy.mp3",
   sad: "sad.mp3",
    chill:"chill.crdownload",
    motivated:"motivated.mp3",
  };
  
  function setMood(mood) {
    // Set quote
    const quoteText = document.getElementById("quote");
    const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    quoteText.textContent = randomQuote;
  
    // Set music
    const audioPlayer = document.getElementById("audio");
    audioPlayer.src = music[mood];
    audioPlayer.play();
  }
  