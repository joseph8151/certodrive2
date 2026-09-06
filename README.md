# 체르토 드라이브 (Certo Drive)

한국어 가능 드라이버와 SUV·미니밴 등 차량을 연결하는 예약 중개 서비스 웹사이트입니다.
React/Next/npm/빌드 툴 없이 순수 HTML + CSS + Vanilla JS로만 제작되었습니다.

## 파일 구조

```
/
  index.html    메인 원페이지 (히어로 / 이용 사례 / 차량 안내 / 이용 과정 / 기업·기관 / 사례 / FAQ / 문의 폼 / 푸터)
  thanks.html   문의 폼 제출 후 감사 페이지
  styles.css    전체 스타일
  app.js        언어 전환(KR/EN), 모바일 메뉴, 폼 유효성 검사, 설정값(CONFIG)
  robots.txt
  _headers      Cloudflare Pages 보안 헤더 설정
```

## 1. GitHub에 올리기

```
git init
git add .
git commit -m "Certo Drive 웹사이트 초기 커밋"
git branch -M main
git remote add origin <레포 URL>
git push -u origin main
```

## 2. Cloudflare Pages 연결

1. Cloudflare 대시보드 → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. 방금 올린 레포 선택
3. 빌드 설정
   - **Framework preset**: `None`
   - **Build command**: 공란(비워둠)
   - **Output directory**: `/`
4. **Save and Deploy** 클릭 — 별도 빌드 없이 루트가 그대로 사이트로 배포됩니다.

## 3. Formspree 폼 연결

1. [formspree.io](https://formspree.io) 에서 계정을 만들고 새 폼(Form)을 생성해 **Form ID**를 확인합니다.
2. `app.js` 상단의 `CONFIG.FORM_ID` 값을 실제 Form ID로 교체합니다.
   ```js
   var CONFIG = {
     FORM_ID: "YOUR_FORM_ID", // 여기를 실제 값으로 교체
     ...
   };
   ```
3. `index.html`의 `<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>` 의 `action` 값도 동일한 Form ID로 함께 바꿔주세요 (JS가 꺼져 있는 환경에서도 정상 동작하도록 하는 fallback입니다).
4. Formspree 대시보드에서 폼 인증 이메일을 확인하고 활성화합니다.

## 4. thanks.html 리다이렉트 확인

폼에는 히든 필드 `_next`가 `/thanks.html`로 설정되어 있습니다. 실제 배포 도메인이 확정되면 Formspree 대시보드의 폼 설정에서 **허용 도메인(Allowed domains)**에 배포 도메인을 등록해야 리다이렉트가 정상 동작합니다.

## 5. 바꿔야 하는 값 체크리스트

- [ ] `app.js` → `CONFIG.FORM_ID` : Formspree 실제 폼 ID로 교체
- [ ] `index.html` → `<form>` 태그의 `action="https://formspree.io/f/YOUR_FORM_ID"` 교체
- [ ] `app.js` → `CONFIG.CONTACT_EMAIL` : 실제 문의 이메일 주소로 교체 (기본값 `hello@certodrive.com`)
- [ ] `app.js` → `CONFIG.KAKAO_URL` : 실제 카카오톡 채널/오픈채팅 링크로 교체 (기본값 `#kakao` placeholder)
- [ ] `robots.txt` → `Sitemap` 줄의 도메인을 실제 배포 도메인으로 교체 (사이트맵 미제공 시 이 줄 삭제 가능)
- [ ] Formspree 대시보드에서 배포 도메인을 Allowed domains에 등록
- [ ] (선택) 매칭 가능 도시 목록, 사례(Cases) 섹션 내용을 실제 서비스 현황에 맞게 수정
