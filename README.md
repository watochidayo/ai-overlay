# AI Companion Overlay 🤖💙

> An emotional, interactive AI companion that floats on your screen as a desktop overlay application.

Built with **Electron**, **React 19**, **TypeScript**, and **Google Gemini AI**

---

## ✨ Key Features

- 🎭 **Emotional Intelligence** - Your companion displays real emotions and personality
- 💭 **Interactive Thoughts** - Click thought bubbles for deeper insights
- 💬 **Smart Chat Interface** - Full conversational ability with AI function calling
- 📸 **Screen Analysis** - Understands your current activity by analyzing your screen
- 🎨 **Draggable Interface** - Move your companion anywhere on your desktop
- 🎪 **Personality Presets** - Choose from Neutral, Optimistic, Sarcastic, Curious, and more
- 🔊 **Audio Feedback** - Sound effects for interactive feedback
- ⚡ **Cross-Platform** - Works on Windows, macOS, and Linux

---

## 🚀 Getting Started

### For Desktop Users

Download and run the desktop app for full overlay features:

**[👉 Build Instructions](DESKTOP_BUILD_INSTRUCTIONS.md)**

### For Developers

```bash
# 1. Clone or download the project

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Build for production
npm run build
```

---

## ⚙️ Configuration

### Setup Gemini API (Recommended)

1. Get a free API key from [Google AI Studio](https://ai.google.dev/)
2. Click the gear ⚙️ icon on your companion
3. Go to "API Keys" settings
4. Paste your API key and save

> Without an API key, the companion uses local AI mode with limited capabilities.

---

## 📖 How to Use

| Action | Description |
|--------|-------------|
| **Drag** | Click and drag to move your companion anywhere |
| **Click Thoughts** | Expand thought bubbles to see detailed insights |
| **Chat Icon** | Open full conversation interface |
| **Settings Icon** | Customize personality and preferences |
| **Context Input** | Provide context about your current activity |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Tailwind CSS |
| Build Tool | Vite 6 |
| Desktop | Electron |
| AI | Google Gemini API, Local AI Support |
| Utilities | html2canvas, Audio API |

---

## 📁 Project Structure

```
AIOverlay/
├── components/          # React UI components
│   ├── ChatPage.tsx
│   ├── SettingsPanel.tsx
│   ├── Companion.tsx
│   └── ...
├── services/            # AI & external service integrations
│   ├── geminiService.ts
│   ├── anthropicService.ts
│   ├── openaiService.ts
│   └── ...
├── hooks/               # Custom React hooks
├── electron/            # Electron configuration
├── App.tsx              # Main application
├── types.ts             # TypeScript definitions
└── constants.ts         # Configuration constants
```

---

## 🎨 Customization

Edit these files to customize your companion:

- **Colors & Design**: Modify emotion colors in `constants.ts`
- **Thought Topics**: Update `RANDOM_THOUGHT_TOPICS` in `constants.ts`
- **Window Settings**: Adjust size/position in `electron/main.js`
- **Personality**: Change personality defaults in the Settings panel

---

## 📝 License

MIT

---

## 🤝 Get in Touch

Made with ❤️ by **hmau**

- 💬 **Discord**: hmau
- 📸 **Instagram**: @hma9u

Have suggestions, bug reports, or just want to chat? Feel free to reach out!

---

**Enjoy your intelligent desktop companion! 🤖✨**
