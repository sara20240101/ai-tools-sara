import React, { useState } from 'react';
import { VideoResource } from '../types';

interface ResourceCardProps {
  data: VideoResource;
  onClick: (id: string) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ data, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${data.id}/maxresdefault.jpg`;

  return (
    <div 
      className="group relative flex flex-col gap-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(data.id)}
    >
      {/* 1. Card Top: Thumbnail Container with Rounded corners */}
      <div 
        className="relative aspect-video w-full overflow-hidden rounded-[24px] bg-zinc-900 shadow-lg transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-900/10"
      >
        {/* Thumbnail Image or Fallback */}
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 flex items-center justify-center p-6 text-center">
             <span className="text-white/50 font-medium tracking-wide">{data.title}</span>
          </div>
        ) : (
          <img 
            src={thumbnail} 
            alt={data.title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
            onError={() => setImageError(true)}
          />
        )}

        {/* Overlay Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* 3. Play Button (YouTube Style SVG) - Placed before Info Bar for Z-index layering */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div 
            className={`w-[68px] h-[48px] transition-transform duration-300 ease-out drop-shadow-xl ${isHovered ? 'scale-110' : 'scale-100'}`}
            aria-hidden="true"
          >
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path 
                className="opacity-100" 
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" 
                fill="#FF0000"
              />
              <path d="M 45,24 27,14 27,34" fill="#fff" />
            </svg>
          </div>
        </div>

        {/* 2. Video Info Bar (Top Floating Bar) - z-20 to sit above play button if overlap occurs */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center gap-3 z-20">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {/* Fallback for author image handled simply via CSS bg if src fails, but assuming valid src here */}
            <img 
              src={data.authorImg} 
              alt={data.authorName} 
              className="w-6 h-6 rounded-full object-cover ring-1 ring-white/20"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${data.authorName}&background=random`
              }}
            />
            <span className="text-xs font-medium text-white/90 tracking-wide">{data.authorName}</span>
          </div>
        </div>
      </div>

      {/* 4. Content Layout */}
      <div className="flex flex-col px-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {data.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-[10px] font-semibold text-zinc-300 bg-zinc-800/80 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Text Content */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-blue-400 leading-tight group-hover:text-blue-300 transition-colors">
            {data.title}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold pt-1">
            {data.subtitle}
          </p>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed pt-2 line-clamp-2">
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;