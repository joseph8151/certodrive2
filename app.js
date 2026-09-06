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
  "nav.vehicles": { ko: "차량 안내", en: "Vehicles" },
  "nav.process": { ko: "이용 과정", en: "How It Works" },
  "nav.business": { ko: "기업·기관", en: "For Organizations" },
  "nav.faq": { ko: "FAQ", en: "FAQ" },
  "nav.contact": { ko: "문의", en: "Contact" },
  "nav.cta": { ko: "문의하기", en: "Inquire Now" },

  "hero.eyebrow": { ko: "글로벌 드라이버·차량 매칭 서비스", en: "GLOBAL DRIVER & VEHICLE MATCHING" },
  "hero.headlineMain": { ko: "한국어가 되는 차와 드라이버를,", en: "Cars and drivers who speak Korean —" },
  "hero.headlineAccent": { ko: "필요한 도시에서.", en: "wherever you need them." },
  "hero.sub": { ko: "출장, 연수, 교육 방문, 가족 일정까지. 체르토 드라이브가 차량과 기사를 연결합니다.", en: "From business trips to training visits and family travel — Certo Drive connects you with vehicles and drivers." },
  "hero.ctaPrimary": { ko: "이용 문의하기", en: "Request a Quote" },
  "hero.ctaSecondary": { ko: "카카오톡 상담", en: "Chat on KakaoTalk" },
  "hero.note": { ko: "즉시 배차 앱이 아닌, 조건 확인 후 진행하는 예약 중개 서비스입니다.", en: "Not an on-demand app — every request is confirmed before booking." },

  "usecases.title": { ko: "이런 일정에 씁니다", en: "Built for These Trips" },
  "usecases.subtitle": { ko: "개인부터 기관까지, 목적에 맞춰 차량과 드라이버를 매칭합니다.", en: "From individuals to institutions, matched to fit the purpose of your trip." },
  "usecases.card1.title": { ko: "개인·가족 여행", en: "Personal & Family Travel" },
  "usecases.card1.desc": { ko: "공항 픽업부터 다구간 일정까지, 한국어 소통이 편한 드라이버와 함께합니다.", en: "From airport pickups to multi-stop itineraries, with a driver you can communicate with in Korean." },
  "usecases.card2.title": { ko: "기업 출장·바이어 의전", en: "Corporate Travel & Client Escort" },
  "usecases.card2.desc": { ko: "출장, 바이어 방문, 컨퍼런스 일정에 맞춰 차량과 기사를 배치합니다.", en: "Vehicles and drivers arranged around business trips, client visits, and conference schedules." },
  "usecases.card3.title": { ko: "교육청·학교·연수단", en: "School & Institutional Groups" },
  "usecases.card3.desc": { ko: "예: 시애틀 교육청 직원 5명, 1주일 SUV·미니밴 이동, 한국어 드라이버 매칭.", en: "Example: 5 staff from a Seattle school district, one week, SUV/minivan with a Korean-speaking driver." },

  "vehicles.title": { ko: "차량 유형", en: "Vehicle Types" },
  "vehicles.subtitle": { ko: "일정과 인원에 맞는 차량 유형을 안내해 드립니다.", en: "We help you choose the right vehicle type for your group and itinerary." },
  "vehicles.sedan.name": { ko: "세단", en: "Sedan" },
  "vehicles.sedan.desc": { ko: "1~3인, 시내 이동과 공항 픽업에 적합합니다.", en: "1–3 passengers, ideal for city transfers and airport pickups." },
  "vehicles.suv.name": { ko: "SUV", en: "SUV" },
  "vehicles.suv.desc": { ko: "가족 단위, 짐이 많은 일정에 적합합니다.", en: "Well suited to families or trips with more luggage." },
  "vehicles.minivan.name": { ko: "미니밴", en: "Minivan" },
  "vehicles.minivan.desc": { ko: "4~7인, 그룹 이동과 연수단에 적합합니다.", en: "4–7 passengers, suited for groups and delegations." },
  "vehicles.van.name": { ko: "밴", en: "Van" },
  "vehicles.van.desc": { ko: "8인 이상 단체, 장거리 일정에 적합합니다.", en: "8+ passengers, suited for larger groups and longer routes." },
  "vehicles.disclaimer": { ko: "체르토 드라이브는 차량을 직접 보유하지 않으며, 현지 파트너 드라이버의 차량을 기준으로 매칭합니다.", en: "Certo Drive does not own vehicles directly; matching is based on vehicles provided by local partner drivers." },

  "process.title": { ko: "이용 과정", en: "How It Works" },
  "process.subtitle": { ko: "문의부터 확정까지 4단계로 진행됩니다.", en: "From inquiry to confirmation, in four steps." },
  "process.step1.title": { ko: "문의", en: "Inquiry" },
  "process.step1.desc": { ko: "웹 폼, 이메일, 카카오톡으로 일정과 인원, 필요 차량을 알려주세요.", en: "Tell us your schedule, group size, and vehicle needs via web form, email, or KakaoTalk." },
  "process.step2.title": { ko: "조건 확인", en: "Confirm Details" },
  "process.step2.desc": { ko: "도시, 일정, 인원에 맞는 매칭 가능 여부와 견적을 확인합니다.", en: "We check availability and share a quote based on your city, dates, and group size." },
  "process.step3.title": { ko: "매칭", en: "Matching" },
  "process.step3.desc": { ko: "현지 한인 드라이버와 차량을 조율하여 매칭합니다.", en: "We coordinate and match you with a local Korean-speaking driver and vehicle." },
  "process.step4.title": { ko: "확정", en: "Confirmation" },
  "process.step4.desc": { ko: "일정과 비용을 확정하고 이용 안내를 전달합니다.", en: "We finalize the schedule and cost, then send your booking details." },

  "business.title": { ko: "기업·기관 서비스", en: "For Businesses & Institutions" },
  "business.subtitle": { ko: "출장, 바이어 의전, 연수 프로그램을 위한 맞춤 대응.", en: "Tailored support for business travel, client visits, and training programs." },
  "business.item1": { ko: "세금계산서 및 견적서 발행", en: "Invoices and quotes provided for accounting" },
  "business.item2": { ko: "다인원·다일정 동시 조율", en: "Coordination across multiple travelers and schedules" },
  "business.item3": { ko: "담당자 1:1 커뮤니케이션 창구", en: "A dedicated point of contact for your organization" },
  "business.item4": { ko: "주요 한인 도시 우선 매칭, 그 외 지역은 일정 확인 후 회신", en: "Priority matching in major Korean-community cities; other regions confirmed after review" },
  "business.cta": { ko: "기업·기관 문의하기", en: "Contact Us for Organizations" },

  "cases.title": { ko: "이용 사례", en: "Example Cases" },
  "cases.subtitle": { ko: "실제 진행 방식을 보여드리는 예시입니다.", en: "Examples showing how a typical engagement is arranged." },
  "cases.case1.tag": { ko: "교육기관 연수단", en: "Institutional Delegation" },
  "cases.case1.title": { ko: "시애틀 교육청 연수단", en: "Seattle School District Delegation" },
  "cases.case1.desc": { ko: "직원 5명, 1주일 일정, SUV·미니밴 혼합 배치, 한국어 드라이버 매칭.", en: "5 staff members, one-week itinerary, mixed SUV/minivan assignment, Korean-speaking drivers matched." },
  "cases.case2.tag": { ko: "기업 출장", en: "Corporate Travel" },
  "cases.case2.title": { ko: "바이어 미팅 출장", en: "Client Meeting Trip" },
  "cases.case2.desc": { ko: "바이어 3명, 3일 일정, 세단 2대, 공항 픽업 및 미팅 일정 동행.", en: "3 client representatives, 3-day schedule, two sedans, airport pickup and meeting-day support." },
  "cases.case3.tag": { ko: "가족 여행", en: "Family Travel" },
  "cases.case3.title": { ko: "가족 단위 여행", en: "Family Trip" },
  "cases.case3.desc": { ko: "가족 4명, 5일 일정, 미니밴 1대, 한국어 소통 가능 드라이버.", en: "4 family members, 5-day schedule, one minivan, Korean-speaking driver." },

  "faq.title": { ko: "자주 묻는 질문", en: "Frequently Asked Questions" },
  "faq.q1": { ko: "즉시 배차가 가능한가요?", en: "Can I get a car right away?" },
  "faq.a1": { ko: "아닙니다. 체르토 드라이브는 즉시 배차 앱이 아니라, 문의 후 조건을 확인하고 매칭을 진행하는 예약 중개 서비스입니다.", en: "No. Certo Drive is not an on-demand app. We review your request and arrange matching in advance of your trip." },
  "faq.q2": { ko: "차량을 직접 보유하고 있나요?", en: "Do you own the vehicles?" },
  "faq.a2": { ko: "아닙니다. 저희는 차량을 보유하지 않으며, 현지 파트너 드라이버와 차량을 연결하는 중개 서비스입니다.", en: "No. We do not own vehicles. We connect you with local partner drivers and their vehicles." },
  "faq.q3": { ko: "어느 지역에서 이용할 수 있나요?", en: "Which cities are available?" },
  "faq.a3": { ko: "주요 한인 커뮤니티가 있는 도시를 중심으로 우선 매칭하며, 그 외 지역은 문의 후 일정을 확인하고 회신드립니다.", en: "We prioritize matching in cities with established Korean communities; other regions are confirmed after review." },
  "faq.q4": { ko: "견적은 어떻게 확인하나요?", en: "How do I get a quote?" },
  "faq.a4": { ko: "문의 폼 또는 이메일, 카카오톡으로 일정과 인원을 남겨주시면 확인 후 회신드립니다.", en: "Submit your schedule and group size via the form, email, or KakaoTalk, and we will reply with details." },
  "faq.q5": { ko: "한국어 드라이버만 매칭 가능한가요?", en: "Are only Korean-speaking drivers available?" },
  "faq.a5": { ko: "한국어 소통이 꼭 필요하지 않으신 경우에도 매칭이 가능하며, 문의 시 선택하실 수 있습니다.", en: "Drivers without Korean are also available — you can specify your preference when you submit your inquiry." },

  "contact.title": { ko: "문의하기", en: "Send an Inquiry" },
  "contact.subtitle": { ko: "아래 정보를 남겨주시면 확인 후 24~48시간 내 회신드립니다.", en: "Leave your details below and we will respond within 24–48 hours." },
  "contact.label.name": { ko: "이름", en: "Name" },
  "contact.label.organization": { ko: "소속 (기관/회사명)", en: "Organization" },
  "contact.label.email": { ko: "이메일", en: "Email" },
  "contact.label.kakao": { ko: "카카오톡 ID", en: "KakaoTalk ID" },
  "contact.label.city": { ko: "이용 도시", en: "City" },
  "contact.label.startDate": { ko: "시작일", en: "Start Date" },
  "contact.label.endDate": { ko: "종료일", en: "End Date" },
  "contact.label.passengers": { ko: "인원", en: "Passengers" },
  "contact.label.vehicle": { ko: "희망 차량", en: "Preferred Vehicle" },
  "contact.label.koreanDriver": { ko: "한국어 드라이버", en: "Korean-Speaking Driver" },
  "contact.label.purpose": { ko: "방문 목적", en: "Purpose of Visit" },
  "contact.label.pickup": { ko: "픽업 장소", en: "Pickup Location" },
  "contact.label.notes": { ko: "추가 요청사항", en: "Additional Notes" },
  "contact.label.clientType": { ko: "문의 유형", en: "Inquiry Type" },
  "contact.optional": { ko: "(선택)", en: "(optional)" },
  "contact.placeholder.city": { ko: "예: 시애틀, 서울, 방콕", en: "e.g. Seattle, Seoul, Bangkok" },
  "contact.placeholder.organization": { ko: "예: OO교육청, OO주식회사", en: "e.g. Company or institution name" },
  "contact.placeholder.kakao": { ko: "카카오톡 ID (선택)", en: "KakaoTalk ID (optional)" },
  "contact.placeholder.purpose": { ko: "예: 연수 방문, 바이어 미팅, 가족 여행 등", en: "e.g. training visit, client meeting, family trip" },
  "contact.placeholder.pickup": { ko: "예: 공항, 호텔명", en: "e.g. airport, hotel name" },
  "contact.placeholder.notes": { ko: "차량, 일정과 관련해 알려주실 내용이 있다면 적어주세요.", en: "Let us know anything else about your vehicle or schedule needs." },
  "contact.option.select": { ko: "선택해주세요", en: "Please select" },
  "contact.option.sedan": { ko: "세단", en: "Sedan" },
  "contact.option.suv": { ko: "SUV", en: "SUV" },
  "contact.option.minivan": { ko: "미니밴", en: "Minivan" },
  "contact.option.van": { ko: "밴", en: "Van" },
  "contact.option.unknown": { ko: "모름", en: "Not sure" },
  "contact.option.driverRequired": { ko: "필요", en: "Required" },
  "contact.option.driverEither": { ko: "상관없음", en: "No preference" },
  "contact.option.driverNotNeeded": { ko: "불필요", en: "Not needed" },
  "contact.option.individual": { ko: "개인", en: "Individual" },
  "contact.option.corporate": { ko: "기업", en: "Corporate" },
  "contact.option.institution": { ko: "교육기관·학교", en: "School / Institution" },
  "contact.option.other": { ko: "기타", en: "Other" },
  "contact.submit": { ko: "문의 보내기", en: "Send Inquiry" },
  "contact.privacyNote": { ko: "제출하신 정보는 문의 응대 목적으로만 사용됩니다.", en: "Information submitted is used only to respond to your inquiry." },

  "error.required": { ko: "필수 항목입니다.", en: "This field is required." },
  "error.email": { ko: "올바른 이메일 주소를 입력해주세요.", en: "Please enter a valid email address." },
  "error.passengers": { ko: "인원을 1명 이상 입력해주세요.", en: "Please enter at least 1 passenger." },
  "error.dateOrder": { ko: "종료일은 시작일 이후여야 합니다.", en: "The end date must be on or after the start date." },

  "footer.about": { ko: "체르토 드라이브는 한국어 가능 드라이버와 SUV·미니밴 등 차량을 연결하는 예약 중개 서비스입니다.", en: "Certo Drive is a booking concierge connecting clients with Korean-speaking drivers and vehicles such as SUVs and minivans." },
  "footer.linksTitle": { ko: "바로가기", en: "Quick Links" },
  "footer.contactTitle": { ko: "연락처", en: "Contact" },
  "footer.disclaimer": { ko: "체르토 드라이브는 차량을 직접 보유하지 않으며, 현지 파트너 드라이버와의 매칭을 중개합니다.", en: "Certo Drive does not own vehicles directly and facilitates matching with local partner drivers." },
  "footer.rights": { ko: "모든 권리 보유", en: "All rights reserved." },

  "thanks.eyebrow": { ko: "접수 완료", en: "Inquiry Received" },
  "thanks.title": { ko: "문의가 접수되었습니다", en: "Your Inquiry Has Been Received" },
  "thanks.body": { ko: "빠른 시일 내 확인 후 이메일 또는 카카오톡으로 회신드리겠습니다.", en: "We will review your request and get back to you by email or KakaoTalk soon." },
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
