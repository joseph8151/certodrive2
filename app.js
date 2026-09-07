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
  "meta.title": { ko: "체르토 드라이브 | 전 세계 한국어 드라이버 예약", en: "Certo Drive | Book a Korean-Speaking Driver Worldwide" },
  "meta.description": { ko: "공항픽업, 시간제 차량, 출장, 장거리 이동까지. 해외에서도 한국어로 간편하게 차량과 드라이버를 예약하는 글로벌 모빌리티 서비스, 체르토 드라이브.", en: "Airport pickups, hourly charter, business travel, and long-distance transfers — book a Korean-speaking driver and vehicle abroad with Certo Drive." },

  "nav.services": { ko: "서비스", en: "Services" },
  "nav.vehicles": { ko: "차량", en: "Vehicles" },
  "nav.process": { ko: "이용 과정", en: "How It Works" },
  "nav.business": { ko: "기업·기관", en: "For Organizations" },
  "nav.regions": { ko: "지역", en: "Regions" },
  "nav.faq": { ko: "FAQ", en: "FAQ" },
  "nav.contact": { ko: "문의", en: "Contact" },
  "nav.cta": { ko: "문의하기", en: "Contact Us" },

  "hero.eyebrow": { ko: "글로벌 한국어 드라이버 예약 중개", en: "Global Korean-Speaking Driver Booking" },
  "hero.headlineMain": { ko: "전 세계", en: "Book a Korean-Speaking Driver" },
  "hero.headlineAccent": { ko: "한국어 드라이버 예약", en: "Anywhere in the World" },
  "hero.sub": { ko: "공항픽업부터 비즈니스 출장, 프라이빗 투어, 장거리 이동까지. 해외에서도 편안하게 한국어로 차량을 예약하세요.", en: "From airport pickups to business trips, private tours, and long-distance travel — book a car in Korean, wherever you are." },
  "hero.ctaPrimary": { ko: "빠른 견적 받기", en: "Get a Quick Quote" },
  "hero.ctaSecondary": { ko: "서비스 보기", en: "See Our Services" },
  "hero.note": { ko: "시애틀, LA, 뉴욕 등 주요 한인 도시를 중심으로 매칭합니다.", en: "Matching is prioritized in cities such as Seattle, LA, and New York." },

  "kakao.chat": { ko: "카카오톡 상담", en: "Chat on KakaoTalk" },

  "picker.label": { ko: "필요한 서비스를 선택하세요", en: "Choose the service you need" },
  "picker.airport": { ko: "공항픽업", en: "Airport Pickup" },
  "picker.hourly": { ko: "시간제 차량", en: "Hourly Charter" },
  "picker.private": { ko: "프라이빗 투어", en: "Private Tour" },
  "picker.longdistance": { ko: "도시 간 이동", en: "City-to-City" },
  "picker.corporate": { ko: "비즈니스 출장", en: "Business Travel" },
  "picker.group": { ko: "단체 차량", en: "Group Vehicles" },

  "services.title": { ko: "체르토 드라이브 서비스", en: "Certo Drive Services" },
  "services.subtitle": { ko: "단순 해외 한인택시 예약이 아닌, 필요한 순간에 필요한 차량을 연결하는 서비스입니다.", en: "Not just an overseas taxi booking — we connect the right vehicle to the moment you need it." },

  "services.svc1.name": { ko: "공항 픽업 & 샌딩", en: "Airport Pickup & Drop-off" },
  "services.svc1.desc": { ko: "낯선 해외 공항에 도착한 순간부터 편안하게 이동하세요. 공항에서 호텔, 숙소, 회사, 행사장 등 원하는 목적지까지 차량 예약을 도와드립니다.", en: "From the moment you land at an unfamiliar airport, travel with ease. We help arrange a vehicle from the airport to your hotel, home, office, or venue." },
  "services.svc1.bullet1": { ko: "공항 도착 픽업", en: "Airport arrival pickup" },
  "services.svc1.bullet2": { ko: "호텔 → 공항 샌딩", en: "Hotel-to-airport drop-off" },
  "services.svc1.bullet3": { ko: "심야·이른 아침 이동 문의", en: "Late-night & early-morning requests" },
  "services.svc1.bullet4": { ko: "가족 및 단체 이동, 짐 많은 고객 차량 상담", en: "Family/group transport, guidance for heavy luggage" },
  "services.svc1.cta": { ko: "공항픽업 견적 받기", en: "Get an Airport Pickup Quote" },

  "services.svc2.name": { ko: "한국어 드라이버 시간제 예약", en: "Hourly Charter with a Korean-Speaking Driver" },
  "services.svc2.desc": { ko: "여러 장소를 이동해야 한다면 시간제 차량 서비스를 이용할 수 있습니다. 출장, 쇼핑, 관광, 미팅 등 일정에 맞춰 차량과 드라이버 예약을 도와드립니다.", en: "If you need to visit multiple places, hourly charter is available. We help arrange a vehicle and driver around business, shopping, sightseeing, or meetings." },
  "services.svc2.bullet1": { ko: "4시간 · 8시간 · 종일 · 맞춤 일정", en: "4-hour, 8-hour, full-day, or custom schedule" },
  "services.svc2.bullet2": { ko: "여러 목적지 이동, 일정 중 차량 대기", en: "Multiple destinations, vehicle waits during your schedule" },
  "services.svc2.bullet3": { ko: "호텔 출발 및 복귀", en: "Round trip from your hotel" },
  "services.svc2.bullet4": { ko: "출장 및 여행 모두 이용 가능", en: "For both business and leisure" },
  "services.svc2.cta": { ko: "시간제 차량 문의", en: "Inquire About Hourly Charter" },

  "services.svc3.name": { ko: "도시 간 장거리 이동", en: "City-to-City Long-Distance Transfers" },
  "services.svc3.desc": { ko: "기차나 항공편 대신 호텔에서 호텔까지 편안하게 이동하고 싶은 고객을 위한 서비스입니다.", en: "For travelers who'd rather go hotel-to-hotel by car than by train or plane." },
  "services.svc3.bullet1": { ko: "예: 뉴욕 → 워싱턴 D.C., LA → 샌디에이고", en: "e.g. New York → Washington D.C., LA → San Diego" },
  "services.svc3.bullet2": { ko: "예: 밀라노 → 베네치아, 로마 → 피렌체", en: "e.g. Milan → Venice, Rome → Florence" },
  "services.svc3.bullet3": { ko: "예: 파리 → 브뤼셀, 도쿄 → 후지산 지역", en: "e.g. Paris → Brussels, Tokyo → Mt. Fuji area" },
  "services.svc3.bullet4": { ko: "위 노선은 예시이며, 이와 같은 도시 간 이동을 문의할 수 있습니다.", en: "These are examples — you're welcome to inquire about similar routes." },
  "services.svc3.cta": { ko: "장거리 이동 견적 받기", en: "Get a Long-Distance Quote" },

  "services.svc4.name": { ko: "기업 출장 & 임원 수행", en: "Corporate Travel & Executive Escort" },
  "services.svc4.badge": { ko: "프리미엄", en: "Premium" },
  "services.svc4.desc": { ko: "해외 출장 중 중요한 미팅과 이동에 집중할 수 있도록 차량 예약을 지원합니다.", en: "So you can focus on meetings, not logistics, during business trips abroad." },
  "services.svc4.bullet1": { ko: "공항 → 호텔 → 회사, 비즈니스 미팅 이동", en: "Airport → hotel → office, meeting transport" },
  "services.svc4.bullet2": { ko: "임원 수행 차량, 해외 지사 방문", en: "Executive escort vehicles, overseas office visits" },
  "services.svc4.bullet3": { ko: "출장 기간 전담 차량 문의", en: "Dedicated vehicle for the full trip" },
  "services.svc4.bullet4": { ko: "여러 임직원 동시 배정, 기업 행사 이동", en: "Multiple staff at once, corporate event transport" },
  "services.svc4.note": { ko: "기업·기관·출장팀을 위한 맞춤 차량 일정도 상담할 수 있습니다.", en: "Custom vehicle schedules for companies, institutions, and travel teams are also available." },
  "services.svc4.cta": { ko: "기업 차량 상담", en: "Talk to Us About Corporate Vehicles" },

  "services.svc5.name": { ko: "전시회 & 비즈니스 차량", en: "Trade Show & Business Event Vehicles" },
  "services.svc5.desc": { ko: "해외 박람회, 전시회, 컨퍼런스, 바이어 미팅 등 복잡한 출장 일정에도 차량 이동을 한 번에 준비할 수 있습니다.", en: "Even a packed schedule of trade shows, conferences, and buyer meetings can run on one coordinated vehicle plan." },
  "services.svc5.bullet1": { ko: "호텔 → 전시장", en: "Hotel → venue" },
  "services.svc5.bullet2": { ko: "전시장 → 바이어 미팅", en: "Venue → buyer meeting" },
  "services.svc5.bullet3": { ko: "미팅 → 식사 장소", en: "Meeting → dining" },
  "services.svc5.bullet4": { ko: "행사 종료 후 호텔 이동", en: "Return to hotel after the event" },
  "services.svc5.cta": { ko: "출장 일정 상담", en: "Plan Your Trip Itinerary" },

  "services.svc6.name": { ko: "차량 + 한국어 통역 패키지", en: "Driver + Interpreter Package" },
  "services.svc6.desc": { ko: "차량 이동과 한국어 통역이 모두 필요한 해외 출장 고객을 위한 맞춤 서비스입니다.", en: "A combined service for travelers who need both a vehicle and Korean interpretation abroad." },
  "services.svc6.bullet1": { ko: "공항픽업, 전용 차량", en: "Airport pickup, dedicated vehicle" },
  "services.svc6.bullet2": { ko: "현지 비즈니스 이동, 바이어 미팅", en: "Local business transport, buyer meetings" },
  "services.svc6.bullet3": { ko: "한국어 통역, 전시회 방문", en: "Korean interpretation, trade show visits" },
  "services.svc6.bullet4": { ko: "호텔 샌딩", en: "Hotel drop-off" },
  "services.svc6.note": { ko: "통역 서비스는 지역 및 일정에 따라 제공 가능 여부를 예약 전 확인해야 합니다.", en: "Interpreter availability depends on region and schedule — please confirm before booking." },
  "services.svc6.cta": { ko: "차량 + 통역 상담", en: "Ask About Driver + Interpreter" },

  "services.svc7.name": { ko: "가족 & 단체 미니밴", en: "Family & Group Minivan" },
  "services.svc7.desc": { ko: "아이와 함께하는 가족여행이나 여러 명이 함께 이동하는 여행이라면 인원과 짐에 맞는 차량을 상담할 수 있습니다.", en: "For family trips with kids or group travel, we help match a vehicle to your group size and luggage." },
  "services.svc7.bullet1": { ko: "가족여행, 부모님 해외여행", en: "Family trips, parents traveling abroad" },
  "services.svc7.bullet2": { ko: "유아 동반 여행, 캐리어가 많은 여행", en: "Traveling with infants, heavy luggage" },
  "services.svc7.bullet3": { ko: "4~7인 그룹, 소규모 단체", en: "Groups of 4–7, small groups" },
  "services.svc7.bullet4": { ko: "한국에 있는 가족이 해외 부모님의 차량을 대신 예약할 수도 있습니다.", en: "Family members in Korea can also book a vehicle on behalf of parents traveling abroad." },
  "services.svc7.cta": { ko: "가족 차량 상담", en: "Ask About Family Vehicles" },

  "services.svc8.name": { ko: "프라이빗 투어 & 자유 일정 차량", en: "Private Tour & Flexible Itinerary" },
  "services.svc8.desc": { ko: "정해진 단체투어 대신 원하는 일정으로 도시를 여행하고 싶은 고객을 위한 차량 예약 서비스입니다.", en: "For travelers who'd rather explore a city on their own schedule than join a fixed group tour." },
  "services.svc8.bullet1": { ko: "호텔 픽업, 관광지 이동", en: "Hotel pickup, sightseeing transport" },
  "services.svc8.bullet2": { ko: "쇼핑, 레스토랑", en: "Shopping, restaurants" },
  "services.svc8.bullet3": { ko: "근교 도시, 호텔 복귀", en: "Nearby cities, return to hotel" },
  "services.svc8.cta": { ko: "프라이빗 투어 상담", en: "Ask About Private Tours" },

  "vehicles.title": { ko: "어떤 차량이 필요하세요?", en: "Which Vehicle Do You Need?" },
  "vehicles.subtitle": { ko: "일정과 인원에 맞는 차량 유형을 안내해 드립니다.", en: "We help you choose the right vehicle for your group and schedule." },
  "vehicles.sedan.name": { ko: "세단", en: "Sedan" },
  "vehicles.sedan.desc": { ko: "1~3인 이동에 적합", en: "Suited to 1–3 passengers" },
  "vehicles.suv.name": { ko: "SUV", en: "SUV" },
  "vehicles.suv.desc": { ko: "넉넉한 공간이 필요한 여행 및 출장", en: "Extra space for travel or business trips" },
  "vehicles.minivan.name": { ko: "미니밴", en: "Minivan" },
  "vehicles.minivan.desc": { ko: "가족 및 소규모 단체", en: "Families and small groups" },
  "vehicles.premium.name": { ko: "프리미엄 차량", en: "Premium Vehicle" },
  "vehicles.premium.desc": { ko: "VIP 및 비즈니스 고객", en: "VIP and business travelers" },
  "vehicles.van.name": { ko: "밴 / 버스", en: "Van / Bus" },
  "vehicles.van.desc": { ko: "기업·행사·단체 이동", en: "Corporate, event, and group transport" },
  "vehicles.disclaimer": { ko: "요청 기준으로 현지에서 매칭하며, 동일 모델·색상을 보장하지 않습니다.", en: "Vehicles are matched locally based on your request; the exact model or color is not guaranteed." },
  "vehicles.availabilityNote": { ko: "지역 및 일정에 따라 이용 가능한 차량 종류가 다를 수 있습니다.", en: "Available vehicle types may vary by region and schedule." },

  "recommended.title": { ko: "이런 분들에게 추천합니다", en: "Recommended For" },
  "recommended.item1": { ko: "해외 공항에서 한국어 가능한 이동 서비스를 찾는 분", en: "Looking for Korean-speaking transport at an airport abroad" },
  "recommended.item2": { ko: "출장 중 여러 장소를 이동해야 하는 분", en: "Traveling to multiple locations during a business trip" },
  "recommended.item3": { ko: "부모님 해외여행 차량을 대신 예약하려는 분", en: "Booking a vehicle on behalf of parents traveling abroad" },
  "recommended.item4": { ko: "아이와 함께 이동하는 가족", en: "Families traveling with children" },
  "recommended.item5": { ko: "캐리어가 많아 일반 택시 이용이 불편한 분", en: "Travelers with too much luggage for a regular taxi" },
  "recommended.item6": { ko: "전시회·박람회 출장 차량이 필요한 기업", en: "Companies needing vehicles for trade shows" },
  "recommended.item7": { ko: "기사와 함께 하루 동안 자유롭게 이동하고 싶은 분", en: "Anyone wanting a free-roaming day with a driver" },
  "recommended.item8": { ko: "도시 간 장거리 이동이 필요한 분", en: "Anyone needing city-to-city long-distance transport" },

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

  "business.title": { ko: "기업·기관 서비스", en: "For Businesses & Institutions" },
  "business.bodyLine1": { ko: "출장, 바이어 의전, 연수 프로그램의 차량과 기사를 지원합니다.", en: "We support vehicles and drivers for business trips, client visits, and training programs." },
  "business.bodyLine2": { ko: "담당자 한 명이 문의부터 확정까지 응대합니다.", en: "A single point of contact handles your request from inquiry to confirmation." },
  "business.bodyLine3": { ko: "단체 인원과 다일정 이동도 함께 조율합니다.", en: "Group travel and multi-schedule coordination are handled together." },
  "business.item1": { ko: "세금계산서 및 견적서 발행", en: "Invoices and quotes are issued" },
  "business.item2": { ko: "다인원·다일정 동시 조율", en: "Multiple travelers and schedules are coordinated together" },
  "business.item3": { ko: "담당자와 한국어로 소통 가능", en: "You can communicate with your contact in Korean" },
  "business.item4": { ko: "인원에 맞춰 여러 대의 차량 배정", en: "Multiple vehicles are arranged to match your group size" },
  "business.notProvidedTitle": { ko: "제공하지 않는 것", en: "What We Don't Provide" },
  "business.notProvided1": { ko: "실시간 기사 배정 앱 — 즉시 기사를 배정하는 앱 서비스는 제공하지 않습니다.", en: "Real-time driver-assignment app — we do not provide an app for instant, on-demand driver assignment." },
  "business.notProvided2": { ko: "미확인 지역 확정 예약 — 매칭 가능 여부를 확인하지 않은 지역의 예약은 바로 확정하지 않습니다.", en: "Confirmed bookings in unverified regions — we do not confirm bookings where availability has not been checked." },
  "business.cta": { ko: "기업·기관 문의하기", en: "Contact Us for Organizations" },

  "banner.corporate.title": { ko: "Business Travel with Certo Drive", en: "Business Travel with Certo Drive" },
  "banner.corporate.copy": { ko: "해외 출장 차량부터 공항픽업, 전시회, 임원 수행, 통역 연계까지. 기업의 해외 이동을 한 번에 상담하세요.", en: "From business trip vehicles and airport pickups to trade shows, executive escorts, and interpreter coordination — plan your company's travel abroad in one place." },
  "banner.corporate.cta": { ko: "기업 전용 문의", en: "Corporate Inquiries" },

  "banner.quote.title": { ko: "해외에서 이동이 필요할 때, 한국어로 간편하게.", en: "Need to move abroad? Do it simply, in Korean." },
  "banner.quote.copy": { ko: "공항픽업 한 번부터 며칠간의 출장 일정까지 Certo Drive가 필요한 차량을 연결해드립니다.", en: "From a single airport pickup to a multi-day business trip, Certo Drive connects you with the vehicle you need." },
  "banner.quote.cta": { ko: "빠른 견적 요청", en: "Request a Quick Quote" },

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

  "regions.title": { ko: "지역", en: "Regions" },
  "regions.subtitle": { ko: "한인 커뮤니티가 있는 도시를 우선으로 매칭하며, 그 외 지역은 문의 후 확인해 회신드립니다.", en: "We prioritize matching in cities with established Korean communities; other regions are confirmed after review." },
  "regions.cities": { ko: "시애틀 · LA · 뉴욕 · 밴쿠버 · 토론토 · 시드니 · 런던", en: "Seattle · LA · New York · Vancouver · Toronto · Sydney · London" },
  "regions.note": { ko: "목록에 없는 도시도 문의하시면 가능 여부를 확인해 회신드립니다.", en: "Even if your city isn't listed, contact us and we'll confirm availability." },

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
  "faq.a13": { ko: "변경·취소 규정은 예약 확정 안내 시 함께 고지됩니다.", en: "Change and cancellation terms are provided together with your booking confirmation." },
  "faq.q14": { ko: "통행료·주차비 등의 추가 비용은 어떻게 되나요?", en: "What about extra costs like tolls or parking?" },
  "faq.a14": { ko: "톨비·주차비 등 현지 실비는 별도일 수 있으며, 견적 시 안내합니다.", en: "Local costs such as tolls and parking may be separate and are noted in your quote." },

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
  "contact.option.premium": { ko: "프리미엄 차량", en: "Premium Vehicle" },
  "contact.option.van": { ko: "밴 / 버스", en: "Van / Bus" },
  "contact.option.unknown": { ko: "모름", en: "Not sure" },
  "contact.option.driverRequired": { ko: "필요", en: "Required" },
  "contact.option.driverPreferred": { ko: "가능하면", en: "If possible" },
  "contact.option.driverEither": { ko: "상관없음", en: "No preference" },
  "contact.option.individual": { ko: "개인", en: "Individual" },
  "contact.option.corporate": { ko: "기업", en: "Corporate" },
  "contact.option.institution": { ko: "기관", en: "Institution" },
  "contact.option.other": { ko: "기타", en: "Other" },
  "contact.option.purposeAirport": { ko: "공항픽업", en: "Airport Pickup" },
  "contact.option.purposeDriver": { ko: "전용기사", en: "Dedicated Driver" },
  "contact.option.purposeBusiness": { ko: "출장", en: "Business Trip" },
  "contact.option.purposeSchool": { ko: "교육방문", en: "School Visit" },
  "contact.option.purposeFamily": { ko: "가족여행", en: "Family Travel" },
  "contact.submit": { ko: "문의 보내기", en: "Send Inquiry" },
  "contact.privacyNote": { ko: "제출하신 정보는 문의 응대 목적으로만 사용됩니다.", en: "Information submitted is used only to respond to your inquiry." },

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
  initContactForm();
});
