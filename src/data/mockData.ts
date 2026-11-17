import type { Branch, Product, PrescriptionItem, UserProfile, OrderResult } from '../types'
import { PRODUCTS } from './products'

export const CLINICAL_BRANCHES: Branch[] = [
  {
    id: 'lubliana',
    nameKa: 'სათავო ფილიალი & საწარმო (დიღომი)',
    nameEn: 'Headquarters & Manufacturing Hub',
    subtitleKa: 'დ. აღმაშენებლის ხეივანი მე-12კმ (0131)',
    hospitalCluster: 'სათავო საწარმო & ცენტრალური აფთიაქი',
    addressKa: 'ქ. თბილისი, დ. აღმაშენებლის ხეივანი მე-12კმ',
    addressEn: '12th km D. Aghmashenebeli Alley, Tbilisi',
    phone: '032 2 59 57 90',
    workingHours: '24/7 (უწყვეტი მორიგეობა)',
    lat: 41.7850,
    lon: 44.7720,
    erpSyncStatus: 'ხელმისაწვდომია',
    distanceKm: 2.1,
    distanceText: '2.1 კმ',
  },
  {
    id: 'vazha',
    nameKa: 'ვაკე-საბურთალოს ფილიალი',
    nameEn: 'Vake-Saburtalo Branch',
    subtitleKa: 'ვაჟა-ფშაველას გამზ. №6',
    hospitalCluster: 'საბურთალოს რაიონი',
    addressKa: 'ვაჟა-ფშაველას გამზ. №6',
    addressEn: '6 Vazha-Pshavela Ave',
    phone: '032 2 53 49 50',
    workingHours: '08:00 - 23:00 (ყოველდღე)',
    lat: 41.7247,
    lon: 44.7493,
    erpSyncStatus: 'ხელმისაწვდომია',
    distanceKm: 1.2,
    distanceText: '1.2 კმ',
  },
  {
    id: 'tsereteli',
    nameKa: 'დიდი დიღმის ფილიალი',
    nameEn: 'Didi Dighomi Branch',
    subtitleKa: 'დიდი დიღომი, პეტრიწის ქ. N16',
    hospitalCluster: 'დიდი დიღომი / იმედის კლინიკა',
    addressKa: 'დიდი დიღომი, პეტრიწის ქ. N16',
    addressEn: '16 Petritsi St, Didi Dighomi',
    phone: '032 2 59 69 59',
    workingHours: '08:30 - 22:30 (ყოველდღე)',
    lat: 41.7915,
    lon: 44.7562,
    erpSyncStatus: 'ხელმისაწვდომია',
    distanceKm: 3.8,
    distanceText: '3.8 კმ',
  },
]

export const MOCK_PRODUCTS: Product[] = PRODUCTS

export const MOCK_USER: UserProfile = {
  name: 'გიორგი მაისურაძე',
  personalId: '01019028491',
  phone: '+995 599 12 34 56',
  email: 'g.maisuradze@gmail.com',
  defaultAddress: 'ილია ჭავჭავაძის გამზ. 37, ბინა 42, თბილისი',
  preferredBranchId: 'lubliana',
}

export const MOCK_PRESCRIPTIONS: PrescriptionItem[] = [
  {
    id: 'rx-2026-081',
    code: 'RX-99214-GEO',
    productName: 'ომეპრაზოლი-ნეო 20მგ N40 კაფ',
    activeSubstance: 'Omeprazole 20mg (Neopharmi)',
    doctorName: 'დოქტ. თენგიზ ბოკერია',
    clinic: 'თბილისის ცენტრალური საუნივერსიტეტო კლინიკა',
    issuedDate: '2026-10-25',
    validUntil: '2026-11-25',
    status: 'active',
    dosageInstructions: '1 კაფსულა დილით უზმოზე (28 დღიანი კურსი)',
    remainingPacks: 1,
  },
  {
    id: 'rx-2026-014',
    code: 'RX-77402-GEO',
    productName: 'კაპტოპრილი ნეო 25მგ №40 ტაბ',
    activeSubstance: 'Captopril 25mg (Neopharmi)',
    doctorName: 'პროფ. ნიკოლოზ ყიფშიძე',
    clinic: 'აკად. ღუდუშაურის სახელობის ეროვნული სამედიცინო ცენტრი',
    issuedDate: '2026-09-10',
    validUntil: '2027-03-10',
    status: 'active',
    dosageInstructions: '1 ტაბლეტი დღეში ორჯერ წნევის კონტროლით',
    remainingPacks: 2,
  },
]

