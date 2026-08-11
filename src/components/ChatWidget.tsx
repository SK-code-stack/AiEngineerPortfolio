"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
} from "react";
import Image from "next/image";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 0,
    sender: "bot",
    text: "Hi! I'm SK Assistant 👋 Ask me about Salman's projects, tech stack, or how to get in touch!",
  },
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api/v1';

function getBotReply(input: string): string {
  const lower = input.toLowerCase();

  if (/project|work|webease|documind|shopit|portfolio/i.test(lower)) {
    return "Salman has built 3 live projects: WebEase (utility platform), DocuMind Backend (RAG-powered PDF API), and Shopit (full e-commerce). Scroll to the Work section to explore them! 🚀";
  }
  if (/stack|tech|language|framework|use|built with/i.test(lower)) {
    return "Salman's core stack is React.js + Django + Tailwind on the front/backend, and PyTorch + Transformers + ChromaDB for ML. He also uses FastAPI, PostgreSQL, MongoDB, and Node.js. 🛠️";
  }
  if (/contact|hire|reach|email|freelance|project request|work together/i.test(lower)) {
    return "Ready to collaborate? Scroll down to the Contact section or click 'Let's Talk' in the navbar to send a message directly! 📩";
  }
  if (/about|who|background|location|where/i.test(lower)) {
    return "Salman is a Full-Stack Developer & ML Engineer based in Lahore, Pakistan 🇵🇰. He's pursuing a BS in IT and builds intelligent systems from architecture to production.";
  }
  if (/skill|know|experience|capable|frontend|backend|machine learning|ml|ai/i.test(lower)) {
    return "Salman specializes in React, Next.js, Django, FastAPI, PyTorch, RAG pipelines, and vector databases. Check the Skills section for the full breakdown! 💡";
  }
  if (/hello|hi|hey|sup|greet/i.test(lower)) {
    return "Hey there! 👋 I'm Salman's virtual assistant. Ask me anything about his work, skills, or how to get in touch!";
  }
  if (/resume|cv|download/i.test(lower)) {
    return "You can download Salman's résumé via the 'Download Résumé' button in the hero section at the top of the page. 📄";
  }

  return "That's a great question! I'm a demo assistant, so I'm best at answering questions about Salman's projects, tech stack, or how to hire him. Try one of those! 😊";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  // Drag state
  const [pos, setPos] = useState({ x: 24, y: 24 }); // bottom-right offset
  const isDragging = useRef(false);
  const dragStartMouse = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const totalDragDist = useRef(0);

  const widgetRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll chat to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isGenerating]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // ─── Drag Logic ───────────────────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    // Only on the FAB button, not the chat panel
    if ((e.target as HTMLElement).closest("[data-chat-panel]")) return;

    isDragging.current = true;
    totalDragDist.current = 0;
    dragStartMouse.current = { x: e.clientX, y: e.clientY };
    dragStartPos.current = { ...pos };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, [pos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const dx = e.clientX - dragStartMouse.current.x;
    const dy = e.clientY - dragStartMouse.current.y;
    // Straight-line distance from drag start point
    totalDragDist.current = Math.sqrt(dx * dx + dy * dy);

    // Calculate new position (bottom-right offset)
    const newX = Math.max(
      8,
      Math.min(
        window.innerWidth - 84,
        window.innerWidth - (window.innerWidth - dragStartPos.current.x) - dx
      )
    );
    const newY = Math.max(
      8,
      Math.min(
        window.innerHeight - 84,
        window.innerHeight - (window.innerHeight - dragStartPos.current.y) - dy
      )
    );

    setPos({ x: newX, y: newY });
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    const wasDrag = totalDragDist.current > 6;
    isDragging.current = false;

    // Only toggle open if it was a genuine click (not a drag)
    if (!wasDrag) {
      setIsOpen((prev) => !prev);
    }
  }, []);

  const onPointerCancel = useCallback((e: React.PointerEvent) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    isDragging.current = false;
  }, []);

  // ─── Chat panel position ───────────────────────────────────────────────────
  const getChatPanelStyle = () => {
    const FAB_SIZE = 76;
    const PANEL_W = 340;
    const PANEL_H = 480;
    const MARGIN = 12;

    // Button's actual top-left corner
    const btnLeft = window.innerWidth - pos.x - FAB_SIZE;
    const btnTop = window.innerHeight - pos.y - FAB_SIZE;

    let left = btnLeft + FAB_SIZE / 2 - PANEL_W / 2;
    let top = btnTop - PANEL_H - MARGIN;

    // Flip below if not enough room above
    if (top < 8) top = btnTop + FAB_SIZE + MARGIN;
    // Clamp horizontally
    left = Math.max(8, Math.min(window.innerWidth - PANEL_W - 8, left));

    return { left, top, width: PANEL_W };
  };

  const [panelStyle, setPanelStyle] = useState<{
    left: number;
    top: number;
    width: number;
  }>({ left: 0, top: 0, width: 340 });

  useEffect(() => {
    if (isOpen) {
      setPanelStyle(getChatPanelStyle());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, pos]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isGenerating) return;

    const userMsg: Message = { id: nextId, sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsGenerating(true);

    try {
      const response = await fetch(`${API_BASE}/chat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      const replyText = data.response || getBotReply(text);

      setMessages((prev) => [
        ...prev,
        { id: nextId + 1, sender: "bot", text: replyText },
      ]);
    } catch (err) {
      // Graceful fallback to offline local logic
      const fallbackReply = getBotReply(text);
      setMessages((prev) => [
        ...prev,
        { id: nextId + 1, sender: "bot", text: fallbackReply },
      ]);
    } finally {
      setIsGenerating(false);
      setNextId((n) => n + 2);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Chat Panel ───────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          data-chat-panel
          className="fixed z-[200] flex flex-col bg-surface border border-border-strong rounded-2xl shadow-2xl overflow-hidden"
          style={{
            left: panelStyle.left,
            top: panelStyle.top,
            width: panelStyle.width,
            height: 480,
          }}
          role="dialog"
          aria-label="SK Assistant Chat"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-surface border-b border-border shrink-0">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-surface-2 shrink-0">
                <Image
                  src="/robot-mascot.png"
                  alt="SK Assistant"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-sm font-extrabold text-text uppercase tracking-wide leading-none">
                  SK Assistant
                </p>
                <div className="flex items-center space-x-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="font-mono text-[9px] text-text-dim">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full hover:bg-surface-2 flex items-center justify-center text-text-dim hover:text-text transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 no-scrollbar bg-bg/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-sans leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-accent text-bg rounded-br-sm"
                      : "bg-surface-2 border border-border text-text rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isGenerating && (
              <div className="flex justify-start">
                <div className="bg-surface-2 border border-border text-text rounded-2xl rounded-bl-sm px-3.5 py-2.5 max-w-[80%] flex items-center space-x-1">
                  <span className="chat-dot w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="chat-dot w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="chat-dot w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Row */}
          <div className="flex items-center gap-2 px-3 py-3 bg-surface border-t border-border shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isGenerating ? "SK Assistant is typing..." : "Ask me anything..."}
              disabled={isGenerating}
              className="flex-1 bg-surface-2 border border-border rounded-full px-4 py-2 text-xs sm:text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-accent transition-colors disabled:opacity-60"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isGenerating}
              className="w-8 h-8 rounded-full bg-accent hover:bg-accent/90 disabled:opacity-40 flex items-center justify-center transition-all shrink-0"
              aria-label="Send message"
            >
              <svg className="w-3.5 h-3.5 text-bg fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Draggable FAB Button ──────────────────────────────────────────── */}
      <div
        ref={widgetRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="fixed z-[201] cursor-grab active:cursor-grabbing select-none"
        style={{
          right: pos.x,
          bottom: pos.y,
          width: 76,
          height: 76,
          touchAction: "none",
        }}
        role="button"
        aria-label="Open SK Assistant chat"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen((v) => !v);
        }}
      >
        {/* Pulsing Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-accent/20 animate-heartbeat-glow pointer-events-none" />

        {/* FAB Circle */}
        <div className="absolute inset-1 rounded-full bg-surface border border-border-strong shadow-2xl overflow-hidden flex items-center justify-center hover:border-accent transition-colors duration-300">
          <div
            className="relative w-full h-full animate-float-mascot pointer-events-none"
            style={{ padding: "6px" }}
          >
            <Image
              src="/robot-mascot.png"
              alt="SK Assistant"
              fill
              sizes="74px"
              className="object-contain drop-shadow-lg"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
