export type Role =
  | "CUSTOMER"
  | "MECHANIC"
  | "WORKSHOP"
  | "SHOP"
  | "ADMIN"
  | "OPERATIONS"
  | "SUPPORT";

export type Lang = "ar" | "en";

export type BikeType =
  | "ROAD"
  | "MOUNTAIN"
  | "HYBRID"
  | "CITY"
  | "BMX"
  | "KIDS"
  | "FOLDING"
  | "EBIKE"
  | "OTHER";

export type ServiceType = "MOBILE_SERVICE" | "WORKSHOP_SERVICE" | "PICKUP_AND_RETURN";

export type PreferredTime = "ASAP" | "TODAY" | "TOMORROW" | "SCHEDULED";

export type RequestStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "REVIEWING"
  | "RECEIVING_OFFERS"
  | "OFFER_SELECTED"
  | "BOOKED"
  | "PROVIDER_ON_THE_WAY"
  | "ARRIVED"
  | "DIAGNOSING"
  | "QUOTE_PENDING"
  | "QUOTE_APPROVED"
  | "IN_REPAIR"
  | "WAITING_FOR_PARTS"
  | "READY_FOR_PICKUP"
  | "COMPLETED"
  | "CANCELLED"
  | "DISPUTED";

export type ProblemCategory =
  | "FLAT_TIRE"
  | "BRAKE"
  | "GEARS"
  | "CHAIN"
  | "WHEEL"
  | "SUSPENSION"
  | "CRANK"
  | "ELECTRICAL"
  | "BATTERY"
  | "MOTOR"
  | "NOISE"
  | "TUNE_UP"
  | "CLEANING"
  | "INSPECTION"
  | "ACCIDENT"
  | "OTHER";

export interface Profile {
  id: string;
  role: Role;
  name: string;
  nameEn: string;
  email: string;
  phone: string;
  area: string;
  providerId?: string;
}

export interface Address {
  governorate: string;
  city: string;
  area: string;
  street: string;
  building: string;
  floor: string;
  apartment: string;
  landmark: string;
  instructions: string;
}

export interface Bike {
  id: string;
  ownerId: string;
  nickname: string;
  type: BikeType;
  brand: string;
  model: string;
  year: string;
  color: string;
  frameSize: string;
  serialNumber: string;
  wheelSize: string;
  gearCount: string;
  brakeType: string;
  isEbike: boolean;
  motorType?: string;
  batteryInfo?: string;
  purchaseDate: string;
  photos: string[];
  notes: string;
  healthScore: number;
  createdAt: string;
}

export interface ProviderProfile {
  id: string;
  name: string;
  nameEn: string;
  providerType: "MECHANIC" | "WORKSHOP" | "SHOP";
  photo?: string;
  experienceYears: number;
  specialties: ProblemCategory[];
  bikeCategories: BikeType[];
  ebikeExpertise: boolean;
  verified: boolean;
  serviceAreas: string[];
  governorate: string;
  radiusKm: number;
  travelFeeEgp: number;
  mobileService: boolean;
  workshopAddress?: string;
  workingHours: string;
  rating: number;
  reviewCount: number;
  completedJobs: number;
  responseMinutes: number;
  completionRate: number;
  warrantyPolicy: string;
  serviceTypes: ServiceType[];
  online: boolean;
  distanceKm: number;
  commissionPercent?: number;
  status: "ACTIVE" | "PENDING" | "SUSPENDED";
}

export interface Offer {
  id: string;
  requestId: string;
  providerId: string;
  laborEgp: number;
  partsEstimateEgp: number;
  inspectionFeeEgp: number;
  totalEstimateEgp: number;
  etaMinutes: number;
  warrantyDays: number;
  durationMinutes: number;
  earliestAvailability: string;
  serviceType: ServiceType;
  notes: string;
  status: "PENDING" | "ACCEPTED" | "DECLINED";
  createdAt: string;
}

export interface QuoteItem {
  id: string;
  label: string;
  labelEn: string;
  kind: "PART" | "LABOR";
  priceEgp: number;
}

export interface Quote {
  id: string;
  requestId: string;
  providerId: string;
  items: QuoteItem[];
  totalEgp: number;
  status: "PENDING" | "APPROVED" | "REJECTED";
  note: string;
  noteEn: string;
  createdAt: string;
  decidedAt?: string;
}

export interface TimelineEvent {
  id: string;
  status: RequestStatus;
  at: string;
  actor: string;
}

export interface ServiceReport {
  problemsFound: string;
  problemsFoundEn: string;
  workPerformed: string;
  workPerformedEn: string;
  recommendations: string;
  recommendationsEn: string;
  warrantyDays: number;
  laborEgp: number;
  partsEgp: number;
  totalEgp: number;
  beforePhotos: string[];
  afterPhotos: string[];
}

export interface ServiceRequest {
  id: string;
  code: string;
  customerId: string;
  bikeId: string;
  category: ProblemCategory;
  description: string;
  photos: string[];
  address: Address;
  serviceType: ServiceType;
  preferredTime: PreferredTime;
  scheduledAt?: string;
  status: RequestStatus;
  offers: Offer[];
  acceptedOfferId?: string;
  providerId?: string;
  quotes: Quote[];
  timeline: TimelineEvent[];
  report?: ServiceReport;
  paymentMethod: "CASH" | "ONLINE_DEMO" | "WALLET_DEMO";
  createdAt: string;
  updatedAt: string;
}

export interface MaintenanceRecord {
  id: string;
  bikeId: string;
  requestId: string;
  date: string;
  title: string;
  titleEn: string;
  providerId: string;
  parts: string[];
  totalEgp: number;
}

export interface MaintenanceReminder {
  id: string;
  bikeId: string;
  kind:
    | "BRAKE_INSPECTION"
    | "CHAIN_LUBRICATION"
    | "TIRE_CHECK"
    | "TUNE_UP"
    | "BATTERY_INSPECTION"
    | "SUSPENSION_SERVICE"
    | "GENERAL_INSPECTION";
  lastServiceAt: string;
  nextDueAt: string;
}

export interface Review {
  id: string;
  requestId: string;
  providerId: string;
  customerId: string;
  overall: number;
  quality: number;
  priceTransparency: number;
  arrivalTime: number;
  communication: number;
  comment: string;
  providerResponse?: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  audience: Role;
  userId?: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  createdAt: string;
  read: boolean;
  requestId?: string;
}

export interface Part {
  id: string;
  sku: string;
  name: string;
  nameEn: string;
  category: string;
  brand: string;
  compatibility: string;
  quantity: number;
  reorderThreshold: number;
  costEgp: number;
  priceEgp: number;
  supplier: string;
}

export interface Dispute {
  id: string;
  requestId: string;
  customerId: string;
  reason: "PRICE" | "QUALITY" | "DAMAGE" | "MISSING_PART" | "INCOMPLETE";
  details: string;
  evidence: string[];
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  resolution?: string;
  adminNotes?: string;
  createdAt: string;
}

export interface SupportTicket {
  id: string;
  customerId: string;
  category: string;
  subject: string;
  status: "OPEN" | "IN_PROGRESS" | "WAITING_FOR_CUSTOMER" | "RESOLVED" | "CLOSED";
  messages: { id: string; from: string; body: string; at: string }[];
  createdAt: string;
}

export interface PlatformSettings {
  commissionPercent: number;
  commissionFixedEgp: number;
  serviceFeeEgp: number;
  zones: string[];
}

export interface AuditLog {
  id: string;
  at: string;
  actor: string;
  action: string;
  target: string;
}
