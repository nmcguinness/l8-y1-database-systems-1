Reveal.initialize({
  plugins: [
    RevealMarkdown,
    RevealHighlight,
    RevealNotes,
    RevealSearch,
    RevealMath,
    RevealZoom,
    RevealMermaid,
  ],
  startOnLoad: true,
  theme: "dark",         // or "default", "dark", "neutral", "base", etc.
  securityLevel: "strict", // can also be "loose", "antiscript", "sandbox"
  logLevel: "fatal",       // or "error", "warn", "info", "debug", "trace"
  flowchart: {
    curve: "basis"         // or "linear", "basis", "cardinal", "step", etc.
  },
  hash: true,              // Enable URL hash for navigation
  markdown: {
    smartypants: true      // Enable smart quotes and dashes
  },
  center: true,            // Center slides vertically
  slideNumber: true        // Show slide numbers
});
