import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

interface MobileBottomNavProps {
  onConsultClick: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onConsultClick }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 pb-safe bg-white/95 backdrop-blur-xl border-t border-[#eaedff] shadow-[0_-2px_12px_rgba(0,31,65,0.08)]">
      <div className="h-16 px-3 flex items-center justify-between gap-2">
        {/* Call Hotline */}
        <a
          href="tel:0911909686"
          data-path="hotline-call"
          className="flex-1 min-h-[44px] px-2 py-1.5 rounded-xl bg-[#eaedff] flex items-center justify-center gap-1.5 text-[#131b2e] hover:bg-[#d5e3ff] transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#0051d5] shrink-0" />
          <span className="text-xs font-semibold truncate">0911.909.686</span>
        </a>

        {/* Zalo Chat */}
        <a
          href="https://zalo.me/0911909686"
          target="_blank"
          rel="noopener noreferrer"
          data-path="chat-zalo"
          className="flex-1 min-h-[44px] px-2 py-1.5 rounded-xl bg-[#eaedff] flex items-center justify-center gap-1.5 text-[#131b2e] hover:bg-[#d5e3ff] transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#0051d5] shrink-0" />
          <span className="text-xs font-semibold truncate">Chat Zalo</span>
        </a>

        {/* Nhận tư vấn */}
        <a
          href="#tu-van"
          onClick={onConsultClick}
          data-path="nhan-tu-van"
          className="flex-1 min-h-[44px] px-2 py-1.5 rounded-xl bg-[#0051d5] text-white flex items-center justify-center gap-1 text-xs font-bold hover:bg-[#003ea8] transition-all text-center shadow-sm"
        >
          <Send className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Nhận tư vấn</span>
        </a>
      </div>
    </nav>
  );
};
