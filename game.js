// Game state
let currentMode = '';

// Quest data
const questData = {
  easy: [
    {
      title: "Community Garden",
      description: "The Blue Heron Community Garden is home to over 30 organic plots. The largest plot is dedicated to growing vegetables for the St. Luke's Crossroads Kitchen, a volunteer-based effort that feeds unhoused people in Midtown.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/689302756bd8d1e561a27b1a"
    },
    {
      title: "Amphibian Foundation",
      description: "First stop! Welcome to the Blue Heron Scavenger Hunt. Blue Heron Nature Preserve is home to the 3-mile Blueway Trail which allows visitors to experience 30 acres of woodlands, wetlands, riparian areas and meadows. Let's get acquainted with the exploratory experience you are about to embark upon.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/689300b96bd8d1e561a27b12"
    },
    {
      title: "Avian Archipelago",
      description: "Pick a bird to highlight. This mural to the right was done to bring attention to 30+ bird species that have been on the decline due to their lack of habitat. Watch the video to learn about the Blue Heron featured here and share a pic of your favorite bird",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6892a8bbcb613264194f98b5"
    },
    {
      title: "Little Tree Library",
      description: "Public little libraries like this are special because they create community owned literacy moments. Read the highlighted part of the selected book, \"The Doctor is In\" and complete the activation.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893e9506bd8d1e561a27b24"
    },
    {
      title: "Discovery Dock",
      description: "The Discovery Dock was built in 2019 as a Contemplation point for the Urban Wetlands. Share a picture of your view on the dock",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893f3506bd8d1e561a27b3a"
    }
  ],
  medium: [
    {
      title: "Community Garden",
      description: "The Blue Heron Community Garden is home to over 30 organic plots. The largest plot is dedicated to growing vegetables for the St. Luke's Crossroads Kitchen, a volunteer-based effort that feeds unhoused people in Midtown.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/689302756bd8d1e561a27b1a"
    },
    {
      title: "Amphibian Foundation",
      description: "First stop! Welcome to the Blue Heron Scavenger Hunt. Blue Heron Nature Preserve is home to the 3-mile Blueway Trail which allows visitors to experience 30 acres of woodlands, wetlands, riparian areas and meadows. Let's get acquainted with the exploratory experience you are about to embark upon.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/689300b96bd8d1e561a27b12"
    },
    {
      title: "Avian Archipelago",
      description: "Pick a bird to highlight. This mural to the right was done to bring attention to 30+ bird species that have been on the decline due to their lack of habitat. Watch the video to learn about the Blue Heron featured here and share a pic of your favorite bird",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6892a8bbcb613264194f98b5"
    },
    {
      title: "Little Tree Library",
      description: "Public little libraries like this are special because they create community owned literacy moments. Read the highlighted part of the selected book, \"The Doctor is In\" and complete the activation.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893e9506bd8d1e561a27b24"
    },
    {
      title: "Discovery Dock",
      description: "The Discovery Dock was built in 2019 as a Contemplation point for the Urban Wetlands. Share a picture of your view on the dock",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893f3506bd8d1e561a27b3a"
    },
    {
      title: "Butterfly Garden",
      description: "This hidden garden highlights some of the butterfly species present throughout this preserve. Tell us one of your choice",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893ecdc6bd8d1e561a27b2a"
    },
    {
      title: "Animal Tracks",
      description: "Sometimes even when you don't see an animal, you are aware of its presence by the signs it leaves. Upload a pic of this sign and tell us your favorite",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893eff06bd8d1e561a27b30"
    },
    {
      title: "Green Thy Heart",
      description: "The mixed media installation you see above is a loving reflection on our sacred connection to Mother Earth and to one another. \"Green Thy Heart\" is a reminder we are part of this global collective living on Mother Earth. Are our hearts in sync with the rhythm of our living planet? We can make mindful decisions about how the consumer choices of today affect the whole of tomorrow. We can choose to come into harmony and balance, and green our hearts. Now is the time to take inspired actions that support our natural world.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893f1736bd8d1e561a27b36"
    }
  ],
  runner: [
    {
      title: "Community Garden",
      description: "The Blue Heron Community Garden is home to over 30 organic plots. The largest plot is dedicated to growing vegetables for the St. Luke's Crossroads Kitchen, a volunteer-based effort that feeds unhoused people in Midtown.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/689302756bd8d1e561a27b1a"
    },
    {
      title: "Amphibian Foundation",
      description: "First stop! Welcome to the Blue Heron Scavenger Hunt. Blue Heron Nature Preserve is home to the 3-mile Blueway Trail which allows visitors to experience 30 acres of woodlands, wetlands, riparian areas and meadows. Let's get acquainted with the exploratory experience you are about to embark upon.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/689300b96bd8d1e561a27b12"
    },
    {
      title: "Avian Archipelago",
      description: "Pick a bird to highlight. This mural to the right was done to bring attention to 30+ bird species that have been on the decline due to their lack of habitat. Watch the video to learn about the Blue Heron featured here and share a pic of your favorite bird",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6892a8bbcb613264194f98b5"
    },
    {
      title: "Little Tree Library",
      description: "Public little libraries like this are special because they create community owned literacy moments. Read the highlighted part of the selected book, \"The Doctor is In\" and complete the activation.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893e9506bd8d1e561a27b24"
    },
    {
      title: "Discovery Dock",
      description: "The Discovery Dock was built in 2019 as a Contemplation point for the Urban Wetlands. Share a picture of your view on the dock",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893f3506bd8d1e561a27b3a"
    },
    {
      title: "Butterfly Garden",
      description: "This hidden garden highlights some of the butterfly species present throughout this preserve. Tell us one of your choice",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893ecdc6bd8d1e561a27b2a"
    },
    {
      title: "Animal Tracks",
      description: "Sometimes even when you don't see an animal, you are aware of its presence by the signs it leaves. Upload a pic of this sign and tell us your favorite",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893eff06bd8d1e561a27b30"
    },
    {
      title: "Green Thy Heart",
      description: "The mixed media installation you see above is a loving reflection on our sacred connection to Mother Earth and to one another. \"Green Thy Heart\" is a reminder we are part of this global collective living on Mother Earth. Are our hearts in sync with the rhythm of our living planet? We can make mindful decisions about how the consumer choices of today affect the whole of tomorrow. We can choose to come into harmony and balance, and green our hearts. Now is the time to take inspired actions that support our natural world.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893f1736bd8d1e561a27b36"
    },
    {
      title: "Emma Wetland Trail",
      description: "You made it here! Take a seat and take it all in. Did you know all of this was back here? Close out strongly by taking a picture on the bench to complete this activation.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6892fe576bd8d1e561a27b11"
    },
    {
      title: "Animal Spirit",
      description: "The Muscogee, also known as the Creek, have a rich and complex history that extends far beyond the arrival of Europeans. Originating from the southeastern United States, particularly in regions now known as Alabama, Georgia, Florida, and South Carolina, the Muscogee were highly influential in the shaping of America's history and cultural landscape.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893e6c26bd8d1e561a27b23"
    },
    {
      title: "Bat Box",
      description: "Bats are an important part of a functioning ecosystem, and with natural habitats in decline they need our help now more than ever. You can welcome bats in your very own backyard by providing food, water, and shelter – creating bat habitat in even the smallest of spaces.",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/689406abcb613264194f98da"
    },
    {
      title: "Claim the Nancy Creek NFT (Optional)",
      description: "This NFT was generated from live data generated at this creek. We took the data from and created computer generated art that was minted for your collection. Collect one by visiting the URL",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/68942aa76bd8d1e561a27b3e"
    },
    {
      title: "Spot the Yellow Bird (Optional)",
      description: "This yellow bird is hidden in the Community Garden. Catch a pic before they fly away",
      activationUrl: "https://app.skylarknova.xyz/patronActivation/6893ee2b6bd8d1e561a27b2c"
    }
  ]
};

