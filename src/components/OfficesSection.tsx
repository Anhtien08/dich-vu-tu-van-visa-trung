import React from 'react';
import { OFFICE_LOCATIONS } from '../data/visaData';
import { MapPin, Phone, Mail, Clock, ShieldAlert, ExternalLink } from 'lucide-react';

export const OfficesSection: React.FC = () => {
  return (
    <section id="lien-he" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex flex-col gap-2 max-w-3xl mb-8">
        <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
          Mạng Lưới Văn Phòng
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f41] tracking-tight">
          THÔNG TIN LIÊN HỆ VISA5S
        </h2>
        <p className="text-sm text-[#43474f]">
          Khách hàng có thể kết nối tư vấn từ xa trực tuyến hoặc đến trực tiếp văn phòng chi nhánh gần nhất để nộp hồ sơ.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {OFFICE_LOCATIONS.map((office) => (
          <div
            key={office.id}
            className={`p-5 rounded-2xl bg-white border transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
              office.isHeadquarter ? 'border-[#0051d5] ring-1 ring-[#0051d5]/20' : 'border-[#eaedff]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
                  {office.isHeadquarter ? 'Trụ sở chính' : 'Chi nhánh'}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600">
                  {office.city}
                </span>
              </div>

              <h3 className="font-bold text-sm text-[#001f41] mb-2">{office.name}</h3>

              <div className="space-y-2 text-xs text-[#43474f]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{office.address}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0051d5] shrink-0" />
                  <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#001f41] hover:text-[#0051d5]">
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-500 text-[11px]">{office.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-[#0051d5] hover:underline flex items-center gap-1"
              >
                <span>Chỉ đường Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}
                className="px-3 py-1 rounded-lg bg-[#eaedff] text-[#001f41] hover:bg-[#d5e3ff] text-xs font-bold transition-colors"
              >
                Gọi ngay
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Hotlines & Email Highlight Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#001f41] text-white flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#0051d5] flex items-center justify-center text-white shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-[#a9c8fc] block font-semibold">Hotline Tiếp Nhận &amp; Hỗ Trợ Khẩn:</span>
            <span className="text-lg sm:text-xl font-black text-white tracking-wide">
              0911.909.686 &bull; 0967.686.101
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="https://zalo.me/0911909686"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#0051d5] hover:bg-[#316bf3] text-white text-xs font-bold text-center transition-colors"
          >
            Chat Zalo Tư Vấn
          </a>
          <a
            href="mailto:info@visa5s.com.vn"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@visa5s.com.vn</span>
          </a>
        </div>
      </div>

      {/* Official Legal Disclaimer */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#eaedff]/60 border border-[#eaedff] flex items-start gap-3">
        <ShieldAlert className="w-6 h-6 text-[#6f0006] shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1 text-xs">
          <span className="font-bold text-[#001f41]">Tuyên bố minh bạch pháp lý:</span>
          <p className="text-[#43474f] leading-relaxed">
            Visa5S là đơn vị tư vấn và hỗ trợ chuẩn bị hồ sơ thị thực độc lập, không phải cơ quan đại diện ngoại giao của Chính phủ Trung Quốc. Chúng tôi không cấp thị thực; quyền phê duyệt hồ sơ visa hoàn toàn thuộc về Đại sứ quán và Tổng lãnh sự quán Trung Quốc theo thẩm quyền ngoại giao.
          </p>
        </div>
      </div>
    </section>
  );
};
