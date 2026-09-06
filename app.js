/* ============================================================
   Certo Drive / 체르토 드라이브 — site script (vanilla JS)
   ============================================================ */

/* ---- 1. CONFIG: 배포 시 이 값만 바꾸면 됩니다 ---- */
var CONFIG = {
  FORM_ID: "YOUR_FORM_ID", // Formspree 폼 ID (https://formspree.io/f/여기값)
  CONTACT_EMAIL: "hello@certodrive.com",
  KAKAO_URL: "#kakao" // 실제 카카오톡 채널/오픈채팅 링크로 교체
};

/* ---- 2. 다국어 사전 (KR 기본 / EN 전환) ---- */
var I18N = {
  "meta.title": { ko: "체르토 드라이브 | 한국어 드라이버·SUV/미니밴 예약 중개", en: "Certo Drive | Korean-Speaking Drivers & SUV/Minivan Booking" },
  "meta.description": { ko: "전 세계 개인, 기업, 교육기관을 위한 한국어 가능 드라이버와 SUV·미니밴 예약 중개 서비스, 체르토 드라이브.", en: "Certo Drive connects individuals, businesses, and institutions worldwide with Korean-speaking drivers and vehicles such as SUVs and minivans." },

  "nav.usecases": { ko: "이용 사례", en: "Use Cases" },
  "nav.vehicles": { ko: "차량", en: "Vehicles" },
  "nav.process": { ko: "이용 과정", en: "How It Works" },
  "nav.business": { ko: "기업·기관", en: "For Organizations" },
  "nav.regions": { ko: "지역", en: "Regions" },
  "nav.faq": { ko: "FAQ", en: "FAQ" },
  "nav.contact": { ko: "문의", en: "Contact" },
  "nav.cta": { ko: "문의하기", en: "Contact Us" },

  "hero.eyebrow": { ko: "한국어 가능 드라이버 예약 중개", en: "Korean-Speaking Driver Booking" },
  "hero.headlineMain": { ko: "한국어 되는 차,", en: "Korean-speaking rides," },
  "hero.headlineAccent": { ko: "필요한 도시에서.", en: "wherever you need them." },
  "hero.sub": { ko: "출장, 연수, 가족 여행까지 — 필요한 도시에서 한국어 가능 기사와 차량을 연결합니다. 문의 후 조건을 확인하고 진행하는 예약 중개 서비스입니다.", en: "From business trips to family travel, we connect you with Korean-speaking drivers and vehicles in the city you need. Every request is confirmed before booking — this is not an on-demand app." },
  "hero.ctaPrimary": { ko: "이용 문의하기", en: "Request a Quote" },
  "hero.ctaSecondary": { ko: "카카오톡 상담", en: "Chat on KakaoTalk" },
  "hero.note": { ko: "시애틀, LA, 뉴욕 등 주요 한인 도시를 중심으로 매칭합니다.", en: "Matching is prioritized in cities such as Seattle, LA, and New York." },

  "usecases.title": { ko: "이런 일정에 씁니다", en: "Built for These Trips" },
  "usecases.subtitle": { ko: "개인부터 기관까지, 목적에 맞춰 차량과 드라이버를 연결합니다.", en: "From individuals to institutions, matched to the purpose of your trip." },
  "usecases.card1.title": { ko: "공항 픽업", en: "Airport Pickup" },
  "usecases.card1.desc": { ko: "도착 시간에 맞춰 공항에서 목적지까지 이동합니다. 항공편 지연 시에도 일정을 조율해 대기합니다.", en: "A driver meets you at arrival and takes you to your destination. Schedules are adjusted to account for flight delays." },
  "usecases.card2.title": { ko: "전용 기사 (하루~수주)", en: "Dedicated Driver (Day to Multi-Week)" },
  "usecases.card2.desc": { ko: "하루 일정부터 수주간 상주까지 전용 기사를 배정합니다. 이동이 많은 일정에 적합합니다.", en: "A dedicated driver is arranged from a single day to several weeks. Suited to itineraries with frequent moves." },
  "usecases.card3.title": { ko: "교육청·학교 방문", en: "School & District Visits" },
  "usecases.card3.desc": { ko: "연수단, 자매학교 방문 등 교육 목적 일정을 지원합니다. 인원과 일정에 맞춰 SUV·미니밴을 배정합니다.", en: "Supports training delegations and sister-school visits. SUVs or minivans are assigned based on group size." },
  "usecases.card4.title": { ko: "기업 출장·의전", en: "Corporate Travel & Escort" },
  "usecases.card4.desc": { ko: "바이어 방문, 컨퍼런스 일정에 맞춰 차량을 배치합니다. 공항 픽업부터 미팅 동행까지 대응합니다.", en: "Vehicles are arranged around client visits and conference schedules. Covers everything from airport pickup to meeting-day support." },
  "usecases.card5.title": { ko: "가족 여행", en: "Family Travel" },
  "usecases.card5.desc": { ko: "다구간 일정도 한국어로 편하게 소통하며 이동합니다. 짐이 많은 가족 단위에는 SUV를 권장합니다.", en: "Multi-stop itineraries are handled with clear Korean communication. SUVs are recommended for families with more luggage." },
  "usecases.card6.title": { ko: "학회·연수", en: "Conferences & Training Programs" },
  "usecases.card6.desc": { ko: "학회, 워크숍 등 단체 이동 일정을 지원합니다. 참가 인원에 맞춰 차량 대수를 조정합니다.", en: "Supports group transport for conferences and workshops. The number of vehicles is adjusted to group size." },

  "vehicles.title": { ko: "차량 유형", en: "Vehicle Types" },
  "vehicles.subtitle": { ko: "일정과 인원에 맞는 차량 유형을 안내해 드립니다.", en: "We help you choose the right vehicle for your group and schedule." },
  "vehicles.sedan.name": { ko: "세단", en: "Sedan" },
  "vehicles.sedan.desc": { ko: "공항 픽업, 시내 이동 등 짧은 구간에 적합합니다. 1~3인 기준입니다.", en: "Suited to airport transfers and short in-city trips. For 1–3 passengers." },
  "vehicles.suv.name": { ko: "SUV", en: "SUV" },
  "vehicles.suv.desc": { ko: "짐이 많거나 가족 단위 이동에 적합합니다. 1~4인 기준입니다.", en: "Suited to families or trips with more luggage. For 1–4 passengers." },
  "vehicles.minivan.name": { ko: "미니밴", en: "Minivan" },
  "vehicles.minivan.desc": { ko: "그룹 이동, 연수단 일정에 적합합니다. 4~7인 기준입니다.", en: "Suited to group travel and training delegations. For 4–7 passengers." },
  "vehicles.van.name": { ko: "밴", en: "Van" },
  "vehicles.van.desc": { ko: "인원이 많은 단체, 장거리 일정에 적합합니다. 8인 이상 기준입니다.", en: "Suited to larger groups and longer routes. For 8 or more passengers." },
  "vehicles.disclaimer": { ko: "요청 기준으로 현지에서 매칭하며, 동일 모델을 보장하지 않습니다.", en: "Vehicles are matched locally based on your request; the exact model is not guaranteed." },

  "process.title": { ko: "이용 과정", en: "How It Works" },
  "process.subtitle": { ko: "문의부터 확정까지 4단계로 진행됩니다.", en: "From inquiry to confirmation, in four steps." },
  "process.step1.title": { ko: "문의", en: "Inquiry" },
  "process.step1.desc": { ko: "웹 폼, 이메일, 카카오톡으로 일정과 인원을 알려주세요. 필요한 차량과 한국어 드라이버 여부도 함께 남겨주세요.", en: "Share your schedule and group size via web form, email, or KakaoTalk. Let us know your vehicle needs and driver language preference." },
  "process.step2.title": { ko: "조건 확인", en: "Confirm Details" },
  "process.step2.desc": { ko: "도시와 일정에 맞는 매칭 가능 여부를 확인합니다. 보통 1영업일 내로 회신드립니다.", en: "We check availability based on your city and schedule. We usually respond within 1 business day." },
  "process.step3.title": { ko: "매칭·견적", en: "Matching & Quote" },
  "process.step3.desc": { ko: "현지 드라이버와 차량을 조율하고 견적을 안내합니다. 조건 변경 시 다시 확인 후 회신드립니다.", en: "We coordinate a local driver and vehicle, then share a quote. Any change in conditions is reconfirmed before a reply." },
  "process.step4.title": { ko: "확정·운행", en: "Confirmation & Service" },
  "process.step4.desc": { ko: "일정과 비용을 확정하고 운행 안내를 전달합니다. 운행은 매칭된 현지 파트너 드라이버가 진행합니다.", en: "Once confirmed, we send the schedule, cost, and driver details. The trip is carried out by the matched local partner driver." },

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
  "faq.q1": { ko: "차량을 직접 가지고 있나요?", en: "Do you own the vehicles?" },
  "faq.a1": { ko: "아닙니다. 차량은 보유하지 않으며, 현지 파트너 드라이버와 연결합니다.", en: "No. We do not own vehicles; we connect you with local partner drivers." },
  "faq.q2": { ko: "원하는 날짜에 무조건 가능한가요?", en: "Can you guarantee any date I want?" },
  "faq.a2": { ko: "아닙니다. 문의 후 해당 날짜의 매칭 가능 여부를 확인하고 회신드립니다.", en: "No. We check availability for your requested date and reply after confirming." },
  "faq.q3": { ko: "요금은 어떻게 나오나요?", en: "How is the fare determined?" },
  "faq.a3": { ko: "도시, 일정, 차량, 인원을 바탕으로 견적을 산정해 안내합니다.", en: "A quote is calculated based on city, schedule, vehicle, and group size." },
  "faq.q4": { ko: "한국어 기사만 가능한가요?", en: "Are only Korean-speaking drivers available?" },
  "faq.a4": { ko: "한국어가 필요하지 않으면 다른 드라이버도 매칭 가능하며, 문의 시 선택할 수 있습니다.", en: "Drivers without Korean are also available; you can specify your preference when inquiring." },
  "faq.q5": { ko: "기업 계산서 가능한가요?", en: "Can you issue a corporate invoice?" },
  "faq.a5": { ko: "가능합니다. 세금계산서와 견적서를 발행합니다.", en: "Yes. Invoices and quotes can be issued." },
  "faq.q6": { ko: "카카오톡으로만 문의해도 되나요?", en: "Can I inquire through KakaoTalk only?" },
  "faq.a6": { ko: "가능합니다. 웹 폼, 이메일, 카카오톡 중 편한 방법으로 문의하시면 됩니다.", en: "Yes. You may contact us via web form, email, or KakaoTalk, whichever is convenient." },
  "faq.q7": { ko: "취소는요?", en: "What about cancellations?" },
  "faq.a7": { ko: "취소 및 변경 규정은 예약 확정 안내 시 함께 고지됩니다.", en: "Cancellation and change terms are provided together with the booking confirmation." },
  "faq.q8": { ko: "기사와 직접 거래하면 안 되나요?", en: "Can't I deal directly with the driver?" },
  "faq.a8": { ko: "매칭된 드라이버와의 조율과 확정은 체르토 드라이브를 통해 진행해 주셔야 합니다.", en: "Coordination and confirmation with the matched driver should be handled through Certo Drive." },

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
  "contact.help.vehicle": { ko: "세단/SUV/미니밴/밴/모름 중 선택해 주세요.", en: "Choose from sedan, SUV, minivan, van, or not sure." },
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
