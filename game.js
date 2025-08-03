// Game state
let currentMode = '';

// Quest data
const questData = {
  easy: [
    {
      title: "Welcome to Skylark Island",
      description: "You've arrived on the mystical Skylark Island as Blue Heron. The gentle breeze carries whispers of ancient magic. Take a moment to observe your surroundings and feel the island's peaceful energy.",
      action: "Observe the Island",
      reward: "Island Map"
    },
    {
      title: "Meet the Village Elder",
      description: "A wise old turtle named Sage sits by the ancient cherry blossom tree. He has been the island's guardian for centuries and wants to share the island's history with you.",
      action: "Listen to Sage's Story",
      reward: "Ancient Wisdom"
    },
    {
      title: "Collect Morning Dew",
      description: "The morning dew on the lotus leaves contains special properties that help plants grow. Collect some dew drops to help restore the island's gardens.",
      action: "Gather Dew Drops",
      reward: "Crystal Dew"
    },
    {
      title: "Plant Friendship Seeds",
      description: "Use the morning dew to plant special friendship seeds around the village. These seeds will grow into beautiful flowers that bring joy to all island inhabitants.",
      action: "Plant Seeds",
      reward: "Blooming Friendship"
    },
    {
      title: "Island Harmony Ritual",
      description: "As the sun sets, join the island community in a peaceful harmony ritual. Your presence completes the circle of island guardians.",
      action: "Complete the Ritual",
      reward: "Guardian's Blessing"
    }
  ],
  medium: [
    {
      title: "The Blue Heron's Calling",
      description: "You feel a mysterious calling deep within your spirit. The island's ancient magic is awakening, and you must discover your true purpose as its guardian.",
      action: "Meditate by the Sacred Pool",
      reward: "Spiritual Awakening"
    },
    {
      title: "Hidden Temple Discovery",
      description: "While exploring the northern cliffs, you discover an entrance to a hidden temple covered in mystical symbols. The entrance glows with a soft blue light.",
      action: "Enter the Temple",
      reward: "Temple Key"
    },
    {
      title: "Solve the Water Puzzle",
      description: "Inside the temple, you find an ancient water puzzle. Channels must be aligned to allow the sacred water to flow and activate the temple's magic.",
      action: "Align the Water Channels",
      reward: "Flow Crystal"
    },
    {
      title: "Restore the Shrine",
      description: "The temple's central shrine has been damaged by time. Use your collected items and island knowledge to carefully restore it to its former glory.",
      action: "Repair the Shrine",
      reward: "Shrine Blessing"
    },
    {
      title: "Bridge the Two Villages",
      description: "You discover a second village across the misty valley. The bridge between them has been broken for years. Help rebuild the connection between the communities.",
      action: "Rebuild the Bridge",
      reward: "Unity Stone"
    },
    {
      title: "The Night Market Festival",
      description: "Both villages come together for a magical night market festival. Help organize the event and ensure everyone can participate in the celebration.",
      action: "Organize the Festival",
      reward: "Festival Lantern"
    },
    {
      title: "Rescue the Lost Spirits",
      description: "Some ancient spirits have become lost in the shadow realm. Use your temple knowledge and collected items to guide them back to the light.",
      action: "Guide the Spirits",
      reward: "Spirit Harmony"
    },
    {
      title: "Guardian's Final Trial",
      description: "Complete your transformation into a true island guardian by balancing all the elements you've encountered: water, earth, air, and spirit.",
      action: "Balance the Elements",
      reward: "Master Guardian Status"
    }
  ],
  runner: [
    {
      title: "Emergency on Skylark Island",
      description: "A magical storm is approaching! You have limited time to prepare the island's defenses. Quick decisions will determine the island's fate.",
      action: "Sound the Warning Bell",
      reward: "Storm Warning"
    },
    {
      title: "Gather the Storm Crystals",
      description: "Ancient storm crystals scattered across the island can help create a protective barrier. You must collect them quickly before the storm hits!",
      action: "Collect 5 Storm Crystals",
      reward: "Storm Crystals"
    },
    {
      title: "Evacuate the Forest Creatures",
      description: "The woodland creatures need help reaching safety. Navigate through the windy forest paths and guide them to the sheltered caves.",
      action: "Guide Creatures to Safety",
      reward: "Forest Gratitude"
    },
    {
      title: "Activate the Lighthouse",
      description: "The lighthouse beacon has gone dark! Climb to the top and relight it to guide any lost travelers to safety before the storm worsens.",
      action: "Relight the Beacon",
      reward: "Lighthouse Flame"
    },
    {
      title: "Seal the Sacred Wells",
      description: "The island's sacred wells must be sealed to prevent contamination from the storm. Race between the three wells and perform the sealing ritual.",
      action: "Seal All Wells",
      reward: "Well Protections"
    },
    {
      title: "Protect the Memory Tree",
      description: "The ancient Memory Tree holds all of the island's history. Create a magical shield around it using your collected items before the winds arrive.",
      action: "Shield the Memory Tree",
      reward: "Memory Preservation"
    },
    {
      title: "Rally the Village Guardians",
      description: "Other village guardians are scattered and confused. Find them quickly and coordinate your efforts to strengthen the island's defenses.",
      action: "Unite the Guardians",
      reward: "Guardian Alliance"
    },
    {
      title: "Channel the Storm's Power",
      description: "Instead of just defending, you realize you can channel the storm's energy! Use all your knowledge to transform the threat into a blessing.",
      action: "Redirect Storm Energy",
      reward: "Storm Mastery"
    },
    {
      title: "The Great Barrier Ritual",
      description: "With all guardians united and storm energy channeled, perform the legendary Great Barrier Ritual to permanently protect the island.",
      action: "Cast the Great Barrier",
      reward: "Eternal Protection"
    },
    {
      title: "Storm's End Celebration",
      description: "The storm has passed and become a source of power! Lead the island in a celebration of resilience and newfound strength.",
      action: "Lead the Victory Dance",
      reward: "Storm Dancer Title"
    },
    {
      title: "Establish the Weather Watch",
      description: "Create a new tradition of weather watchers who can predict and prepare for future storms, ensuring the island stays protected.",
      action: "Train New Watchers",
      reward: "Weather Wisdom"
    },
    {
      title: "The Phoenix Feather Quest",
      description: "A legendary phoenix has appeared, drawn by your storm mastery! Earn its respect to receive a feather that grants power over all weather.",
      action: "Prove Your Worth",
      reward: "Phoenix Feather"
    },
    {
      title: "Master of Skylark Island",
      description: "You have proven yourself as the ultimate guardian. Accept your role as the Master of Skylark Island and protector of all weather magic.",
      action: "Accept Mastery",
      reward: "Weather Master Crown"
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
  document.getElementById('about-view').classList.add('hidden');
}

function showAbout() {
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('game-view').classList.add('hidden');
  document.getElementById('about-view').classList.remove('hidden');
}

function returnHome() {
  showHome();
  resetGame();
}

// Game functions
function startGame(mode) {
  currentMode = mode;
  
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('about-view').classList.add('hidden');
  document.getElementById('game-view').classList.remove('hidden');
  
  document.getElementById('mode-title').textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
  
  loadAllQuests(mode);
}

function loadAllQuests(mode) {
  const quests = questData[mode];
  const container = document.getElementById('quest-cards-container');
  container.innerHTML = '';
  
  quests.forEach((quest, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h4>${quest.title}</h4>
      <p>${quest.description}</p>
    `;
    container.appendChild(card);
  });
}

function resetGame() {
  currentMode = '';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initGame);