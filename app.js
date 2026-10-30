/* ============================================================
   Certo Drive / 체르토 드라이브 — site script (vanilla JS)
   ============================================================ */

/* ---- 1. CONFIG: 배포 시 이 값만 바꾸면 됩니다 ---- */
var CONFIG = {
  DRIVE_FORM_ID: "xkjnvdjr", // 차량 문의 Formspree 폼 ID (https://formspree.io/f/여기값)
  RESERVATION_FORM_ID: "xkjnvdjr", // 예약대행 문의 Formspree 폼 ID (차량 문의와 동일한 폼 사용)
  CONTACT_EMAIL: "certo@certo.kr",
  KAKAO_URL: "https://pf.kakao.com/_QwxdxhX",
  PHONE_DISPLAY: "010-7748-4644",
  PHONE_TEL: "+821077484644"
};

/* ---- 2. 다국어 사전 (KR 기본 / EN 전환) ---- */
var I18N = {
  "meta.title": { ko: "체르토 드라이브 | 해외 한인택시·공항픽업·기사 포함 차량·VIP 의전", en: "Certo Drive | Global Airport Pickup, Korean-Speaking Driver & VIP Escort" },
  "meta.description": { ko: "체르토 드라이브는 전 세계 주요 도시의 공항픽업, 기사 포함 차량부터 외국인관광 의전차량, VIP 벤츠·스프린터 의전, 영어 가능 기사 배정, 기업 출장과 프라이빗 투어, 현지 예약대행까지 지원합니다. 한국어 상담으로 맞춤 견적을 문의하세요.", en: "Certo Drive supports airport pickup, chauffeured vehicles, VIP Mercedes-Benz and Sprinter escort for foreign tour groups, English-speaking drivers, business travel, private tours, and local reservation agency services in major cities worldwide. Get a custom quote with Korean-language support." },

  "nav.services": { ko: "차량 서비스", en: "Vehicle Services" },
  "nav.reservations": { ko: "예약대행", en: "Reservations" },
  "nav.vehicles": { ko: "차량", en: "Vehicles" },
  "nav.process": { ko: "이용방법", en: "How It Works" },
  "nav.business": { ko: "기업·기관", en: "For Organizations" },
  "nav.cities": { ko: "지역", en: "Regions" },
  "nav.faq": { ko: "FAQ", en: "FAQ" },
  "nav.contact": { ko: "문의", en: "Contact" },
  "nav.cta": { ko: "견적·예약 문의", en: "Quote & Reservation Inquiry" },
  "nav.airport": { ko: "공항픽업·샌딩", en: "Airport Pickup & Drop-off" },
  "nav.corporateVip": { ko: "출장·기업의전", en: "Business & Corporate Escort" },
  "nav.longTerm": { ko: "장기 전담", en: "Long-Term Dedicated" },
  "nav.intercity": { ko: "도시 간 이동", en: "Intercity Transfer" },
  "nav.golfEvents": { ko: "골프·행사", en: "Golf & Events" },
  "nav.premium": { ko: "프리미엄", en: "Premium" },
  "nav.quoteInquiry": { ko: "견적 문의", en: "Quote Inquiry" },

  "kakao.chat": { ko: "카카오톡 상담", en: "Chat on KakaoTalk" },

  "hero.headlineMain": { ko: "공항픽업부터 기업의전, 프라이빗투어, 장기 전담까지", en: "From Airport Pickup to Corporate Escort, Private Tours, and Long-Term Dedicated Service" },
  "hero.sub": { ko: "원하는 일정대로 이용하는 국내외 기사 포함 전용 차량 서비스입니다. 공항에서의 하루 일정부터 여러 날에 걸친 장기 전담까지, 한국어로 편하게 준비하세요.", en: "A chauffeured private vehicle service you use on your own schedule, in Korea and abroad — from a single airport transfer to a long-term, multi-day dedicated itinerary, all prepared in Korean." },
  "hero.ctaPrimary": { ko: "차량 견적 요청", en: "Request a Vehicle Quote" },
  "hero.ctaReservation": { ko: "예약대행 문의", en: "Reservation Inquiry" },
  "hero.note": { ko: "카카오톡 상담은 즉시 가능 · 견적 문의는 보통 1영업일 이내 회신", en: "KakaoTalk chat is available instantly · quote requests usually get a reply within 1 business day" },

  "trust.item1": { ko: "해외 주요 도시 대응", en: "Coverage in major cities abroad" },
  "trust.item2": { ko: "한국어 상담", en: "Korean-language support" },
  "trust.item3": { ko: "기업·기관 견적 가능", en: "Quotes for businesses & institutions" },
  "trust.item4": { ko: "다일정 차량 조율", en: "Multi-schedule vehicle coordination" },
  "trust.item5": { ko: "SUV · 미니밴 · 밴", en: "SUV · Minivan · Van" },

  "services.eyebrow": { ko: "SERVICES", en: "SERVICES" },
  "services.title": { ko: "어떤 이동이 필요하신가요?", en: "What Kind of Trip Do You Need?" },
  "services.subtitle": { ko: "목적에 맞는 서비스를 선택하면 자세한 내용을 확인할 수 있습니다.", en: "Choose the service that fits your purpose to see more details." },
  "svc.more": { ko: "자세히 보기", en: "Learn more" },

  "chooser.title": { ko: "차량만 필요한가요, 예약까지 필요한가요?", en: "Just a Vehicle, or Reservations Too?" },
  "chooser.subtitle": { ko: "필요하신 쪽을 선택하면 해당 서비스로 바로 이동합니다.", en: "Pick the one you need and jump straight to that service." },
  "chooser.vehicle.title": { ko: "차량 서비스", en: "Vehicle Services" },
  "chooser.vehicle.item1": { ko: "공항 픽업", en: "Airport pickup" },
  "chooser.vehicle.item2": { ko: "기사 포함 차량", en: "Chauffeured vehicle" },
  "chooser.vehicle.item3": { ko: "기업 출장", en: "Corporate travel" },
  "chooser.vehicle.item4": { ko: "바이어 의전", en: "Buyer escort" },
  "chooser.vehicle.item5": { ko: "가족 이동", en: "Family travel" },
  "chooser.vehicle.cta": { ko: "차량 서비스 보기", en: "See Vehicle Services" },
  "chooser.reservation.title": { ko: "예약대행 서비스", en: "Local Reservation Service" },
  "chooser.reservation.item1": { ko: "랜드마크", en: "Landmarks" },
  "chooser.reservation.item2": { ko: "미술관", en: "Art museums" },
  "chooser.reservation.item3": { ko: "박물관", en: "Museums" },
  "chooser.reservation.item4": { ko: "전망대", en: "Observation decks" },
  "chooser.reservation.item5": { ko: "레스토랑", en: "Restaurants" },
  "chooser.reservation.item6": { ko: "파인다이닝", en: "Fine dining" },
  "chooser.reservation.cta": { ko: "예약대행 보기", en: "See Reservation Service" },

  "servicesA.label": { ko: "A. 차량 서비스", en: "A. Vehicle Services" },
  "servicesB.label": { ko: "B. 현지 예약대행", en: "B. Local Reservations" },
  "servicesB.subtitle": { ko: "직접 예약하기 번거로운 랜드마크·레스토랑을 대신 확인하고 예약해 드립니다.", en: "We check and book landmarks and restaurants on your behalf, so you don't have to." },

  "resvSvc.landmark.name": { ko: "랜드마크 예약", en: "Landmark Reservations" },
  "resvSvc.landmark.desc": { ko: "성당, 미술관, 전망대 등 인기 장소의 입장 예약 가능 여부를 확인합니다.", en: "We check entry availability for popular landmarks, museums, and observation decks." },
  "resvSvc.landmark.d1": { ko: "원하는 날짜와 시간 기준으로 확인", en: "Checked against your preferred date and time" },
  "resvSvc.landmark.d2": { ko: "공식 사이트 또는 제휴 경로로 진행", en: "Booked via official or partner channels" },
  "resvSvc.landmark.d3": { ko: "현지 운영 상황에 따라 가능 여부 상이", en: "Availability depends on local operations" },

  "resvSvc.museum.name": { ko: "미술관·박물관 예약", en: "Art Museum & Museum Reservations" },
  "resvSvc.museum.desc": { ko: "특별 전시, 타임슬롯 입장이 필요한 미술관과 박물관 예약을 확인합니다.", en: "We check reservations for special exhibitions and timed-entry museums." },
  "resvSvc.museum.d1": { ko: "특별 전시 일정 확인", en: "Special exhibition schedules checked" },
  "resvSvc.museum.d2": { ko: "가이드 투어 연계 가능 여부 확인", en: "Guided-tour options checked where available" },
  "resvSvc.museum.d3": { ko: "타임슬롯 입장 기준으로 안내", en: "Arranged around timed-entry slots" },

  "resvSvc.observation.name": { ko: "전망대·관광지 예약", en: "Observation Decks & Attractions" },
  "resvSvc.observation.desc": { ko: "전망대, 궁전, 유적지 등 인기 관광지의 예약 가능 여부를 확인합니다.", en: "We check availability for observation decks, palaces, and historic sites." },
  "resvSvc.observation.d1": { ko: "혼잡 시간대 회피 일정 상담", en: "Guidance on avoiding peak-hour crowds" },
  "resvSvc.observation.d2": { ko: "차량 이동과 함께 일정 조율 가능", en: "Can be coordinated with vehicle transport" },
  "resvSvc.observation.d3": { ko: "현지 정책에 따라 가능 여부 상이", en: "Availability varies by local policy" },

  "resvSvc.restaurant.name": { ko: "레스토랑 예약", en: "Restaurant Reservations" },
  "resvSvc.restaurant.desc": { ko: "현지 인기 레스토랑, 기념일 식사 등의 예약 가능 여부를 확인합니다.", en: "We check availability at popular local restaurants, including anniversary dinners." },
  "resvSvc.restaurant.d1": { ko: "날짜·시간·인원 기준으로 확인", en: "Checked by date, time, and party size" },
  "resvSvc.restaurant.d2": { ko: "레스토랑 미정 시 후보 정리 가능", en: "We can shortlist options if undecided" },
  "resvSvc.restaurant.d3": { ko: "예약금·취소 규정은 사전 안내", en: "Deposit and cancellation terms shared in advance" },

  "resvSvc.fine.name": { ko: "파인다이닝 예약", en: "Fine Dining Reservations" },
  "resvSvc.fine.desc": { ko: "미쉐린 레스토랑 등 예약이 까다로운 파인다이닝 예약을 확인합니다.", en: "We check reservations at fine-dining and Michelin-listed restaurants." },
  "resvSvc.fine.d1": { ko: "선결제·예약금 여부 사전 확인", en: "Deposit or prepayment requirements confirmed first" },
  "resvSvc.fine.d2": { ko: "기념일·특별 요청 전달 가능", en: "Anniversary or special requests can be passed along" },
  "resvSvc.fine.d3": { ko: "가능 여부는 날짜에 따라 상이", en: "Availability varies by date" },

  "resvSvc.group.name": { ko: "단체 식사 예약", en: "Group Dining Reservations" },
  "resvSvc.group.desc": { ko: "기업 디너, 바이어 식사 등 단체 인원 레스토랑 예약을 지원합니다.", en: "We support group restaurant bookings for corporate dinners and buyer meals." },
  "resvSvc.group.d1": { ko: "프라이빗 다이닝룸 가능 여부 확인", en: "Private dining room availability checked" },
  "resvSvc.group.d2": { ko: "인원 변경 시 재확인 후 안내", en: "Headcount changes reconfirmed before booking" },
  "resvSvc.group.d3": { ko: "차량 이동과 함께 조율 가능", en: "Can be coordinated with vehicle transport" },

  "svc.airport.name": { ko: "공항 픽업", en: "Airport Pickup" },
  "svc.airport.desc": { ko: "공항 도착 후 호텔, 회사, 행사장 등 원하는 장소까지 차량을 준비합니다. 항공편과 인원, 짐 개수를 보내주시면 일정에 맞는 차량을 확인해드립니다.", en: "A vehicle ready for you after arrival, to your hotel, office, or venue. Share your flight, party size, and luggage, and we'll check what fits." },
  "svc.airport.d1": { ko: "공항 도착 픽업과 출국 이동 모두 가능", en: "Arrival pickup and departure transfers both available" },
  "svc.airport.d2": { ko: "심야·이른 아침 도착도 상담 가능", en: "Late-night and early-morning arrivals welcome" },
  "svc.airport.d3": { ko: "캐리어·골프백 등 짐이 많으면 SUV 상담", en: "Ask about an SUV for heavy luggage or golf bags" },

  "svc.business.name": { ko: "기업 및 VIP 차량 (Business & VIP Chauffeur)", en: "Business & VIP Chauffeur" },
  "svc.business.desc": { ko: "해외 바이어 의전, 임원 이동, 행사·전시회 차량 등 해외 출장 중 공항, 호텔, 회사, 미팅 장소를 잇는 비즈니스 차량 일정을 준비합니다. 중요한 일정일수록 Premium 등급 기사 차량을 권해드립니다.", en: "For overseas buyer escorts, executive transport, and event vehicles — a schedule linking the airport, hotel, office, and meeting venues during a trip abroad. For high-stakes schedules, we recommend our Premium chauffeur tier." },
  "svc.business.d1": { ko: "공항 → 호텔 → 회사 등 다구간 이동", en: "Multi-stop routes: airport → hotel → office" },
  "svc.business.d2": { ko: "해외 바이어 일정 및 임원 차량 포함", en: "Covers buyer visits and executive transport" },
  "svc.business.d3": { ko: "다일정 출장, 여러 대 동시 배정 가능", en: "Multiple vehicles for multi-day trips" },

  "svc.exhibition.name": { ko: "전시회 · 비즈니스 차량", en: "Trade Shows & Business Events" },
  "svc.exhibition.desc": { ko: "박람회, 전시회, 컨퍼런스처럼 하루 일정이 여러 장소로 나뉘는 출장에 적합합니다. 전시장 이동, 미팅, 저녁 일정, 호텔 복귀까지 필요한 구간만 선택하거나 하루 일정으로 구성할 수 있습니다.", en: "Suited to trade shows, exhibitions, and conferences, where a single day splits across several venues. Pick individual legs or book the whole day — exhibition hall, meetings, dinner, and the ride back." },
  "svc.exhibition.d1": { ko: "전시장·미팅·식사 장소 등 다구간 이동", en: "Multi-stop transport to the hall, meetings, and dinner" },
  "svc.exhibition.d2": { ko: "하루 단위 또는 구간별 선택 가능", en: "Book by the day or by individual leg" },
  "svc.exhibition.d3": { ko: "통역이 함께 필요하면 별도 상담", en: "Ask separately if an interpreter is also needed" },

  "svc.dedicated.name": { ko: "데일리 차량 (Daily Chauffeur)", en: "Daily Chauffeur" },
  "svc.dedicated.desc": { ko: "관광만을 위한 서비스가 아니라 출장, 쇼핑, 골프, 레스토랑 방문, 가족 일정, 병원 방문, 행사 참석 등 하루 동안 여러 장소를 오가야 할 때 이용하는 기사 포함 차량 서비스입니다. 4시간, 8시간, 종일 중 필요한 시간에 맞춰 기사와 차량을 배정합니다.", en: "Not just for sightseeing — a chauffeured vehicle for a day that moves between several places: business, shopping, golf, dining, family errands, medical visits, or an event. A driver and vehicle are assigned for 4 hours, 8 hours, or a full day, as needed." },
  "svc.dedicated.d1": { ko: "미팅이나 관광 중 대기 요청 가능", en: "The driver can wait during meetings or sightseeing" },
  "svc.dedicated.d2": { ko: "호텔 출발 및 복귀 포함", en: "Includes pickup and return at your hotel" },
  "svc.dedicated.d3": { ko: "출장과 여행 모두 이용 가능", en: "Works for both business trips and travel" },

  "svc.intercity.name": { ko: "도시 간 장거리 이동 (Intercity Transfer)", en: "Intercity Transfer" },
  "svc.intercity.desc": { ko: "밴쿠버 → 시애틀, 상하이 → 쑤저우, 밀라노 → 코모 호수, 도쿄 → 인근 도시처럼 해외 도시 간 이동은 물론, 서울 → 지방 사업장·공장·호텔·골프장·행사장 같은 국내 장거리 이동도 가능합니다. 공항이나 기차역을 거치지 않고 호텔, 회사, 숙소 사이를 바로 이동할 수 있습니다.", en: "Vancouver → Seattle, Shanghai → Suzhou, Milan → Lake Como, Tokyo → nearby cities — and domestic routes too, such as Seoul to a regional office, factory, hotel, golf course, or event venue. Travel directly between hotels, offices, and residences, without routing through an airport or train station." },
  "svc.intercity.d1": { ko: "기차·항공편 대신 호텔 간 직행 이동", en: "A direct hotel-to-hotel ride, instead of a train or flight" },
  "svc.intercity.d2": { ko: "짐이 많은 구간 이동에 적합", en: "Suited to legs with a lot of luggage" },
  "svc.intercity.d3": { ko: "장거리 구간은 사전 가능 여부 확인", en: "Availability for longer routes is confirmed in advance" },

  "svc.interpreter.name": { ko: "차량 + 현지 통역", en: "Vehicle + Local Interpreter" },
  "svc.interpreter.desc": { ko: "차량과 통역이 함께 필요한 출장은 일정에 맞춰 각각 준비합니다. 통역사는 비즈니스 미팅, 전시회, 공장 방문 등 일정에 따라 별도로 배정합니다.", en: "When a trip needs both a vehicle and an interpreter, each is arranged to fit the schedule. The interpreter is assigned separately, for meetings, exhibitions, or factory visits." },
  "svc.interpreter.d1": { ko: "지역과 언어 조합에 따라 가능 여부 확인", en: "Availability depends on region and language pair" },
  "svc.interpreter.d2": { ko: "차량과 통역 일정을 함께 조율", en: "Vehicle and interpreter schedules coordinated together" },
  "svc.interpreter.d3": { ko: "예약 전 통역사 가능 여부를 먼저 확인", en: "Interpreter availability is confirmed before booking" },

  "svc.edu.name": { ko: "교육 연수", en: "Education & Training Visits" },
  "svc.edu.desc": { ko: "교육청, 학교, 연수단의 단체 이동을 지원합니다.", en: "Group transport for school districts, schools, and training delegations." },
  "svc.edu.d1": { ko: "연수단, 자매학교 방문 등 지원", en: "Supports delegations and sister-school visits" },
  "svc.edu.d2": { ko: "인원에 맞춰 SUV·미니밴 배정", en: "SUV or minivan assigned to group size" },
  "svc.edu.d3": { ko: "참가 인원 기준 견적 안내", en: "Quotes based on participant count" },

  "svc.airportDropoff.name": { ko: "공항 샌딩 (Airport Drop-off)", en: "Airport Drop-off" },
  "svc.airportDropoff.desc": { ko: "호텔, 자택, 회사 등에서 출발해 공항까지 이동하는 공항 샌딩 서비스입니다. 출국 시간에 맞춰 여유 있게 픽업 시간을 잡아드립니다.", en: "From your hotel, residence, or office to the airport, timed with your departure in mind." },
  "svc.airportDropoff.d1": { ko: "출국 항공편 시간에 맞춰 픽업 시간 조율", en: "Pickup time set around your departure flight" },
  "svc.airportDropoff.d2": { ko: "호텔·자택·회사 등 어디서든 출발 가능", en: "Departs from your hotel, residence, or office" },
  "svc.airportDropoff.d3": { ko: "짐이 많은 경우 SUV·밴 상담 가능", en: "Ask about an SUV or van for heavier luggage" },

  "svc.p2p.name": { ko: "도시 내 단순 이동 (Point-to-Point Transfer)", en: "Point-to-Point Transfer" },
  "svc.p2p.desc": { ko: "호텔 → 레스토랑, 호텔 → 미팅 장소, 회사 → 행사장, 호텔 → 쇼핑몰처럼 도시 내 한 장소에서 다른 장소로 바로 이동하는 서비스입니다.", en: "A direct ride between two points in the city — hotel to restaurant, hotel to a meeting, office to a venue, hotel to a shopping district." },
  "svc.p2p.d1": { ko: "편도 이동도 요청 가능", en: "One-way transfers are available" },
  "svc.p2p.d2": { ko: "저녁 약속, 미팅 등 단건 이동에 적합", en: "Suited to a single dinner, meeting, or appointment" },
  "svc.p2p.d3": { ko: "당일 여러 건 요청 시 데일리 차량도 상담", en: "For several trips in one day, ask about Daily Chauffeur instead" },

  "svc.tierLabel": { ko: "Standard · Premium 선택 가능", en: "Available in Standard and Premium" },

  "svc.corporateVip.name": { ko: "해외 바이어·손님 전담 차량", en: "Corporate Buyer & VIP Guest Chauffeur" },
  "svc.corporateVip.desc": { ko: "국내 기업의 총무팀, 인사팀, 비서실, 해외사업팀에서 외국인 바이어, 해외 본사 임원, 파트너사 관계자, VIP 손님의 방한 일정을 전담 차량과 기사로 지원하는 서비스입니다. 인천공항 픽업부터 본사 방문, 미팅, 식사, 서울 투어, 출국 샌딩까지 하나의 흐름으로 연결합니다.", en: "For Korean companies' general affairs, HR, executive office, or overseas business teams hosting foreign buyers, visiting headquarters executives, partner contacts, or VIP guests — a dedicated vehicle and chauffeur for the entire visit, from Incheon Airport pickup through headquarters visits, meetings, meals, a Seoul tour, and the departure drop-off." },
  "svc.corporateVip.d1": { ko: "해외 본사 임원·바이어 방한, 실사팀 방문 등에 적합", en: "Suited to visiting executives, buyers, and due-diligence teams" },
  "svc.corporateVip.d2": { ko: "공장·사업장 방문, 전시회 참석 일정 포함 가능", en: "Can include factory visits, site tours, and trade show attendance" },
  "svc.corporateVip.d3": { ko: "담당자가 매번 차량을 다시 부르지 않도록 전 일정 전담 배정", en: "One dedicated assignment for the whole visit, so your team isn't rebooking a car for every leg" },

  "premium.kicker": { ko: "GLOBAL CHAUFFEUR SERVICE", en: "GLOBAL CHAUFFEUR SERVICE" },
  "premium.title": { ko: "프리미엄 기사 포함 차량", en: "Premium Chauffeur Service" },
  "premium.subtitle": { ko: "Airport Transfers, Business Travel & Private Daily Chauffeur Worldwide", en: "Airport Transfers, Business Travel & Private Daily Chauffeur Worldwide" },
  "premium.desc": { ko: "공항 픽업·샌딩부터 기업 출장, VIP 의전, 해외 바이어 방한 일정, 프라이빗 투어, 여러 날의 장기 전담 일정까지. 상위 등급 차량과 전문 기사를 국내외 주요 도시에서 이용하실 수 있습니다.", en: "Upgrade your journey with premium vehicles and professional chauffeurs. Available for airport transfers, business travel, visiting foreign buyers, private tours, and multi-day long-term dedicated schedules — in Korea and abroad." },
  "premium.ctaRequest": { ko: "프리미엄 서비스 문의", en: "Request Premium Service" },
  "premium.ctaView": { ko: "차량 등급 보기", en: "View Vehicle Classes" },
  "premium.ctaQuote": { ko: "견적 요청", en: "Get a Quote" },

  "tier.title": { ko: "Standard 또는 Premium, 필요에 맞게 선택하세요", en: "Choose Standard or Premium for Your Journey" },
  "tier.subtitle": { ko: "공항 픽업, 샌딩, 시내 이동부터 비즈니스 출장, VIP 의전까지. 차량 등급만 다를 뿐 전문 기사 서비스는 동일하게 제공됩니다.", en: "From airport transfers and city rides to business travel and VIP escorts — both tiers are a professional chauffeur service, the vehicle class is what changes." },

  "tier.standard.badge": { ko: "STANDARD", en: "STANDARD" },
  "tier.standard.title": { ko: "Standard", en: "Standard" },
  "tier.standard.desc": { ko: "공항 픽업, 공항 샌딩, 시내 이동, 출장, 데일리 차량 등 일상적인 이동에 사용하는 기본 등급의 기사 포함 차량 서비스입니다.", en: "A professional chauffeured vehicle service for everyday transportation — airport pickups, drop-offs, city transfers, business trips, and daily use." },
  "tier.standard.v1": { ko: "일반 세단", en: "Sedan" },
  "tier.standard.v2": { ko: "SUV", en: "SUV" },
  "tier.standard.v3": { ko: "미니밴", en: "Minivan" },
  "tier.standard.f1": { ko: "전문 기사 동행", en: "Professional driver" },
  "tier.standard.f2": { ko: "일정에 맞춘 유연한 이용", en: "Flexible scheduling" },
  "tier.standard.f3": { ko: "공항·시내·출장 전 구간 이용 가능", en: "Covers airport, city, and business transfers" },
  "tier.standard.note": { ko: "도시, 인원, 짐의 양에 따라 실제 제공 차량은 달라질 수 있습니다.", en: "The actual vehicle provided may vary by city, party size, and luggage." },

  "tier.premium.badge": { ko: "PREMIUM", en: "PREMIUM" },
  "tier.premium.title": { ko: "Premium", en: "Premium" },
  "tier.premium.desc": { ko: "기업 임원, VIP 고객, 중요한 손님, 허니문·기념일 등 특별한 일정에 어울리는 상위 등급 차량과 전문 기사 서비스입니다.", en: "A higher-class vehicle and professional chauffeur suited to executives, VIP guests, important clients, honeymoons, and anniversaries." },
  "tier.premium.v1": { ko: "벤츠 S클래스급", en: "Mercedes-Benz S-Class or equivalent" },
  "tier.premium.v2": { ko: "BMW 7시리즈급", en: "BMW 7 Series or equivalent" },
  "tier.premium.v3": { ko: "제네시스 G90급", en: "Genesis G90 or equivalent" },
  "tier.premium.v4": { ko: "렉서스 LS급", en: "Lexus LS or equivalent" },
  "tier.premium.v5": { ko: "프리미엄 SUV", en: "Premium SUV" },
  "tier.premium.v6": { ko: "프리미엄 미니밴 또는 VIP 밴", en: "Premium Minivan / VIP Van" },
  "tier.premium.f1": { ko: "상위 등급 차량", en: "Higher-class vehicle" },
  "tier.premium.f2": { ko: "전문 기사", en: "Professional chauffeur" },
  "tier.premium.f3": { ko: "유연한 일정", en: "Flexible itinerary" },
  "tier.premium.f4": { ko: "공항 픽업 및 샌딩", en: "Airport Pickup & Drop-off" },
  "tier.premium.f5": { ko: "기업 및 VIP 의전", en: "Business & VIP Escort" },
  "tier.premium.f6": { ko: "프라이빗 데일리 차량", en: "Private daily service" },
  "tier.premium.f7": { ko: "출발지부터 목적지까지 직접 이동", en: "Door-to-door transportation" },
  "tier.premium.f8": { ko: "고객 맞춤 일정", en: "Customized schedule" },
  "tier.premium.f9": { ko: "외국인 방문객 전담 이동", en: "Dedicated transport for foreign visitors" },
  "tier.premium.f10": { ko: "일정 변경 대응", en: "Responsive to itinerary changes" },
  "tier.premium.f11": { ko: "기업 담당자와 사전 일정 조율", en: "Pre-coordinated with your company contact" },
  "tier.premium.note": { ko: "위 차량은 동급 차량으로 배차될 수 있습니다. 지역별 차량 수급 상황에 따라 실제 차량은 달라질 수 있습니다.", en: "These vehicles may be substituted with an equivalent model. The actual vehicle provided depends on regional availability." },

  "tier.special.title": { ko: "Maybach & Special Vehicles", en: "Maybach & Special Vehicles" },
  "tier.special.desc": { ko: "마이바흐, 벤츠 스프린터, VIP 밴 및 일부 고급 차량은 특정 도시에서만 이용할 수 있습니다. 예약 전 현지 차량 수급 여부를 확인한 뒤 최종 확정됩니다.", en: "Maybach, Mercedes-Benz Sprinter, VIP Van, and select luxury vehicles are available in specific cities only. Reservations are confirmed after checking local availability." },

  "tier.pricing.note": { ko: "프리미엄 서비스는 차량 등급, 지역, 운행 시간 및 현지 차량 수급 상황에 따라 요금이 달라집니다. 고객의 일정을 확인한 후 최종 요금을 안내드립니다.", en: "Premium Service is generally priced higher than Standard Service depending on vehicle class, city, operating time and availability. Final pricing is confirmed after itinerary review." },

  "tier.daily.title": { ko: "프리미엄 데일리 차량", en: "Premium Daily Chauffeur" },
  "tier.daily.standard.title": { ko: "Standard Daily Chauffeur", en: "Standard Daily Chauffeur" },
  "tier.daily.standard.f1": { ko: "편안한 세단 / SUV / 미니밴", en: "Comfortable Sedan / SUV / Minivan" },
  "tier.daily.standard.f2": { ko: "전문 기사", en: "Professional Driver" },
  "tier.daily.standard.f3": { ko: "유연한 일정", en: "Flexible Schedule" },
  "tier.daily.standard.f4": { ko: "공항 / 시내 / 데일리 이용 가능", en: "Airport / City / Daily Use" },
  "tier.daily.premium.title": { ko: "Premium Daily Chauffeur", en: "Premium Daily Chauffeur" },
  "tier.daily.premium.f1": { ko: "고급 세단 / 프리미엄 SUV / VIP 밴", en: "Luxury Sedan / Premium SUV / VIP Van" },
  "tier.daily.premium.f2": { ko: "전문 기사", en: "Professional Chauffeur" },
  "tier.daily.premium.f3": { ko: "상위 차량 등급", en: "Premium Vehicle Class" },
  "tier.daily.premium.f4": { ko: "VIP 및 기업 출장에 적합", en: "VIP & Business Travel" },
  "tier.daily.premium.f5": { ko: "맞춤형 데일리 일정", en: "Customized Daily Schedule" },
  "tier.daily.desc": { ko: "공항 이동만 하는 서비스가 아니라 하루 동안 기사와 차량을 이용하면서 원하는 일정대로 이동할 수 있는 서비스입니다. 호텔 → 미팅 → 점심 → 쇼핑 → 관광 → 저녁 → 호텔처럼, 출장·가족여행·VIP 방문·골프·쇼핑·기념일 등 일정에 맞춰 자유롭게 구성할 수 있습니다.", en: "Not just airport transfers — the same vehicle and chauffeur for a full day, moving through the itinerary you choose: hotel → meeting → lunch → shopping → sightseeing → dinner → hotel. Suited to business trips, family travel, VIP visits, golf, shopping, and anniversaries." },

  "tier.ctaRequest": { ko: "프리미엄 서비스 문의", en: "Request Premium Service" },
  "tier.ctaQuote": { ko: "견적 요청", en: "Get a Quote" },

  "corpVip.kicker": { ko: "FOR CORPORATE TEAMS", en: "FOR CORPORATE TEAMS" },
  "corpVip.title": { ko: "외국인 바이어·해외 손님 전담 차량", en: "Corporate Buyer & VIP Guest Chauffeur" },
  "corpVip.subtitle": { ko: "출장·기업의전 — 기업 출장부터 외국인 바이어·임원 의전까지", en: "Business & Corporate Escort — From Business Travel to Foreign Buyer and Executive Escort" },
  "corpVip.desc": { ko: "해외 바이어, 본사 임원, 파트너사 관계자의 한국 방문 일정을 공항 픽업부터 기업 방문, 식사, 맞춤 투어, 출국 샌딩까지 연결해드립니다. 총무팀, 인사팀, 비서실, 해외사업팀, 영업팀에서 일정만 전달하면 방문 목적과 인원에 맞춰 차량과 이동 동선을 구성할 수 있습니다.", en: "We connect a visiting buyer's, executive's, or partner's entire Korea itinerary — airport pickup, company visits, meals, a custom tour, and the departure drop-off. General affairs, HR, the executive office, overseas business, or sales teams just share the schedule; we build the route around the visit's purpose and headcount." },
  "corpVip.desc2": { ko: "해외 손님 의전뿐 아니라 임직원의 일반 기업 출장 차량도 함께 이용하실 수 있습니다. 단순히 기사를 배차하는 서비스가 아니라, 고객사의 전체 방한 또는 출장 일정을 하나의 차량 일정으로 연결해 운영하는 서비스입니다.", en: "Beyond escorting overseas guests, this also covers everyday corporate business travel for your own staff. It isn't simply dispatching a driver — it's running your company's entire visit or business trip as one connected vehicle schedule." },
  "corpVip.desc3": { ko: "기업 바이어 의전뿐 아니라 여행사·MICE 단체의 외국인관광 의전차량으로도 이용하실 수 있습니다. 벤츠 S클래스급부터 벤츠 스프린터까지, 인원과 일정에 맞춰 외국인관광 VIP 벤츠 의전 차량을 구성하고 스프린터 외국인관광 견적도 바로 안내해드립니다.", en: "Beyond corporate buyers, this is also available as a VIP escort vehicle for inbound tour agencies and MICE groups — from a Mercedes-Benz S-Class to a Mercedes-Benz Sprinter, sized to your group and itinerary, with a quote provided right away." },
  "corpVip.desc4": { ko: "한국어가 어려운 외국인 손님을 위해 영어 가능 기사 의전차량도 배정해드립니다. 영어 되는 기사 차량, 영어 가능 벤츠 기사 요청 모두 문의 시 말씀해 주시면 확인 후 안내드립니다.", en: "For guests who don't speak Korean, we can also assign an English-speaking driver. Let us know when you inquire, and we'll confirm availability." },
  "corpVip.tagsLabel": { ko: "포함 내용", en: "What's Included" },
  "corpVip.tag1": { ko: "외국인 바이어 픽업", en: "Foreign buyer pickup" },
  "corpVip.tag2": { ko: "해외 본사 임원 의전", en: "Overseas HQ executive escort" },
  "corpVip.tag3": { ko: "기업 방문객 전담 차량", en: "Dedicated vehicle for company visitors" },
  "corpVip.tag4": { ko: "본사 및 지사 방문", en: "HQ and branch office visits" },
  "corpVip.tag5": { ko: "거래처 이동", en: "Business partner transfers" },
  "corpVip.tag6": { ko: "공장 및 산업단지 방문", en: "Factory and industrial complex visits" },
  "corpVip.tag7": { ko: "전시회 및 박람회 이동", en: "Exhibition and trade show transfers" },
  "corpVip.tag8": { ko: "식사 및 저녁 일정", en: "Meals and evening schedules" },
  "corpVip.tag9": { ko: "호텔 이동", en: "Hotel transfers" },
  "corpVip.tag10": { ko: "출국일 공항 샌딩", en: "Departure-day airport drop-off" },
  "corpVip.tag11": { ko: "여러 날짜 일정 관리", en: "Multi-day schedule management" },
  "corpVip.tag12": { ko: "외국인관광 의전차량", en: "Foreign tour group escort vehicle" },
  "corpVip.tag13": { ko: "외국인관광 VIP 벤츠 의전", en: "VIP Mercedes-Benz escort for foreign tour groups" },
  "corpVip.tag14": { ko: "스프린터 외국인관광 견적", en: "Mercedes-Benz Sprinter quote for foreign tour groups" },
  "corpVip.tag15": { ko: "영어 가능 기사 의전차량", en: "English-speaking driver escort vehicle" },
  "corpVip.tag16": { ko: "영어 되는 기사 차량", en: "English-speaking driver vehicle" },
  "corpVip.tag17": { ko: "영어 가능 벤츠 기사", en: "English-speaking Mercedes-Benz driver" },
  "corpVip.ctaRequest": { ko: "기업 전담 차량 문의", en: "Request Corporate Chauffeur" },
  "corpVip.ctaQuote": { ko: "바이어 일정 견적 요청", en: "Get a Visit Itinerary Quote" },
  "corpVip.ctaConsult": { ko: "방한 일정 상담", en: "Consult on a Korea Visit" },
  "corpVip.scheduleLabel": { ko: "예시 일정", en: "Example Itinerary" },
  "corpVip.step1": { ko: "인천공항 픽업", en: "Incheon Airport pickup" },
  "corpVip.step2": { ko: "호텔 이동", en: "Transfer to hotel" },
  "corpVip.step3": { ko: "본사 또는 사업장 방문", en: "Visit to headquarters or site" },
  "corpVip.step4": { ko: "식사 및 바이어 미팅", en: "Meal and buyer meeting" },
  "corpVip.step5": { ko: "서울 주요 지역 투어 · 쇼핑", en: "Seoul sightseeing and shopping" },
  "corpVip.step6": { ko: "호텔 복귀", en: "Return to hotel" },
  "corpVip.step7": { ko: "출국일 공항 샌딩", en: "Airport drop-off on departure" },
  "corpVip.scheduleCaption": { ko: "기업에서 필요한 일정에 맞춰 차량과 기사를 전담 배정합니다.", en: "A vehicle and chauffeur are dedicated to your visit for as long as the itinerary runs." },
  "corpVip.standard.title": { ko: "Standard", en: "Standard" },
  "corpVip.standard.desc": { ko: "기업 방문객의 공항 픽업, 회사 방문, 미팅, 식사, 관광 등의 일정을 편안하고 안정적으로 이동할 수 있도록 제공하는 기본 기업 차량 서비스입니다.", en: "A dependable corporate vehicle service for a visitor's airport pickup, office visits, meetings, meals, and sightseeing." },
  "corpVip.premium.title": { ko: "Premium", en: "Premium" },
  "corpVip.premium.desc": { ko: "해외 본사 임원, 주요 바이어, VIP 고객, 대표이사 손님 등 중요한 방문객을 위한 상위 등급 의전 차량 서비스입니다. 공항 도착 확인부터 일정 변경 대응, 공항 샌딩까지 하나의 일정으로 세심하게 관리합니다.", en: "A higher-class escort vehicle service for visiting executives, key buyers, VIP guests, and other important visitors — managed closely from arrival confirmation through schedule changes to the departure drop-off." },
  "corpVip.premium.v4": { ko: "프리미엄 SUV", en: "Premium SUV" },
  "corpVip.premium.v5": { ko: "VIP 밴", en: "VIP Van" },
  "corpVip.premium.v6a": { ko: "벤츠 스프린터(단체 의전용)", en: "Mercedes-Benz Sprinter (group escort)" },
  "corpVip.premium.v6": { ko: "마이바흐 등 특수 차량 요청", en: "Maybach and other special-request vehicles" },

  "corpForm.title": { ko: "기업 전담 차량 문의", en: "Corporate Chauffeur Inquiry" },
  "corpForm.subtitle": { ko: "해외 바이어·손님의 방한 일정을 알려주시면 차량과 이동 동선을 구성해 안내드립니다.", en: "Tell us about your visitor's itinerary and we'll put together the vehicle and route." },
  "corpForm.step1": { ko: "STEP 1 · 담당자 및 방문객 정보", en: "STEP 1 · Contact & Visitor Details" },
  "corpForm.label.companyName": { ko: "회사명", en: "Company Name" },
  "corpForm.label.department": { ko: "담당 부서", en: "Department" },
  "corpForm.label.contactName": { ko: "담당자명", en: "Contact Person" },
  "corpForm.label.contactPhone": { ko: "연락처", en: "Contact Phone" },
  "corpForm.label.visitorNationality": { ko: "방문객 국적", en: "Visitor Nationality" },
  "corpForm.label.visitorCount": { ko: "방문 인원", en: "Number of Visitors" },
  "corpForm.label.visitPurpose": { ko: "방문 목적", en: "Purpose of Visit" },
  "corpForm.option.purposeBuyer": { ko: "해외 바이어 방문", en: "Overseas buyer visit" },
  "corpForm.option.purposeHq": { ko: "해외 본사 임원 방한", en: "Headquarters executive visit" },
  "corpForm.option.purposeClient": { ko: "외국인 고객사 방문", en: "Foreign client visit" },
  "corpForm.option.purposePartner": { ko: "해외 파트너 미팅", en: "Overseas partner meeting" },
  "corpForm.option.purposeTech": { ko: "기술진 또는 실사팀 방문", en: "Technical or due-diligence team visit" },
  "corpForm.option.purposeEvent": { ko: "기업 행사 및 전시회 참석", en: "Corporate event or trade show" },
  "corpForm.option.purposeSite": { ko: "공장 및 사업장 방문", en: "Factory or site visit" },
  "corpForm.step2": { ko: "STEP 2 · 일정 정보", en: "STEP 2 · Schedule Details" },
  "corpForm.label.arrivalDate": { ko: "입국 날짜", en: "Arrival Date" },
  "corpForm.label.departureDate": { ko: "출국 날짜", en: "Departure Date" },
  "corpForm.label.visitorFlight": { ko: "항공편", en: "Flight Number" },
  "corpForm.label.hotel": { ko: "숙소", en: "Hotel" },
  "corpForm.label.visitLocation": { ko: "회사 또는 방문 장소", en: "Company / Visit Location" },
  "corpForm.label.vehicleClass": { ko: "필요 차량 등급", en: "Required Vehicle Class" },
  "corpForm.step3": { ko: "STEP 3 · 필요 서비스", en: "STEP 3 · Services Needed" },
  "corpForm.label.dailyUse": { ko: "데일리 이용 필요", en: "Daily Use Needed" },
  "corpForm.label.tourNeeded": { ko: "투어 일정 필요", en: "Tour Needed" },
  "corpForm.label.airportPickupNeeded": { ko: "공항 픽업 필요", en: "Airport Pickup Needed" },
  "corpForm.label.airportDropoffNeeded": { ko: "공항 샌딩 필요", en: "Airport Drop-off Needed" },
  "corpForm.label.fullItinerary": { ko: "전체 일정 입력", en: "Full Itinerary" },
  "corpForm.help.fullItinerary": { ko: "여러 날짜의 일정이 있다면 아래 형식처럼 자유롭게 적어주세요.", en: "If the visit spans several days, feel free to write it out day by day." },
  "corpForm.placeholder.fullItinerary": { ko: "1일차\n인천공항 → 호텔\n\n2일차\n호텔 → 본사 → 점심 → 바이어 미팅 → 호텔\n\n3일차\n호텔 → 공장 방문 → 서울 투어 → 저녁 → 호텔\n\n4일차\n호텔 → 인천공항", en: "Day 1\nIncheon Airport → Hotel\n\nDay 2\nHotel → HQ → Lunch → Buyer meeting → Hotel\n\nDay 3\nHotel → Factory visit → Seoul tour → Dinner → Hotel\n\nDay 4\nHotel → Incheon Airport" },
  "corpForm.label.notes": { ko: "추가 요청사항", en: "Additional Requests" },
  "corpForm.submit": { ko: "기업 전담 차량 문의 보내기", en: "Send Corporate Inquiry" },

  "nav.privateTour": { ko: "프라이빗투어", en: "Private Tour" },

  "svc.freeTour.link": { ko: "프라이빗 투어 자세히 보기 →", en: "See Private Tour details →" },

  "tour.kicker": { ko: "PRIVATE TOUR", en: "PRIVATE TOUR" },
  "tour.title": { ko: "내 일정대로 움직이는 프라이빗 투어", en: "A Private Tour That Moves on Your Schedule" },
  "tour.subtitle": { ko: "맞춤형 일일투어 · 기사 포함 전용 차량", en: "Custom Daily Tour · Chauffeured Private Vehicle" },
  "tour.desc": { ko: "정해진 코스 대신 원하는 장소와 시간을 직접 선택하세요. 호텔 픽업부터 관광, 쇼핑, 식사, 근교 이동, 저녁 일정까지 기사 포함 차량으로 하루를 자유롭게 구성할 수 있습니다.", en: "Choose your own places and timing instead of a fixed course. From hotel pickup to sightseeing, shopping, meals, a trip out of town, and dinner — build your day freely with a chauffeured vehicle." },
  "tour.lead": { ko: "프라이빗 투어는 정해진 패키지 코스를 따라가는 단체 관광이 아니라, 고객이 원하는 장소와 일정에 맞춰 전용 차량과 기사를 이용하는 맞춤형 일일투어입니다. 호텔 출발 → 관광지 → 점심 → 쇼핑 → 카페 → 근교 이동 → 저녁 → 호텔 복귀처럼, 원하시는 순서 그대로 하루 동선을 구성해 드립니다. 핵심은 고객이 원하는 장소를 전용 차량과 기사로 연결해드리는 프라이빗 이동 서비스라는 점입니다.", en: "A private tour isn't a group tour following a fixed package course — it's a custom daily tour using a dedicated vehicle and chauffeur, built around the places and schedule you choose. Hotel → sightseeing → lunch → shopping → café → a trip out of town → dinner → back to the hotel, arranged in whatever order you want. At its core, it's a private transport service that connects the places you want to go, with a dedicated vehicle and driver." },
  "tour.ctaConsult": { ko: "프라이빗 투어 상담", en: "Consult on a Private Tour" },
  "tour.ctaQuote": { ko: "맞춤 일정 견적 받기", en: "Get a Custom Itinerary Quote" },

  "tour.h1.title": { ko: "원하는 일정", en: "Your Own Itinerary" },
  "tour.h1.desc": { ko: "관광지, 식당, 쇼핑, 카페, 근교 등 자유롭게 구성", en: "Sightseeing, dining, shopping, cafés, day trips — arranged freely" },
  "tour.h2.title": { ko: "전용 차량", en: "A Dedicated Vehicle" },
  "tour.h2.desc": { ko: "일정이 진행되는 동안 기사와 차량을 전용으로 이용", en: "The same vehicle and chauffeur for the whole day" },
  "tour.h3.title": { ko: "시간 선택", en: "Choose Your Hours" },
  "tour.h3.desc": { ko: "4시간부터 종일까지 일정에 맞게 선택", en: "From 4 hours to a full day, as your schedule needs" },
  "tour.h4.title": { ko: "차량 등급", en: "Vehicle Class" },
  "tour.h4.desc": { ko: "Standard 또는 Premium 중 선택", en: "Choose Standard or Premium" },

  "tour.usecaseLabel": { ko: "이런 일정에 이용하실 수 있습니다", en: "Suited to journeys like these" },
  "tour.use1": { ko: "가족여행", en: "Family trips" },
  "tour.use2": { ko: "부모님 동반 여행", en: "Traveling with parents" },
  "tour.use3": { ko: "커플 여행", en: "Couples' trips" },
  "tour.use4": { ko: "허니문", en: "Honeymoons" },
  "tour.use5": { ko: "쇼핑 일정", en: "Shopping itineraries" },
  "tour.use6": { ko: "골프 일정", en: "Golf outings" },
  "tour.use7": { ko: "출장 중 하루 자유 일정", en: "A free day during a business trip" },
  "tour.use8": { ko: "외국인 바이어 및 VIP 투어", en: "Tours for foreign buyers and VIPs" },
  "tour.use9": { ko: "해외 손님 서울 및 국내 투어", en: "Seoul and domestic tours for overseas guests" },
  "tour.use10": { ko: "레스토랑과 관광을 함께 넣은 일정", en: "Itineraries combining dining and sightseeing" },
  "tour.use11": { ko: "여러 장소를 하루 동안 이동하는 일정", en: "A day covering several locations" },
  "tour.use12": { ko: "근교 포함 일일 일정", en: "Day trips including nearby areas" },
  "tour.use13": { ko: "프라이빗 시티투어", en: "Private city tours" },
  "tour.use14": { ko: "기사 포함 투어", en: "Chauffeured tours" },
  "tour.use15": { ko: "야경 투어", en: "Night view tours" },

  "tour.hoursLabel": { ko: "이용 시간", en: "Available Hours" },
  "tour.hours4": { ko: "4시간", en: "4 hours" },
  "tour.hours6": { ko: "6시간", en: "6 hours" },
  "tour.hours8": { ko: "8시간", en: "8 hours" },
  "tour.hours10": { ko: "10시간", en: "10 hours" },
  "tour.hoursFull": { ko: "종일", en: "Full day" },
  "tour.hoursCustom": { ko: "맞춤 시간", en: "Custom hours" },
  "tour.hoursNote": { ko: "이용 시간은 지역과 일정에 따라 달라질 수 있어, 실제 예약은 상담 후 확정됩니다.", en: "Available hours can vary by city and schedule — the final booking is confirmed after a consultation." },

  "tour.examplesTitle": { ko: "이용 예시", en: "Example Itineraries" },
  "tour.examplesNote": { ko: "위 일정은 예시이며, 원하시는 장소로 자유롭게 변경하실 수 있습니다.", en: "These are example itineraries — every stop can be changed to the places you want." },
  "tour.ex.seattle.city": { ko: "시애틀", en: "Seattle" },
  "tour.ex.seattle.route": { ko: "호텔 → 시내 관광 → 점심 → 쇼핑 → 전망 포인트 → 호텔", en: "Hotel → City sightseeing → Lunch → Shopping → Viewpoint → Hotel" },
  "tour.ex.shanghai.city": { ko: "상하이", en: "Shanghai" },
  "tour.ex.shanghai.route": { ko: "호텔 → 구도심 → 점심 → 쇼핑 → 야경 → 호텔", en: "Hotel → Old town → Lunch → Shopping → Night view → Hotel" },
  "tour.ex.milan.city": { ko: "밀라노", en: "Milan" },
  "tour.ex.milan.route": { ko: "호텔 → 시내 → 쇼룸 → 점심 → 근교 → 저녁", en: "Hotel → City center → Showroom → Lunch → Nearby town → Dinner" },
  "tour.ex.tokyo.city": { ko: "도쿄", en: "Tokyo" },
  "tour.ex.tokyo.route": { ko: "호텔 → 관광 → 쇼핑 → 카페 → 저녁 → 호텔", en: "Hotel → Sightseeing → Shopping → Café → Dinner → Hotel" },
  "tour.ex.seoul.city": { ko: "서울", en: "Seoul" },
  "tour.ex.seoul.route": { ko: "호텔 → 경복궁 → 점심 → 쇼핑 → 한강 → 저녁 → 호텔", en: "Hotel → Gyeongbokgung → Lunch → Shopping → Han River → Dinner → Hotel" },

  "tour.corpTitle": { ko: "해외 바이어·VIP 손님과도 자연스럽게 연결됩니다", en: "Connects Naturally with Visiting Buyers and VIP Guests" },
  "tour.corpDesc1": { ko: "외국인 바이어가 한국을 방문했을 때, 기업 일정이 없는 날 서울이나 근교를 둘러보는 외국인 바이어 투어 전담 차량 서비스로도 이용하실 수 있습니다.", en: "For a visiting foreign buyer, this also works as a dedicated tour on a day without company meetings, covering Seoul or nearby areas." },
  "tour.corpDesc2": { ko: "해외 본사 임원이 방한했을 때는 미팅 이후 식사, 문화 일정, 관광을 연결하는 프리미엄 차량 서비스로 준비해 드립니다. 여행사 패키지가 아닌, 기업의 일정에 맞춘 자유 일정으로 진행됩니다.", en: "For a visiting executive from an overseas headquarters, we connect meals, cultural visits, and sightseeing after meetings into one premium chauffeured schedule — not a travel-agency package, but a free-form itinerary built around your company's own schedule." },
  "tour.corpLink": { ko: "기업 전담 차량 서비스 자세히 보기 →", en: "See the corporate chauffeur service →" },

  "tourForm.title": { ko: "프라이빗 투어 상담", en: "Private Tour Consultation" },
  "tourForm.subtitle": { ko: "원하는 지역과 일정만 알려주세요. 방문 장소가 아직 정해지지 않았어도 괜찮습니다. 인원, 이용 시간, 차량 등급을 기준으로 상담 후 맞춤 일정을 안내드립니다.", en: "Just tell us the region and schedule you have in mind — it's fine if the places aren't decided yet. Based on your party size, hours, and vehicle class, we'll follow up with a custom itinerary." },
  "tourForm.step1": { ko: "STEP 1 · 기본 정보", en: "STEP 1 · Basic Information" },
  "tourForm.step2": { ko: "STEP 2 · 일정과 요청사항", en: "STEP 2 · Itinerary & Requests" },

  "tourForm.label.phone": { ko: "연락처", en: "Phone" },
  "tourForm.label.country": { ko: "이용 국가", en: "Country" },
  "tourForm.label.city": { ko: "이용 도시", en: "City" },
  "tourForm.label.date": { ko: "이용 날짜", en: "Date" },
  "tourForm.label.startTime": { ko: "이용 시작 시간", en: "Start Time" },
  "tourForm.label.duration": { ko: "예상 이용 시간", en: "Expected Duration" },
  "tourForm.option.durationUnset": { ko: "아직 정하지 않음", en: "Not decided yet" },
  "tourForm.label.passengers": { ko: "탑승 인원", en: "Passengers" },
  "tourForm.label.children": { ko: "어린이 동반 여부", en: "Traveling with Children" },
  "tourForm.option.yes": { ko: "예", en: "Yes" },
  "tourForm.option.no": { ko: "아니요", en: "No" },
  "tourForm.label.luggage": { ko: "짐 개수", en: "Luggage" },
  "tourForm.label.vehicleClass": { ko: "차량 등급", en: "Vehicle Class" },
  "tourForm.option.classUndecided": { ko: "상담 후 결정", en: "Decide after consultation" },
  "tourForm.label.preferredVehicle": { ko: "희망 차량", en: "Preferred Vehicle" },
  "tourForm.option.vehSedan": { ko: "세단", en: "Sedan" },
  "tourForm.option.vehSuv": { ko: "SUV", en: "SUV" },
  "tourForm.option.vehMinivan": { ko: "미니밴", en: "Minivan" },
  "tourForm.option.vehPremiumSedan": { ko: "프리미엄 세단", en: "Premium Sedan" },
  "tourForm.option.vehPremiumSuv": { ko: "프리미엄 SUV", en: "Premium SUV" },
  "tourForm.option.vehVipVan": { ko: "VIP 밴", en: "VIP Van" },
  "tourForm.option.vehMaybachSpecial": { ko: "마이바흐 또는 특수 차량", en: "Maybach or Special Vehicle" },
  "tourForm.option.vehNoPreference": { ko: "상관없음", en: "No Preference" },

  "tourForm.label.startLocation": { ko: "출발 장소", en: "Start Location" },
  "tourForm.label.endLocation": { ko: "종료 장소", en: "End Location" },
  "tourForm.option.endHotel": { ko: "호텔 복귀", en: "Return to Hotel" },
  "tourForm.option.endOther": { ko: "다른 장소", en: "A Different Location" },
  "tourForm.option.endUnset": { ko: "아직 미정", en: "Not Decided Yet" },
  "tourForm.label.itinerary": { ko: "원하는 일정 또는 방문 장소", en: "Preferred Itinerary or Places to Visit" },
  "tourForm.help.itinerary": { ko: "가고 싶은 장소나 대략적인 일정을 적어주세요. 예: 호텔 출발 → 관광 → 점심 → 쇼핑 → 야경 → 호텔. 아직 장소가 정해지지 않았다면 '추천 필요'라고 적어주셔도 됩니다.", en: "Tell us the places or a rough itinerary. e.g. Hotel → Sightseeing → Lunch → Shopping → Night view → Hotel. If nothing is decided yet, just write \"please recommend.\"" },
  "tourForm.label.purpose": { ko: "여행 목적", en: "Purpose of Trip" },
  "tourForm.option.purposeFamily": { ko: "가족여행", en: "Family trip" },
  "tourForm.option.purposeCouple": { ko: "커플/허니문", en: "Couple / Honeymoon" },
  "tourForm.option.purposeSightseeing": { ko: "관광", en: "Sightseeing" },
  "tourForm.option.purposeShopping": { ko: "쇼핑", en: "Shopping" },
  "tourForm.option.purposeBusinessFree": { ko: "출장 중 자유 일정", en: "Free day during business trip" },
  "tourForm.option.purposeVip": { ko: "VIP/바이어", en: "VIP / Buyer" },
  "tourForm.option.purposeGolf": { ko: "골프", en: "Golf" },
  "tourForm.option.purposeOther": { ko: "기타", en: "Other" },

  "tourForm.extrasLabel": { ko: "추가 요청사항", en: "Additional Requests" },
  "tourForm.extra.carSeat": { ko: "유아 카시트", en: "Infant car seat" },
  "tourForm.extra.wheelchair": { ko: "휠체어", en: "Wheelchair" },
  "tourForm.extra.golfBag": { ko: "골프백", en: "Golf bag" },
  "tourForm.extra.largeLuggage": { ko: "대형 캐리어", en: "Large luggage" },
  "tourForm.extra.lobbyPickup": { ko: "호텔 로비 픽업", en: "Hotel lobby pickup" },
  "tourForm.extra.koreanDriver": { ko: "한국어 가능 기사 요청", en: "Korean-speaking driver requested" },
  "tourForm.extra.englishDriver": { ko: "영어 가능 기사 요청", en: "English-speaking driver requested" },
  "tourForm.help.driverLanguage": { ko: "기사 언어는 지역별로 제공 가능 여부가 다를 수 있어 사전 확인이 필요합니다.", en: "Driver language availability can vary by region and needs to be confirmed in advance." },
  "tourForm.label.notes": { ko: "기타 요청사항", en: "Other Requests" },

  "tourForm.premiumTitle": { ko: "프리미엄 선택 시 추가 정보", en: "Additional Details for Premium" },
  "tourForm.label.premiumVehicle": { ko: "희망 차량 등급", en: "Preferred Vehicle Class" },
  "tourForm.label.vipEscort": { ko: "VIP 의전 필요 여부", en: "VIP Escort Needed" },
  "tourForm.label.airportCombo": { ko: "공항 픽업 또는 샌딩 함께 이용 여부", en: "Combine with Airport Pickup/Drop-off" },
  "tourForm.label.waitNeeded": { ko: "레스토랑 및 일정 대기 필요 여부", en: "Waiting at Restaurants/Stops Needed" },
  "tourForm.label.multiDay": { ko: "여러 날짜 이용 여부", en: "Multiple Days Needed" },
  "tourForm.label.multiDayItinerary": { ko: "전체 일정 입력", en: "Full Multi-Day Itinerary" },
  "tourForm.placeholder.multiDayItinerary": { ko: "1일차\n인천공항 → 호텔\n\n2일차\n호텔 → 미팅 → 점심 → 서울 투어 → 저녁 → 호텔\n\n3일차\n호텔 → 골프장 → 저녁 → 호텔\n\n4일차\n호텔 → 인천공항", en: "Day 1\nIncheon Airport → Hotel\n\nDay 2\nHotel → Meeting → Lunch → Seoul tour → Dinner → Hotel\n\nDay 3\nHotel → Golf course → Dinner → Hotel\n\nDay 4\nHotel → Incheon Airport" },

  "tourForm.pricingNote": { ko: "프라이빗 투어는 일정과 차량에 따라 요금이 달라집니다. 입력하신 내용을 확인한 뒤 이용 가능 차량과 최종 견적을 안내드립니다.", en: "Private Tour pricing varies by itinerary and vehicle class. We'll confirm available vehicles and a final quote after reviewing your request." },
  "tourForm.submit": { ko: "맞춤 일정 상담받기", en: "Get a Custom Itinerary Consultation" },

  "cta.quoteRequest": { ko: "견적 요청", en: "Request a Quote" },
  "cta.consult": { ko: "상담하기", en: "Chat with Us" },
  "cta.scheduleInquiry": { ko: "일정 문의", en: "Ask About Scheduling" },

  "airport.kicker": { ko: "AIRPORT TRANSFER", en: "AIRPORT TRANSFER" },
  "airport.title": { ko: "공항픽업·샌딩, 가장 빠르고 확실하게", en: "Airport Pickup & Drop-off, Fast and Reliable" },
  "airport.desc": { ko: "항공편과 인원, 짐 개수만 알려주시면 공항 도착부터 호텔, 회사, 행사장까지 — 또는 반대로 공항으로 출발하는 일정까지 빠르게 확인해 드립니다.", en: "Just share your flight, party size, and luggage — we'll quickly confirm a vehicle from the airport to your hotel, office, or venue, or the reverse trip back to the airport." },
  "airport.tagsLabel": { ko: "포함 내용", en: "What's Included" },
  "airport.tag1": { ko: "공항 픽업", en: "Airport pickup" },
  "airport.tag2": { ko: "공항 샌딩", en: "Airport drop-off" },
  "airport.tag3": { ko: "호텔 이동", en: "Hotel transfers" },
  "airport.tag4": { ko: "회사 및 행사장 이동", en: "Office and venue transfers" },
  "airport.tag5": { ko: "공항 미팅", en: "Airport meet & greet" },
  "airport.tag6": { ko: "플래카드 요청", en: "Name sign on request" },
  "airport.tag7": { ko: "항공편 확인", en: "Flight tracking" },
  "airport.tag8": { ko: "짐이 많은 고객", en: "Heavy luggage" },
  "airport.tag9": { ko: "가족 및 단체 이동", en: "Family and group transfers" },
  "airport.tag10": { ko: "출장 고객 이동", en: "Business traveler transfers" },
  "airport.tag11": { ko: "인천공항 기사포함차량", en: "Incheon Airport chauffeured vehicle" },
  "airport.tag12": { ko: "인천공항 의전차량", en: "Incheon Airport escort vehicle" },
  "airport.tag13": { ko: "김포공항 픽업", en: "Gimpo Airport pickup" },
  "airport.assure1.title": { ko: "항공편 확인", en: "Flight Tracking" },
  "airport.assure1.desc": { ko: "실시간 항공편 상황을 확인해 도착 시간에 맞춰 대기합니다.", en: "We track your flight in real time and wait to match your actual arrival." },
  "airport.assure2.title": { ko: "플래카드 피킹", en: "Name Sign Pickup" },
  "airport.assure2.desc": { ko: "이름 또는 회사명이 적힌 플래카드로 공항에서 바로 만날 수 있습니다.", en: "Meet your driver at arrivals with a sign showing your name or company." },
  "airport.assure3.title": { ko: "짐 많은 일정도 OK", en: "Built for Heavy Luggage" },
  "airport.assure3.desc": { ko: "캐리어, 골프백 등 짐이 많으면 SUV·밴으로 안내해 드립니다.", en: "Traveling with suitcases, golf bags, or more? We'll suggest an SUV or van." },

  "longTerm.kicker": { ko: "LONG-TERM DEDICATED", en: "LONG-TERM DEDICATED" },
  "longTerm.title": { ko: "여러 날 동안, 하나의 차량과 기사가 함께합니다", en: "The Same Vehicle and Chauffeur, for Multiple Days" },
  "longTerm.subtitle": { ko: "장기 전담 차량 · 멀티데이 기사 포함 서비스", en: "Long-Term Dedicated Vehicle · Multi-Day Chauffeur Service" },
  "longTerm.desc": { ko: "하루 한 번 이동하는 서비스가 아니라, 공항 픽업부터 출국 샌딩까지 여러 날의 전체 일정을 하나의 차량과 기사로 전담 배정합니다.", en: "Not a single daily ride — one dedicated vehicle and chauffeur assigned to your entire multi-day schedule, from airport pickup to the final departure drop-off." },
  "longTerm.lead": { ko: "공항 픽업으로 시작해 호텔, 회사 방문, 미팅, 관광, 골프, 레스토랑, 쇼핑, 도시 간 이동, 마지막 공항 샌딩까지 — 여러 날에 걸친 전체 일정을 하나의 차량 일정으로 구성합니다. 기업, VIP, 가족 단위 고객의 고액 일정에 특히 적합한 서비스입니다.", en: "Starting with airport pickup through hotels, company visits, meetings, sightseeing, golf, dining, shopping, intercity transfers, and the final airport drop-off — your entire multi-day trip is organized as a single vehicle schedule. Especially suited to high-value itineraries for corporate, VIP, and family clients." },
  "longTerm.examplesLabel": { ko: "이런 일정에 이용하실 수 있습니다", en: "Suited to trips like these" },
  "longTerm.ex1": { ko: "2박 3일 출장", en: "A 3-day business trip" },
  "longTerm.ex2": { ko: "3박 4일 기업 방문", en: "A 4-day corporate visit" },
  "longTerm.ex3": { ko: "5일 가족여행", en: "A 5-day family trip" },
  "longTerm.ex4": { ko: "일주일 해외 출장", en: "A week-long business trip abroad" },
  "longTerm.ex5": { ko: "VIP 방한 일정", en: "A VIP visit to Korea" },
  "longTerm.ex6": { ko: "여러 도시를 이동하는 일정", en: "An itinerary spanning several cities" },
  "longTerm.flowLabel": { ko: "하나의 일정으로 연결됩니다", en: "One Connected Schedule" },
  "longTerm.flow1": { ko: "공항 픽업", en: "Airport pickup" },
  "longTerm.flow2": { ko: "호텔", en: "Hotel" },
  "longTerm.flow3": { ko: "회사 방문", en: "Company visit" },
  "longTerm.flow4": { ko: "미팅", en: "Meeting" },
  "longTerm.flow5": { ko: "관광", en: "Sightseeing" },
  "longTerm.flow6": { ko: "골프", en: "Golf" },
  "longTerm.flow7": { ko: "레스토랑", en: "Dining" },
  "longTerm.flow8": { ko: "쇼핑", en: "Shopping" },
  "longTerm.flow9": { ko: "도시 간 이동", en: "Intercity transfer" },
  "longTerm.flow10": { ko: "공항 샌딩", en: "Airport drop-off" },
  "longTerm.flowCaption": { ko: "필요한 구간만 선택하거나, 전체 일정을 하나의 차량으로 진행할 수 있습니다.", en: "Pick only the legs you need, or run the whole itinerary on one vehicle." },

  "intercitySec.kicker": { ko: "INTERCITY TRANSFER", en: "INTERCITY TRANSFER" },
  "intercitySec.title": { ko: "도시에서 도시로, 차량 하나로 편하게", en: "City to City, in One Vehicle" },
  "intercitySec.desc": { ko: "공항이나 기차역을 거치지 않고 호텔, 회사, 숙소 사이를 도시와 도시 사이까지 차량으로 바로 이동할 수 있습니다.", en: "Travel directly between hotels, offices, and residences, city to city, without routing through an airport or train station." },
  "intercitySec.audience": { ko: "캐리어가 많거나 여러 명이 함께 이동하는 고객, 출장팀, 가족여행에 특히 적합합니다.", en: "Especially suited to travelers with heavy luggage or a group, business teams, and family trips." },
  "intercitySec.r1": { ko: "밴쿠버 → 시애틀", en: "Vancouver → Seattle" },
  "intercitySec.r2": { ko: "상하이 → 쑤저우", en: "Shanghai → Suzhou" },
  "intercitySec.r3": { ko: "상하이 → 항저우", en: "Shanghai → Hangzhou" },
  "intercitySec.r4": { ko: "밀라노 → 코모", en: "Milan → Como" },
  "intercitySec.r5": { ko: "도쿄 → 인근 도시", en: "Tokyo → Nearby cities" },
  "intercitySec.r6": { ko: "서울 → 지방 사업장", en: "Seoul → Regional offices" },
  "intercitySec.r7": { ko: "공항 → 인근 도시", en: "Airport → Nearby cities" },
  "intercitySec.vehicleLabel": { ko: "SUV · 미니밴 · 프리미엄 차량 선택 가능", en: "SUV, minivan, or premium vehicle available" },

  "golfEvents.kicker": { ko: "GOLF & EVENTS", en: "GOLF & EVENTS" },
  "golfEvents.title": { ko: "골프 일정과 행사 차량, 별도로 세심하게", en: "Golf Outings and Event Vehicles, Handled with Care" },
  "golfEvents.desc": { ko: "기존 차량 서비스와 구분되는 고부가가치 일정으로, 골프백과 인원에 맞춘 차량부터 여러 대가 동시에 필요한 행사 차량까지 전담합니다.", en: "A distinct, higher-touch category — from a vehicle sized for your golf bags and party, to events that need several vehicles dispatched at once." },
  "golfEvents.golf.title": { ko: "골프 차량", en: "Golf Vehicle" },
  "golfEvents.golf.desc": { ko: "호텔 → 골프장 → 식사 → 호텔, 공항 → 골프장 → 호텔, 여러 날 골프 일정까지 지원합니다.", en: "Hotel → golf course → dining → hotel, airport → golf course → hotel, or a multi-day golf itinerary." },
  "golfEvents.golf.ex1": { ko: "호텔 → 골프장 → 식사 → 호텔", en: "Hotel → Golf course → Dining → Hotel" },
  "golfEvents.golf.ex2": { ko: "공항 → 골프장 → 호텔", en: "Airport → Golf course → Hotel" },
  "golfEvents.golf.ex3": { ko: "여러 날 골프 일정", en: "A multi-day golf itinerary" },
  "golfEvents.golf.ex4": { ko: "골프 의전차량", en: "Golf escort vehicle" },
  "golfEvents.golf.ex5": { ko: "골프 기사포함차량", en: "Golf chauffeured vehicle" },
  "golfEvents.golf.note": { ko: "상담폼에서 골프백 수량, 탑승 인원, 차량 크기를 입력하실 수 있습니다.", en: "Tell us your golf bag count, party size, and preferred vehicle size in the consultation form." },
  "golfEvents.event.title": { ko: "행사 차량", en: "Event Vehicle" },
  "golfEvents.event.desc": { ko: "기업 행사, 전시회, 박람회, 컨퍼런스, 포럼, 공연, 연회, 결혼식, VIP 행사 등에 이용하실 수 있습니다.", en: "For corporate events, exhibitions, trade shows, conferences, forums, performances, banquets, weddings, and VIP events." },
  "golfEvents.event.tag1": { ko: "행사장 픽업 및 샌딩", en: "Venue pickup and drop-off" },
  "golfEvents.event.tag2": { ko: "여러 VIP 이동", en: "Transport for multiple VIPs" },
  "golfEvents.event.tag3": { ko: "호텔과 행사장 반복 이동", en: "Repeated hotel-to-venue transfers" },
  "golfEvents.event.tag4": { ko: "행사 대기", en: "Standby during the event" },
  "golfEvents.event.tag5": { ko: "여러 차량 동시 배차", en: "Multiple vehicles dispatched at once" },
  "golfEvents.event.tag6": { ko: "미니밴 및 단체 차량", en: "Minivans and group vehicles" },
  "golfEvents.event.tag7": { ko: "프리미엄 의전 차량", en: "Premium escort vehicles" },

  "tier.premium.f12": { ko: "전담 일정 관리", en: "Dedicated itinerary management" },
  "tier.premium.f13": { ko: "대기", en: "Standby/waiting" },
  "tier.premium.f14": { ko: "프라이빗 투어", en: "Private tour" },
  "tier.premium.f15": { ko: "장기 전담", en: "Long-term dedicated" },

  "contactSvc.label": { ko: "어떤 서비스가 필요하신가요?", en: "Which service do you need?" },
  "contactSvc.airportPickup": { ko: "공항픽업", en: "Airport Pickup" },
  "contactSvc.airportDropoff": { ko: "공항샌딩", en: "Airport Drop-off" },
  "contactSvc.business": { ko: "출장·기업의전", en: "Business & Corporate Escort" },
  "contactSvc.tour": { ko: "프라이빗투어", en: "Private Tour" },
  "contactSvc.longTerm": { ko: "장기 전담", en: "Long-Term Dedicated" },
  "contactSvc.intercity": { ko: "도시 간 이동", en: "Intercity Transfer" },
  "contactSvc.golf": { ko: "골프", en: "Golf" },
  "contactSvc.event": { ko: "행사", en: "Event" },
  "contactSvc.premium": { ko: "프리미엄 의전", en: "Premium Escort" },

  "cf.label.arrivalTime": { ko: "도착 시간", en: "Arrival Time" },
  "cf.label.signNeeded": { ko: "플래카드 필요 여부", en: "Name Sign Needed" },

  "cf.label.companyName": { ko: "회사명", en: "Company Name" },
  "cf.label.fullItinerary": { ko: "전체 일정", en: "Full Itinerary" },

  "cf.label.tourDuration": { ko: "예상 이용시간", en: "Expected Duration" },
  "cf.label.tourLocation": { ko: "원하는 방문장소", en: "Preferred Places to Visit" },
  "cf.label.tourPurpose": { ko: "여행 목적", en: "Purpose of Trip" },

  "cf.label.startDate": { ko: "시작일", en: "Start Date" },
  "cf.label.endDate": { ko: "종료일", en: "End Date" },
  "cf.label.multiCity": { ko: "여러 도시 이동 여부", en: "Multiple Cities" },

  "cf.label.fromCity": { ko: "출발 도시", en: "Departure City" },
  "cf.label.toCity": { ko: "도착 도시", en: "Arrival City" },
  "cf.label.waypoint": { ko: "경유 여부", en: "Stopover Needed" },

  "cf.label.golfCourse": { ko: "골프장", en: "Golf Course" },
  "cf.label.golfBagCount": { ko: "골프백 개수", en: "Number of Golf Bags" },
  "cf.label.roundTrip": { ko: "왕복 여부", en: "Round Trip" },

  "cf.label.eventName": { ko: "행사명", en: "Event Name" },
  "cf.label.eventVenue": { ko: "행사장", en: "Event Venue" },
  "cf.label.vehicleCount": { ko: "필요 차량 수", en: "Vehicles Needed" },
  "cf.label.eventVip": { ko: "VIP 여부", en: "VIP Attendees" },
  "cf.label.waitTime": { ko: "대기시간", en: "Standby Time" },

  "cf.label.premiumVehicleClass": { ko: "희망 차량 등급", en: "Preferred Vehicle Class" },
  "cf.label.vipEscort": { ko: "VIP 의전 필요 여부", en: "VIP Escort Needed" },
  "cf.label.specialVehicle": { ko: "특수 차량 요청 여부", en: "Special Vehicle Requested" },

  "svc.family.name": { ko: "가족 · 소규모 단체 차량", en: "Family & Small Group Travel" },
  "svc.family.desc": { ko: "아이와 함께하는 가족여행이나 여러 명이 함께 이동하는 일정은 인원뿐 아니라 짐의 크기와 개수까지 확인해 차량을 정합니다. 부모님의 해외 일정도 한국에서 대신 문의할 수 있습니다.", en: "For family trips with children or a small group traveling together, the vehicle is chosen by luggage size and count, not just headcount. Family in Korea can also inquire on a parent's behalf." },
  "svc.family.d1": { ko: "유아 동반, 카시트 요청 가능", en: "Traveling with an infant? A car seat can be requested" },
  "svc.family.d2": { ko: "4~7인 소규모 그룹은 미니밴 상담", en: "Ask about a minivan for groups of 4–7" },
  "svc.family.d3": { ko: "한국에 있는 가족이 대신 예약 가능", en: "Family in Korea can book on your behalf" },

  "svc.freeTour.name": { ko: "프라이빗 투어 (맞춤형 일일투어)", en: "Private Tour (Custom Daily Tour)" },
  "svc.freeTour.desc": { ko: "정해진 패키지 관광상품이 아니라 원하는 장소와 시간을 조합하는 프라이빗 투어 차량 서비스입니다. 호텔 출발 → 관광지 → 점심 → 쇼핑 → 카페 → 저녁 → 호텔처럼, 원하시는 순서 그대로 일정을 구성할 수 있습니다.", en: "Not a fixed package tour, but a private itinerary built around the places and times you choose — hotel → sightseeing → lunch → shopping → café → dinner → hotel, arranged exactly the way you want it." },
  "svc.freeTour.d1": { ko: "가이드 투어가 아닌 차량 이동 서비스", en: "A vehicle transport service, not a guided tour" },
  "svc.freeTour.d2": { ko: "원하는 장소를 순서대로 구성 가능", en: "Stops arranged in the order you choose" },
  "svc.freeTour.d3": { ko: "레스토랑 예약은 예약대행과 함께 진행 가능", en: "Restaurant reservations can be added through our reservation service" },
  "svc.freeTour.d4": { ko: "출장 중 짬을 내 서울을 둘러보고 싶은 외국인 바이어·손님께도 연결해드립니다. 여행사 패키지가 아닌, 기업 일정에 맞춘 자유 일정으로 진행됩니다.", en: "Also available for visiting foreign buyers and guests who want to see Seoul between business meetings — not a travel-agency package, but a free-form schedule built around your company's own itinerary." },

  "resvDetail.eyebrow": { ko: "LOCAL RESERVATIONS", en: "LOCAL RESERVATIONS" },
  "resvDetail.title": { ko: "현지 예약이 필요한 일정도 함께 준비합니다", en: "We Also Prepare the Local Reservations Your Trip Needs" },
  "resvDetail.desc": { ko: "여행이나 출장 중 직접 예약하기 번거로운 랜드마크, 미술관, 박물관, 전망대, 레스토랑 등을 대신 확인하고 예약을 진행합니다. 단순 티켓 판매가 아니라, 현지 예약을 대신 확인하고 진행하는 서비스입니다.", en: "We check and handle reservations for landmarks, art museums, museums, observation decks, and restaurants that are a hassle to book yourself while traveling. This isn't a ticket shop — it's a service that confirms and carries out your local bookings on your behalf." },

  "resvDetail.landmark.title": { ko: "랜드마크 예약대행", en: "Landmark Reservations" },
  "resvDetail.landmark.categories": { ko: "성당 · 미술관 · 박물관 · 전망대 · 궁전 · 유적지 · 특별 전시 · 가이드 투어 · 타임슬롯 입장", en: "Cathedrals · Art museums · Museums · Observation decks · Palaces · Historic sites · Special exhibitions · Guided tours · Timed entry" },
  "resvDetail.landmark.note1": { ko: "원하는 날짜와 시간을 보내주시면 예약 가능 여부를 확인합니다.", en: "Send us your preferred date and time, and we'll check availability." },
  "resvDetail.landmark.note2": { ko: "공식 사이트 또는 제휴 가능한 예약 경로를 확인한 뒤 안내합니다.", en: "We check official or available partner booking channels before confirming." },
  "resvDetail.landmark.note3": { ko: "예약 가능 여부는 현지 운영 상황에 따라 달라질 수 있습니다.", en: "Availability can vary depending on local operating conditions." },

  "resvDetail.restaurant.title": { ko: "레스토랑 예약대행", en: "Restaurant Reservations" },
  "resvDetail.restaurant.categories": { ko: "파인다이닝 · 미쉐린 레스토랑 · 현지 인기 레스토랑 · 기념일 식사 · 기업 디너 · 바이어 식사 · 단체 예약 · 프라이빗 다이닝", en: "Fine dining · Michelin restaurants · Popular local restaurants · Anniversary dinners · Corporate dinners · Buyer meals · Group bookings · Private dining" },
  "resvDetail.restaurant.note1": { ko: "원하는 날짜, 시간, 인원, 레스토랑명을 보내주시면 예약 가능 여부를 확인합니다.", en: "Send us your preferred date, time, party size, and restaurant name, and we'll check availability." },
  "resvDetail.restaurant.note2": { ko: "원하는 레스토랑이 정해지지 않은 경우에는 지역, 분위기, 예산을 기준으로 후보를 정리할 수 있습니다.", en: "If you haven't decided on a restaurant, we can shortlist options based on area, mood, and budget." },
  "resvDetail.restaurant.note3": { ko: "예약금, 취소 규정, 노쇼 정책이 있는 경우 사전에 안내해 드립니다.", en: "Deposit, cancellation, and no-show policies, where they exist, are shared with you in advance." },
  "resvDetail.cta": { ko: "예약대행 자세히 보기", en: "See Reservation Service Details" },

  "landmarkPage.title": { ko: "해외 랜드마크·미술관·박물관 예약대행", en: "Overseas Landmark, Art Museum & Museum Reservations" },
  "landmarkPage.sub": { ko: "성당, 미술관, 박물관, 전망대, 궁전, 유적지까지. 입장권과 타임슬롯 예약을 대신 확인하고 진행합니다.", en: "Cathedrals, art museums, museums, observation decks, palaces, historic sites. We check and complete entry and timed-slot bookings on your behalf." },
  "landmarkPage.catTitle": { ko: "예약대행 가능 장소 유형", en: "Venue Types We Support" },
  "landmarkPage.cat1.name": { ko: "성당", en: "Cathedrals" },
  "landmarkPage.cat1.desc": { ko: "두오모, 사그라다 파밀리아 등 입장 인원이 제한된 성당 예약을 확인합니다.", en: "We check reservations for cathedrals with limited entry, such as the Duomo or Sagrada Família." },
  "landmarkPage.cat2.name": { ko: "미술관", en: "Art Museums" },
  "landmarkPage.cat2.desc": { ko: "우피치, 루브르 등 특별 전시 시기에는 사전 예약이 특히 중요합니다.", en: "Advance booking matters even more during special-exhibition periods at museums like the Uffizi or the Louvre." },
  "landmarkPage.cat3.name": { ko: "박물관", en: "Museums" },
  "landmarkPage.cat3.desc": { ko: "역사·과학 박물관의 타임슬롯 입장과 특별 전시 일정을 확인합니다.", en: "We check timed-entry slots and special exhibition schedules at history and science museums." },
  "landmarkPage.cat4.name": { ko: "전망대", en: "Observation Decks" },
  "landmarkPage.cat4.desc": { ko: "일몰 시간대 등 혼잡이 예상되는 전망대 입장을 사전 조율합니다.", en: "We coordinate in advance for observation decks that get busy around sunset and other peak times." },
  "landmarkPage.cat5.name": { ko: "궁전", en: "Palaces" },
  "landmarkPage.cat5.desc": { ko: "쇤브룬 궁전 등 내부 투어가 있는 장소의 시간대별 예약을 확인합니다.", en: "We check time-slot reservations for palaces that run guided interior tours, such as Schönbrunn." },
  "landmarkPage.cat6.name": { ko: "유적지", en: "Historic Sites" },
  "landmarkPage.cat6.desc": { ko: "콜로세움 등 사전 예약이 없으면 장시간 대기가 발생하는 유적지를 확인합니다.", en: "We check sites like the Colosseum, where waits can be long without a prior reservation." },
  "landmarkPage.cat7.name": { ko: "특별 전시", en: "Special Exhibitions" },
  "landmarkPage.cat7.desc": { ko: "기간 한정 전시는 티켓이 조기 마감되는 경우가 많아 빠른 확인이 필요합니다.", en: "Limited-run exhibitions often sell out early, so timely confirmation matters." },
  "landmarkPage.cat8.name": { ko: "가이드 투어", en: "Guided Tours" },
  "landmarkPage.cat8.desc": { ko: "한국어 또는 영어 가이드 동행이 가능한 투어 여부를 확인합니다.", en: "We check whether a Korean- or English-speaking guide is available for the tour." },
  "landmarkPage.cat9.name": { ko: "타임슬롯 입장", en: "Timed Entry" },
  "landmarkPage.cat9.desc": { ko: "지정된 시간에만 입장 가능한 장소는 일정에 맞춰 시간대를 조율합니다.", en: "For venues with fixed entry windows, we align the slot with the rest of your schedule." },
  "landmarkPage.examplesTitle": { ko: "랜드마크 예약대행 이용 예시", en: "Landmark Reservation Examples" },
  "landmarkPage.ex1.city": { ko: "로마", en: "Rome" },
  "landmarkPage.ex1.desc": { ko: "콜로세움 입장 예약 + 바티칸 박물관 가이드 투어", en: "Colosseum entry reservation + guided Vatican Museums tour" },
  "landmarkPage.ex2.city": { ko: "비엔나", en: "Vienna" },
  "landmarkPage.ex2.desc": { ko: "쇤브룬 궁전 내부 투어 예약 + 차량 이동", en: "Schönbrunn Palace interior tour reservation + vehicle transport" },
  "landmarkPage.ex3.city": { ko: "두바이", en: "Dubai" },
  "landmarkPage.ex3.desc": { ko: "부르즈 할리파 전망대 타임슬롯 예약", en: "Burj Khalifa observation deck timed-slot reservation" },
  "landmarkPage.ex4.city": { ko: "런던", en: "London" },
  "landmarkPage.ex4.desc": { ko: "런던탑 가이드 투어 + 대영박물관 특별 전시 예약", en: "Tower of London guided tour + British Museum special exhibition booking" },
  "landmarkPage.ex5.city": { ko: "베를린", en: "Berlin" },
  "landmarkPage.ex5.desc": { ko: "박물관섬 타임슬롯 입장 예약 2곳 연계", en: "Linked timed-entry bookings for two Museum Island sites" },
  "landmarkPage.faqTitle": { ko: "랜드마크 예약대행 자주 묻는 질문", en: "Landmark Reservation FAQ" },
  "landmarkPage.faq.q1": { ko: "단체 입장권도 예약할 수 있나요?", en: "Can you reserve group entry tickets?" },
  "landmarkPage.faq.a1": { ko: "가능합니다. 인원수와 희망 시간대를 알려주시면 단체 입장 가능 여부를 확인합니다.", en: "Yes. Tell us your group size and preferred time, and we'll check group-entry availability." },
  "landmarkPage.faq.q2": { ko: "줄을 서지 않고 입장할 수 있나요?", en: "Can we skip the line on entry?" },
  "landmarkPage.faq.a2": { ko: "장소에 따라 우선 입장 또는 전용 입장 경로가 있는 경우 안내해 드립니다. 모든 장소에 해당하지는 않습니다.", en: "Where a priority or dedicated entry line exists, we'll let you know — this isn't available at every venue." },
  "landmarkPage.faq.q3": { ko: "한국어 가이드 투어도 가능한가요?", en: "Can a Korean-speaking guide be arranged?" },
  "landmarkPage.faq.a3": { ko: "장소와 일정에 따라 한국어 가능 가이드를 확인해 안내합니다. 가능 여부는 사전 확인이 필요합니다.", en: "Depending on the venue and schedule, we check for a Korean-speaking guide — availability must be confirmed in advance." },
  "landmarkPage.faq.q4": { ko: "공휴일에도 예약이 가능한가요?", en: "Can reservations be made on public holidays?" },
  "landmarkPage.faq.a4": { ko: "장소별 운영 일정에 따라 다릅니다. 휴무일인 경우 대체 일정을 함께 안내해 드립니다.", en: "This depends on each venue's own holiday schedule. If it's closed, we'll suggest alternative dates." },
  "landmarkPage.faq.q5": { ko: "아동이나 학생 할인도 적용되나요?", en: "Do child or student discounts apply?" },
  "landmarkPage.faq.a5": { ko: "장소 정책에 따라 다릅니다. 동반 인원의 연령을 알려주시면 할인 적용 여부를 함께 확인합니다.", en: "This depends on the venue's own policy. Let us know the ages of those in your party and we'll check for applicable discounts." },
  "landmarkPage.cta": { ko: "랜드마크 예약 문의하기", en: "Inquire About a Landmark Reservation" },

  "restaurantPage.title": { ko: "해외 레스토랑·파인다이닝 예약대행", en: "Overseas Restaurant & Fine Dining Reservations" },
  "restaurantPage.sub": { ko: "미쉐린 레스토랑부터 기업 디너, 프라이빗 다이닝까지. 예약이 까다로운 레스토랑을 대신 확인하고 진행합니다.", en: "From Michelin restaurants to corporate dinners and private dining — we check and secure reservations at restaurants that are hard to book." },
  "restaurantPage.catTitle": { ko: "예약대행 가능 레스토랑 유형", en: "Restaurant Types We Support" },
  "restaurantPage.cat1.name": { ko: "파인다이닝", en: "Fine Dining" },
  "restaurantPage.cat1.desc": { ko: "코스 요리 중심의 고급 레스토랑은 보통 사전 예약이 필수입니다.", en: "Upscale, course-driven restaurants usually require a reservation in advance." },
  "restaurantPage.cat2.name": { ko: "미쉐린 레스토랑", en: "Michelin Restaurants" },
  "restaurantPage.cat2.desc": { ko: "선결제나 예약금이 필요한 경우가 많아 사전에 조건을 확인해 안내합니다.", en: "Prepayment or a deposit is often required, and we confirm these terms before booking." },
  "restaurantPage.cat3.name": { ko: "현지 인기 레스토랑", en: "Popular Local Restaurants" },
  "restaurantPage.cat3.desc": { ko: "현지인들에게 인기 있어 예약이 빨리 마감되는 레스토랑도 확인 가능합니다.", en: "We can also check restaurants popular with locals that tend to book up quickly." },
  "restaurantPage.cat4.name": { ko: "기념일 식사", en: "Anniversary Dinners" },
  "restaurantPage.cat4.desc": { ko: "기념일 좌석 배치나 케이크 등 특별 요청을 레스토랑에 함께 전달합니다.", en: "We pass along special requests like seating arrangements or a cake for anniversary occasions." },
  "restaurantPage.cat5.name": { ko: "기업 디너", en: "Corporate Dinners" },
  "restaurantPage.cat5.desc": { ko: "출장 중 기업 미팅 후 진행되는 디너 예약을 지원합니다.", en: "We support dinner bookings held after business meetings while traveling." },
  "restaurantPage.cat6.name": { ko: "바이어 식사", en: "Buyer Meals" },
  "restaurantPage.cat6.desc": { ko: "거래처 접대에 맞는 분위기와 프라이버시를 고려한 장소를 함께 확인합니다.", en: "We help identify venues with the right atmosphere and privacy for hosting business partners." },
  "restaurantPage.cat7.name": { ko: "단체 예약", en: "Group Bookings" },
  "restaurantPage.cat7.desc": { ko: "인원이 많은 단체는 좌석 배치와 세트 메뉴 구성을 사전에 조율합니다.", en: "For larger groups, we coordinate seating and set-menu options in advance." },
  "restaurantPage.cat8.name": { ko: "프라이빗 다이닝", en: "Private Dining" },
  "restaurantPage.cat8.desc": { ko: "별도 룸이 필요한 경우 최소 인원과 비용 조건을 미리 확인합니다.", en: "If a private room is needed, we confirm the minimum headcount and cost conditions in advance." },
  "restaurantPage.policyNote": { ko: "예약금, 취소 규정, 노쇼 정책이 있는 레스토랑은 예약 확정 전 반드시 고객에게 안내해 드립니다.", en: "For restaurants with a deposit, cancellation policy, or no-show fee, we always inform you before the reservation is confirmed." },
  "restaurantPage.examplesTitle": { ko: "레스토랑 예약대행 이용 예시", en: "Restaurant Reservation Examples" },
  "restaurantPage.ex1.city": { ko: "상하이", en: "Shanghai" },
  "restaurantPage.ex1.desc": { ko: "미쉐린 레스토랑 디너 예약 + 차량 이동", en: "Michelin restaurant dinner reservation + vehicle transport" },
  "restaurantPage.ex2.city": { ko: "홍콩", en: "Hong Kong" },
  "restaurantPage.ex2.desc": { ko: "딤섬 전문점 단체 예약 + 기업 디너", en: "Group reservation at a dim sum specialist + corporate dinner" },
  "restaurantPage.ex3.city": { ko: "싱가포르", en: "Singapore" },
  "restaurantPage.ex3.desc": { ko: "바이어 접대용 프라이빗 다이닝룸 예약", en: "Private dining room reservation for hosting business partners" },
  "restaurantPage.ex4.city": { ko: "런던", en: "London" },
  "restaurantPage.ex4.desc": { ko: "파인다이닝 기념일 디너 예약", en: "Fine-dining anniversary dinner reservation" },
  "restaurantPage.ex5.city": { ko: "두바이", en: "Dubai" },
  "restaurantPage.ex5.desc": { ko: "현지 인기 레스토랑 단체 예약 + 차량 이동", en: "Group reservation at a popular local restaurant + vehicle transport" },
  "restaurantPage.faqTitle": { ko: "레스토랑 예약대행 자주 묻는 질문", en: "Restaurant Reservation FAQ" },
  "restaurantPage.faq.q1": { ko: "드레스 코드가 있는 레스토랑도 안내해 주나요?", en: "Will you tell us if a restaurant has a dress code?" },
  "restaurantPage.faq.a1": { ko: "네. 드레스 코드가 있는 경우 예약 확정 안내와 함께 전달해 드립니다.", en: "Yes. If there's a dress code, we'll share it along with the reservation confirmation." },
  "restaurantPage.faq.q2": { ko: "프라이빗 룸 최소 인원이 궁금해요.", en: "What's the minimum headcount for a private room?" },
  "restaurantPage.faq.a2": { ko: "레스토랑마다 다릅니다. 희망 인원을 알려주시면 조건에 맞는 룸 예약 가능 여부를 확인합니다.", en: "This varies by restaurant. Tell us your expected headcount and we'll check availability that fits." },
  "restaurantPage.faq.q3": { ko: "당일 예약도 가능한가요?", en: "Can same-day reservations be made?" },
  "restaurantPage.faq.a3": { ko: "가능한 경우도 있지만 인기 레스토랑은 당일 예약이 어려울 수 있습니다. 최대한 빠르게 확인해 드립니다.", en: "Sometimes, but popular restaurants can be hard to book same-day. We'll check as quickly as possible." },
  "restaurantPage.faq.q4": { ko: "알레르기나 식이 제한 사항도 전달되나요?", en: "Are allergies or dietary restrictions passed along?" },
  "restaurantPage.faq.a4": { ko: "네. 예약 시 전달해 주시면 레스토랑에 사전 공유합니다.", en: "Yes. Share them when you submit your request and we'll inform the restaurant in advance." },
  "restaurantPage.faq.q5": { ko: "법인 영수증 발급이 가능한가요?", en: "Can a corporate receipt be issued?" },
  "restaurantPage.faq.a5": { ko: "레스토랑 정책에 따라 다릅니다. 기업 디너 문의 시 함께 확인해 안내해 드립니다.", en: "This depends on the restaurant's own policy — we'll confirm it when you submit a corporate dinner inquiry." },
  "restaurantPage.cta": { ko: "레스토랑 예약 문의하기", en: "Inquire About a Restaurant Reservation" },

  "resvSubpage.backCta": { ko: "예약대행 전체 보기", en: "See All Reservation Services" },
  "resvSubpage.notice": { ko: "예약대행 서비스는 해당 장소의 공식 운영기관이 아닙니다. Certo Drive는 고객 요청에 따라 예약 가능 여부를 확인하고 예약 절차를 지원하는 대행 서비스입니다. 입장 정책, 운영시간, 예약 가능 여부, 취소 규정은 각 시설 또는 레스토랑 정책에 따라 달라질 수 있습니다.", en: "The reservation agency service is not the venue's official operator. Certo Drive checks availability and supports the reservation process based on customer requests. Entry policies, operating hours, availability, and cancellation terms vary by each venue or restaurant's own policy." },

  "resvCities.eyebrow": { ko: "RESERVATION CITIES", en: "RESERVATION CITIES" },
  "resvCities.title": { ko: "예약대행 가능 지역", en: "Where We Support Reservations" },
  "resvCities.subtitle": { ko: "현재 실제 운영 중이거나 대응 가능한 도시를 중심으로 안내합니다.", en: "Centered on cities we currently operate in or can support." },
  "resvCities.note": { ko: "도시와 장소에 따라 예약 가능 여부를 확인한 뒤 안내드립니다.", en: "Availability is confirmed by city and venue before we respond." },

  "combo.eyebrow": { ko: "ONE ITINERARY", en: "ONE ITINERARY" },
  "combo.title": { ko: "한 일정으로 묶을 수 있습니다", en: "It All Fits in One Itinerary" },
  "combo.desc": { ko: "공항 픽업과 식사 예약, 랜드마크 입장과 차량 이동을 하나의 일정으로 정리할 수 있습니다. 차량과 예약대행을 별도로 여러 곳에 문의하지 않아도 됩니다.", en: "Airport pickup, dining reservations, landmark entry, and vehicle transport can all be arranged as a single itinerary — no need to contact separate providers." },
  "combo.schedule1": { ko: "공항 도착", en: "Arrive at the airport" },
  "combo.schedule2": { ko: "호텔 체크인", en: "Hotel check-in" },
  "combo.schedule3": { ko: "랜드마크 입장", en: "Landmark entry" },
  "combo.schedule4": { ko: "레스토랑 예약", en: "Restaurant reservation" },
  "combo.schedule5": { ko: "호텔 이동", en: "Return to hotel" },
  "combo.caption": { ko: "차량과 예약대행을 하나의 담당자가 함께 조율합니다.", en: "One contact coordinates both the vehicle and the reservations." },

  "stickyBar.drive": { ko: "차량 문의", en: "Vehicle Inquiry" },
  "stickyBar.reservation": { ko: "예약대행", en: "Reservations" },

  "formState.successTitle": { ko: "문의가 접수되었습니다.", en: "Your inquiry has been received." },
  "formState.successBody": { ko: "일정과 가능 여부를 확인한 뒤 이메일 또는 카카오톡으로 안내드리겠습니다.", en: "We'll check your schedule and availability, then follow up by email or KakaoTalk." },
  "formState.successReservationNote": { ko: "현지 예약은 장소별 예약 가능 여부와 취소 규정이 다를 수 있습니다.", en: "For local reservations, availability and cancellation terms vary by venue." },
  "formState.errorBody": { ko: "전송 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 카카오톡 상담을 이용해주세요.", en: "Something went wrong while sending. Please try again shortly, or reach us on KakaoTalk." },
  "formState.retry": { ko: "다시 작성하기", en: "Edit and resend" },

  "itinerary.eyebrow": { ko: "QUICK START", en: "QUICK START" },
  "itinerary.title": { ko: "어떤 일정이신가요?", en: "What's Your Itinerary?" },
  "itinerary.subtitle": { ko: "해당하는 일정을 선택하면 문의 폼이 자동으로 채워집니다.", en: "Pick the one that fits and the inquiry form fills in automatically." },
  "itinerary.opt1": { ko: "공항에서 호텔까지만 이동", en: "Just airport to hotel" },
  "itinerary.opt2": { ko: "하루 여러 미팅 이동", en: "Multiple meetings in one day" },
  "itinerary.opt3": { ko: "해외 바이어 방문", en: "Visiting a buyer abroad" },
  "itinerary.opt4": { ko: "교육청·학교 연수", en: "School district / school visit" },
  "itinerary.opt5": { ko: "전시회·컨퍼런스", en: "Trade show / conference" },
  "itinerary.opt6": { ko: "여러 도시 연속 출장", en: "Multi-city business trip" },
  "itinerary.opt7": { ko: "가족 여행", en: "Family trip" },
  "itinerary.opt8": { ko: "골프·행사 일정", en: "Golf / event schedule" },

  "process.title": { ko: "예약은 이렇게 진행됩니다", en: "How a Booking Comes Together" },
  "process.subtitle": { ko: "간단한 다섯 단계로 진행됩니다.", en: "Five simple steps, from request to pickup." },
  "process.step1.title": { ko: "일정 보내기", en: "Send Your Schedule" },
  "process.step1.desc": { ko: "국가, 도시, 날짜, 목적지를 알려주세요.", en: "Tell us the country, city, dates, and destination." },
  "process.step2.title": { ko: "인원과 짐 확인", en: "Confirm Party & Luggage" },
  "process.step2.desc": { ko: "탑승 인원과 캐리어, 대형 짐 등을 확인합니다.", en: "We check passenger count, suitcases, and any large items." },
  "process.step3.title": { ko: "가능 차량과 비용 안내", en: "Share Vehicle Options & Cost" },
  "process.step3.desc": { ko: "일정에 맞는 차량과 견적을 안내합니다.", en: "We share a suitable vehicle and a quote for your schedule." },
  "process.step4.title": { ko: "예약 확정", en: "Confirm the Booking" },
  "process.step4.desc": { ko: "일정과 비용을 확인한 뒤 예약을 확정합니다.", en: "The booking is confirmed once you approve the schedule and cost." },
  "process.step5.title": { ko: "현지 이용", en: "On the Ground" },
  "process.step5.desc": { ko: "안내받은 시간과 장소에서 기사와 만나 이동합니다.", en: "Meet your driver at the confirmed time and place." },

  "recommend.title": { ko: "이런 일정에 이용할 수 있습니다", en: "Fits Schedules Like These" },
  "recommend.item1": { ko: "해외 공항에서 호텔까지 이동해야 하는 경우", en: "Transfers from an overseas airport to your hotel" },
  "recommend.item2": { ko: "하루에 여러 미팅이 있는 출장", en: "A business trip with several meetings in one day" },
  "recommend.item3": { ko: "부모님의 해외 차량을 대신 예약하는 경우", en: "Booking a vehicle abroad on a parent's behalf" },
  "recommend.item4": { ko: "아이와 함께하는 가족 일정", en: "A family trip traveling with children" },
  "recommend.item5": { ko: "전시회·박람회 출장", en: "A trade show or exhibition trip" },
  "recommend.item6": { ko: "도시 간 이동", en: "Travel between cities" },
  "recommend.item7": { ko: "하루 동안 기사 포함 차량이 필요한 일정", en: "A full day that needs a car and driver" },

  "whyus.eyebrow": { ko: "WHY CERTO DRIVE", en: "WHY CERTO DRIVE" },
  "whyus.title": { ko: "해외 일정이 복잡할수록 한 번에 정리합니다", en: "The More Complex the Trip, the More It Helps to Have One Place for It" },
  "whyus.card1.title": { ko: "차량과 일정 함께 조율", en: "Vehicle and Schedule, Coordinated Together" },
  "whyus.card1.desc": { ko: "공항 픽업부터 출장 동선, 랜드마크·레스토랑 예약까지 하나의 일정으로 준비합니다.", en: "From airport pickup to your business route and local reservations, prepared as one itinerary." },
  "whyus.card2.title": { ko: "한국어 상담", en: "Korean-Language Support" },
  "whyus.card2.desc": { ko: "문의부터 예약 확정까지 한국어로 소통할 수 있습니다.", en: "Communicate in Korean from your first inquiry through to confirmation." },
  "whyus.card3.title": { ko: "기업·기관 대응", en: "Built for Businesses & Institutions" },
  "whyus.card3.desc": { ko: "견적서와 세금계산서 발행, 다일정·다인원 차량 배정을 지원합니다.", en: "Quotes and invoices, plus vehicle assignment across multi-day, multi-traveler trips." },
  "whyus.card4.title": { ko: "차량 + 예약대행 가능", en: "Vehicles and Reservations, Either or Both" },
  "whyus.card4.desc": { ko: "이동과 현지 예약을 각각 또는 함께 요청할 수 있습니다.", en: "Request transport and local reservations separately, or together." },

  "business.eyebrow": { ko: "FOR ORGANIZATIONS", en: "FOR ORGANIZATIONS" },
  "business.title": { ko: "기업과 기관의 해외 이동도 한 번에 조율합니다.", en: "We Coordinate Corporate & Institutional Travel Abroad, End to End." },
  "business.bodyLine1": { ko: "기업 출장, 해외 바이어 방문, 교육기관 연수, 국제행사 등 단체 일정에 필요한 차량을 준비합니다.", en: "We arrange vehicles for corporate trips, overseas buyer visits, institutional training programs, and international events." },
  "business.bodyLine2": { ko: "문의부터 일정 확정까지 한 담당자가 응대합니다.", en: "One contact handles your request from inquiry through to confirmation." },
  "business.bodyLine3": { ko: "여러 날짜와 여러 대의 차량이 필요한 일정도 함께 조율합니다.", en: "Trips spanning several days or requiring multiple vehicles are coordinated together." },
  "business.item1": { ko: "견적서 및 세금계산서 발행", en: "Quotes and invoices are issued" },
  "business.item2": { ko: "다일정 차량 배정", en: "Vehicles arranged across multi-day schedules" },
  "business.item3": { ko: "여러 대 차량 동시 운영", en: "Multiple vehicles run at once when needed" },
  "business.item4": { ko: "담당자와 한국어로 소통", en: "Direct Korean-language contact" },
  "business.notProvidedTitle": { ko: "예약 전 확인해주세요", en: "Before You Book" },
  "business.notProvided1": { ko: "체르토 드라이브는 즉시 차량을 호출하는 앱 서비스가 아닙니다.", en: "Certo Drive is not an app for calling an on-demand vehicle instantly." },
  "business.notProvided2": { ko: "문의 후 현지 차량과 기사 가능 여부를 확인한 뒤 예약을 확정합니다. 지역과 일정에 따라 배정이 어려울 수 있으며, 가능 여부는 견적 단계에서 안내합니다.", en: "After your inquiry, we check local vehicle and driver availability before confirming. Assignment can be difficult depending on region and schedule, and we let you know at the quote stage." },
  "business.cta": { ko: "기업·기관 문의하기", en: "Contact Us for Organizations" },
  "business.scheduleLabel": { ko: "샘플 일정표", en: "Sample Itinerary" },
  "business.schedule1": { ko: "공항 픽업", en: "Airport pickup" },
  "business.schedule2": { ko: "호텔", en: "Hotel" },
  "business.schedule3": { ko: "기업 미팅", en: "Business meeting" },
  "business.schedule4": { ko: "공장 방문", en: "Factory visit" },
  "business.schedule5": { ko: "디너 미팅", en: "Dinner meeting" },
  "business.scheduleCaption": { ko: "한 일정 안에서 여러 구간을 조율할 수 있습니다.", en: "Multiple stops can be coordinated within a single itinerary." },

  "banner.corporate.title": { ko: "Business Travel with Certo Drive", en: "Business Travel with Certo Drive" },
  "banner.corporate.copy": { ko: "해외 출장 차량부터 공항픽업, 전시회, 임원 수행, 통역 연계까지. 기업의 해외 이동을 한 번에 상담하세요.", en: "From business trip vehicles and airport pickups to trade shows, executive escorts, and interpreter coordination — plan your company's travel abroad in one place." },
  "banner.corporate.cta": { ko: "기업 전용 문의", en: "Corporate Inquiries" },

  "banner.quote.title": { ko: "해외에서 이동이 필요할 때, 한국어로 간편하게.", en: "Need to move abroad? Do it simply, in Korean." },
  "banner.quote.copy": { ko: "공항픽업 한 번부터 며칠간의 출장 일정까지 Certo Drive가 필요한 차량을 연결해드립니다.", en: "From a single airport pickup to a multi-day business trip, Certo Drive connects you with the vehicle you need." },
  "banner.quote.cta": { ko: "빠른 견적 요청", en: "Request a Quick Quote" },

  "vehicles.eyebrow": { ko: "VEHICLES", en: "VEHICLES" },
  "vehicles.title": { ko: "일정에 맞는 차량을 확인해보세요", en: "Find the Right Vehicle for Your Schedule" },
  "vehicles.subtitle": { ko: "인원과 짐에 맞는 차량 유형을 안내해 드립니다.", en: "We help you choose the right vehicle for your group and luggage." },
  "vehicles.factPax": { ko: "추천 인원", en: "Recommended for" },
  "vehicles.factUse": { ko: "추천 용도", en: "Best for" },
  "vehicles.factLuggage": { ko: "짐 기준", en: "Luggage" },
  "vehicles.sedan.name": { ko: "세단", en: "Sedan" },
  "vehicles.sedan.pax": { ko: "1~3명", en: "1–3 people" },
  "vehicles.sedan.use": { ko: "1~3인 출장 및 일반 이동", en: "Business trips and general transfers for 1–3" },
  "vehicles.sedan.luggage": { ko: "캐리어 1~2개", en: "1–2 suitcases" },
  "vehicles.suv.name": { ko: "SUV", en: "SUV" },
  "vehicles.suv.pax": { ko: "1~4명", en: "1–4 people" },
  "vehicles.suv.use": { ko: "짐이 많거나 넉넉한 공간이 필요한 일정", en: "Heavier luggage or when extra space is needed" },
  "vehicles.suv.luggage": { ko: "캐리어 2~3개 또는 골프백", en: "2–3 suitcases or golf bags" },
  "vehicles.minivan.name": { ko: "미니밴", en: "Minivan" },
  "vehicles.minivan.pax": { ko: "4~7명", en: "4–7 people" },
  "vehicles.minivan.use": { ko: "가족 및 소규모 단체, 기업 픽업 차량(미니벤)", en: "Families and small groups, corporate pickup (minivan)" },
  "vehicles.minivan.luggage": { ko: "캐리어 3~5개", en: "3–5 suitcases" },
  "vehicles.premium.name": { ko: "프리미엄 차량", en: "Premium Vehicle" },
  "vehicles.premium.pax": { ko: "1~3명", en: "1–3 people" },
  "vehicles.premium.use": { ko: "기업·임원·VIP 일정", en: "Corporate, executive, and VIP schedules" },
  "vehicles.premium.luggage": { ko: "캐리어 1~2개", en: "1–2 suitcases" },
  "vehicles.van.name": { ko: "밴 / 버스", en: "Van / Bus" },
  "vehicles.van.pax": { ko: "8명 이상", en: "8+ people" },
  "vehicles.van.use": { ko: "기업 행사 및 단체 이동, 기업 출장 차량(미니버스)", en: "Corporate events and group transport (minibus)" },
  "vehicles.van.luggage": { ko: "대형 수하물 다수", en: "Multiple large items" },
  "vehicles.disclaimer": { ko: "지역과 일정에 따라 실제 제공 차량은 달라질 수 있습니다. 차량 모델과 색상은 지정이 어려울 수 있으며, 예약 전 가능한 차량 유형을 안내합니다.", en: "The vehicle actually provided can vary by region and schedule. A specific model or color can't always be guaranteed, so we confirm the available vehicle type before booking." },

  "recommender.title": { ko: "차량 추천", en: "Vehicle Recommender" },
  "recommender.paxLabel": { ko: "인원", en: "Passengers" },
  "recommender.pax1": { ko: "1~3명", en: "1–3" },
  "recommender.pax2": { ko: "4~5명", en: "4–5" },
  "recommender.pax3": { ko: "6~7명", en: "6–7" },
  "recommender.pax4": { ko: "8명+", en: "8+" },
  "recommender.luggageLabel": { ko: "짐", en: "Luggage" },
  "recommender.luggage1": { ko: "적음", en: "Light" },
  "recommender.luggage2": { ko: "보통", en: "Normal" },
  "recommender.luggage3": { ko: "많음", en: "Heavy" },
  "recommender.luggage4": { ko: "골프백/대형짐", en: "Golf bags / large items" },
  "recommender.resultLabel": { ko: "추천 차량", en: "Recommended Vehicle" },
  "recommender.resultNote": { ko: "정확한 차량은 지역 및 짐 크기를 확인한 뒤 안내드립니다.", en: "The exact vehicle is confirmed after checking your region and luggage size." },
  "recommender.sedan": { ko: "세단", en: "Sedan" },
  "recommender.suv": { ko: "SUV", en: "SUV" },
  "recommender.suvOrMinivan": { ko: "SUV 또는 미니밴", en: "SUV or Minivan" },
  "recommender.minivan": { ko: "미니밴", en: "Minivan" },
  "recommender.van": { ko: "밴", en: "Van" },
  "recommender.prompt": { ko: "인원과 짐을 선택해 주세요.", en: "Select your passengers and luggage." },

  "cases.eyebrow": { ko: "EXAMPLE CASES", en: "EXAMPLE CASES" },
  "cases.title": { ko: "이용 사례", en: "Example Cases" },
  "cases.subtitle": { ko: "실제 진행 방식을 보여드리는 예시입니다.", en: "Examples showing how a typical engagement is arranged." },
  "cases.disclaimer": { ko: "실제 이용 방식을 이해하기 위한 예시입니다.", en: "An example to illustrate how the service is typically used." },
  "cases.labelRequest": { ko: "요청", en: "Request" },
  "cases.labelAction": { ko: "운행 구성", en: "How It Was Arranged" },
  "cases.case1.tag": { ko: "교육기관 연수단", en: "Institutional Delegation" },
  "cases.case1.title": { ko: "시애틀 교육청 연수단", en: "Seattle School District Delegation" },
  "cases.case1.city": { ko: "시애틀", en: "Seattle" },
  "cases.case1.duration": { ko: "1주일", en: "One week" },
  "cases.case1.passengers": { ko: "5명", en: "5 people" },
  "cases.case1.vehicle": { ko: "SUV 또는 미니밴", en: "SUV or minivan" },
  "cases.case1.request": { ko: "교육청 직원 연수 방문, 한국어 가능 기사 요청", en: "A school district training visit requesting a Korean-speaking driver" },
  "cases.case1.action": { ko: "일정에 맞춰 SUV·미니밴을 준비하고 한국어 가능 기사를 배정했습니다.", en: "An SUV or minivan was arranged and a Korean-speaking driver assigned to fit the schedule." },
  "cases.case2.tag": { ko: "기업 출장", en: "Corporate Travel" },
  "cases.case2.title": { ko: "바이어 미팅 출장", en: "Client Meeting Trip" },
  "cases.case2.city": { ko: "로스앤젤레스", en: "Los Angeles" },
  "cases.case2.duration": { ko: "3일", en: "3 days" },
  "cases.case2.passengers": { ko: "3명", en: "3 people" },
  "cases.case2.vehicle": { ko: "세단 2대", en: "Two sedans" },
  "cases.case2.request": { ko: "공항 픽업과 미팅 일정 동행", en: "Airport pickup and meeting-day support" },
  "cases.case2.action": { ko: "공항 픽업부터 미팅 이동까지 동선에 맞춰 차량을 배치했습니다.", en: "Certo Drive arranged vehicles for the full route, from airport pickup through meeting transport." },
  "cases.case3.tag": { ko: "가족 여행", en: "Family Travel" },
  "cases.case3.title": { ko: "가족 단위 여행", en: "Family Trip" },
  "cases.case3.city": { ko: "밴쿠버", en: "Vancouver" },
  "cases.case3.duration": { ko: "주말 2박", en: "A 2-night weekend" },
  "cases.case3.passengers": { ko: "4명", en: "4 people" },
  "cases.case3.vehicle": { ko: "미니밴", en: "Minivan" },
  "cases.case3.request": { ko: "가족 여행, 한국어 가능 기사 요청", en: "A family trip requesting a Korean-speaking driver" },
  "cases.case3.action": { ko: "가족 일정에 맞춰 미니밴과 한국어 가능 기사를 준비했습니다.", en: "A minivan and a Korean-speaking driver were prepared to fit the family's itinerary." },

  "cities.eyebrow": { ko: "CITIES", en: "CITIES" },
  "cities.title": { ko: "이용 가능한 도시를 확인해보세요", en: "Check Available Cities" },
  "cities.subtitle": { ko: "지역과 일정에 따라 가능 여부를 확인한 뒤 안내드립니다.", en: "Availability is confirmed by region and schedule before we respond." },
  "cities.placeholder": { ko: "도시 또는 공항명을 입력하세요", en: "Enter a city or airport name" },
  "cities.example": { ko: "예: Frankfurt, Berlin, JFK, Dubai", en: "e.g. Frankfurt, Berlin, JFK, Dubai" },
  "cities.region.us": { ko: "미국", en: "United States" },
  "cities.region.ca": { ko: "캐나다", en: "Canada" },
  "cities.region.eu": { ko: "유럽", en: "Europe" },
  "cities.region.asia": { ko: "아시아", en: "Asia" },
  "cities.region.oceania": { ko: "오세아니아", en: "Oceania" },
  "cities.country.uk": { ko: "영국", en: "United Kingdom" },
  "cities.country.fr": { ko: "프랑스", en: "France" },
  "cities.country.de": { ko: "독일", en: "Germany" },
  "cities.country.ch": { ko: "스위스", en: "Switzerland" },
  "cities.country.it": { ko: "이탈리아", en: "Italy" },
  "cities.country.es": { ko: "스페인", en: "Spain" },
  "cities.country.at": { ko: "오스트리아", en: "Austria" },
  "cities.country.nl": { ko: "네덜란드", en: "Netherlands" },
  "cities.country.be": { ko: "벨기에", en: "Belgium" },
  "cities.country.dk": { ko: "덴마크", en: "Denmark" },
  "cities.country.se": { ko: "스웨덴", en: "Sweden" },
  "cities.country.cz": { ko: "체코", en: "Czech Republic" },
  "cities.country.ie": { ko: "아일랜드", en: "Ireland" },
  "cities.country.pl": { ko: "폴란드", en: "Poland" },
  "cities.country.hu": { ko: "헝가리", en: "Hungary" },
  "cities.country.gr": { ko: "그리스", en: "Greece" },
  "cities.country.jp": { ko: "일본", en: "Japan" },
  "cities.country.sg": { ko: "싱가포르", en: "Singapore" },
  "cities.country.hk": { ko: "홍콩", en: "Hong Kong" },
  "cities.country.ae": { ko: "아랍에미리트", en: "United Arab Emirates" },
  "cities.country.cn": { ko: "중국", en: "China" },
  "cities.country.tw": { ko: "대만", en: "Taiwan" },
  "cities.country.th": { ko: "태국", en: "Thailand" },
  "cities.country.vn": { ko: "베트남", en: "Vietnam" },
  "cities.country.au": { ko: "호주", en: "Australia" },
  "cities.country.nz": { ko: "뉴질랜드", en: "New Zealand" },
  "cities.noMatch": { ko: "검색 결과가 없습니다. 목록에 없는 도시도 문의해 주시면 가능 여부를 확인해 드립니다.", en: "No matches found. Even if your city isn't listed, contact us and we'll confirm availability." },

  "faq.eyebrow": { ko: "FAQ", en: "FAQ" },
  "faq.title": { ko: "자주 묻는 질문", en: "Frequently Asked Questions" },
  "faq.q1": { ko: "한국어 가능한 기사님을 요청할 수 있나요?", en: "Can I request a Korean-speaking driver?" },
  "faq.a1": { ko: "네, 한국어 가능 기사를 우선으로 확인합니다. 지역에 따라 배정 여부는 예약 전에 확인해 드립니다.", en: "Yes — we check for a Korean-speaking driver first. Depending on the region, we confirm availability before booking." },
  "faq.q2": { ko: "어떤 국가에서 이용할 수 있나요?", en: "Which countries does this cover?" },
  "faq.a2": { ko: "해외 주요 도시를 중심으로 운영하고 있으며, 목록에 없는 지역도 문의하시면 가능 여부를 확인해 드립니다.", en: "We operate mainly in major cities abroad. Even if your city isn't listed, ask us and we'll check." },
  "faq.q3": { ko: "공항에서는 기사님을 어디에서 만나나요?", en: "Where do I meet the driver at the airport?" },
  "faq.a3": { ko: "예약 확정 안내에 만남 장소와 기사 연락 방법을 함께 담아 보내드립니다.", en: "The meeting point and how to reach your driver are included with your booking confirmation." },
  "faq.q4": { ko: "비행기가 늦게 도착하면 어떻게 되나요?", en: "What happens if my flight arrives late?" },
  "faq.a4": { ko: "항공편 정보를 미리 알려주시면 지연 상황에 맞춰 일정을 조정합니다.", en: "Share your flight details beforehand and we'll adjust the pickup for any delay." },
  "faq.q5": { ko: "밤이나 새벽에도 이용할 수 있나요?", en: "Can I book for a late night or early morning?" },
  "faq.a5": { ko: "이용 자체는 가능하지만, 가능 여부는 지역과 일정에 따라 달라 예약 전에 확인이 필요합니다.", en: "It's possible, but availability varies by region and schedule, so we confirm before booking." },
  "faq.q6": { ko: "캐리어가 많으면 어떤 차량이 필요한가요?", en: "What vehicle do I need for a lot of luggage?" },
  "faq.a6": { ko: "캐리어와 짐의 개수를 알려주시면 SUV 등 공간이 넉넉한 차량으로 안내해 드립니다.", en: "Tell us how many bags you have and we'll point you to something with more room, like an SUV." },
  "faq.q7": { ko: "카시트를 요청할 수 있나요?", en: "Can I request a car seat?" },
  "faq.a7": { ko: "요청하실 수 있습니다. 지역과 차량에 따라 제공 여부가 달라 예약 전에 확인합니다.", en: "Yes, you can request one. Availability depends on region and vehicle, so we confirm before booking." },
  "faq.q8": { ko: "여러 도시를 이어서 이동할 수 있나요?", en: "Can I travel between several cities in one trip?" },
  "faq.a8": { ko: "네, 도시 간 이동도 가능합니다. 희망하시는 구간을 알려주시면 일정으로 정리해 드립니다.", en: "Yes, intercity transfers are available. Tell us the route and we'll lay it out as a schedule." },
  "faq.q9": { ko: "하루 동안 기사 포함 차량을 이용할 수 있나요?", en: "Can I book a car with a driver for the whole day?" },
  "faq.a9": { ko: "네, 4시간, 8시간, 종일 중에서 선택하거나 필요한 시간에 맞춰 일정을 짤 수 있습니다.", en: "Yes — choose 4 hours, 8 hours, a full day, or a custom schedule." },
  "faq.q10": { ko: "기업 명의로 견적서와 세금계산서를 받을 수 있나요?", en: "Can I get a quote and invoice issued to a company?" },
  "faq.a10": { ko: "네, 담당자가 소속 직원을 위해 문의하시면 기업 명의로 견적서와 세금계산서를 발행해 드립니다.", en: "Yes — a company contact can inquire on behalf of staff, and we issue the quote and invoice to the company." },
  "faq.q11": { ko: "전시회나 출장 기간 동안 계속 차량을 이용할 수 있나요?", en: "Can I keep a vehicle for the whole trade show or trip?" },
  "faq.a11": { ko: "네, 기간 전체를 전용 차량으로 요청하실 수 있습니다.", en: "Yes — a dedicated vehicle can be arranged for the full trip." },
  "faq.q12": { ko: "통역사와 차량을 함께 요청할 수 있나요?", en: "Can I request a vehicle and an interpreter together?" },
  "faq.a12": { ko: "가능합니다. 다만 통역 제공 여부는 지역과 언어에 따라 달라 예약 전에 확인이 필요합니다.", en: "Yes. Interpreter availability depends on region and language, so we confirm before booking." },
  "faq.q13": { ko: "랜드마크 티켓 예약도 가능한가요?", en: "Can you book landmark tickets too?" },
  "faq.a13": { ko: "네, 가능합니다. 날짜와 장소를 보내주시면 예약 가능 여부를 확인해 드립니다.", en: "Yes. Send us the date and venue, and we'll check availability." },
  "faq.q14": { ko: "레스토랑 예약만 따로 요청할 수 있나요?", en: "Can I request just a restaurant reservation, without a vehicle?" },
  "faq.a14": { ko: "네, 차량 없이 레스토랑 예약만 요청하셔도 됩니다. 예약대행 문의 폼을 이용해 주세요.", en: "Yes — a restaurant reservation alone is fine. Please use the reservation inquiry form." },
  "faq.q15": { ko: "차량과 레스토랑 예약을 함께 요청할 수 있나요?", en: "Can I request a vehicle and a restaurant reservation together?" },
  "faq.a15": { ko: "네, 가능합니다. 차량 이동과 예약 시간을 맞춰 하나의 일정으로 조율해 드립니다.", en: "Yes. We coordinate the vehicle and the reservation time into one itinerary." },
  "faq.q16": { ko: "예약대행 수수료는 어떻게 되나요?", en: "What is the fee for the reservation service?" },
  "faq.a16": { ko: "장소와 예약 종류에 따라 달라질 수 있어, 실제 결제 전에 비용을 먼저 안내해 드립니다.", en: "It varies by venue and reservation type. We explain the cost before any payment is made." },
  "faq.q17": { ko: "예약 변경이나 취소는 어떻게 확인하나요?", en: "How do I check the change or cancellation terms?" },
  "faq.a17": { ko: "예약 확정 전에 적용되는 취소 조건을 먼저 안내해 드립니다. 확정 이후의 변경·취소·환불 조건은 서비스와 지역, 이용일에 따라 달라질 수 있어 함께 안내해 드립니다.", en: "We share the cancellation terms that apply before confirmation. Terms for changes after confirmation vary by service, region, and date, and we walk you through those as well." },
  "faq.q18": { ko: "통행료·주차비 등 추가 비용이 있나요?", en: "Are there extra costs like tolls or parking?" },
  "faq.a18": { ko: "톨비나 주차비 같은 현지 실비는 별도로 발생할 수 있으며, 견적을 드릴 때 함께 안내합니다.", en: "Local costs such as tolls and parking may be separate, and we note them in your quote." },

  "contact.eyebrow": { ko: "CONTACT", en: "CONTACT" },
  "contact.title": { ko: "문의하기", en: "Contact Us" },
  "contact.subtitle": { ko: "아래 정보를 남겨주시면 확인 후 회신드립니다.", en: "Leave your details below and we'll get back to you." },
  "contact.formNote": { ko: "보통 1영업일 내 회신드립니다.", en: "We usually respond within 1 business day." },
  "contact.label.name": { ko: "이름", en: "Name" },
  "contact.label.organization": { ko: "소속 (기관/회사명)", en: "Organization" },
  "contact.label.email": { ko: "이메일", en: "Email" },
  "contact.label.kakao": { ko: "카카오톡 ID", en: "KakaoTalk ID" },
  "contact.label.city": { ko: "국가·도시", en: "Country & City" },
  "contact.label.startDate": { ko: "시작일", en: "Start Date" },
  "contact.label.endDate": { ko: "종료일", en: "End Date" },
  "contact.label.passengers": { ko: "인원", en: "Passengers" },
  "contact.label.vehicle": { ko: "희망 차량", en: "Preferred Vehicle" },
  "contact.label.koreanDriver": { ko: "한국어 가능 기사 요청", en: "Request a Korean-Speaking Driver" },
  "contact.label.purpose": { ko: "용도", en: "Purpose" },
  "contact.label.pickup": { ko: "픽업 장소", en: "Pickup Location" },
  "contact.label.route": { ko: "주요 동선", en: "Main Route" },
  "contact.label.budget": { ko: "예산 범위", en: "Budget Range" },
  "contact.label.notes": { ko: "상세 요청", en: "Additional Details" },
  "contact.label.clientType": { ko: "구분", en: "Type" },
  "contact.step0": { ko: "STEP 1 · 서비스 선택", en: "STEP 1 · Select a Service" },
  "contact.step1": { ko: "STEP 2 · 지역과 일정", en: "STEP 2 · Region & Schedule" },
  "contact.step2": { ko: "STEP 3 · 차량 정보", en: "STEP 3 · Vehicle Details" },
  "contact.step3": { ko: "STEP 4 · 상세 내용", en: "STEP 4 · Additional Details" },
  "contact.label.luggageCount": { ko: "짐 개수", en: "Luggage Count" },
  "contact.label.destination": { ko: "목적지", en: "Destination" },
  "contact.label.flight": { ko: "항공편", en: "Flight Number" },
  "contact.placeholder.luggageCount": { ko: "예: 캐리어 2개", en: "e.g. 2 suitcases" },
  "contact.placeholder.destination": { ko: "예: 호텔명, 회사명", en: "e.g. hotel or office name" },
  "contact.placeholder.flight": { ko: "예: KE001", en: "e.g. KE001" },
  "contact.help.luggageCount": { ko: "캐리어·대형 짐 개수를 적어주세요.", en: "Let us know how many suitcases or large items." },
  "contact.help.destination": { ko: "도착 후 이동하실 장소를 적어주세요.", en: "Enter where you're headed after pickup." },
  "contact.help.flight": { ko: "공항 픽업인 경우 항공편을 적어주세요.", en: "For airport pickups, enter your flight number." },

  "contact.label.serviceType": { ko: "서비스 종류", en: "Service Type" },
  "contact.help.serviceType": { ko: "필요하신 서비스를 선택해 주세요.", en: "Choose the service you need." },
  "contact.option.svcAirportPickup": { ko: "Airport Pickup (공항 픽업)", en: "Airport Pickup" },
  "contact.option.svcAirportDropoff": { ko: "Airport Drop-off (공항 샌딩)", en: "Airport Drop-off" },
  "contact.option.svcP2p": { ko: "Point-to-Point Transfer (시내 이동)", en: "Point-to-Point Transfer" },
  "contact.option.svcDaily": { ko: "Daily Chauffeur (데일리 차량)", en: "Daily Chauffeur" },
  "contact.option.svcCustomTour": { ko: "Custom Daily Tour (맞춤형 일일투어)", en: "Custom Daily Tour" },
  "contact.option.svcBusiness": { ko: "Business & VIP Chauffeur", en: "Business & VIP Chauffeur" },
  "contact.option.svcIntercity": { ko: "Intercity Transfer (도시 간 이동)", en: "Intercity Transfer" },
  "contact.option.svcOther": { ko: "기타", en: "Other" },

  "contact.label.vehicleClass": { ko: "차량 등급", en: "Vehicle Class" },
  "contact.help.vehicleClass": { ko: "Standard 또는 Premium 중 선택해 주세요.", en: "Choose Standard or Premium." },
  "contact.option.classStandard": { ko: "Standard", en: "Standard" },
  "contact.option.classPremium": { ko: "Premium", en: "Premium" },

  "contact.label.preferredVehicle": { ko: "희망 차종", en: "Preferred Vehicle" },
  "contact.help.preferredVehicle": { ko: "차량 모델은 현지 수급 상황에 따라 변경될 수 있습니다.", en: "The vehicle model may change depending on local availability." },
  "contact.option.vehSClass": { ko: "Mercedes-Benz S-Class", en: "Mercedes-Benz S-Class" },
  "contact.option.veh7Series": { ko: "BMW 7 Series", en: "BMW 7 Series" },
  "contact.option.vehG90": { ko: "Genesis G90", en: "Genesis G90" },
  "contact.option.vehMaybach": { ko: "Maybach", en: "Maybach" },
  "contact.option.vehSprinter": { ko: "Mercedes-Benz Sprinter", en: "Mercedes-Benz Sprinter" },
  "contact.option.vehPremiumSuv": { ko: "Premium SUV", en: "Premium SUV" },
  "contact.option.vehPremiumVan": { ko: "Premium Van", en: "Premium Van" },
  "contact.option.vehNoPreference": { ko: "No Preference (상관없음)", en: "No Preference" },

  "contact.label.pickupTime": { ko: "픽업 시간", en: "Pickup Time" },
  "contact.label.dailyHours": { ko: "데일리 이용 시간", en: "Daily Use Hours" },
  "contact.help.dailyHours": { ko: "데일리 차량 또는 맞춤형 투어인 경우 입력해 주세요.", en: "Fill in for Daily Chauffeur or Custom Daily Tour requests." },
  "contact.option.hours4": { ko: "4시간", en: "4 hours" },
  "contact.option.hours8": { ko: "8시간", en: "8 hours" },
  "contact.option.hoursFull": { ko: "종일", en: "Full day" },
  "contact.option.hoursCustom": { ko: "맞춤 일정", en: "Custom" },
  "contact.optional": { ko: "(선택)", en: "(optional)" },
  "contact.placeholder.name": { ko: "홍길동", en: "Jane Doe" },
  "contact.placeholder.city": { ko: "예: 미국 시애틀", en: "e.g. Seattle, USA" },
  "contact.placeholder.organization": { ko: "예: OO교육청, OO주식회사", en: "e.g. Company or institution name" },
  "contact.placeholder.kakao": { ko: "카카오톡 ID (선택)", en: "KakaoTalk ID (optional)" },
  "contact.placeholder.passengers": { ko: "숫자만 입력", en: "Enter a number" },
  "contact.placeholder.pickup": { ko: "예: 공항, 호텔명", en: "e.g. airport, hotel name" },
  "contact.placeholder.route": { ko: "예: 공항 → 호텔 → 회의장", en: "e.g. Airport → Hotel → Meeting venue" },
  "contact.placeholder.budget": { ko: "예: 협의 가능", en: "e.g. Open to discussion" },
  "contact.placeholder.notes": { ko: "전달하고 싶은 내용을 자유롭게 적어주세요.", en: "Share any other details we should know." },
  "contact.help.clientType": { ko: "문의 성격에 맞게 선택해 주세요.", en: "Select the option that best matches your inquiry." },
  "contact.help.name": { ko: "담당자 실명을 입력해 주세요.", en: "Enter the contact person's full name." },
  "contact.help.organization": { ko: "기업·기관 문의 시 입력해 주세요.", en: "Fill in for corporate or institutional inquiries." },
  "contact.help.email": { ko: "회신받으실 이메일 주소를 입력해 주세요.", en: "Enter the email address where we can reach you." },
  "contact.help.kakao": { ko: "카카오톡으로 소통을 원하시면 입력해 주세요.", en: "Enter this if you prefer to communicate via KakaoTalk." },
  "contact.help.city": { ko: "이용하실 국가와 도시를 함께 적어주세요.", en: "Include both the country and city." },
  "contact.help.dates": { ko: "실제 이용 일정을 기준으로 입력해 주세요.", en: "Enter the actual dates you plan to use the service." },
  "contact.help.passengers": { ko: "탑승 예정 인원 수를 입력해 주세요.", en: "Enter the number of passengers." },
  "contact.help.vehicle": { ko: "세단/SUV/미니밴/프리미엄/밴 중 선택해 주세요.", en: "Choose from sedan, SUV, minivan, premium, or van." },
  "contact.help.koreanDriver": { ko: "필요/가능하면/상관없음 중 선택해 주세요.", en: "Choose required, if possible, or no preference." },
  "contact.help.purpose": { ko: "방문 목적에 맞게 선택해 주세요.", en: "Choose the option that matches your purpose." },
  "contact.help.pickup": { ko: "픽업 받으실 장소를 적어주세요.", en: "Enter the location where you'd like to be picked up." },
  "contact.help.route": { ko: "주요 이동 경로를 순서대로 적어주세요.", en: "List the main stops in order." },
  "contact.help.budget": { ko: "대략적인 예산이 있다면 적어주세요.", en: "Share an approximate budget if you have one." },
  "contact.help.notes": { ko: "차량, 일정과 관련한 추가 사항을 적어주세요.", en: "Add any extra notes about your vehicle or schedule needs." },
  "contact.option.select": { ko: "선택해주세요", en: "Please select" },
  "contact.option.sedan": { ko: "세단", en: "Sedan" },
  "contact.option.suv": { ko: "SUV", en: "SUV" },
  "contact.option.minivan": { ko: "미니밴", en: "Minivan" },
  "contact.option.premium": { ko: "프리미엄", en: "Premium" },
  "contact.option.van": { ko: "밴 / 버스", en: "Van / Bus" },
  "contact.option.unknown": { ko: "모름", en: "Not sure" },
  "contact.option.driverRequired": { ko: "필요", en: "Required" },
  "contact.option.driverPreferred": { ko: "가능하면", en: "If possible" },
  "contact.option.driverEither": { ko: "상관없음", en: "No preference" },
  "contact.option.individual": { ko: "개인", en: "Individual" },
  "contact.option.corporate": { ko: "기업", en: "Corporate" },
  "contact.option.institution": { ko: "기관", en: "Institution" },
  "contact.option.other": { ko: "기타", en: "Other" },
  "contact.option.purposeAirport": { ko: "공항에서 호텔까지만 이동", en: "Just airport to hotel" },
  "contact.option.purposeDriver": { ko: "하루 여러 미팅 이동", en: "Multiple meetings in one day" },
  "contact.option.purposeBuyer": { ko: "해외 바이어 방문", en: "Visiting a buyer abroad" },
  "contact.option.purposeSchool": { ko: "교육청·학교 연수", en: "School district / school visit" },
  "contact.option.purposeExhibition": { ko: "전시회·컨퍼런스", en: "Trade show / conference" },
  "contact.option.purposeMultiCity": { ko: "여러 도시 연속 출장", en: "Multi-city business trip" },
  "contact.option.purposeFamily": { ko: "가족 여행", en: "Family trip" },
  "contact.option.purposeGolf": { ko: "골프·행사 일정", en: "Golf / event schedule" },
  "contact.submit": { ko: "문의 보내기", en: "Send Inquiry" },
  "contact.privacyNote": { ko: "제출하신 정보는 문의 응대 목적으로만 사용됩니다.", en: "Information submitted is used only to respond to your inquiry." },
  "contact.refundNote": { ko: "예약 확정 전 취소·환불 조건을 먼저 안내해 드립니다. 확정 이후의 변경·취소 조건은 서비스, 지역, 이용일과 현지 파트너 정책에 따라 달라질 수 있습니다.", en: "Cancellation and refund terms are shared before your booking is confirmed. Terms for changes after confirmation can vary by service, region, date, and local partner policy." },
  "contact.resvNote": { ko: "랜드마크·레스토랑 예약대행은 별도 문의 폼을 이용해 주세요.", en: "For landmark or restaurant reservations, please use the separate reservation inquiry form." },
  "contact.resvLink": { ko: "예약대행 문의 폼으로 이동", en: "Go to the reservation inquiry form" },

  "resvPage.title": { ko: "해외 랜드마크·레스토랑 예약대행", en: "Overseas Landmark & Restaurant Reservation Service" },
  "resvPage.sub": { ko: "직접 예약하기 번거로운 현지 일정, 날짜와 장소만 보내주세요.", en: "Tell us the date and venue — we'll handle the local reservation legwork." },
  "resvPage.notice": { ko: "예약대행 서비스는 해당 장소의 공식 운영기관이 아닙니다. Certo Drive는 고객 요청에 따라 예약 가능 여부를 확인하고 예약 절차를 지원하는 대행 서비스입니다. 입장 정책, 운영시간, 예약 가능 여부, 취소 규정은 각 시설 또는 레스토랑 정책에 따라 달라질 수 있습니다.", en: "This reservation service is not the official operator of any venue. Certo Drive checks availability and supports the booking process at the customer's request. Entry policy, hours, availability, and cancellation terms are set by each venue or restaurant and may vary." },

  "resvPage.combined.business": { ko: "기업 디너, 바이어 식사 등 단체 인원 레스토랑 예약도 함께 지원합니다.", en: "We also support group reservations for corporate dinners and client meals." },
  "resvPage.combined.title": { ko: "차량과 함께 예약", en: "Combined with a Vehicle" },
  "resvPage.combined.desc": { ko: "픽업, 예약 장소 이동, 식사 후 복귀까지 차량과 예약대행을 하나의 일정으로 조율할 수 있습니다. 차량이 필요하시면 차량 문의 폼도 함께 남겨주세요.", en: "Pickup, transport to the venue, and the ride back after dinner can all be coordinated into a single itinerary alongside your reservation. If you also need a vehicle, leave a note on the vehicle inquiry form as well." },
  "resvPage.combined.cta": { ko: "차량 문의하기", en: "Request a Vehicle" },

  "resvPage.process.title": { ko: "예약 절차", en: "Reservation Process" },
  "resvPage.process.subtitle": { ko: "예약 확정 전 반드시 고객 확인 절차를 거칩니다.", en: "We always confirm with you before finalizing any reservation." },
  "resvPage.process.step1.title": { ko: "장소와 날짜 전달", en: "Share Venue & Date" },
  "resvPage.process.step1.desc": { ko: "원하시는 장소와 날짜, 인원을 알려주세요.", en: "Tell us the venue, date, and party size you want." },
  "resvPage.process.step2.title": { ko: "예약 가능 여부 확인", en: "Check Availability" },
  "resvPage.process.step2.desc": { ko: "공식 또는 제휴 경로로 예약 가능 여부를 확인합니다.", en: "We check availability through official or partner channels." },
  "resvPage.process.step3.title": { ko: "비용 및 취소 규정 안내", en: "Share Cost & Cancellation Terms" },
  "resvPage.process.step3.desc": { ko: "예약금, 수수료, 취소 규정이 있다면 미리 안내합니다.", en: "Any deposit, fee, or cancellation terms are shared in advance." },
  "resvPage.process.step4.title": { ko: "고객 확인", en: "Customer Confirmation" },
  "resvPage.process.step4.desc": { ko: "안내드린 내용에 동의하시면 진행합니다.", en: "We proceed once you agree to the terms shared." },
  "resvPage.process.step5.title": { ko: "예약 진행", en: "Reservation Made" },
  "resvPage.process.step5.desc": { ko: "확인된 조건으로 예약을 진행합니다.", en: "The reservation is made under the confirmed terms." },
  "resvPage.process.step6.title": { ko: "예약 정보 전달", en: "Reservation Details Sent" },
  "resvPage.process.step6.desc": { ko: "예약 확인서와 안내 사항을 전달합니다.", en: "We send your confirmation and any venue instructions." },

  "resvPage.examples.eyebrow": { ko: "EXAMPLES", en: "EXAMPLES" },
  "resvPage.examples.title": { ko: "이용 예시", en: "Usage Examples" },
  "resvPage.examples.subtitle": { ko: "실제 이용 방식 이해를 돕기 위한 예시입니다.", en: "Examples to help you understand how this service is typically used." },
  "resvPage.examples.caption": { ko: "실제 이용 방식 이해를 위한 예시입니다.", en: "An example to illustrate how the service is used." },
  "resvPage.ex1.city": { ko: "밀라노", en: "Milan" },
  "resvPage.ex1.desc": { ko: "성당 입장 예약 + 디너 예약", en: "Cathedral entry reservation + dinner reservation" },
  "resvPage.ex2.city": { ko: "도쿄", en: "Tokyo" },
  "resvPage.ex2.desc": { ko: "오마카세 예약 + 공항 픽업", en: "Omakase reservation + airport pickup" },
  "resvPage.ex3.city": { ko: "파리", en: "Paris" },
  "resvPage.ex3.desc": { ko: "미술관 예약 + 레스토랑 예약 + 차량", en: "Museum reservation + restaurant reservation + vehicle" },
  "resvPage.ex4.city": { ko: "바르셀로나", en: "Barcelona" },
  "resvPage.ex4.desc": { ko: "사그라다 파밀리아 예약 + 차량", en: "Sagrada Familia reservation + vehicle" },
  "resvPage.ex5.city": { ko: "피렌체", en: "Florence" },
  "resvPage.ex5.desc": { ko: "우피치 미술관 + 레스토랑 예약", en: "Uffizi Gallery + restaurant reservation" },

  "resvPage.faq.title": { ko: "예약대행 자주 묻는 질문", en: "Reservation Service FAQ" },
  "resvPage.faq.q1": { ko: "랜드마크 티켓도 대신 예약할 수 있나요?", en: "Can you book landmark tickets for me?" },
  "resvPage.faq.a1": { ko: "네. 날짜, 시간, 인원, 장소명을 보내주시면 예약 가능 여부를 확인합니다.", en: "Yes. Send us the date, time, party size, and venue name, and we'll check availability." },
  "resvPage.faq.q2": { ko: "레스토랑을 정하지 못했는데 문의할 수 있나요?", en: "Can I inquire even if I haven't picked a restaurant?" },
  "resvPage.faq.a2": { ko: "가능합니다. 도시, 인원, 예산, 원하는 분위기를 알려주시면 일정에 맞는 후보를 정리할 수 있습니다.", en: "Yes. Tell us the city, party size, budget, and the mood you want, and we can shortlist options for your schedule." },
  "resvPage.faq.q3": { ko: "미쉐린 레스토랑도 가능한가요?", en: "Can you book Michelin-listed restaurants?" },
  "resvPage.faq.a3": { ko: "가능 여부는 레스토랑과 날짜에 따라 다릅니다. 예약금이나 선결제가 필요한 경우도 있습니다.", en: "It depends on the restaurant and date. Some require a deposit or prepayment." },
  "resvPage.faq.q4": { ko: "예약이 항상 가능한가요?", en: "Is a reservation always possible?" },
  "resvPage.faq.a4": { ko: "아닙니다. 매진, 휴무, 예약 오픈 전, 현지 정책에 따라 예약이 불가능할 수 있습니다.", en: "No. Sold-out dates, closures, bookings not yet open, or local policy can make a reservation impossible." },
  "resvPage.faq.q5": { ko: "티켓 가격 외에 비용이 있나요?", en: "Are there costs beyond the ticket price?" },
  "resvPage.faq.a5": { ko: "예약대행 수수료가 발생할 수 있습니다. 실제 결제 전에 비용 구조를 안내합니다.", en: "A service fee may apply. We explain the full cost before any payment is made." },
  "resvPage.faq.q6": { ko: "예약 후 취소할 수 있나요?", en: "Can I cancel after booking?" },
  "resvPage.faq.a6": { ko: "장소마다 취소 및 환불 규정이 다릅니다. 예약 확정 전에 해당 규정을 안내합니다.", en: "Cancellation and refund terms vary by venue. We share the specific terms before confirming." },
  "resvPage.faq.q7": { ko: "레스토랑 노쇼 비용이 있나요?", en: "Is there a no-show fee for restaurants?" },
  "resvPage.faq.a7": { ko: "레스토랑에 따라 카드 보증, 예약금 또는 노쇼 비용이 있을 수 있습니다.", en: "Depending on the restaurant, a card guarantee, deposit, or no-show fee may apply." },
  "resvPage.faq.q8": { ko: "차량과 레스토랑 예약을 같이 할 수 있나요?", en: "Can I book a vehicle and restaurant together?" },
  "resvPage.faq.a8": { ko: "가능합니다. 차량 이동과 예약 시간을 함께 맞춰 일정으로 조율할 수 있습니다.", en: "Yes. Vehicle transport and your reservation time can be coordinated into one schedule." },

  "resvForm.title": { ko: "예약대행 문의", en: "Reservation Inquiry" },
  "resvForm.subtitle": { ko: "아래 정보를 남겨주시면 가능 여부를 확인해 회신드립니다.", en: "Leave your details below and we'll confirm availability." },
  "resvForm.step1": { ko: "STEP 1 · 어떤 예약이 필요한가요?", en: "STEP 1 · What Do You Need Reserved?" },
  "resvForm.type.landmark": { ko: "랜드마크", en: "Landmark" },
  "resvForm.type.museum": { ko: "미술관·박물관", en: "Art Museum / Museum" },
  "resvForm.type.restaurant": { ko: "레스토랑", en: "Restaurant" },
  "resvForm.type.fine": { ko: "파인다이닝", en: "Fine Dining" },
  "resvForm.type.group": { ko: "단체 식사", en: "Group Dining" },
  "resvForm.type.other": { ko: "기타", en: "Other" },
  "resvForm.step2": { ko: "STEP 2 · 지역 및 일정", en: "STEP 2 · Region & Schedule" },
  "resvForm.label.country": { ko: "국가", en: "Country" },
  "resvForm.label.city": { ko: "도시", en: "City" },
  "resvForm.label.venue": { ko: "희망 장소", en: "Preferred Venue" },
  "resvForm.label.date": { ko: "희망 날짜", en: "Preferred Date" },
  "resvForm.label.time": { ko: "희망 시간", en: "Preferred Time" },
  "resvForm.label.party": { ko: "인원", en: "Party Size" },
  "resvForm.restaurantExtra": { ko: "레스토랑 추가 정보", en: "Restaurant Details" },
  "resvForm.label.mealTime": { ko: "점심 / 저녁", en: "Lunch / Dinner" },
  "resvForm.option.lunch": { ko: "점심", en: "Lunch" },
  "resvForm.option.dinner": { ko: "저녁", en: "Dinner" },
  "resvForm.label.budget": { ko: "예산", en: "Budget" },
  "resvForm.label.mood": { ko: "원하는 분위기", en: "Preferred Mood" },
  "resvForm.label.dietary": { ko: "알레르기 또는 식이 제한", en: "Allergies or Dietary Restrictions" },
  "resvForm.label.anniversary": { ko: "기념일 여부", en: "Special Occasion" },
  "resvForm.landmarkExtra": { ko: "랜드마크 추가 정보", en: "Landmark Details" },
  "resvForm.label.adults": { ko: "성인 인원", en: "Adults" },
  "resvForm.label.children": { ko: "아동 인원", en: "Children" },
  "resvForm.label.guide": { ko: "가이드 필요 여부", en: "Guide Needed" },
  "resvForm.label.exhibition": { ko: "특별 전시 여부", en: "Special Exhibition" },
  "resvForm.step3": { ko: "STEP 3 · 신청자 정보", en: "STEP 3 · Your Information" },
  "resvForm.label.name": { ko: "이름", en: "Name" },
  "resvForm.label.email": { ko: "이메일", en: "Email" },
  "resvForm.label.phone": { ko: "휴대폰 번호 또는 카카오톡 ID", en: "Phone Number or KakaoTalk ID" },
  "resvForm.label.message": { ko: "추가 요청사항", en: "Additional Requests" },
  "resvForm.submit": { ko: "예약대행 문의 보내기", en: "Send Reservation Inquiry" },

  "error.required": { ko: "필수 항목입니다.", en: "This field is required." },
  "error.email": { ko: "올바른 이메일 주소를 입력해주세요.", en: "Please enter a valid email address." },
  "error.passengers": { ko: "인원을 1명 이상 입력해주세요.", en: "Please enter at least 1 passenger." },
  "error.dateOrder": { ko: "종료일은 시작일 이후여야 합니다.", en: "The end date must be on or after the start date." },

  "footer.about": { ko: "체르토 드라이브는 공항픽업 및 샌딩, 기업 출장 및 외국인 바이어 의전, 프라이빗 일일투어, 여러 날의 장기 전담 차량, 도시 간 장거리 이동, 골프 차량, 기업 행사 및 VIP 행사 차량, 프리미엄 차량 및 의전을 국내외에서 제공하는 글로벌 기사 포함 차량 브랜드입니다.", en: "Certo Drive is a global chauffeured vehicle brand providing airport pickup and drop-off, business travel and foreign buyer escort, private daily tours, multi-day long-term dedicated vehicles, intercity transfers, golf vehicles, corporate and VIP event vehicles, and premium vehicles and escort service — in Korea and abroad." },
  "footer.linksTitle": { ko: "바로가기", en: "Quick Links" },
  "footer.contactTitle": { ko: "연락처", en: "Contact" },
  "footer.emergencyLabel": { ko: "긴급 연락처", en: "Emergency Contact" },
  "footer.legal1": { ko: "체르토 드라이브는 중개 서비스입니다.", en: "Certo Drive is a booking intermediary service." },
  "footer.legal2": { ko: "차량 운행은 현지 파트너가 진행하며, 랜드마크·레스토랑 예약은 각 시설의 운영 정책과 예약 가능 여부에 따라 진행됩니다.", en: "Vehicle trips are carried out by a local partner, and landmark or restaurant reservations follow each venue's own policy and availability." },
  "footer.legal3": { ko: "문의 시점의 가능 여부는 확정이 아니며, 조건 확인 후 확정됩니다.", en: "Availability at the time of inquiry is not a confirmation; it is finalized after review." },
  "footer.rights": { ko: "모든 권리 보유", en: "All rights reserved." },

  "thanks.eyebrow": { ko: "접수 완료", en: "Inquiry Received" },
  "thanks.title": { ko: "문의가 접수되었습니다", en: "Your Inquiry Has Been Received" },
  "thanks.body": { ko: "확인 후 이메일 또는 카카오톡으로 회신드립니다.", en: "We'll reply by email or KakaoTalk after review." },
  "thanks.back": { ko: "홈으로 돌아가기", en: "Back to Home" },

  "notFound.eyebrow": { ko: "404", en: "404" },
  "notFound.title": { ko: "페이지를 찾을 수 없습니다", en: "Page Not Found" },
  "notFound.body": { ko: "요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다. 아래에서 원하시는 서비스를 찾아보세요.", en: "The page you requested may have been removed or moved. Find what you're looking for below." },
  "notFound.home": { ko: "홈으로 돌아가기", en: "Back to Home" },
  "notFound.cities": { ko: "도시별 서비스 보기", en: "Browse Cities" },
  "notFound.contact": { ko: "견적 문의하기", en: "Request a Quote" }
};

