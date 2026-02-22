import React, { useState, useEffect, useRef } from 'react';
import Companion from './components/Companion';
import LocalAiSettingsPage from './components/LocalAiSettingsPage';
import ApiKeysPage from './components/ApiKeysPage';
import ChatPage from './components/ChatPage';
import { Settings } from './types';
import { ToolsProvider } from './hooks/useTools';
import ToolsOverlay from './components/ToolsOverlay';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ToastContainer } from './components/ToastContainer';

type Page = 'companion' | 'localAiSettings' | 'chat' | 'apiKeys';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('companion');
  // Detect popup mode from URL (used by native popup windows)
  const params = new URLSearchParams(window.location.search);
  const popup = params.get('popup');
  const [apiKey, setApiKey] = useState<string | null>(() => localStorage.getItem('geminiApiKey'));

  const [settings, setSettings] = useState<Settings>({
    baseColor: 'purple',
    autoHideThought: true,
    personality: 'Neutral',
    aiSource: apiKey ? 'gemini' : 'local',
    soundEnabled: true,
  });

  // When the API key changes, update the default AI source if necessary.
  useEffect(() => {
    setSettings(s => ({ ...s, aiSource: apiKey ? 'gemini' : 'local' }));
  }, [apiKey]);


  // If running inside a native popup window, render only the popup's page inside an active rectangle
  if (popup === 'chat') {
    return (
      <ToolsProvider>
        <main style={{ position: 'fixed', inset: 0, background: 'transparent' }}>
          <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 640, height: 720, pointerEvents: 'auto', zIndex: 9999 }}>
            <ChatPage onNavigate={setPage} settings={settings} isApiKeySet={!!apiKey} onClose={() => window.close()} />
          </div>
        </main>
      </ToolsProvider>
    );
  }

  if (popup === 'settings') {
    return (
      <ToolsProvider>
        <main style={{ position: 'fixed', inset: 0, background: 'transparent' }}>
          <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 520, height: 560, pointerEvents: 'auto', zIndex: 9999 }}>
            <LocalAiSettingsPage onNavigate={setPage} settings={settings} />
          </div>
        </main>
      </ToolsProvider>
    );
  }

  return (
    <ErrorBoundary>
      <ToolsProvider>
        <main className="fixed top-0 left-0 w-screen h-screen bg-transparent">
          {/* Non-blocking overlay background */}
          <div id="overlay-background" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 0 }} />
          {/* Interactive AI Companion container, always pointer-events:auto */}
          {page === 'companion' && (
            // The interactive container is sized tightly by the Companion component
            <div id="ai-companion" style={{ position: 'fixed', top: 100, left: 100, zIndex: 10, width: 'auto', height: 'auto', pointerEvents: 'none' }}>
              <Companion 
                onNavigate={setPage} 
                settings={settings}
                onSettingsChange={setSettings}
                isApiKeySet={!!apiKey}
              />
            </div>
          )}

          {page === 'localAiSettings' && <InteractiveOverlay onClose={() => setPage('companion')}><LocalAiSettingsPage onNavigate={setPage} settings={settings} /></InteractiveOverlay>}
          {page === 'apiKeys' && <InteractiveOverlay onClose={() => setPage('companion')}><ApiKeysPage onNavigate={setPage} onApiKeySave={setApiKey} settings={settings} /></InteractiveOverlay>}
          {page === 'chat' && <InteractiveOverlay onClose={() => setPage('companion')}><ChatPage onNavigate={setPage} settings={settings} isApiKeySet={!!apiKey} /></InteractiveOverlay>}

          <ToolsOverlay />
        </main>
        <ToastContainer />
      </ToolsProvider>
    </ErrorBoundary>
  );
};

// Interactive overlay component for pages that need proper window interactivity
const InteractiveOverlay: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ children, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Make window interactive when overlay is shown (non-blocking)
  useEffect(() => {
    let mounted = true;
    
    const ensureInteractive = () => {
      try {
        const invoke = (window as any).electronAPIInvoke?.setWindowInteractive;
        if (invoke) {
          invoke(true).catch(() => {
            try { (window as any).electronAPI?.setWindowInteractive(true); } catch (e) {}
          });
        } else {
          try { (window as any).electronAPI?.setWindowInteractive(true); } catch (e) {}
        }
      } catch (err) {
        try { (window as any).electronAPI?.setWindowInteractive(true); } catch (e) {}
      }
      
      // Focus the wrapper so keyboard and screen readers can interact
      if (mounted) {
        try { ref.current?.focus(); } catch (err) {}
      }
    };
    
    ensureInteractive();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      try {
        (window as any).electronAPI?.setWindowInteractive?.(false);
      } catch (err) {
        console.warn('Failed to restore window interactivity', err);
      }
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center"
      style={{ pointerEvents: 'auto', zIndex: 9999 }}
    >
      {children}
    </div>
  );
};

export default App;
