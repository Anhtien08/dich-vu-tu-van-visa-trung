import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onSelectVisa?: (type: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 pt-safe bg-[#faf8ff]/95 backdrop-blur-xl border-b border-[#eaedff] shadow-[0_1px_8px_rgba(0,31,65,0.04)]">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img
            src="/assets/aistudio/image_42e64312.png"
            alt="Visa5S Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://lh3.googleusercontent.com/aida/AEtjO1XOSs7t5SHl8Nu6XxcuZL5YmZeZFtHUzWo4uqonYqcY9Ex7D5DlRr-fZlUh-r35Qe8p4SDL4_izzCqqyUC_dAg5CZb5530KGnhlPilViIE__HVoyaIJLkplUqbrTmeUa_M_kvMMjArWSeZsIpee1mH9LEKqsR_vlKZNw250ku-wqty5srsqHqZZYEpgJlo77Id8CdQN9NbPFOVLFwHu5u-Dj2AEW2cJsCCqXaZ0Nbzs3IndnROeO88Zsw';
            }}
          />
          <div className="flex flex-col ml-1">
            <span className="font-bold text-lg text-[#001f41] leading-tight tracking-tight">Visa5S</span>
          </div>
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#43474f]">
          <a href="#dich-vu" className="hover:text-[#0051d5] transition-colors whitespace-nowrap">
            Danh Mục Visa
          </a>
          <a href="#ho-so" className="hover:text-[#0051d5] transition-colors whitespace-nowrap">
            Chuẩn Bị Hồ Sơ
          </a>
          <a href="#quy-trinh" className="hover:text-[#0051d5] transition-colors whitespace-nowrap">
            Quy Trình
          </a>
          <a href="#faq" className="hover:text-[#0051d5] transition-colors whitespace-nowrap">
            Câu Hỏi Thường Gặp
          </a>
          <a href="#lien-he" className="hover:text-[#0051d5] transition-colors whitespace-nowrap">
            Liên Hệ
          </a>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Hotline */}
          <a
            href="tel:0911909686"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f3ff] text-[#0051d5] hover:bg-[#eaedff] text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0911.909.686</span>
          </a>

          {/* Consultation CTA */}
          <a
            href="#tu-van"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0051d5] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#003ea8] transition-all shadow-sm active:scale-95"
          >
            Tư Vấn Miễn Phí
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu điều hướng"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#001f41] hover:bg-[#eaedff] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#eaedff] px-4 pt-3 pb-6 flex flex-col gap-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Menu Điều Hướng</span>
            <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Chuyên Viên Thường Trực</span>
            </div>
          </div>
          <a
            href="#dich-vu"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] rounded-lg transition-colors"
          >
            Danh Mục Visa Trung Quốc
          </a>
          <a
            href="#ho-so"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] rounded-lg transition-colors"
          >
            Chuẩn Bị Hồ Sơ Xin Visa
          </a>
          <a
            href="#quy-trinh"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] rounded-lg transition-colors"
          >
            5 Bước Quy Trình Hỗ Trợ
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] rounded-lg transition-colors"
          >
            Câu Hỏi Thường Gặp (FAQs)
          </a>
          <a
            href="#lien-he"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-semibold text-[#131b2e] hover:bg-[#f2f3ff] rounded-lg transition-colors"
          >
            Địa Chỉ Văn Phòng & Hotline
          </a>

          <div className="pt-2">
            <a
              href="#tu-van"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-[#0051d5] text-white font-bold text-xs text-center uppercase tracking-wider shadow-sm flex items-center justify-center"
            >
              Nhận Tư Vấn Miễn Phí Ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