var LANG_KEY = "certodrive_lang";

function getSavedLang() {
  try {
    var saved = localStorage.getItem(LANG_KEY);
    return saved === "en" ? "en" : "ko";
  } catch (e) {
    return "ko";
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* localStorage unavailable — ignore */
  }
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "ko");

  var textNodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < textNodes.length; i++) {
    var key = textNodes[i].getAttribute("data-i18n");
    var entry = I18N[key];
    if (entry) {
      textNodes[i].textContent = entry[lang];
    }
  }

  var placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  for (var j = 0; j < placeholderNodes.length; j++) {
    var pKey = placeholderNodes[j].getAttribute("data-i18n-placeholder");
    var pEntry = I18N[pKey];
    if (pEntry) {
      placeholderNodes[j].setAttribute("placeholder", pEntry[lang]);
    }
  }

  var ariaNodes = document.querySelectorAll("[data-i18n-aria-label]");
  for (var k = 0; k < ariaNodes.length; k++) {
    var aKey = ariaNodes[k].getAttribute("data-i18n-aria-label");
    var aEntry = I18N[aKey];
    if (aEntry) {
      ariaNodes[k].setAttribute("aria-label", aEntry[lang]);
    }
  }

  // Pages other than the homepage set window.PAGE_META (title/description per
  // language) before app.js loads, so their own SEO title and meta description
  // aren't clobbered by the homepage's.
  var titleEntry = (window.PAGE_META && window.PAGE_META.title) || I18N["meta.title"];
  if (titleEntry) {
    document.title = titleEntry[lang];
  }
  var descEntry = (window.PAGE_META && window.PAGE_META.description) || I18N["meta.description"];
  var descTag = document.querySelector('meta[name="description"]');
  if (descTag && descEntry) {
    descTag.setAttribute("content", descEntry[lang]);
  }

  var koBtn = document.getElementById("lang-ko");
  var enBtn = document.getElementById("lang-en");
  if (koBtn && enBtn) {
    koBtn.setAttribute("aria-pressed", lang === "ko" ? "true" : "false");
    enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  }

  updateRecommenderResult();
  saveLang(lang);
}

