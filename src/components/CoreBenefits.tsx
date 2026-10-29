import React from 'react';
import { Headphones, ClipboardCheck, CreditCard, RefreshCw } from 'lucide-react';

export const CoreBenefits: React.FC = () => {
  return (
    <section className="w-full bg-[#001f41] text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-y border-[#0f3460]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-[#d5e3ff] uppercase tracking-wider">
              Lợi Thế Tại Visa5S
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Đồng Hành Minh Bạch &amp; An Tâm
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7f9dd0] max-w-md">
            Mỗi khách hàng đều được phân công chuyên viên theo dõi hồ sơ từ khâu rà soát giấy tờ đến khi có kết quả.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Tư vấn tận tâm</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Lắng nghe và phân tích sát theo từng trường hợp (hộ chiếu trắng, tự do, chủ DN).
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <ClipboardCheck className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Hướng dẫn chi tiết</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Danh mục hồ sơ rõ ràng, biểu mẫu chuẩn xác, hạn chế tối đa nguy cơ bị yêu cầu bổ sung.
            </span>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Báo phí rõ ràng</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Minh bạch phí dịch vụ và lệ phí Lãnh sự ngay từ đầu, tuyệt đối không có chi phí ẩn.
            </span>
          </div>

          {/* Card 4 */}
          <div className="p-4 rounded-xl bg-[#0f3460]/90 border border-white/10 flex flex-col gap-2 shadow-sm hover:border-[#0051d5] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#0051d5] flex items-center justify-center text-white shrink-0">
              <RefreshCw className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">Theo sát quy trình</span>
            <span className="text-xs text-[#d5e3ff] leading-relaxed">
              Hỗ trợ đặt lịch hẹn CVASC, đồng hành lấy sinh trắc và cập nhật tiến độ liên tục.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
