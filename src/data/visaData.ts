import { VisaTypeInfo, ChecklistItem, FaqItem, OfficeLocation } from '../types/visa';

export const VISA_TYPES: VisaTypeInfo[] = [
  {
    code: 'L',
    name: 'Visa Du Lịch Trung Quốc',
    category: 'Du lịch',
    badge: 'Phổ biến nhất',
    popular: true,
    description: 'Dành cho người có nhu cầu du lịch, tham quan danh lam thắng cảnh hoặc khám phá văn hóa các tỉnh thành Trung Quốc.',
    validity: '3 tháng (1 lần hoặc 2 lần nhập cảnh)',
    durationOfStay: '15 - 30 ngày/lần',
    entries: '1 lần hoặc 2 lần',
    targetAudience: 'Cá nhân, gia đình, nhóm bạn du lịch tự túc hoặc theo tour.',
    keyRequirement: 'Lịch trình chi tiết, xác nhận vé máy bay, đặt phòng khách sạn.'
  },
  {
    code: 'M',
    name: 'Visa Công Tác / Thương Mại',
    category: 'Công tác',
    badge: 'Doanh nghiệp',
    popular: true,
    description: 'Hỗ trợ tìm hiểu thủ tục dành cho chuyến đi phục vụ hoạt động thương mại, khảo sát thị trường, ký kết hợp đồng hoặc dự hội chợ triển lãm (như Canton Fair).',
    validity: '3 tháng, 6 tháng hoặc 1 năm',
    durationOfStay: '30 - 90 ngày/lần',
    entries: '1 lần, 2 lần hoặc nhiều lần',
    targetAudience: 'Chủ doanh nghiệp, cán bộ nhân viên được cử đi công tác, thương nhân xúc tiến thương mại.',
    keyRequirement: 'Thư mời từ đối tác bên Trung Quốc & Quyết định cử công tác từ công ty Việt Nam.'
  },
  {
    code: 'Q',
    name: 'Visa Thăm Thân (Q1 / Q2)',
    category: 'Thăm thân',
    badge: 'Gia đình',
    popular: false,
    description: 'Tư vấn hồ sơ theo diện thăm thân nhân là công dân Trung Quốc hoặc người nước ngoài có thẻ thường trú tại Trung Quốc.',
    validity: 'Q1: Cần đổi thẻ cư trú trong 30 ngày; Q2: Ngắn hạn dưới 180 ngày',
    durationOfStay: 'Q2: Tối đa 180 ngày; Q1: Dài hạn trên 180 ngày',
    entries: '1 lần, 2 lần hoặc nhiều lần',
    targetAudience: 'Vợ/chồng, cha mẹ, con cái, anh chị em ruột của người cư trú tại Trung Quốc.',
    keyRequirement: 'Giấy tờ chứng minh quan hệ ruột thịt (khai sinh, kết hôn) & Thư mời người bảo lãnh.'
  },
  {
    code: 'X',
    name: 'Visa Du Học (X1 / X2)',
    category: 'Du học',
    badge: 'Học tập',
    popular: false,
    description: 'Hỗ trợ tìm hiểu thủ tục dành cho cá nhân có kế hoạch theo học ngắn hạn (X2) hoặc dài hạn (X1) tại các trường Đại học, Cao đẳng ở Trung Quốc.',
    validity: 'X1: Cần đổi giấy phép cư trú trong 30 ngày; X2: Tối đa 180 ngày',
    durationOfStay: 'Theo khóa học / thư mời đào tạo',
    entries: '1 lần (X1) hoặc nhiều lần tùy diện',
    targetAudience: 'Học sinh, sinh viên, nghiên cứu sinh nhận học bổng hoặc tự túc.',
    keyRequirement: 'Giấy báo nhập học gốc & Mẫu đơn JW201 hoặc JW202 có dấu xác nhận.'
  }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  // 01. Giấy tờ cá nhân
  {
    id: 'c1',
    category: 'personal',
    title: 'Hộ chiếu gốc còn giá trị trên 6 tháng',
    description: 'Hộ chiếu còn hạn ít nhất 6 tháng tính từ ngày dự kiến xuất cảnh khỏi Trung Quốc và còn tối thiểu 2 trang trắng liền kề.',
    required: true,
    notes: 'Kèm theo các hộ chiếu cũ đã từng có visa các nước phát triển (nếu có).'
  },
  {
    id: 'c2',
    category: 'personal',
    title: 'Ảnh thẻ chuẩn quốc tế (33mm x 48mm)',
    description: 'Ảnh chân dung mới chụp trong 6 tháng gần nhất, phông nền trắng trơn, không đeo kính râm, rõ vành tai và ngũ quan, không mặc áo trắng.',
    required: true,
    notes: 'Visa5S hỗ trợ chụp ảnh đúng quy chuẩn kích thước sứ quán khi khách tới văn phòng.'
  },
  {
    id: 'c3',
    category: 'personal',
    title: 'Căn cước công dân & Giấy xác nhận thông tin cư trú (CT07)',
    description: 'Bản sao y công chứng hoặc trích lục dữ liệu cư trú CCCD còn hiệu lực.',
    required: true
  },
  // 02. Hồ sơ chuyến đi
  {
    id: 'c4',
    category: 'trip',
    title: 'Lịch trình di chuyển chi tiết từng ngày',
    description: 'Kế hoạch hành trình rõ ràng: ngày nào ở thành phố nào (Bắc Kinh, Thượng Hải, Quảng Châu...), tham quan địa điểm nào.',
    required: true,
    notes: 'Visa5S hỗ trợ soạn thảo và chuẩn hóa lịch trình logic theo ngày bay.'
  },
  {
    id: 'c5',
    category: 'trip',
    title: 'Xác nhận đặt vé máy bay khứ hồi (Flight Reservation)',
    description: 'Mã đặt chỗ vé máy bay khứ hồi đúng tên người xin visa và khớp với ngày trên lịch trình.',
    required: true,
    notes: 'Không cần xuất vé thanh toán trước; chỉ cần bản giữ chỗ hợp lệ.'
  },
  {
    id: 'c6',
    category: 'trip',
    title: 'Xác nhận đặt phòng khách sạn (Hotel Booking)',
    description: 'Xác nhận booking phòng khách sạn tại các điểm đến xuyên suốt chuyến đi.',
    required: true
  },
  // 03. Hồ sơ công việc & tài chính
  {
    id: 'c7',
    category: 'job',
    title: 'Chứng minh công việc (HĐLĐ / ĐKKD / Xác nhận sinh viên)',
    description: 'Hợp đồng lao động + Đơn xin nghỉ phép (với nhân viên) hoặc Giấy phép ĐKKD + Tờ khai thuế 3 tháng gần nhất (với chủ DN).',
    required: true
  },
  {
    id: 'c8',
    category: 'job',
    title: 'Sao kê tài khoản ngân hàng hoặc sổ tiết kiệm',
    description: 'Số dư tối thiểu thông thường từ 50.000.000 VNĐ hoặc sao kê tài khoản nhận lương 3-6 tháng gần nhất.',
    required: false,
    notes: 'Tùy thuộc vào thời điểm và quy định từng trung tâm tiếp nhận.'
  },
  // 04. Hồ sơ riêng theo diện
  {
    id: 'c9',
    category: 'specific',
    title: 'Thư mời thương mại chính thức (Đối với Visa Công tác M)',
    description: 'Thư mời từ công ty/tổ chức tại Trung Quốc ghi rõ thông tin người được mời, mục đích làm việc, ai chi trả chi phí.',
    required: false,
    visaTypes: ['Công tác']
  },
  {
    id: 'c10',
    category: 'specific',
    title: 'Giấy tờ chứng minh nhân thân (Đối với Visa Thăm thân Q)',
    description: 'Bản sao CCCD/Hộ chiếu người mời tại Trung Quốc + Giấy đăng ký kết hôn / Giấy khai sinh công chứng.',
    required: false,
    visaTypes: ['Thăm thân']
  },
  {
    id: 'c11',
    category: 'specific',
    title: 'Giấy báo nhập học & Mẫu đơn JW201/JW202 (Đối với Du học X)',
    description: 'Bản gốc Admission Notice và mẫu JW do Bộ Giáo dục Trung Quốc phê duyệt.',
    required: false,
    visaTypes: ['Du học']
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    category: 'Thủ tục',
    question: 'Xin visa Trung Quốc cần chuẩn bị những giấy tờ gì?',
    answer: 'Các giấy tờ căn bản gồm: Hộ chiếu gốc còn hạn trên 6 tháng, 2 ảnh chân dung chuẩn 33x48mm phông trắng, bản sao CCCD, tờ khai xin thị thực trực tuyến, cùng với giấy tờ chứng minh chuyến đi (booking phòng, vé máy bay hoặc thư mời) và giấy tờ công việc tương ứng theo từng diện visa. Đội ngũ Visa5S sẽ cung cấp checklist chính xác và cá nhân hóa theo từng hồ sơ.'
  },
  {
    id: 2,
    category: 'Thời gian',
    question: 'Làm visa Trung Quốc mất bao lâu?',
    answer: 'Thời gian xét duyệt tiêu chuẩn của Cơ quan ngoại giao và Trung tâm thị thực (CVASC) dao động từ 4 đến 7 ngày làm việc kể từ ngày hoàn tất nộp hồ sơ và lấy dấu vân tay. Nếu bạn có nhu cầu bay gấp, có thể lựa chọn dịch vụ làm nhanh (khẩn 2-3 ngày) tùy theo quy định và tình trạng hồ sơ.'
  },
  {
    id: 3,
    category: 'Chi phí',
    question: 'Chi phí làm visa Trung Quốc là bao nhiêu?',
    answer: 'Tổng chi phí thực tế bao gồm 3 khoản: (1) Lệ phí visa nộp cho Đại sứ quán/Lãnh sự quán (thu bằng USD), (2) Phí dịch vụ của Trung tâm tiếp nhận thị thực Trung Quốc CVASC (khoảng 685.000 VNĐ), và (3) Phí dịch vụ tư vấn, chuẩn hóa hồ sơ và đồng hành của Visa5S. Tất cả đều được công khai minh bạch trước khi ký hợp đồng, tuyệt đối không có phụ phí phát sinh ngầm.'
  },
  {
    id: 4,
    category: 'Tự nộp',
    question: 'Có thể tự xin visa Trung Quốc không?',
    answer: 'Có, công dân hoàn toàn có quyền tự chuẩn bị hồ sơ, điền form online và đặt lịch hẹn đến nộp tại Trung tâm tiếp nhận visa (CVASC Hà Nội, Đà Nẵng hoặc TP.HCM). Tuy nhiên, sử dụng dịch vụ của Visa5S giúp bạn tiết kiệm thời gian đi lại, tránh các lỗi điền form bị trả về và tối ưu hồ sơ chỉn chu nhất.'
  },
  {
    id: 5,
    category: 'So sánh',
    question: 'Visa du lịch và visa công tác khác nhau thế nào?',
    answer: 'Visa du lịch (kí hiệu L) dành cho mục đích tham quan, thưởng ngoạn văn hóa cảnh đẹp, yêu cầu lịch trình du lịch, booking phòng và vé máy bay. Visa công tác (kí hiệu M) bắt buộc phải có Thư mời thương mại có dấu mộc từ phía công ty/đối tác tại Trung Quốc kèm Quyết định cử đi công tác từ công ty ở Việt Nam.'
  },
  {
    id: 6,
    category: 'Hồ sơ',
    question: 'Hộ chiếu trắng (chưa từng đi nước ngoài) có xin được visa Trung Quốc không?',
    answer: 'Hoàn toàn được! Lịch sử đi lại tốt là một điểm cộng tăng độ tin cậy, nhưng người có hộ chiếu trắng vẫn có thể được cấp visa bình thường nếu chứng minh được mục đích chuyến đi rõ ràng, công việc ổn định và chuẩn bị giấy tờ minh bạch, nhất quán.'
  },
  {
    id: 7,
    category: 'Pháp lý',
    question: 'Visa5S có cam kết đậu visa 100% không?',
    answer: 'Không có bất kỳ đơn vị dịch vụ hợp pháp nào có quyền cam kết 100% đậu visa, bởi vì quyết định cấp thị thực hoàn toàn thuộc thẩm quyền độc quyền của Lãnh sự quán và Cơ quan Ngoại giao Trung Quốc. Visa5S cam kết mang lại sự tận tâm, chuyên môn thẩm định cao nhất để tối ưu hóa hồ sơ đạt tỷ lệ chấp thuận tối đa.'
  },
  {
    id: 8,
    category: 'Hỗ trợ',
    question: 'Tôi cần làm gì nếu hồ sơ bị yêu cầu bổ sung giấy tờ hoặc phỏng vấn?',
    answer: 'Trong các trường hợp cơ quan xét duyệt yêu cầu bổ sung giấy tờ xác minh, chuyên viên Visa5S sẽ liên hệ ngay và hướng dẫn chuẩn bị văn bản bổ sung chuẩn xác, đồng thời hướng dẫn bạn trả lời các câu hỏi phỏng vấn tự tin, đúng trọng tâm nếu có.'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'hcm1',
    name: 'Trụ sở chính TP. Hồ Chí Minh',
    address: '370 Đường 3/2, Phường Hòa Hưng, Quận 10, TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    phone: '0911.909.686',
    workingHours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
    isHeadquarter: true
  },
  {
    id: 'hcm2',
    name: 'Văn phòng TP.HCM (Cơ sở 2)',
    address: '16 Trần Đại Nghĩa, Phường Đông Hòa, TP. Dĩ An (Giáp Thủ Đức, TP.HCM)',
    city: 'Bình Dương / TP.HCM',
    phone: '0967.686.101',
    workingHours: 'Thứ 2 - Thứ 6: 08:30 - 17:30',
    isHeadquarter: false
  },
  {
    id: 'hn',
    name: 'Văn phòng Chi nhánh Hà Nội',
    address: '59 Vương Thừa Vũ, Quận Thanh Xuân, Hà Nội',
    city: 'Hà Nội',
    phone: '0911.909.686',
    workingHours: 'Thứ 2 - Thứ 6: 08:30 - 17:30',
    isHeadquarter: false
  }
];