function initLanguageToggle() {
  var koBtn = document.getElementById("lang-ko");
  var enBtn = document.getElementById("lang-en");
  if (koBtn) {
    koBtn.addEventListener("click", function () {
      applyLanguage("ko");
    });
  }
  if (enBtn) {
    enBtn.addEventListener("click", function () {
      applyLanguage("en");
    });
  }
  applyLanguage(getSavedLang());
}

function initMobileNav() {
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  var links = menu.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }
}

function initKakaoLinks() {
  var kakaoLinks = document.querySelectorAll('[data-kakao-link]');
  for (var i = 0; i < kakaoLinks.length; i++) {
    kakaoLinks[i].setAttribute("href", CONFIG.KAKAO_URL);
  }
  var emailLinks = document.querySelectorAll('[data-email-link]');
  for (var j = 0; j < emailLinks.length; j++) {
    emailLinks[j].setAttribute("href", "mailto:" + CONFIG.CONTACT_EMAIL);
    if (emailLinks[j].hasAttribute("data-email-text")) {
      emailLinks[j].textContent = CONFIG.CONTACT_EMAIL;
    }
  }
  var phoneLinks = document.querySelectorAll('[data-phone-link]');
  for (var k = 0; k < phoneLinks.length; k++) {
    phoneLinks[k].setAttribute("href", "tel:" + CONFIG.PHONE_TEL);
    if (phoneLinks[k].hasAttribute("data-phone-text")) {
      phoneLinks[k].textContent = CONFIG.PHONE_DISPLAY;
    }
  }
}

