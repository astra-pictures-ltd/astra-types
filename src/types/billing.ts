import { User } from './user'
import { PageMetadata } from './meta'
import { MinimalContent } from './content'

export type Card = {
  id?: string
  last4?: string
  brand?: CardBrand
}

export enum CardStatus {
  OTP = 'otp',
  PIN = 'pin',
  '3D' = '3d',
  ERROR = 'error',
  SUCCESS = 'success',
}

export enum CardBrand {
  VISA = 'visa',
  VERVE = 'verve',
  MASTERCARD = 'mastercard',
}

export interface AddCardResponse extends Card {
  message?: string
  reference?: string
  status: CardStatus
  isReusable?: boolean
}

export type AddCardData = {
  number: string
  cvv: string
  pin?: string
  otp?: string
  month: string
  year: string
  reference?: string
}

export type AddCardPinData = {
  reference: string
  pin: string
}

export type ChargeCard = {
  id: string
  userId: string
}

export interface SubscriptionPlan {
  name: string
  code: string
  amount: number
  currency: string
  interval?: 'monthly' | 'yearly'
}

export interface SubscriptionData {
  date?: Date
  amount?: number
  currency?: string
  planCode?: string
  status?: string
  planName?: string
  provider?: PaymentProvider
  nextPaymentDate?: Date
  subscriptionCode?: string
}

export interface Subscription extends SubscriptionPlan {
  id: number
  date?: Date
  code: string
  source: PaymentProvider
}

export interface PaystackPaginationQuery {
  page?: number
  status?: string
  customer?: number
  perPage?: number
}

export interface SubscriptionList {
  status: string
  amount: number
  currency: string
  date: string
  planName: string
  nextPaymentDate: string
  customerEmail: string
  customer?: User
}

export interface PaystackBillingList<T> {
  data: T[]
  meta: PageMetadata
}

export interface TransactionList {
  status: string
  title: string
  amount: number
  currency: string
  date: string
  channel: string
}

export type SubscriptionPaginatedList = {
  data: SubscriptionList[]
  meta: PageMetadata
}

export enum TransactionType {
  SUBSCRIPTION = 'subscription',
  TICKET_PURCHASE = 'ticket_purchase',
  INITIAL_CARD_CHARGE = 'inital_card_charge',
}

export enum TransactionStatus {
  FAILED = 'failed',
  PENDING = 'pending',
  REFUNDED = 'refunded',
  PROCESSING = 'processing',
  SUCCESSFUL = 'successful',
}

export enum PaymentProvider {
  PAYSTACK = 'paystack',
}

export interface Transaction {
  date: Date
  user: User
  amount: number
  currency: string
  reference: string
  type: TransactionType
  status: TransactionStatus
  content?: MinimalContent
  provider: PaymentProvider
}

export interface InitializeTransaction {
  url?: string
  amount?: number
  reference: string
}

export type UserSubscription = {
  plan: string
  amount: string | number
  cancelledAt: Date
  nextPaymentDate: Date
  lastPaymentDate: Date
}