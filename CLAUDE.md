# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains design documentation and a prototype for "Skylark: Blue Heron Edition" - a peaceful quest-powered life simulation game. The project is currently in the concept/design phase.

## Project Structure

- `Blue Heron Game.md` - Game design document containing:
  - Game concept and feature descriptions
  - Embedded HTML/CSS/JavaScript prototype for a simple web interface
  - Three game modes: Easy (5 quests), Medium (8 quests), Runner (13 quests)
- `BlueHeron.png` - Game artwork/logo showing the visual style

## Web Prototype Details

The embedded HTML in the design document creates a simple web interface with:
- Navigation bar
- Landing image display
- Mode selection buttons (Easy/Medium/Runner)
- Dynamic card generation based on selected mode
- Styling inspired by cozy, nature-themed games

## Commands

- `npm start` or `npm run serve` - Start local development server on port 8000
- `python3 -m http.server 8000` - Alternative way to serve the game locally
- Open `index.html` directly in browser for immediate play

## Architecture

The game is built as a single-page web application with three main components:

- **index.html** - Main game interface with navigation and three views (home, game, about)
- **styles.css** - Responsive styling with nature-inspired gradient backgrounds and smooth animations
- **game.js** - Core game logic including quest system, inventory management, and progress tracking

### Game Flow
1. Mode selection (Easy/Medium/Runner with 5/8/13 quests respectively)
2. Sequential quest completion with narrative descriptions
3. Item collection and inventory management
4. Progress tracking and completion statistics

### Quest System
Each mode has unique quest data with different themes:
- Easy: Peaceful exploration and community building
- Medium: Temple mysteries and village connection
- Runner: High-stakes storm crisis management

## Development Notes

The visual theme follows soft, stylized environments with Japanese architecture influences and serene nature elements. All interactions should maintain the peaceful, meditative gameplay philosophy.