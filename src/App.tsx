import { useState } from 'react';
import { BookOpen, ChevronRight, Mic, AlertCircle, Layers, Zap } from 'lucide-react';

const SAMPLE_RESPONSE = {
  b1: {
    text: "I find it hard to speak English because I think in Spanish and can't find the right words. When I try to talk, I feel nervous and I forget what I want to say. I need more practice to feel comfortable.",
    notes: "Simple sentence structures, common vocabulary, direct expression of feelings."
  },
  b2: {
    text: "I struggle to speak English because I tend to think in Spanish first, and then I have trouble finding the right words to express myself. This often makes me hesitate and lose my train of thought mid-conversation. I know that consistent practice and exposure would help me become more fluent.",
    notes: "Subordinate clauses, phrasal verbs (lose my train of thought), natural connectors."
  },
  c1: {
    text: "One of my biggest challenges with English is that I still process thoughts in Spanish before attempting to express them, which inevitably creates a mental bottleneck. Rather than finding natural English expressions, I end up reaching for direct translations that don't quite land. Developing the ability to think directly in English — rather than going through a filtering stage — is what I believe will unlock real fluency for me.",
    notes: "Sophisticated vocabulary (bottleneck, inevitably), complex clause structures, reflective register, idiomatic expressions (don't quite land, unlock fluency)."
  },
  structures: [
    { phrase: "I struggle to + verb", example: "I struggle to speak naturally under pressure." },
    { phrase: "I tend to + verb", example: "I tend to overthink every sentence." },
    { phrase: "I find it hard to + verb", example: "I find it hard to think in English." },
    { phrase: "Rather than + -ing", example: "Rather than translating, try to feel the language." },
    { phrase: "What I believe will...", example: "What I believe will help is daily speaking practice." },
  ],
  mistakes: [
    { mistake: "I think too much in Spanish → I tend to think in Spanish", tip: "Use 'tend to' for habits. 'Think too much' sounds like a judgment rather than a description." },
    { mistake: "I don't find the words → I can't find the right words", tip: "Add 'right' for precision. 'Can't find' sounds more natural than 'don't find'." },
    { mistake: "It costs me to speak → I find it hard / I struggle to speak", tip: "'Costar' doesn't translate directly. Use 'find it hard' or 'struggle to'." },
    { mistake: "I think in Spanish and then I translate → I think in Spanish before speaking", tip: "Restructure to show sequence clearly with 'before' or 'rather than'." },
  ],
  speaking: {
    prompt: "Describe one specific moment when your mind went blank in English. What happened? How did you feel? What would you say now?",
    tips: [
      "Start with: 'Last time I tried to speak English in public...'",
      "Use: 'The hardest part for me is when...'",
      "End with: 'What I'm working on now is...'",
    ],
    targetStructures: ["I tend to...", "I find it hard to...", "Rather than..., I try to..."],
  }
};

type Tab = 'b1' | 'b2' | 'c1';

