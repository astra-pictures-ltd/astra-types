import { User } from './user'
import { MinimalContent } from './content'

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

export interface TransactionList {
  status: string
  title?: string
  amount: string
  date: string
  type: string
  discount?: string
}

export enum TransactionType {
  SUBSCRIPTION = 'subscription',
  UNRECOGNIZED = 'unrecognized',
  TICKET_PURCHASE = 'ticket_purchase',
  SUBSCRIPTION_CREATED = 'subscription_created',
}

export enum TransactionStatus {
  FAILED = 'failed',
  PENDING = 'pending',
  REFUNDED = 'refunded',
  PROCESSING = 'processing',
  SUCCESSFUL = 'successful',
}

export type SubscriptionPlanInterval = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'biannually' | 'annually'

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

export interface PendingPayment {
  url?: string
  plan?: string
  amount: string
  status: TransactionStatus.PENDING
}
