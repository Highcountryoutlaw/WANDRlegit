export function AnunnakiSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating mystical symbols */}
      <div className="absolute top-20 left-10 text-green-400/20 text-6xl animate-pulse">⚡</div>
      <div className="absolute top-40 right-20 text-emerald-400/20 text-4xl animate-bounce">◊</div>
      <div className="absolute bottom-40 left-20 text-green-300/20 text-5xl animate-pulse">⬢</div>
      <div className="absolute top-60 left-1/2 text-cyan-400/20 text-3xl animate-spin">✦</div>
      <div className="absolute bottom-20 right-10 text-green-400/20 text-4xl animate-pulse">◈</div>

      {/* Fractal-like patterns */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M10,10 L90,10 L90,90 L10,90 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-green-400"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-green-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  )
}
