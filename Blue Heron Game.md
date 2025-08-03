**A Peaceful Quest-Powered Life Sim with a Hero’s Heart**

*Welcome to Skylark, a calming island adventure where nature, creativity, and onchain quests intertwine.*

In **Skylark: Blue Heron Edition**, players step into the feathered boots of Blue Heron—a mysterious yet endearing guardian of the island realm. Whether you're building bonds with local characters, completing daily rituals, or discovering hidden events scattered across the land, every choice brings new life to your island and your story.

#### **🌟 Game Modes:**

* **Easy**: Explore at your own pace. Perfect for cozy vibes and light discovery (5 quests).

* **Medium**: A balanced journey of puzzles, lore, and mini-missions (8 quests).

* **Runner**: Test your reflexes and intuition in a speed-focused, high-stakes scavenger mode (13 quests).

#### **🏞️ Features:**

* Cozy worldbuilding with seasonal changes

* Dynamic quest system (powered by player choice)

* Onchain collectibles and character growth

* Village upgrades and hidden areas to unlock

* No gatekeepers. Only growth.

#### **🎨 Visual Style:**

Soft, stylized environments inspired by Japanese architecture, lush forests, and serene riverscapes. Think *Animal Crossing* meets *Journey*, with a Web3 twist.

#### **🧠 Vibe:**

Playful, introspective, and quietly heroic.

\<\!DOCTYPE html\>  
\<html lang="en"\>  
\<head\>  
  \<meta charset="UTF-8"\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>  
  \<title\>Skylark: Blue Heron Edition\</title\>  
  \<style\>  
    body {  
      margin: 0;  
      font-family: 'Arial', sans-serif;  
      background-color: \#f5f5f5;  
    }

    nav {  
      background-color: \#3a3a3a;  
      color: white;  
      display: flex;  
      justify-content: space-between;  
      align-items: center;  
      padding: 1rem;  
    }

    nav a {  
      color: white;  
      text-decoration: none;  
      margin-left: 1rem;  
      font-weight: bold;  
    }

    .container {  
      padding: 1rem;  
      max-width: 800px;  
      margin: 0 auto;  
    }

    .landing-image {  
      width: 100%;  
      border-radius: 8px;  
    }

    .mode-buttons {  
      display: flex;  
      justify-content: space-around;  
      margin-top: 1rem;  
    }

    .mode-buttons button {  
      padding: 1rem;  
      border: none;  
      background-color: \#ffcc00;  
      border-radius: 5px;  
      font-weight: bold;  
      font-size: 1rem;  
      cursor: pointer;  
      flex: 1;  
      margin: 0 0.5rem;  
    }

    .cards-container {  
      margin-top: 2rem;  
      display: grid;  
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));  
      gap: 1rem;  
    }

    .card {  
      background-color: white;  
      border: 1px solid \#ccc;  
      padding: 1rem;  
      border-radius: 8px;  
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);  
    }  
  \</style\>  
\</head\>  
\<body\>  
  \<nav\>  
    \<div\>Skylark\</div\>  
    \<div\>  
      \<a href="\#"\>Home\</a\>  
      \<a href="\#"\>About\</a\>  
    \</div\>  
  \</nav\>

  \<div class="container"\>  
    \<img class="landing-image" src="landing-image.png" alt="Skylark: Blue Heron Edition Landing Image"\>

    \<div class="mode-buttons"\>  
      \<button onclick="loadCards('easy')"\>Easy\</button\>  
      \<button onclick="loadCards('medium')"\>Medium\</button\>  
      \<button onclick="loadCards('runner')"\>Runner\</button\>  
    \</div\>

    \<div id="cards" class="cards-container"\>\</div\>  
  \</div\>

  \<script\>  
    const cardCounts \= {  
      easy: 5,  
      medium: 8,  
      runner: 13  
    };

    function loadCards(mode) {  
      const count \= cardCounts\[mode\];  
      const container \= document.getElementById('cards');  
      container.innerHTML \= '';

      for (let i \= 1; i \<= count; i++) {  
        const card \= document.createElement('div');  
        card.className \= 'card';  
        card.innerText \= \`Event ${i} (${mode.charAt(0).toUpperCase() \+ mode.slice(1)})\`;  
        container.appendChild(card);  
      }  
    }  
  \</script\>  
\</body\>  
\</html\>