function initFooterYear() {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

/* ---- Itinerary quick-picker: sets contact form purpose + scrolls ---- */
function initItineraryPicker() {
  var grid = document.getElementById("itinerary-grid");
  if (!grid) return;
  var purposeSelect = document.getElementById("purpose");

  grid.addEventListener("click", function (event) {
    var chip = event.target.closest(".itinerary-chip");
    if (!chip) return;

    var chips = grid.querySelectorAll(".itinerary-chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.remove("is-active");
    }
    chip.classList.add("is-active");

    var purposeValue = chip.getAttribute("data-purpose");
    if (purposeSelect && purposeValue) {
      purposeSelect.value = purposeValue;
    }

    var contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

/* ---- Vehicle recommender ---- */
var recommenderState = { pax: null, luggage: null };

function computeRecommendation(pax, luggage) {
  if (pax === "8+") return "recommender.van";
  if (pax === "6-7") return "recommender.minivan";
  if (pax === "4-5") return "recommender.suvOrMinivan";
  if (pax === "1-3") {
    if (luggage === "heavy" || luggage === "golf") return "recommender.suv";
    return "recommender.sedan";
  }
  return null;
}

function updateRecommenderResult() {
  var resultBox = document.getElementById("recommender-result");
  var resultValue = document.getElementById("recommender-result-value");
  if (!resultBox || !resultValue) return;

  var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "ko";

  if (!recommenderState.pax || !recommenderState.luggage) {
    resultBox.hidden = true;
    return;
  }

  var key = computeRecommendation(recommenderState.pax, recommenderState.luggage);
  if (key && I18N[key]) {
    resultValue.textContent = I18N[key][lang];
    resultBox.hidden = false;
  }
}

function initVehicleRecommender() {
  var paxGroup = document.getElementById("recommender-pax");
  var luggageGroup = document.getElementById("recommender-luggage");
  if (!paxGroup || !luggageGroup) return;

  paxGroup.addEventListener("click", function (event) {
    var btn = event.target.closest(".recommender-option");
    if (!btn) return;
    var buttons = paxGroup.querySelectorAll(".recommender-option");
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("is-active");
    btn.classList.add("is-active");
    recommenderState.pax = btn.getAttribute("data-pax");
    updateRecommenderResult();
  });

  luggageGroup.addEventListener("click", function (event) {
    var btn = event.target.closest(".recommender-option");
    if (!btn) return;
    var buttons = luggageGroup.querySelectorAll(".recommender-option");
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("is-active");
    btn.classList.add("is-active");
    recommenderState.luggage = btn.getAttribute("data-luggage");
    updateRecommenderResult();
  });
}

/* ---- City search filter ---- */
function initCitySearch() {
  var input = document.getElementById("city-search-input");
  var regionsBox = document.getElementById("city-regions");
  var noMatch = document.getElementById("city-no-match");
  if (!input || !regionsBox) return;

  input.addEventListener("input", function () {
    var query = input.value.trim().toLowerCase();
    var groups = regionsBox.querySelectorAll(".city-region-group");
    var anyVisible = false;

    for (var g = 0; g < groups.length; g++) {
      var group = groups[g];
      var countryGroups = group.querySelectorAll(".city-country-group");
      var groupHasMatch = false;

      if (countryGroups.length) {
        for (var cg = 0; cg < countryGroups.length; cg++) {
          var countryGroup = countryGroups[cg];
          var countryChips = countryGroup.querySelectorAll(".city-chip");
          var countryHasMatch = false;
          for (var cc = 0; cc < countryChips.length; cc++) {
            var ccChip = countryChips[cc];
            var ccText = ccChip.textContent.trim().toLowerCase();
            var ccMatches = query === "" || ccText.indexOf(query) !== -1;
            ccChip.classList.toggle("is-hidden", !ccMatches);
            if (ccMatches) countryHasMatch = true;
          }
          countryGroup.classList.toggle("is-empty", !countryHasMatch);
          if (countryHasMatch) groupHasMatch = true;
        }
      } else {
        var chips = group.querySelectorAll(".city-chip");
        for (var c = 0; c < chips.length; c++) {
          var chip = chips[c];
          var text = chip.textContent.trim().toLowerCase();
          var matches = query === "" || text.indexOf(query) !== -1;
          chip.classList.toggle("is-hidden", !matches);
          if (matches) groupHasMatch = true;
        }
      }

      group.classList.toggle("has-match", groupHasMatch);
      if (groupHasMatch) anyVisible = true;
    }

    if (noMatch) {
      noMatch.classList.toggle("is-visible", !anyVisible);
    }
  });
}

function setFieldError(form, fieldName, message) {
  var errorEl = form.querySelector('[data-error-for="' + fieldName + '"]');
  var field = form.querySelector('[name="' + fieldName + '"]');
  if (errorEl) {
    errorEl.textContent = message || "";
  }
  if (field) {
    if (message) {
      field.classList.add("is-invalid");
    } else {
      field.classList.remove("is-invalid");
    }
  }
}

function validateRequiredFields(form, requiredFields) {
  var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "ko";
  var hasError = false;
  var firstInvalid = null;

  requiredFields.forEach(function (fieldName) {
    var field = form.querySelector('[name="' + fieldName + '"]');
    if (!field) return;
    var value = (field.value || "").trim();
    if (!value) {
      setFieldError(form, fieldName, I18N["error.required"][lang]);
      hasError = true;
      firstInvalid = firstInvalid || field;
    } else {
      setFieldError(form, fieldName, "");
    }
  });

  return { hasError: hasError, firstInvalid: firstInvalid };
}

/* ---- Shared AJAX submit: keeps the user on the page, shows an inline
   success/error panel instead of a hard redirect. Falls back to a plain
   POST (via _next) if JS or fetch is unavailable. ---- */
function attachAjaxSubmit(options) {
  var form = options.form;
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "ko";
    var check = validateRequiredFields(form, options.requiredFields || []);
    var extraCheck = options.extraValidate ? options.extraValidate(form, lang) : { hasError: false };

    if (check.hasError || extraCheck.hasError) {
      var firstInvalid = check.firstInvalid || extraCheck.firstInvalid;
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (response.ok) {
          showFormState(options, "success");
        } else {
          showFormState(options, "error");
        }
      })
      .catch(function () {
        showFormState(options, "error");
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}

function showFormState(options, state) {
  if (options.form) options.form.hidden = state === "success";
  if (options.successEl) options.successEl.hidden = state !== "success";
  if (options.errorEl) options.errorEl.hidden = state !== "error";
  if (state === "success" && options.successEl) {
    options.successEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  if (state === "error" && options.errorEl) {
    options.errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

var driveEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateDriveForm(form, lang) {
  var hasError = false;
  var firstInvalid = null;

  var emailField = form.querySelector('[name="email"]');
  if (emailField && emailField.value.trim() && !driveEmailPattern.test(emailField.value.trim())) {
    setFieldError(form, "email", I18N["error.email"][lang]);
    hasError = true;
    firstInvalid = firstInvalid || emailField;
  }

  var passengersField = form.querySelector('[name="passengers"]');
  if (passengersField && passengersField.value.trim()) {
    var passengersNum = parseInt(passengersField.value, 10);
    if (isNaN(passengersNum) || passengersNum < 1) {
      setFieldError(form, "passengers", I18N["error.passengers"][lang]);
      hasError = true;
      firstInvalid = firstInvalid || passengersField;
    }
  }

  var startField = form.querySelector('[name="start_date"]');
  var endField = form.querySelector('[name="end_date"]');
  if (startField && endField && startField.value && endField.value) {
    if (endField.value < startField.value) {
      setFieldError(form, "end_date", I18N["error.dateOrder"][lang]);
      hasError = true;
      firstInvalid = firstInvalid || endField;
    }
  }

  return { hasError: hasError, firstInvalid: firstInvalid };
}

function initContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.setAttribute("action", "https://formspree.io/f/" + CONFIG.DRIVE_FORM_ID);

  attachAjaxSubmit({
    form: form,
    requiredFields: ["name", "email", "city", "start_date", "end_date", "passengers", "client_type"],
    extraValidate: validateDriveForm,
    successEl: document.getElementById("contact-success"),
    errorEl: document.getElementById("contact-error")
  });
}

/* ---- Main contact form: service-type picker driving conditional field blocks ---- */
function setConditionalBlockActive(block, active) {
  if (!block) return;
  block.hidden = !active;
  var fields = block.querySelectorAll("input, select, textarea");
  for (var i = 0; i < fields.length; i++) fields[i].disabled = !active;
}

function initContactServicePicker() {
  var group = document.getElementById("contact-service-group");
  var hiddenInput = document.getElementById("contact_service");
  if (!group || !hiddenInput) return;

  var blockByService = {
    airport_pickup: "cf-extra-airport",
    airport_dropoff: "cf-extra-airport",
    business: "cf-extra-business",
    tour: "cf-extra-tour",
    long_term: "cf-extra-longterm",
    intercity: "cf-extra-intercity",
    golf: "cf-extra-golf",
    event: "cf-extra-event",
    premium: "cf-extra-premium"
  };
  var allBlockIds = ["cf-extra-airport", "cf-extra-business", "cf-extra-tour", "cf-extra-longterm", "cf-extra-intercity", "cf-extra-golf", "cf-extra-event", "cf-extra-premium"];

  // All conditional blocks start hidden: disable their fields so empty,
  // irrelevant fields aren't included in the submitted form data.
  for (var k = 0; k < allBlockIds.length; k++) {
    setConditionalBlockActive(document.getElementById(allBlockIds[k]), false);
  }

  function selectService(btn) {
    if (!btn) return;
    var buttons = group.querySelectorAll(".recommender-option");
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("is-active");
    btn.classList.add("is-active");

    var value = btn.getAttribute("data-value") || "";
    hiddenInput.value = value;

    var activeBlockId = blockByService[value];
    for (var j = 0; j < allBlockIds.length; j++) {
      var block = document.getElementById(allBlockIds[j]);
      setConditionalBlockActive(block, allBlockIds[j] === activeBlockId);
    }
  }

  group.addEventListener("click", function (event) {
    var btn = event.target.closest(".recommender-option");
    if (!btn) return;
    selectService(btn);
  });

  var presetService = new URLSearchParams(window.location.search).get("service");
  if (presetService) {
    var presetBtn = group.querySelector('.recommender-option[data-value="' + presetService + '"]');
    if (presetBtn) selectService(presetBtn);
  }
}

/* ---- Vehicle class (Standard / Premium) picker, shared by the contact form and the corporate form ---- */
function initVehicleClassPicker(groupId, inputId) {
  var group = document.getElementById(groupId);
  var hiddenInput = document.getElementById(inputId);
  if (!group || !hiddenInput) return;

  group.addEventListener("click", function (event) {
    var btn = event.target.closest(".recommender-option");
    if (!btn) return;
    var buttons = group.querySelectorAll(".recommender-option");
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("is-active");
    btn.classList.add("is-active");
    hiddenInput.value = btn.getAttribute("data-class") || "";
  });
}

/* ---- Corporate foreign-visitor escort inquiry form ---- */
function initCorporateForm() {
  var form = document.getElementById("corporate-form-el");
  if (!form) return;

  form.setAttribute("action", "https://formspree.io/f/" + CONFIG.DRIVE_FORM_ID);

  attachAjaxSubmit({
    form: form,
    requiredFields: [
      "company_name",
      "department",
      "contact_name",
      "contact_phone",
      "email",
      "visitor_nationality",
      "visitor_count",
      "arrival_date",
      "departure_date"
    ],
    extraValidate: function (f, lang) {
      var emailField = f.querySelector('[name="email"]');
      if (emailField && emailField.value.trim() && !driveEmailPattern.test(emailField.value.trim())) {
        setFieldError(f, "email", I18N["error.email"][lang]);
        return { hasError: true, firstInvalid: emailField };
      }
      setFieldError(f, "email", "");
      return { hasError: false };
    },
    successEl: document.getElementById("corporate-success"),
    errorEl: document.getElementById("corporate-error")
  });
}

/* ---- Private Tour consultation form ---- */
function initTourForm() {
  var form = document.getElementById("tour-form-el");
  if (!form) return;

  var classGroup = document.getElementById("tour-vehicle-class-group");
  var premiumExtra = document.getElementById("tour-premium-extra");
  var premiumVehicleGroup = document.getElementById("tour-premium-vehicle-group");
  var premiumChecks = document.getElementById("tour-premium-checks");
  var multiDayBlock = document.getElementById("tour-multi-day-block");
  var multiDayCheckbox = document.getElementById("tour_multi_day_checkbox");

  function setPremiumVisible(isPremium) {
    if (premiumExtra) premiumExtra.hidden = !isPremium;
    setConditionalBlockActive(premiumVehicleGroup, isPremium);
    setConditionalBlockActive(premiumChecks, isPremium);
    if (!isPremium) setConditionalBlockActive(multiDayBlock, false);
  }
  setPremiumVisible(false);

  if (classGroup) {
    classGroup.addEventListener("click", function (event) {
      var btn = event.target.closest(".recommender-option");
      if (!btn) return;
      setPremiumVisible(btn.getAttribute("data-class") === "premium");
    });
  }

  if (multiDayCheckbox && multiDayBlock) {
    multiDayCheckbox.addEventListener("change", function () {
      setConditionalBlockActive(multiDayBlock, multiDayCheckbox.checked);
    });
  }

  form.setAttribute("action", "https://formspree.io/f/" + CONFIG.DRIVE_FORM_ID);

  attachAjaxSubmit({
    form: form,
    requiredFields: ["name", "phone", "email", "country", "city", "date", "passengers"],
    extraValidate: function (f, lang) {
      var emailField = f.querySelector('[name="email"]');
      if (emailField && emailField.value.trim() && !driveEmailPattern.test(emailField.value.trim())) {
        setFieldError(f, "email", I18N["error.email"][lang]);
        return { hasError: true, firstInvalid: emailField };
      }
      setFieldError(f, "email", "");
      return { hasError: false };
    },
    successEl: document.getElementById("tour-success"),
    errorEl: document.getElementById("tour-error")
  });
}

/* ---- Reservation inquiry form (/reservations) ---- */
function initReservationTypePicker() {
  var group = document.getElementById("resv-type-group");
  var hiddenInput = document.getElementById("reservation_type");
  var restaurantExtra = document.getElementById("resv-extra-restaurant");
  var landmarkExtra = document.getElementById("resv-extra-landmark");
  if (!group || !hiddenInput) return;

  setConditionalBlockActive(restaurantExtra, false);
  setConditionalBlockActive(landmarkExtra, false);

  function selectType(btn) {
    if (!btn) return;
    var buttons = group.querySelectorAll(".recommender-option");
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("is-active");
    btn.classList.add("is-active");

    hiddenInput.value = btn.getAttribute("data-value") || "";
    var fieldGroup = btn.getAttribute("data-group");

    setConditionalBlockActive(restaurantExtra, fieldGroup === "restaurant");
    setConditionalBlockActive(landmarkExtra, fieldGroup === "landmark");
  }

  group.addEventListener("click", function (event) {
    var btn = event.target.closest(".recommender-option");
    if (!btn) return;
    selectType(btn);
  });

  var presetType = new URLSearchParams(window.location.search).get("type");
  if (presetType) {
    var presetBtn = group.querySelector('.recommender-option[data-value="' + presetType + '"]');
    if (presetBtn) selectType(presetBtn);
  }
}

function initReservationForm() {
  var form = document.getElementById("reservation-form-el");
  if (!form) return;

  form.setAttribute("action", "https://formspree.io/f/" + CONFIG.RESERVATION_FORM_ID);

  attachAjaxSubmit({
    form: form,
    requiredFields: ["reservation_type", "country", "city", "preferred_date", "party_size", "name", "email"],
    extraValidate: function (f, lang) {
      var emailField = f.querySelector('[name="email"]');
      if (emailField && emailField.value.trim() && !driveEmailPattern.test(emailField.value.trim())) {
        setFieldError(f, "email", I18N["error.email"][lang]);
        return { hasError: true, firstInvalid: emailField };
      }
      setFieldError(f, "email", "");
      return { hasError: false };
    },
    successEl: document.getElementById("reservation-success"),
    errorEl: document.getElementById("reservation-error")
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initLanguageToggle();
  initMobileNav();
  initKakaoLinks();
  initFooterYear();
  initItineraryPicker();
  initVehicleRecommender();
  initCitySearch();
  initContactForm();
  initContactServicePicker();
  initVehicleClassPicker("vehicle-class-group", "vehicle_class");
  initCorporateForm();
  initVehicleClassPicker("corp-vehicle-class-group", "corp_vehicle_class");
  initTourForm();
  initVehicleClassPicker("tour-vehicle-class-group", "tour_vehicle_class");
  initReservationTypePicker();
  initReservationForm();
});