export const INITIAL_ORDERS: OrderResult[] = [
  {
    orderId: 'NP-841920',
    createdAt: '14:20',
    dateStr: 'დღეს',
    items: [
      { product: MOCK_PRODUCTS[0], quantity: 1 }, // ვალოსედი №40
      { product: MOCK_PRODUCTS[8], quantity: 1 }, // NEODERMI დღის კრემი
    ],
    subtotal: 36.70,
    deliveryFee: 4.50,
    total: 41.20,
    fulfillmentType: 'wolt_delivery',
    branch: CLINICAL_BRANCHES[0],
    deliveryAddress: 'ილია ჭავჭავაძის გამზ. 37, ბინა 42',
    customer: {
      name: 'გიორგი მაისურაძე',
      phone: '+995 599 12 34 56',
    },
    paymentMethod: 'online_card',
    woltTrackingUrl: 'https://wolt.com/tracking/wolt-neopharmi-841920',
    woltStatus: 'active',
    estimatedMinutes: 25,
    orderStatus: 'courier_on_the_way',
    trackingCode: 'NEO-5821',
    canRefill: true,
  },
  {
    orderId: 'NP-789234',
    createdAt: '10:45',
    dateStr: 'გუშინ',
    items: [
      { product: MOCK_PRODUCTS[18], quantity: 1 }, // ალოფერი
      { product: MOCK_PRODUCTS[19], quantity: 1 }, // გეომინი N20
    ],
    subtotal: 32.00,
    deliveryFee: 7.00,
    total: 39.00,
    fulfillmentType: 'regional_delivery',
    branch: CLINICAL_BRANCHES[0],
    deliveryAddress: 'ქუთაისი, აღმაშენებლის გამზ. 24, ბინა 12',
    customer: {
      name: 'გიორგი მაისურაძე',
      phone: '+995 599 12 34 56',
    },
    paymentMethod: 'online_card',
    orderStatus: 'processing',
    postalTrackingCode: 'GEO-NEO-894129',
    canRefill: true,
  },
  {
    orderId: 'NP-652190',
    createdAt: '12:10',
    dateStr: '27 ოქტომბერი 2026',
    items: [
      { product: MOCK_PRODUCTS[14], quantity: 1 }, // ნეობეიბი
    ],
    subtotal: 14.80,
    deliveryFee: 0.00,
    total: 14.80,
    fulfillmentType: 'click_and_collect',
    branch: CLINICAL_BRANCHES[1], // ვაკე-საბურთალო
    customer: {
      name: 'გიორგი მაისურაძე',
      phone: '+995 599 12 34 56',
    },
    paymentMethod: 'on_pickup',
    orderStatus: 'ready_for_pickup',
    pickupCode: '4910',
    canRefill: true,
  },
  {
    orderId: 'NP-541200',
    createdAt: '16:30',
    dateStr: '19 ოქტომბერი 2026',
    items: [
      { product: MOCK_PRODUCTS[3], quantity: 2 }, // ალთეს სიროფი
    ],
    subtotal: 14.80,
    deliveryFee: 0.00,
    total: 14.80,
    fulfillmentType: 'click_and_collect',
    branch: CLINICAL_BRANCHES[0],
    customer: {
      name: 'გიორგი მაისურაძე',
      phone: '+995 599 12 34 56',
    },
    paymentMethod: 'on_pickup',
    orderStatus: 'delivered',
    canRefill: true,
  },
  {
    orderId: 'NP-419082',
    createdAt: '11:15',
    dateStr: '12 ოქტომბერი 2026',
    items: [
      { product: MOCK_PRODUCTS[1], quantity: 2 }, // ვალოსედი წვეთები
    ],
    subtotal: 12.40,
    deliveryFee: 4.50,
    total: 16.90,
    fulfillmentType: 'wolt_delivery',
    branch: CLINICAL_BRANCHES[0],
    deliveryAddress: 'ილია ჭავჭავაძის გამზ. 37, ბინა 42',
    customer: {
      name: 'გიორგი მაისურაძე',
      phone: '+995 599 12 34 56',
    },
    paymentMethod: 'online_card',
    orderStatus: 'delivered',
    canRefill: true,
  },
]
