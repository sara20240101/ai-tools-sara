import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react';
import { RESOURCES } from './constants';
import { VideoResource, ToolResource } from './types';
import ResourceCard from './components/ResourceCard';
import ToolCard from './components/ToolCard';
import VideoModal from './components/VideoModal';

const App: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleOpenVideo = (id: string) => {
    setActiveVideoId(id);
  };

  const handleCloseVideo = () => {
    setActiveVideoId(null);
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Type Guards and Filtering
  const allVideos = RESOURCES.filter((item): item is VideoResource => item.type === 'video');
  const allTools = RESOURCES.filter((item): item is ToolResource => item.type === 'tool');

  const visibleVideos = allVideos.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <LayoutGrid size={18} className="text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">AI Resources</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 py-12 md:py-16">
        
        {/* Video Grid Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {visibleVideos.map((resource) => (
              <ResourceCard 
                key={resource.id} 
                data={resource} 
                onClick={handleOpenVideo} 
              />
            ))}
          </div>

          {/* Show More Button (Only for videos) */}
          {visibleCount < allVideos.length && (
            <div className="mt-20 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <button 
                onClick={handleShowMore}
                className="group relative px-8 py-3 rounded-full bg-black/40 hover:bg-zinc-800/60 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white transition-all duration-300 ease-out active:scale-95"
              >
                <span className="relative z-10 text-sm font-medium tracking-wide">Show More</span>
              </button>
            </div>
          )}
        </section>

        {/* AI Tool Box Section */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">AI Tool Box.</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8">
            {allTools.map((tool) => (
              <ToolCard key={tool.id} data={tool} />
            ))}
          </div>
        </section>

      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-12 mt-12 bg-zinc-950/50">
        <div className="container mx-auto px-6 flex justify-center items-center text-sm">
          <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Contact</a>
        </div>
      </footer>

      {/* Video Modal Overlay */}
      <VideoModal videoId={activeVideoId} onClose={handleCloseVideo} />
    </div>
  );
};

export default App;