export default function App() {
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [activeLevel, setActiveLevel] = useState<Tab>('b1');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setShowResults(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }, 1200);
  };

  const levelData = {
    b1: SAMPLE_RESPONSE.b1,
    b2: SAMPLE_RESPONSE.b2,
    c1: SAMPLE_RESPONSE.c1,
  };

  const levelColors: Record<Tab, string> = {
    b1: 'bg-emerald-50 border-emerald-200',
    b2: 'bg-blue-50 border-blue-200',
    c1: 'bg-amber-50 border-amber-200',
  };

  const levelBadge: Record<Tab, string> = {
    b1: 'bg-emerald-100 text-emerald-700',
    b2: 'bg-blue-100 text-blue-700',
    c1: 'bg-amber-100 text-amber-700',
  };

  const levelText: Record<Tab, string> = {
    b1: 'text-emerald-900',
    b2: 'text-blue-900',
    c1: 'text-amber-900',
  };

  const levelMeta: Record<Tab, string> = {
    b1: 'text-emerald-600',
    b2: 'text-blue-600',
    c1: 'text-amber-700',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
            <BookOpen className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
          </div>
          <span className="font-semibold text-gray-900 text-sm tracking-tight">English Output Trainer</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        {/* Hero */}
        <div className="pt-12 lg:pt-16 pb-10 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-2 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-blue-700 tracking-tight">For Spanish speakers learning English</span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight">
                  Turn Spanish thoughts into natural English
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                Transform your ideas into clear B1, B2 and C1 English, with reusable structures and speaking practice.
              </p>

              {/* Features row */}
              <div className="flex flex-wrap gap-4 pt-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Three proficiency levels</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Language patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Speaking practice</span>
                </div>
              </div>
            </div>

            {/* Right: Preview card (desktop only) */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-2xl blur-2xl opacity-50" />

                {/* Card */}
                <div className="relative bg-white border border-slate-200/80 rounded-2xl p-5 shadow-lg shadow-blue-500/5 overflow-hidden">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="inline-block px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-lg mb-3">
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">B1 English</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 leading-relaxed">
                      "I find it hard to speak English because I think in Spanish..."
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-100 mb-4" />

                  {/* Sample structure */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Useful structure</p>
                    <div className="px-3 py-2.5 bg-blue-50 border border-blue-100 rounded-lg">
                      <p className="text-xs font-semibold text-blue-900">I struggle to + verb</p>
                      <p className="text-xs text-blue-700 mt-1 italic">"I struggle to think in English."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="mt-12 lg:mt-14">
          <div className="space-y-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your idea in Spanish..."
              rows={5}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-gray-900 text-base placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-white transition-all leading-relaxed shadow-sm shadow-slate-100"
            />
            <button
              onClick={handleGenerate}
              disabled={!input.trim() || isLoading}
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
            >
              {isLoading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  Generate English Output
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div id="results" className="mt-14 space-y-6">

            {/* English versions */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-4 h-4 text-slate-400" />
                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">English Versions</h2>
              </div>

              {/* Tab bar */}
              <div className="flex gap-2 mb-5 p-1 bg-slate-100 rounded-xl inline-flex">
                {(['b1', 'b2', 'c1'] as Tab[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setActiveLevel(level)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeLevel === level
                        ? 'bg-white text-blue-600 shadow-sm shadow-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {level.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Active level card */}
              <div className={`rounded-2xl border p-6 transition-all shadow-sm ${levelColors[activeLevel]}`}>
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${levelBadge[activeLevel]}`}>
                  {activeLevel.toUpperCase()} Level
                </span>
                <p className={`text-base leading-relaxed font-medium mb-3 ${levelText[activeLevel]}`}>
                  {levelData[activeLevel].text}
                </p>
                <p className={`text-xs leading-relaxed opacity-75 ${levelMeta[activeLevel]}`}>
                  {levelData[activeLevel].notes}
                </p>
              </div>
            </div>

            {/* Useful structures */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Zap className="w-4 h-4 text-slate-400" />
                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Useful Structures</h2>
              </div>
              <div className="space-y-4">
                {SAMPLE_RESPONSE.structures.map((s, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                    <div>
                      <p className="font-semibold text-gray-950 text-sm">{s.phrase}</p>
                      <p className="text-gray-600 text-sm mt-0.5 italic">"{s.example}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common mistakes */}
            <div className="rounded-2xl border border-amber-100/80 bg-amber-50/50 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <h2 className="text-xs font-semibold text-amber-700 uppercase tracking-widest">Common Mistakes for Spanish Speakers</h2>
              </div>
              <div className="divide-y divide-amber-100 space-y-0">
                {SAMPLE_RESPONSE.mistakes.map((m, i) => (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-sm text-gray-900 font-medium leading-snug mb-1">{m.mistake}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaking practice */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Mic className="w-4 h-4 text-slate-400" />
                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">60-Second Speaking Practice</h2>
              </div>

              <div className="bg-slate-900 rounded-xl px-5 py-4 mb-5">
                <p className="text-white text-base leading-relaxed font-medium">
                  {SAMPLE_RESPONSE.speaking.prompt}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {SAMPLE_RESPONSE.speaking.tips.map((tip, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Target structures</p>
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_RESPONSE.speaking.targetStructures.map((s, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
