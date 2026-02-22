# 🖥️ Desktop App Build Guide

> Complete instructions for building and running the AI Companion Overlay as a desktop application.

---

## 📋 System Requirements

- **Node.js**: Version 18 or higher
- **Operating System**: Windows, macOS, or Linux
- **Disk Space**: ~500MB for installation and dependencies
- **RAM**: Minimum 2GB

---

## 🚀 Installation Steps

### Step 1: Download Project

Download the project to your computer:
- Clone with Git: `git clone <repository-url>`
- Or download as ZIP and extract to your desired folder

### Step 2: Install Dependencies

Open a terminal/command prompt in the project folder and run:

```bash
npm install
```

This installs all required packages including Electron.

### Step 3: Run Development Mode

Start the app in development mode:

```bash
npm run dev
```

Your AI companion will appear as a floating window on your desktop! ✨

### Step 4: Build Standalone App (Optional)

Create a standalone executable that works without Node.js:

```bash
npm run build:electron
```

The built application will be in the `release/` folder:
- **Windows**: `AIOverlay.exe`
- **macOS**: `AIOverlay.dmg`
- **Linux**: `AIOverlay.AppImage`

---

## 🎮 Desktop Features

| Feature | Description |
|---------|------------|
| ✅ **Always-on-Top** | Floats above all other windows |
| ✅ **Transparent Design** | Seamless overlay integration |
| ✅ **Frameless Window** | Clean, minimalist appearance |
| ✅ **Fully Draggable** | Move anywhere on your screen |
| ✅ **Cross-Platform** | Windows, Mac, and Linux support |

---

## 🎯 Basic Controls

| Control | Action |
|---------|--------|
| 🖱️ **Drag** | Click and hold to move the companion |
| 💬 **Chat Icon** | Open the full chat interface |
| ⚙️ **Settings Icon** | Customize personality and preferences |
| ❌ **Close Button** | Close the companion |

---

## ⚙️ Configuration

### Setup Gemini AI API

For full AI capabilities, configure your Gemini API key:

1. Get a free API key from [Google AI Studio](https://ai.google.dev/)
2. Click the **Settings ⚙️** icon on your companion
3. Navigate to **"API Keys"** tab
4. Paste your key and click **Save**

> Without an API key, the app will use local AI mode with limited features.

### Customize Appearance

Edit these configuration files:

| File | Purpose |
|------|---------|
| `constants.ts` | Emotion colors, timings, personality settings |
| `electron/main.js` | Window size, position, transparency, behavior |

---

## 🔧 Development Commands

```bash
# Run full development server
npm run dev

# Run Vite server only (web development)
npm run dev:vite

# Run Electron only
npm run dev:electron

# Build web version
npm run build

# Build desktop executable
npm run build:electron
```

---

## 🐛 Troubleshooting

### Problem: Electron won't start

**Solution**: Ensure all dependencies are installed
```bash
npm install
```

Try running the components separately:
```bash
npm run dev:vite    # First terminal
npm run dev:electron # Second terminal
```

### Problem: Window doesn't appear

**Action Items**:
- Check that your OS allows applications to display on top
- Try disabling "always-on-top" in settings
- Restart the application
- Check taskbar for hidden windows

### Problem: Build fails

**For Windows**: Ensure proper permissions and Visual Studio Build Tools

**For Linux**: Install required libraries
```bash
sudo apt-get install libxtst-dev libpng++-dev
```

**For macOS**: Ensure Xcode Command Line Tools are installed
```bash
xcode-select --install
```

---

## 📞 Support

If you encounter issues:

1. Check that Node.js is properly installed: `node --version`
2. Clear node_modules and reinstall: `rm -r node_modules && npm install`
3. Check your API key configuration in Settings
4. Verify your internet connection for AI features

---

Enjoy your AI companion! 🤖💙
