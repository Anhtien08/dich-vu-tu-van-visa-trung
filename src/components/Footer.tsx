import React from 'react';
import { MapPin, Building, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#001f41] text-white border-t border-[#0f3460] mt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
        {/* Top Brand & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/image_42e64312.png"
                alt="Visa5S Logo"
                className="h-10 w-auto object-contain bg-white px-2 py-1 rounded-xl shadow-xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://lh3.googleusercontent.com/aida/AEtjO1XOSs7t5SHl8Nu6XxcuZL5YmZeZFtHUzWo4uqonYqcY9Ex7D5DlRr-fZlUh-r35Qe8p4SDL4_izzCqqyUC_dAg5CZb5530KGnhlPilViIE__HVoyaIJLkplUqbrTmeUa_M_kvMMjArWSeZsIpee1mH9LEKqsR_vlKZNw250ku-wqty5srsqHqZZYEpgJlo77Id8CdQN9NbPFOVLFwHu5u-Dj2AEW2cJsCCqXaZ0Nbzs3IndnROeO88Zsw';
                }}
              />
              <span className="text-xl font-extrabold text-white">Visa5S</span>
            </div>
            <p className="text-xs sm:text-sm text-[#d5e3ff]/80 leading-relaxed max-w-md">
              Đơn vị chuyên nghiệp hỗ trợ tư vấn thủ tục hồ sơ, thẩm định tính hợp lệ và nộp hồ sơ xin cấp Visa Trung Quốc (Du lịch, Thương mại, Công tác, Thăm thân) nhanh chóng và tin cậy.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2.5 text-xs text-[#d5e3ff]/90">
            <span className="text-xs font-bold uppercase tracking-wider text-white mb-1">
              Hệ thống văn phòng
            </span>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#a9c8fc] shrink-0 mt-0.5" />
              <span><strong>Trụ sở chính:</strong> 370 Đường 3/2, Phường Hòa Hưng, Quận 10, TP.HCM</span>
            </div>
            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-[#a9c8fc] shrink-0 mt-0.5" />
              <span><strong>Chi nhánh Dĩ An / Thủ Đức:</strong> 16 Trần Đại Nghĩa, Đông Hòa, Bình Dương</span>
            </div>
            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-[#a9c8fc] shrink-0 mt-0.5" />
              <span><strong>Chi nhánh Hà Nội:</strong> 59 Vương Thừa Vũ, Q. Thanh Xuân, Hà Nội</span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-2.5 text-xs text-[#d5e3ff]/90">
            <span className="text-xs font-bold uppercase tracking-wider text-white mb-1">
              Liên hệ trực tiếp
            </span>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#a9c8fc] shrink-0" />
              <span className="text-white font-bold">0911.909.686 - 0967.686.101</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#a9c8fc] shrink-0" />
              <span>info@visa5s.com.vn</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-emerald-300 font-semibold text-[11px]">Bảo mật hồ sơ theo quy chuẩn</span>
            </div>
          </div>
        </div>

        {/* Consular Disclaimer Box */}
        <div className="p-4 rounded-xl bg-[#0f3460] text-xs text-[#d5e3ff] leading-relaxed">
          <strong className="text-white">* Miễn trừ trách nhiệm ngoại giao:</strong> Visa5S là tổ chức dịch vụ pháp lý và tư vấn hồ sơ độc lập, không phải Đại sứ quán hoặc Lãnh sự quán Trung Quốc. Quyết định cấp thị thực phụ thuộc hoàn toàn vào thẩm quyền của Cơ quan Ngoại giao Trung Quốc.
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#7f9dd0]">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#quy-trinh" className="hover:text-white transition-colors">Quy trình xử lý</a>
            <span>&bull;</span>
            <a href="#ho-so" className="hover:text-white transition-colors">Danh mục chứng từ</a>
            <span>&bull;</span>
            <a href="#faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</a>
          </div>
          <span>&copy; 2026 Visa5S Vietnam. Toàn bộ bản quyền được bảo lưu.</span>
        </div>
      </div>
    </footer>
  );
};
