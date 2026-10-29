export type VisaCategory = 'Du lịch' | 'Công tác' | 'Thăm thân' | 'Du học' | 'Khác';

export interface VisaTypeInfo {
  code: string;
  name: string;
  category: VisaCategory;
  badge: string;
  description: string;
  validity: string;
  durationOfStay: string;
  entries: string;
  targetAudience: string;
  keyRequirement: string;
  popular?: boolean;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: 'personal' | 'trip' | 'job' | 'specific';
  required: boolean;
  notes?: string;
  visaTypes?: VisaCategory[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  workingHours: string;
  isHeadquarter?: boolean;
}

export interface ApplicationRecord {
  trackingCode: string;
  fullName: string;
  phone: string;
  visaType: string;
  departureDate?: string;
  submissionDate: string;
  status: 'Tiếp nhận yêu cầu' | 'Đang tư vấn hồ sơ' | 'Thẩm định hồ sơ' | 'Lịch hẹn CVASC' | 'Đang xử lý tại Lãnh sự' | 'Hoàn tất & Cấp visa';
  notes: string;
  stepIndex: number;
}
