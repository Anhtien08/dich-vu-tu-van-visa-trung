import React, { useState } from 'react';
import { CHECKLIST_ITEMS } from '../data/visaData';
import { Check, CheckCircle2, AlertCircle, FileCheck, Copy, Sparkles } from 'lucide-react';

interface DocumentChecklistProps {
  onGetChecklistConsultation: () => void;
}

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({ onGetChecklistConsultation }) => {
  // Store ticked items for interactive readiness audit
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    c1: true, // Default passport usually available
    c3: true  // Default CCCD usually available
  });
  const [copied, setCopied] = useState(false);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = CHECKLIST_ITEMS.length;
  const readyCount = Object.values(checkedIds).filter(Boolean).length;
  const percentage = Math.round((readyCount / totalItems) * 100);

  const copyChecklistText = () => {
    const text = CHECKLIST_ITEMS.map(
      (item) => `[${checkedIds[item.id] ? 'X' : ' '}] ${item.title} - ${item.description}`
    ).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categories = [
    { key: 'personal', num: '01', title: 'Giấy tờ cá nhân' },
    { key: 'trip', num: '02', title: 'Hồ sơ chuyến đi' },
    { key: 'job', num: '03', title: 'Hồ sơ công việc & tài chính' },
    { key: 'specific', num: '04', title: 'Hồ sơ riêng theo từng diện' },
  ];

  return (
    <section id="ho-so" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
            Chuẩn Bị Giấy Tờ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f41] tracking-tight mt-1">
            HỒ SƠ XIN VISA TRUNG QUỐC GỒM NHỮNG GÌ?
          </h2>
          <p className="text-sm text-[#43474f] mt-1">
            Tham khảo 4 nhóm giấy tờ căn bản dưới đây và tích chọn các mục bạn đã chuẩn bị để kiểm tra độ hoàn thiện.
          </p>
        </div>

        {/* Self-audit interactive status card */}
        <div className="bg-white border border-[#eaedff] rounded-2xl p-4 shadow-sm flex flex-col gap-2 min-w-[280px]">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-[#001f41] flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#0051d5]" />
              Tiến độ sẵn sàng:
            </span>
            <span className="text-[#0051d5] tabular-nums font-black">{percentage}% ({readyCount}/{totalItems} mục)</span>
          </div>

          <div className="w-full bg-[#eaedff] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#0051d5] h-full transition-all duration-300 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-[#747780]">
              {percentage >= 80 ? 'Hồ sơ rất đầy đủ!' : 'Visa5S hỗ trợ hoàn thiện các mục còn lại'}
            </span>
            <button
              onClick={copyChecklistText}
              className="text-[11px] font-semibold text-[#0051d5] hover:text-[#003ea8] flex items-center gap-1"
            >
              <Copy className="w-3 h-3" />
              <span>{copied ? 'Đã sao chép!' : 'Sao chép'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Structured Checklist Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const items = CHECKLIST_ITEMS.filter((i) => i.category === cat.key);
          return (
            <div
              key={cat.key}
              className="p-5 rounded-2xl bg-white border border-[#eaedff] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#0051d5] font-bold text-xs">
                    {cat.num}
                  </div>
                  <h3 className="font-bold text-base text-[#001f41]">{cat.title}</h3>
                </div>

                <div className="space-y-3">
                  {items.map((item) => {
                    const isChecked = !!checkedIds[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 select-none ${
                          isChecked
                            ? 'bg-[#f2f3ff]/60 border-[#0051d5]/40'
                            : 'bg-white border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md mt-0.5 shrink-0 flex items-center justify-center border transition-all ${
                            isChecked
                              ? 'bg-[#0051d5] border-[#0051d5] text-white shadow-xs'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        <div className="flex flex-col">
                          <span
                            className={`text-xs font-bold leading-tight ${
                              isChecked ? 'text-[#001f41]' : 'text-slate-800'
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="text-[11px] text-[#43474f] mt-0.5 leading-normal">
                            {item.description}
                          </span>
                          {item.notes && (
                            <span className="text-[10px] text-[#0051d5] font-medium mt-1 bg-[#eaedff]/60 px-2 py-0.5 rounded self-start">
                              Tip: {item.notes}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note & CTA Bar */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#eaedff]/60 border border-[#eaedff]">
        <div className="flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-[#6f0006] shrink-0 mt-0.5" />
          <p className="text-xs text-[#43474f] leading-relaxed">
            <strong className="text-[#001f41]">Lưu ý:</strong> Danh sách trên mang tính tham khảo tổng hợp. Hồ sơ thực tế phụ thuộc vào diện visa, hoàn cảnh người nộp và quy định hiện hành của cơ quan ngoại giao.
          </p>
        </div>

        <button
          onClick={onGetChecklistConsultation}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0051d5] text-white text-xs font-bold whitespace-nowrap shadow-sm hover:bg-[#003ea8] transition-all flex items-center justify-center gap-1.5 shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>NHẬN CHECKLIST HỒ SƠ PHÙ HỢP</span>
        </button>
      </div>
    </section>
  );
};
