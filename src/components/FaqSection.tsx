import React, { useState } from 'react';
import { FAQS } from '../data/visaData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ opened by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', 'Thủ tục', 'Thời gian', 'Chi phí', 'Tự nộp', 'Hồ sơ', 'Pháp lý'];

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'Tất cả' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
            Giải Đáp Thắc Mắc
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#001f41] tracking-wide mt-1">
            CÂU HỎI THƯỜNG GẶP
          </h2>
          <p className="text-sm text-[#43474f] mt-1">
            Tổng hợp các thắc mắc phổ biến của khách hàng khi chuẩn bị hồ sơ xin visa Trung Quốc.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm câu hỏi..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-[#eaedff] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0051d5]"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-[#0051d5] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-[#eaedff] hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <div className="flex flex-col gap-2.5">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">Không tìm thấy câu hỏi phù hợp</p>
            <p className="text-xs text-slate-500 mt-1">Vui lòng thử từ khóa khác hoặc liên hệ hotline để được giải đáp trực tiếp.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#eaedff] shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-[#001f41]">
                    {faq.id}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#747780] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0051d5]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#43474f] leading-relaxed border-t border-slate-50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
