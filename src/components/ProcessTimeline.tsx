import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Send, HelpCircle, AlertTriangle } from 'lucide-react';

interface ProcessTimelineProps {
  onStartConsult: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onStartConsult }) => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: 'Tiếp nhận nhu cầu',
      short: 'Tiếp nhận',
      desc: 'Khách hàng cung cấp mục đích chuyến đi, thời gian dự kiến khởi hành và thông tin cơ bản của bản thân.',
      details: 'Chuyên viên Visa5S phân tích sơ bộ hồ sơ: Bạn đã từng đi những nước nào, tình trạng công việc hiện tại (nhân viên, chủ doanh nghiệp hay kinh doanh tự do) để định hướng phương án phù hợp nhất.',
      tip: 'Nên chuẩn bị sẵn hộ chiếu và thời gian mong muốn xuất cảnh để được hỗ trợ nhanh nhất.'
    },
    {
      num: 2,
      title: 'Tư vấn loại visa',
      short: 'Tư vấn diện visa',
      desc: 'Xem xét trường hợp cụ thể và hướng dẫn diện visa phù hợp để khách hàng tham khảo (Du lịch L, Thương mại M, Thăm thân Q...).',
      details: 'Xác định chính xác diện visa giúp tránh tình trạng nộp sai mục đích dẫn đến việc bị từ chối thị thực hoặc phải bổ sung giấy tờ phức tạp.',
      tip: 'Mỗi loại visa có bộ chứng từ chứng minh khác biệt: ví dụ visa M bắt buộc có thư mời từ đối tác bên Trung Quốc.'
    },
    {
      num: 3,
      title: 'Chuẩn bị hồ sơ',
      short: 'Chuẩn bị hồ sơ',
      desc: 'Hướng dẫn danh sách giấy tờ và kiểm tra tính đầy đủ, hợp lệ theo phạm vi dịch vụ.',
      details: 'Visa5S cung cấp danh mục checklist cá nhân hóa, hỗ trợ điền tờ khai xin visa Trung Quốc trực tuyến (online form) song ngữ chuẩn xác, chỉnh sửa ảnh thẻ theo kích thước 33x48mm.',
      tip: 'Các thông tin trên tờ khai phải khớp 100% với vé máy bay, booking phòng khách sạn và lịch trình.'
    },
    {
      num: 4,
      title: 'Hoàn thiện thủ tục & Lăn tay',
      short: 'Nộp & Sinh trắc',
      desc: 'Hỗ trợ các bước tiếp theo theo thỏa thuận dịch vụ và quy trình áp dụng của Trung tâm tiếp nhận thị thực CVASC.',
      details: 'Đặt lịch hẹn trực tuyến tại Trung tâm tiếp nhận visa (CVASC Hà Nội, Đà Nẵng hoặc TP.HCM). Hướng dẫn đương đơn đến lăn vân tay sinh trắc học và nộp hộ chiếu gốc theo giờ hẹn.',
      tip: 'Hiện nay hầu hết các diện visa Trung Quốc đều yêu cầu đương đơn đến trực tiếp để chụp ảnh và lấy dấu vân tay.'
    },
    {
      num: 5,
      title: 'Theo dõi & Nhận kết quả',
      short: 'Nhận kết quả',
      desc: 'Hướng dẫn khách hàng theo dõi hồ sơ và thông tin nhận kết quả thị thực theo quy định.',
      details: 'Chuyên viên Visa5S theo dõi sát sao tình trạng hồ sơ trên hệ thống, nhận lại hộ chiếu kèm visa và bàn giao tận tay khách hàng hoặc chuyển phát bảo đảm.',
      tip: 'Kiểm tra kỹ các thông tin in trên visa (họ tên, số hộ chiếu, số lần nhập cảnh, thời hạn) ngay khi nhận được.'
    }
  ];

  return (
    <section id="quy-trinh" className="w-full bg-[#eaedff]/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-[#eaedff]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">
            Quy Trình Chuyên Nghiệp
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f41] tracking-tight">
            QUY TRÌNH HỖ TRỢ VISA TRUNG QUỐC
          </h2>
          <p className="text-sm sm:text-base text-[#43474f]">
            5 bước tiếp cận chuẩn mực giúp bạn nắm bắt tiến độ một cách minh bạch và dễ dàng.
          </p>
        </div>

        {/* Desktop Pipeline Navigator */}
        <div className="hidden lg:grid grid-cols-5 gap-3">
          {steps.map((st, idx) => (
            <button
              key={st.num}
              onClick={() => setSelectedStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all relative ${
                selectedStep === idx
                  ? 'bg-white border-[#0051d5] shadow-md ring-2 ring-[#0051d5]/20'
                  : 'bg-white/80 border-slate-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    selectedStep === idx ? 'bg-[#0051d5] text-white' : 'bg-[#eaedff] text-[#001f41]'
                  }`}
                >
                  {st.num}
                </span>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                )}
              </div>
              <h3 className="font-bold text-xs text-[#001f41] leading-tight mb-1">{st.title}</h3>
              <p className="text-[11px] text-[#747780] line-clamp-2">{st.desc}</p>
            </button>
          ))}
        </div>

        {/* Mobile & Tablet Stepper List */}
        <div className="lg:hidden flex flex-col gap-3">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              onClick={() => setSelectedStep(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedStep === idx
                  ? 'bg-white border-[#0051d5] shadow-md'
                  : 'bg-white border-[#eaedff]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    idx === 0 || idx === 4 ? 'bg-[#001f41] text-white' : 'bg-[#0051d5] text-white'
                  }`}
                >
                  {st.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-[#001f41]">{st.title}</h3>
                  <p className="text-xs text-[#43474f] mt-0.5 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Step Detailed Inspection Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#eaedff] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#eaedff] text-[#0051d5] text-xs font-bold uppercase tracking-wider">
                Chi tiết Bước {steps[selectedStep].num}
              </span>
              <h3 className="text-base font-bold text-[#001f41]">{steps[selectedStep].title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#43474f] leading-relaxed">
              {steps[selectedStep].details}
            </p>
            <div className="p-2.5 rounded-lg bg-[#f2f3ff] text-xs text-[#0051d5] font-medium flex items-center gap-2">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>Chuyên viên lưu ý: {steps[selectedStep].tip}</span>
            </div>
          </div>

          <button
            onClick={onStartConsult}
            className="w-full md:w-auto h-12 px-6 rounded-xl bg-[#0051d5] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#003ea8] transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Bắt Đầu Tư Vấn Hồ Sơ</span>
          </button>
        </div>
      </div>
    </section>
  );
};
