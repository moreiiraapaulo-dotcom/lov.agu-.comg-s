import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Twitter, Facebook, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileUrl: string;
}

export default function ShareModal({ isOpen, onClose, profileUrl }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const copyUrl = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white text-neutral-800 shadow-2xl border border-neutral-100 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-800"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-500 mb-3">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg">Compartilhar Perfil</h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-xs">
                Compartilhe o Linktree da Samyra Moreira com seus amigos ou redes sociais.
              </p>
            </div>

            {/* QR Code Container */}
            <div className="mt-5 flex flex-col items-center justify-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
              <div className="bg-white p-2.5 rounded-xl border border-neutral-200/60 shadow-sm">
                {/* SVG mock QR Code */}
                <svg className="h-32 w-32" viewBox="0 0 100 100" fill="currentColor">
                  {/* Outer border boxes */}
                  <rect x="5" y="5" width="25" height="25" fill="#1a1a1a" />
                  <rect x="10" y="10" width="15" height="15" fill="#ffffff" />
                  <rect x="13" y="13" width="9" height="9" fill="#1a1a1a" />

                  <rect x="70" y="5" width="25" height="25" fill="#1a1a1a" />
                  <rect x="75" y="10" width="15" height="15" fill="#ffffff" />
                  <rect x="78" y="13" width="9" height="9" fill="#1a1a1a" />

                  <rect x="5" y="70" width="25" height="25" fill="#1a1a1a" />
                  <rect x="10" y="75" width="15" height="15" fill="#ffffff" />
                  <rect x="13" y="78" width="9" height="9" fill="#1a1a1a" />

                  {/* Random pixels to simulate high fidelity qr code */}
                  <rect x="35" y="10" width="8" height="5" />
                  <rect x="48" y="5" width="5" height="12" />
                  <rect x="60" y="12" width="6" height="6" />
                  
                  <rect x="35" y="25" width="12" height="6" />
                  <rect x="52" y="22" width="8" height="8" />
                  <rect x="65" y="26" width="5" height="12" />

                  <rect x="12" y="38" width="18" height="6" />
                  <rect x="35" y="42" width="5" height="15" />
                  <rect x="45" y="36" width="15" height="8" />
                  <rect x="75" y="38" width="15" height="5" />

                  <rect x="10" y="52" width="8" height="8" />
                  <rect x="25" y="50" width="12" height="5" />
                  <rect x="55" y="52" width="10" height="12" />
                  <rect x="80" y="48" width="12" height="12" />

                  <rect x="36" y="72" width="15" height="5" />
                  <rect x="55" y="70" width="8" height="8" />
                  <rect x="68" y="76" width="15" height="4" />

                  <rect x="38" y="85" width="8" height="10" />
                  <rect x="50" y="82" width="18" height="6" />
                  <rect x="75" y="85" width="15" height="10" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-neutral-400 mt-2.5 tracking-wider uppercase flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-pink-500" /> Escaneie para abrir
              </span>
            </div>

            {/* Copy Field */}
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
              <span className="text-xs text-neutral-500 font-medium truncate flex-grow pl-1.5">{profileUrl}</span>
              <button
                onClick={copyUrl}
                className="flex h-8 items-center gap-1 rounded-lg bg-pink-500 px-3 font-semibold text-white text-xs hover:bg-pink-600 active:scale-95 transition-all shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Other Sharing buttons */}
            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs font-semibold text-neutral-600">
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <MessageCircle className="h-4.5 w-4.5" />
                </div>
                <span className="text-[10px]">WhatsApp</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <Twitter className="h-4 w-4" />
                </div>
                <span className="text-[10px]">X / Twitter</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Facebook className="h-4.5 w-4.5" />
                </div>
                <span className="text-[10px]">Facebook</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-neutral-50 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-500">
                  <Share2 className="h-4.5 w-4.5" />
                </div>
                <span className="text-[10px]">Mais</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
