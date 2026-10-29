import React, { useState } from 'react';
import { VISA_TYPES } from '../data/visaData';
import { VisaTypeInfo } from '../types/visa';
import { ArrowRight, HelpCircle, Check, Info, X } from 'lucide-react';

interface VisaCategoriesProps {
  onSelectVisa: (visaName: string) => void;
}

export const VisaCategories: React.FC<VisaCategoriesProps> = ({ onSelectVisa }) => {
  const [activeModalVisa, setActiveModalVisa] = useState<VisaTypeInfo | null>(null);

  return (
    <section id="dich-vu" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex flex-col gap-2 max-w-3xl mb-8">
        <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
          Danh Mục Thị Thực
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f41] tracking-tight">
          BẠN CẦN VISA TRUNG QUỐC CHO MỤC ĐÍCH NÀO?
        </h2>
        <p className="text-sm sm:text-base text-[#43474f]">
          Lựa chọn đúng loại visa là bước đầu tiên để chuẩn bị hồ sơ phù hợp với kế hoạch của bạn.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {VISA_TYPES.map((visa) => (
          <div
            key={visa.code}
            className={`p-5 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md ${
              visa.popular ? 'border-[#0051d5]/40 ring-1 ring-[#0051d5]/20' : 'border-[#eaedff]'
            }`}
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#eaedff] text-[#001f41] flex items-center justify-center font-black text-xl shadow-inner">
                    {visa.code}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#001f41] leading-tight">{visa.name}</h3>
                    <span className="text-[11px] font-semibold text-[#0051d5] uppercase">
                      Ký hiệu loại {visa.code}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#43474f] text-[11px] font-medium">
                  {visa.badge}
                </span>
              </div>

              <p className="text-xs text-[#43474f] leading-relaxed mb-4 line-clamp-3">
                {visa.description}
              </p>

              <div className="space-y-1.5 text-[11px] text-[#747780] border-t border-[#f2f3ff] pt-3 mb-4">
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-[#131b2e] shrink-0">Hiệu lực:</span>
                  <span className="truncate">{visa.validity}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-[#131b2e] shrink-0">Điều kiện chính:</span>
                  <span className="truncate">{visa.keyRequirement}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveModalVisa(visa)}
                className="flex-1 py-2 px-2.5 rounded-lg bg-[#eaedff] hover:bg-[#d5e3ff] text-[#001f41] text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                title="Xem điều kiện chi tiết"
              >
                <Info className="w-3.5 h-3.5 text-[#0051d5]" />
                <span>Chi tiết</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectVisa(visa.category)}
                className="flex-1 py-2 px-2.5 rounded-lg bg-[#0051d5] hover:bg-[#003ea8] text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-colors"
              >
                <span>Tư vấn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Category Footnote */}
      <div className="p-3.5 rounded-xl bg-white border border-[#eaedff] flex items-start gap-2.5 mt-5 text-[#43474f]">
        <HelpCircle className="w-4 h-4 text-[#747780] shrink-0 mt-0.5" />
        <p className="text-xs leading-relaxed">
          <strong className="text-[#001f41]">Ghi chú:</strong> Loại visa và hồ sơ cụ thể cần được xác định theo mục đích thực tế, thời gian lưu trú và quy định hiện hành của cơ quan ngoại giao. Nếu bạn chưa rõ loại visa phù hợp, chuyên viên Visa5S sẽ tư vấn giải pháp tối ưu.
        </p>
      </div>

      {/* Details Modal */}
      {activeModalVisa && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setActiveModalVisa(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#eaedff] text-[#001f41] flex items-center justify-center font-black text-2xl">
                {activeModalVisa.code}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#001f41]">{activeModalVisa.name}</h3>
                <span className="text-xs font-semibold text-[#0051d5]">Diện thị thực loại {activeModalVisa.code}</span>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              {activeModalVisa.description}
            </p>

            <div className="space-y-3 bg-[#f8fafc] p-4 rounded-xl border border-slate-100 text-xs mb-5">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Đối tượng áp dụng:</span>
                <span className="font-medium text-slate-800 text-right">{activeModalVisa.targetAudience}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Thời hạn visa:</span>
                <span className="font-medium text-slate-800 text-right">{activeModalVisa.validity}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Thời gian lưu trú:</span>
                <span className="font-medium text-slate-800 text-right">{activeModalVisa.durationOfStay}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Số lần nhập cảnh:</span>
                <span className="font-medium text-slate-800 text-right">{activeModalVisa.entries}</span>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-semibold text-slate-500">Yêu cầu then chốt:</span>
                <span className="font-medium text-slate-800 bg-white p-2 rounded border border-slate-200">
                  {activeModalVisa.keyRequirement}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveModalVisa(null)}
                className="flex-1 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  const type = activeModalVisa.category;
                  setActiveModalVisa(null);
                  onSelectVisa(type);
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#0051d5] text-white text-xs font-bold hover:bg-[#003ea8] shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Chọn loại visa này</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
