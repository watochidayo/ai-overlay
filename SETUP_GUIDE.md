# 📖 Complete Setup Guide

This guide will help you install and run AI Overlay easily.

## Requirements

### Operating System
- ✅ Windows 10+
- ✅ macOS 10.13+
- ✅ Linux (Ubuntu 18.04+)

### Required Software
- **Node.js** 18+ from [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)
- **Git** from [git-scm.com](https://git-scm.com)

### Optional (for Advanced OCR)
- **Python** 3.9+ from [python.org](https://www.python.org)
- **Tesseract** for OCR

## Installation Steps

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/ai-overlay.git
cd ai-overlay
```

### 2️⃣ Install Dependencies
```bash
npm install
```

This will take 2-5 minutes. Wait for it to complete.

### 3️⃣ Configuration (Optional)

#### a) Using Gemini API (Recommended)
```bash
1. Go to https://aistudio.google.com
2. Click "Get API Key"
3. Copy the key
4. Run the app (npm run dev)
5. Go to Settings and paste the key
```

#### b) Using Ollama (Offline Mode)
```bash
# Windows
1. Install Ollama from https://ollama.ai
2. Open Terminal and run:
   ollama run phi:latest
   (or any other model)

# macOS
brew install ollama
ollama run phi:latest

# Linux
curl https://ollama.ai/install.sh | sh
ollama run phi:latest
```

Configuration in the app:
```
Settings → AI Source → Local AI
Endpoint: http://localhost:11434
Model: phi (or your chosen model)
```

## Running

### Development Mode
```bash
npm run dev
```

The app will open directly. Your changes will appear immediately.

### Production Build
```bash
npm run build
```

### Create Electron App
```bash
npm run electron
```

## Basic Usage

### Main Interface
- **Animated personality** on your desktop
- **Drag to move** the companion
- **Stays on top** of all applications

### Buttons
- 💬 **Chat** - Talk to the companion
- ⚙️ **Settings** - Adjust settings

### Important Settings
```
AI Source
├── Gemini ← Best for quality
├── Local AI ← Offline mode
└── Mock ← For testing

Personality
├── Neutral
├── Optimistic
├── Sarcastic
├── Curious
├── Philosophical
├── Goofy
└── Loyal Friend

Sound
├── Enable/Disable sounds
└── Volume level
```

## Troubleshooting

### Companion Not Moving
```bash
# Open DevTools (F12)
# Check Console for errors
# Ensure the main process is running
```

### Chat Not Working
```
✓ Check your API key
✓ Check internet connection
✓ Reload the page
```

### Screen Analysis Slow
```
→ This is normal initially (Tesseract OCR)
→ Subsequent requests will be faster
→ Use Ollama for better improvements
```

## Useful Commands

```bash
# Development with Hot Reload
npm run dev

# Build
npm run build

# Run Electron
npm run electron

# Clean build
npm run clean

# Type check (TypeScript)
npm run type-check
```

## Important Folders

```
ai-overlay/
├── src/
│   ├── components/      # React components
│   ├── services/        # AI services
│   ├── electron/        # Electron configuration
│   └── utils/           # Utilities
├── public/              # Public files
├── dist/                # Build (don't edit manually)
└── package.json         # Dependencies and version
```

## Support

### Common Issues

**Q: App is slow?**
A: Try:
- Restart the application
- Close other heavy applications
- Reduce animation complexity in settings

**Q: Console errors?**
A:
- Open F12 for DevTools
- Copy the error
- Open an issue on GitHub

**Q: Ollama not working?**
A:
- Make sure ollama serve is running
- Try http://localhost:11434 in your browser
- Reinstall the model

### Get Help
```
1. Open an Issue on GitHub
2. Describe the problem in detail
3. Attach screenshots
4. Tell us your OS version
```

### Contact the Creator
- 💬 **Discord**: hmau
- 📸 **Instagram**: @hma9u

---

**Enjoy! 🎉**
