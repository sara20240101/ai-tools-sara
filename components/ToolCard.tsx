import React from 'react';
import { ToolResource } from '../types';

interface ToolCardProps {
  data: ToolResource;
}

const ToolCard: React.FC<ToolCardProps> = ({ data }) => {
  return (
    <a 
      href={data.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 focus:outline-none"
    >
      {/* iOS Style Icon Container */}
      <div className="relative aspect-square w-full bg-zinc-800/40 backdrop-blur-md border border-white/5 rounded-[22%] flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-zinc-700/50 group-hover:shadow-lg group-hover:shadow-blue-500/10 overflow-hidden">
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <img 
          src={data.iconUrl} 
          alt={data.name} 
          className="w-1/2 h-1/2 object-contain drop-shadow-md z-10"
        />
      </div>
      
      {/* Tool Name */}
      <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors text-center truncate w-full px-1">
        {data.name}
      </span>
    </a>
  );
};

export default ToolCard;