// Initialize the game
function initGame() {
  showHome();
}

// Navigation functions
function showHome() {
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('game-view').classList.add('hidden');
  document.getElementById('prizes-view').classList.add('hidden');
}

function showPrizes() {
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('game-view').classList.add('hidden');
  document.getElementById('prizes-view').classList.remove('hidden');
}

function returnHome() {
  showHome();
  resetGame();
}

// Game functions
function startGame(mode) {
  currentMode = mode;
  
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('prizes-view').classList.add('hidden');
  document.getElementById('game-view').classList.remove('hidden');
  
  document.getElementById('mode-title').textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
  
  loadMap(mode);
  loadAllQuests(mode);
}

function loadMap(mode) {
  const mapContainer = document.getElementById('map-container');
  
  if (mode === 'easy') {
    mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/d/embed?mid=1qMtdqdetuGoCuXVaLvIYCRfVg3mbcHQ&hl=en&ehbc=2E312F" width="640" height="480"></iframe>';
  } else if (mode === 'runner') {
    mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1bWF-NeFOJhVhM3MyYv-9M0UT9tRTmmM&ehbc=2E312F" width="640" height="480"></iframe>';
  } else {
    // For medium mode, use the original map
    mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/d/embed?mid=1CSM1wDTknUWX0pDIef9yxBjqJtmqB8E&hl=en&ehbc=2E312F" width="640" height="480"></iframe>';
  }
}

function loadAllQuests(mode) {
  const quests = questData[mode];
  const container = document.getElementById('quest-cards-container');
  container.innerHTML = '';
  
  quests.forEach((quest, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const activationButton = quest.activationUrl ? 
      `<button class="activation-btn" onclick="window.open('${quest.activationUrl}', '_blank')">Start Quest</button>` : 
      '<p class="coming-soon">Coming Soon</p>';
    
    card.innerHTML = `
      <h4>${quest.title}</h4>
      <p>${quest.description}</p>
      ${activationButton}
    `;
    container.appendChild(card);
  });
}

function resetGame() {
  currentMode = '';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initGame);