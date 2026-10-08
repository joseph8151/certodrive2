/* ============================================================
   Certo Drive / 체르토 드라이브 — site script (vanilla JS)
   ============================================================ */

/* ---- 1. CONFIG: 배포 시 이 값만 바꾸면 됩니다 ---- */
var CONFIG = {
  FORM_ID: "xkjnvdjr", // Formspree 폼 ID (https://formspree.io/f/여기값)
  CONTACT_EMAIL: "hello@certodrive.com",
  KAKAO_URL: "https://pf.kakao.com/_QwxdxhX",
  PHONE_DISPLAY: "010-7748-4644",
  PHONE_TEL: "+821077484644"
};

/* ---- 2. 다국어 사전 (KR 기본 / EN 전환) ---- */
var I18N = {
  "meta.title": { ko: "체르토 드라이브 | 해외 이동, 현지 기사와 차량 연결", en: "Certo Drive | Local Drivers & Vehicles, Wherever You Travel" },
  "meta.description": { ko: "공항 픽업부터 기업 출장, 바이어 의전, 교육기관 연수, 가족 일정까지. 해외 주요 도시에서 한국어로 상담하고 현지 기사와 차량을 연결하는 체르토 드라이브.", en: "From airport pickups to business trips, client visits, school delegations, and family travel — Certo Drive connects you with local drivers and vehicles abroad, in Korean." },

  "nav.services": { ko: "서비스", en: "Services" },
  "nav.vehicles": { ko: "차량", en: "Vehicles" },
  "nav.process": { ko: "이용 과정", en: "How It Works" },
  "nav.business": { ko: "기업·기관", en: "For Organizations" },
  "nav.cities": { ko: "도시", en: "Cities" },
  "nav.faq": { ko: "FAQ", en: "FAQ" },
  "nav.contact": { ko: "문의", en: "Contact" },
  "nav.cta": { ko: "빠른 견적 요청", en: "Get a Quick Quote" },

  "kakao.chat": { ko: "카카오톡 상담", en: "Chat on KakaoTalk" },

  "hero.eyebrow": { ko: "글로벌 모빌리티 파트너", en: "Global Mobility Partner" },
  "hero.headlineMain": { ko: "해외 이동이 필요한 순간,", en: "The moment you need to move abroad," },
  "hero.headlineAccent": { ko: "현지 기사와 차량을 연결합니다.", en: "we connect you with a local driver and vehicle." },
  "hero.sub": { ko: "공항 픽업부터 기업 출장, 바이어 의전, 교육기관 연수, 가족 일정까지. 필요한 도시와 일정에 맞춰 차량과 드라이버를 확인해 드립니다.", en: "From airport pickups to business trips, client visits, school delegations, and family travel. We check vehicles and drivers for the city and schedule you need." },
  "hero.tags": { ko: "한국어 상담 · 해외 주요 도시 · 기업/기관 일정 대응", en: "Korean-language support · Major cities abroad · Corporate & institutional scheduling" },
  "hero.ctaPrimary": { ko: "빠른 견적 요청", en: "Get a Quick Quote" },
  "hero.note": { ko: "보통 1영업일 이내 회신", en: "We usually reply within 1 business day" },

  "trust.item1": { ko: "해외 주요 도시 대응", en: "Coverage in major cities abroad" },
  "trust.item2": { ko: "한국어 상담", en: "Korean-language support" },
  "trust.item3": { ko: "기업·기관 견적 가능", en: "Quotes for businesses & institutions" },
  "trust.item4": { ko: "다일정 차량 조율", en: "Multi-schedule vehicle coordination" },
  "trust.item5": { ko: "SUV · 미니밴 · 밴", en: "SUV · Minivan · Van" },

  "services.eyebrow": { ko: "SERVICES", en: "SERVICES" },
  "services.title": { ko: "어떤 이동이 필요하신가요?", en: "What Kind of Trip Do You Need?" },
  "services.subtitle": { ko: "목적에 맞는 서비스를 선택하면 자세한 내용을 확인할 수 있습니다.", en: "Choose the service that fits your purpose to see more details." },
  "svc.more": { ko: "자세히 보기", en: "Learn more" },

  "svc.airport.name": { ko: "공항 픽업", en: "Airport Pickup" },
  "svc.airport.desc": { ko: "도착 시간에 맞춰 공항에서 목적지까지 편안하게 이동합니다.", en: "A comfortable ride from the airport to your destination, timed to your arrival." },
  "svc.airport.d1": { ko: "항공편 지연에 맞춰 일정 조율", en: "Schedules adjusted for flight delays" },
  "svc.airport.d2": { ko: "호텔·숙소·행사장까지 목적지 이동", en: "Transfers to your hotel, residence, or venue" },
  "svc.airport.d3": { ko: "짐이 많은 경우 SUV 상담 가능", en: "SUV available on request for heavy luggage" },

  "svc.business.name": { ko: "기업 출장", en: "Corporate Travel" },
  "svc.business.desc": { ko: "공항부터 미팅, 숙소까지 출장 일정 전체 동선을 조율합니다.", en: "We coordinate your entire trip, from airport to meetings to hotel." },
  "svc.business.d1": { ko: "여러 도시 연속 출장도 문의 가능", en: "Multi-city trips can also be arranged" },
  "svc.business.d2": { ko: "세금계산서·견적서 발행", en: "Invoices and quotes issued" },
  "svc.business.d3": { ko: "임직원 다수 동시 차량 배정", en: "Multiple vehicles for multiple staff" },

  "svc.escort.name": { ko: "바이어 의전", en: "Client & Buyer Escort" },
  "svc.escort.desc": { ko: "바이어 방문, 전시회, 컨퍼런스 일정에 맞춰 차량을 배치합니다.", en: "Vehicles arranged around buyer visits, trade shows, and conferences." },
  "svc.escort.d1": { ko: "공항 픽업부터 미팅 동행까지", en: "From airport pickup to meeting support" },
  "svc.escort.d2": { ko: "통역 연계 가능 여부는 예약 전 확인", en: "Interpreter availability confirmed before booking" },
  "svc.escort.d3": { ko: "전시장·식사 장소 등 다구간 이동", en: "Multi-stop transport to venues and dining" },

  "svc.dedicated.name": { ko: "전용 기사", en: "Dedicated Driver" },
  "svc.dedicated.desc": { ko: "하루 여러 곳을 이동하거나 여러 날 동안 전용으로 이용합니다.", en: "A dedicated driver for multiple stops in a day, or for several days." },
  "svc.dedicated.d1": { ko: "4시간·8시간·종일·맞춤 일정", en: "4-hour, 8-hour, full-day, or custom schedules" },
  "svc.dedicated.d2": { ko: "하루 여러 미팅·장소 이동", en: "Multiple meetings or stops in one day" },
  "svc.dedicated.d3": { ko: "출장과 여행 모두 이용 가능", en: "For both business and leisure" },

  "svc.edu.name": { ko: "교육·연수", en: "Education & Training Visits" },
  "svc.edu.desc": { ko: "교육청, 학교, 연수단의 단체 이동을 지원합니다.", en: "Group transport for school districts, schools, and training delegations." },
  "svc.edu.d1": { ko: "연수단, 자매학교 방문 등 지원", en: "Supports delegations and sister-school visits" },
  "svc.edu.d2": { ko: "인원에 맞춰 SUV·미니밴 배정", en: "SUV or minivan assigned to group size" },
  "svc.edu.d3": { ko: "참가 인원 기준 견적 안내", en: "Quotes based on participant count" },

  "svc.family.name": { ko: "가족·단체 이동", en: "Family & Group Travel" },
  "svc.family.desc": { ko: "가족 여행이나 소규모 단체 이동에 맞는 차량을 상담합니다.", en: "We help match a vehicle to family trips or small-group travel." },
  "svc.family.d1": { ko: "유아 동반, 캐리어 많은 여행 상담", en: "Guidance for traveling with infants or heavy luggage" },
  "svc.family.d2": { ko: "한국에 있는 가족이 대신 예약 가능", en: "Family in Korea can book on your behalf" },
  "svc.family.d3": { ko: "4인 이상 그룹은 미니밴 상담", en: "Minivan recommended for groups of 4+" },

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

  "process.title": { ko: "이용 과정", en: "How It Works" },
  "process.subtitle": { ko: "간단한 다섯 단계로 진행됩니다.", en: "Five simple steps, from request to pickup." },
  "process.step1.title": { ko: "지역과 일정 입력", en: "Enter Your Region & Schedule" },
  "process.step1.desc": { ko: "이용하실 국가·도시와 날짜를 알려주세요.", en: "Tell us the country, city, and dates." },
  "process.step2.title": { ko: "인원과 차량 요청사항 전달", en: "Share Group Size & Vehicle Needs" },
  "process.step2.desc": { ko: "인원, 짐, 희망 차량을 알려주세요.", en: "Let us know passengers, luggage, and preferred vehicle." },
  "process.step3.title": { ko: "이용 가능 차량 및 견적 확인", en: "Check Availability & Quote" },
  "process.step3.desc": { ko: "매칭 가능한 차량과 견적을 안내합니다.", en: "We share available vehicles and a quote." },
  "process.step4.title": { ko: "예약 확정", en: "Confirm Your Booking" },
  "process.step4.desc": { ko: "일정과 비용을 확정합니다.", en: "Schedule and cost are finalized." },
  "process.step5.title": { ko: "현지에서 드라이버 미팅", en: "Meet Your Driver on Location" },
  "process.step5.desc": { ko: "안내받은 시간과 장소에서 드라이버를 만납니다.", en: "Meet your driver at the confirmed time and place." },

  "business.eyebrow": { ko: "FOR ORGANIZATIONS", en: "FOR ORGANIZATIONS" },
  "business.title": { ko: "기업과 기관의 해외 이동도 한 번에 조율합니다.", en: "We Coordinate Corporate & Institutional Travel Abroad, End to End." },
  "business.bodyLine1": { ko: "해외 출장, 외국인 바이어 방문, 교육청 및 학교 연수, 컨퍼런스, 공장 방문, 전시회까지 지원합니다.", en: "Supporting business trips, buyer visits, school district and school training, conferences, factory visits, and trade shows." },
  "business.bodyLine2": { ko: "담당자 한 명이 문의부터 확정까지 응대합니다.", en: "A single point of contact handles your request from inquiry to confirmation." },
  "business.bodyLine3": { ko: "다일정 출장과 여러 대 차량 배차도 함께 조율합니다.", en: "Multi-schedule trips and multi-vehicle dispatch are coordinated together." },
  "business.item1": { ko: "세금계산서 및 견적서 발행", en: "Invoices and quotes are issued" },
  "business.item2": { ko: "다인원·다일정 동시 조율", en: "Multiple travelers and schedules are coordinated together" },
  "business.item3": { ko: "담당자와 한국어로 소통 가능", en: "You can communicate with your contact in Korean" },
  "business.item4": { ko: "인원에 맞춰 여러 대의 차량 배정", en: "Multiple vehicles are arranged to match your group size" },
  "business.notProvidedTitle": { ko: "제공하지 않는 것", en: "What We Don't Provide" },
  "business.notProvided1": { ko: "실시간 기사 배정 앱 — 즉시 기사를 배정하는 앱 서비스는 제공하지 않습니다.", en: "Real-time driver-assignment app — we do not provide an app for instant, on-demand driver assignment." },
  "business.notProvided2": { ko: "미확인 지역 확정 예약 — 매칭 가능 여부를 확인하지 않은 지역의 예약은 바로 확정하지 않습니다.", en: "Confirmed bookings in unverified regions — we do not confirm bookings where availability has not been checked." },
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
  "vehicles.title": { ko: "어떤 차량이 필요하세요?", en: "Which Vehicle Do You Need?" },
  "vehicles.subtitle": { ko: "인원과 짐에 맞는 차량 유형을 안내해 드립니다.", en: "We help you choose the right vehicle for your group and luggage." },
  "vehicles.factPax": { ko: "추천 인원", en: "Recommended for" },
  "vehicles.factUse": { ko: "추천 용도", en: "Best for" },
  "vehicles.factLuggage": { ko: "짐 기준", en: "Luggage" },
  "vehicles.sedan.name": { ko: "세단", en: "Sedan" },
  "vehicles.sedan.pax": { ko: "1~3명", en: "1–3 people" },
  "vehicles.sedan.use": { ko: "공항 픽업, 시내 이동", en: "Airport pickup, city transfers" },
  "vehicles.sedan.luggage": { ko: "캐리어 1~2개", en: "1–2 suitcases" },
  "vehicles.suv.name": { ko: "SUV", en: "SUV" },
  "vehicles.suv.pax": { ko: "1~4명", en: "1–4 people" },
  "vehicles.suv.use": { ko: "출장, 짐이 많은 이동", en: "Business trips, heavier luggage" },
  "vehicles.suv.luggage": { ko: "캐리어 2~3개 또는 골프백", en: "2–3 suitcases or golf bags" },
  "vehicles.minivan.name": { ko: "미니밴", en: "Minivan" },
  "vehicles.minivan.pax": { ko: "4~7명", en: "4–7 people" },
  "vehicles.minivan.use": { ko: "가족, 그룹 이동", en: "Families, group travel" },
  "vehicles.minivan.luggage": { ko: "캐리어 3~5개", en: "3–5 suitcases" },
  "vehicles.van.name": { ko: "밴", en: "Van" },
  "vehicles.van.pax": { ko: "8명 이상", en: "8+ people" },
  "vehicles.van.use": { ko: "단체, 행사 이동", en: "Groups, event transport" },
  "vehicles.van.luggage": { ko: "대형 수하물 다수", en: "Multiple large items" },
  "vehicles.disclaimer": { ko: "실제 차량 모델은 지역에 따라 달라질 수 있으며, 동일 모델을 보장하지 않습니다.", en: "The actual vehicle model may vary by region and is not guaranteed to be identical." },

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
  "cases.disclaimer": { ko: "아래는 이해를 돕기 위한 가상 사례입니다.", en: "The following are illustrative examples, not actual client records." },
  "cases.labelRequest": { ko: "요청", en: "Request" },
  "cases.labelAction": { ko: "체르토가 한 일", en: "What Certo Drive Did" },
  "cases.case1.tag": { ko: "교육기관 연수단", en: "Institutional Delegation" },
  "cases.case1.title": { ko: "시애틀 교육청 연수단", en: "Seattle School District Delegation" },
  "cases.case1.city": { ko: "시애틀", en: "Seattle" },
  "cases.case1.duration": { ko: "1주일", en: "One week" },
  "cases.case1.passengers": { ko: "5명", en: "5 people" },
  "cases.case1.vehicle": { ko: "SUV 또는 미니밴", en: "SUV or minivan" },
  "cases.case1.request": { ko: "교육청 직원 연수 방문, 한국어 드라이버 요청", en: "A school district training visit requesting a Korean-speaking driver" },
  "cases.case1.action": { ko: "일정에 맞춰 SUV·미니밴을 조율하고 한국어 드라이버를 매칭했습니다.", en: "Certo Drive coordinated an SUV/minivan and matched a Korean-speaking driver to the schedule." },
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
  "cases.case3.request": { ko: "가족 여행, 한국어 기사 요청", en: "A family trip requesting a Korean-speaking driver" },
  "cases.case3.action": { ko: "가족 일정에 맞춰 미니밴과 한국어 드라이버를 매칭했습니다.", en: "Certo Drive matched a minivan and a Korean-speaking driver to the family's itinerary." },

  "cities.eyebrow": { ko: "CITIES", en: "CITIES" },
  "cities.title": { ko: "이용 가능한 도시를 확인해보세요", en: "Check Available Cities" },
  "cities.subtitle": { ko: "지역과 일정에 따라 가능 여부를 확인한 뒤 안내드립니다.", en: "Availability is confirmed by region and schedule before we respond." },
  "cities.placeholder": { ko: "도시 또는 공항명을 입력하세요", en: "Enter a city or airport name" },
  "cities.example": { ko: "예: Frankfurt, Berlin, JFK, Dubai", en: "e.g. Frankfurt, Berlin, JFK, Dubai" },
  "cities.region.us": { ko: "미국", en: "United States" },
  "cities.region.ca": { ko: "캐나다", en: "Canada" },
  "cities.region.eu": { ko: "유럽", en: "Europe" },
  "cities.region.asia": { ko: "아시아", en: "Asia" },
  "cities.region.au": { ko: "호주", en: "Australia" },
  "cities.noMatch": { ko: "검색 결과가 없습니다. 목록에 없는 도시도 문의해 주시면 가능 여부를 확인해 드립니다.", en: "No matches found. Even if your city isn't listed, contact us and we'll confirm availability." },

  "faq.eyebrow": { ko: "FAQ", en: "FAQ" },
  "faq.title": { ko: "자주 묻는 질문", en: "Frequently Asked Questions" },
  "faq.q1": { ko: "한국어 가능한 기사인가요?", en: "Is the driver Korean-speaking?" },
  "faq.a1": { ko: "네, 한국어 가능 드라이버를 우선 매칭합니다. 지역에 따라 예약 전 확인이 필요합니다.", en: "Yes — we prioritize Korean-speaking drivers. Availability by region should be confirmed before booking." },
  "faq.q2": { ko: "어떤 국가에서 이용할 수 있나요?", en: "Which countries can I use this in?" },
  "faq.a2": { ko: "주요 도시를 중심으로 매칭하며, 그 외 지역은 문의 시 가능 여부를 확인해 드립니다.", en: "We match primarily in major cities; for other regions, we confirm availability when you inquire." },
  "faq.q3": { ko: "공항에서 기사님을 어떻게 만나나요?", en: "How do I meet the driver at the airport?" },
  "faq.a3": { ko: "확정 안내에 만남 장소와 기사 연락 방법을 함께 전달합니다.", en: "The meeting point and how to reach your driver are included in your confirmation." },
  "faq.q4": { ko: "비행기가 연착되면 어떻게 하나요?", en: "What if my flight is delayed?" },
  "faq.a4": { ko: "항공편 정보를 미리 남겨주시면 지연 상황에 맞춰 조율합니다.", en: "Share your flight details in advance and we'll adjust for delays." },
  "faq.q5": { ko: "밤늦게 도착해도 예약할 수 있나요?", en: "Can I book for a late-night arrival?" },
  "faq.a5": { ko: "가능 여부는 지역과 일정에 따라 다르며, 예약 전 확인이 필요합니다.", en: "It depends on region and schedule — please confirm before booking." },
  "faq.q6": { ko: "캐리어가 많으면 어떤 차량을 이용해야 하나요?", en: "What vehicle should I choose for a lot of luggage?" },
  "faq.a6": { ko: "짐 개수를 알려주시면 SUV 등 적합한 차량을 안내합니다.", en: "Tell us how much luggage you have and we'll suggest a suitable vehicle, such as an SUV." },
  "faq.q7": { ko: "유아 카시트를 요청할 수 있나요?", en: "Can I request an infant car seat?" },
  "faq.a7": { ko: "요청은 가능하며, 지역과 차량에 따라 제공 여부를 예약 전 확인합니다.", en: "You can request one; availability by region and vehicle is confirmed before booking." },
  "faq.q8": { ko: "여러 도시를 이동할 수도 있나요?", en: "Can I travel between multiple cities?" },
  "faq.a8": { ko: "네, 도시 간 이동도 문의할 수 있습니다.", en: "Yes — city-to-city transfers can be arranged on request." },
  "faq.q9": { ko: "시간제로 차량을 예약할 수 있나요?", en: "Can I book a vehicle by the hour?" },
  "faq.a9": { ko: "네, 4시간, 8시간, 종일, 맞춤 일정 중 선택해 문의할 수 있습니다.", en: "Yes — choose from 4-hour, 8-hour, full-day, or a custom schedule." },
  "faq.q10": { ko: "기업에서 직원 대신 예약할 수 있나요?", en: "Can a company book on behalf of employees?" },
  "faq.a10": { ko: "네, 담당자가 소속 직원을 위해 문의할 수 있습니다.", en: "Yes — a company contact can inquire on behalf of staff." },
  "faq.q11": { ko: "전시회나 출장 기간 동안 계속 차량을 이용할 수 있나요?", en: "Can I use a vehicle for an entire trade show or business trip?" },
  "faq.a11": { ko: "네, 기간 전체를 전용 차량으로 문의할 수 있습니다.", en: "Yes — a dedicated vehicle can be arranged for the full trip." },
  "faq.q12": { ko: "통역사와 차량을 함께 예약할 수 있나요?", en: "Can I book a vehicle together with an interpreter?" },
  "faq.a12": { ko: "문의할 수 있으며, 통역 제공 여부는 지역과 일정에 따라 예약 전 확인이 필요합니다.", en: "Yes, you can inquire; interpreter availability by region and schedule should be confirmed before booking." },
  "faq.q13": { ko: "예약 변경 및 취소 규정은 어떻게 되나요?", en: "What are the change and cancellation terms?" },
  "faq.a13": { ko: "확정(드라이버·차량 조율) 전에는 취소가 가능합니다. 확정 이후에는 환불이 불가하며, 세부 변경 규정은 예약 확정 안내 시 함께 고지됩니다.", en: "Cancellation is possible before confirmation. Once a driver and vehicle are confirmed, the booking is non-refundable; detailed change terms are provided together with your booking confirmation." },
  "faq.q14": { ko: "통행료·주차비 등의 추가 비용은 어떻게 되나요?", en: "What about extra costs like tolls or parking?" },
  "faq.a14": { ko: "톨비·주차비 등 현지 실비는 별도일 수 있으며, 견적 시 안내합니다.", en: "Local costs such as tolls and parking may be separate and are noted in your quote." },

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
  "contact.label.koreanDriver": { ko: "한국어 드라이버", en: "Korean-Speaking Driver" },
  "contact.label.purpose": { ko: "용도", en: "Purpose" },
  "contact.label.pickup": { ko: "픽업 장소", en: "Pickup Location" },
  "contact.label.route": { ko: "주요 동선", en: "Main Route" },
  "contact.label.budget": { ko: "예산 범위", en: "Budget Range" },
  "contact.label.notes": { ko: "상세 요청", en: "Additional Details" },
  "contact.label.clientType": { ko: "구분", en: "Type" },
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
  "contact.help.vehicle": { ko: "세단/SUV/미니밴/밴 중 선택해 주세요.", en: "Choose from sedan, SUV, minivan, or van." },
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
  "contact.option.van": { ko: "밴", en: "Van" },
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
  "contact.refundNote": { ko: "확정(드라이버·차량 조율) 전에는 취소가 가능하며, 확정 이후에는 환불이 불가합니다.", en: "Cancellation is possible before confirmation. Once a driver and vehicle are confirmed, the booking is non-refundable." },

  "error.required": { ko: "필수 항목입니다.", en: "This field is required." },
  "error.email": { ko: "올바른 이메일 주소를 입력해주세요.", en: "Please enter a valid email address." },
  "error.passengers": { ko: "인원을 1명 이상 입력해주세요.", en: "Please enter at least 1 passenger." },
  "error.dateOrder": { ko: "종료일은 시작일 이후여야 합니다.", en: "The end date must be on or after the start date." },

  "footer.about": { ko: "체르토 드라이브는 한국어 가능 드라이버와 차량을 연결하는 예약 중개 서비스입니다.", en: "Certo Drive is a booking concierge connecting clients with Korean-speaking drivers and vehicles." },
  "footer.linksTitle": { ko: "바로가기", en: "Quick Links" },
  "footer.contactTitle": { ko: "연락처", en: "Contact" },
  "footer.legal1": { ko: "체르토 드라이브는 중개 서비스입니다.", en: "Certo Drive is a booking intermediary service." },
  "footer.legal2": { ko: "실제 운행은 현지 파트너 드라이버가 진행합니다.", en: "The actual trip is carried out by a local partner driver." },
  "footer.legal3": { ko: "문의 시점의 가능 여부는 확정이 아니며, 조건 확인 후 확정됩니다.", en: "Availability at the time of inquiry is not a confirmation; it is finalized after review." },
  "footer.rights": { ko: "모든 권리 보유", en: "All rights reserved." },

  "thanks.eyebrow": { ko: "접수 완료", en: "Inquiry Received" },
  "thanks.title": { ko: "문의가 접수되었습니다", en: "Your Inquiry Has Been Received" },
  "thanks.body": { ko: "확인 후 이메일 또는 카카오톡으로 회신드립니다.", en: "We'll reply by email or KakaoTalk after review." },
  "thanks.back": { ko: "홈으로 돌아가기", en: "Back to Home" }
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

  var titleEntry = I18N["meta.title"];
  if (titleEntry) {
    document.title = titleEntry[lang];
  }
  var descEntry = I18N["meta.description"];
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
      var chips = group.querySelectorAll(".city-chip");
      var groupHasMatch = false;

      for (var c = 0; c < chips.length; c++) {
        var chip = chips[c];
        var text = chip.textContent.trim().toLowerCase();
        var matches = query === "" || text.indexOf(query) !== -1;
        chip.classList.toggle("is-hidden", !matches);
        if (matches) groupHasMatch = true;
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

function initContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.setAttribute("action", "https://formspree.io/f/" + CONFIG.FORM_ID);

  var requiredFields = ["name", "email", "city", "start_date", "end_date", "passengers", "client_type"];
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (event) {
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

    var emailField = form.querySelector('[name="email"]');
    if (emailField && emailField.value.trim() && !emailPattern.test(emailField.value.trim())) {
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

    if (hasError) {
      event.preventDefault();
      if (firstInvalid) {
        firstInvalid.focus();
      }
    }
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
});
