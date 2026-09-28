import React, { useState } from "react";
import { profileData } from "../../data/profile";

export default function ProfileImage({
  src = profileData.avatarUrl || "/profile.jpg",
  alt = "Valuroutu Santosh Kumar",
  className = "w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] aspect-[1190/1322]",
  rounded = "rounded-2xl",
  priority = true
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-slate-950/80 shadow-2xl transition-all duration-300 ${rounded} ${className}`}
    >
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            imageRendering: "auto"
          }}
        />
      )}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-[#080b12] text-cyan-400 font-mono select-none p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center mb-2">
            <span className="text-xl font-bold tracking-wider">VSK</span>
          </div>
          <span className="text-sm font-semibold text-slate-200">Valuroutu Santosh Kumar</span>
          <span className="text-[10px] text-cyan-400 uppercase tracking-widest mt-1">Full-Stack • AI • Web3</span>
        </div>
      )}
    </div>
  );
}
