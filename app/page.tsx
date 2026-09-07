'use client'

import Link from 'next/link'
import BoardSection from '@/components/board-section'
import { ProjectsGallery } from '@/components/projects-gallery'
import { ContactForm } from '@/components/contact-form'

const menuItems = [
  { label: '회사소개', href: '#about' },
  { label: '대표인사', href: '#ceo' },
  { label: '사업분야', href: '#business' },
  { label: '프로젝트', href: '#projects' },
  { label: '기술·품질', href: '#quality' },
  { label: '뉴스룸', href: '#news' },
  { label: '게시판', href: '#board' },
]

const businesses = [
  { number: '01', title: '건축사업', text: '주거·상업·업무시설의 기획부터 시공까지, 공간의 가치를 완성합니다.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85' },
  { number: '02', title: '토목사업', text: '도시와 사람을 연결하는 인프라를 안전하고 정교하게 구축합니다.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=85' },
  { number: '03', title: '주택사업', text: '사람의 삶을 먼저 생각한 주거공간으로 더 나은 내일을 설계합니다.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85' },
  { number: '04', title: '리모델링', text: '기존 공간에 새로운 기능과 감성을 더해 지속 가능한 가치를 만듭니다.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="#top" className="flex items-center gap-3.5 group" aria-label="신덕종합건설 홈">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-md bg-white/10 p-1 backdrop-blur-sm transition group-hover:bg-white/15">
              <img src="/images/logo-symbol.svg" alt="신덕종합건설 로고" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl font-bold tracking-tight text-white leading-tight">신덕종합건설<span className="text-secondary">.</span></span>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-secondary">THE BEST ONE</span>
            </div>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6 lg:gap-8" aria-label="주요 메뉴">
            {menuItems.map((item) => <Link key={item.label} href={item.href} className="whitespace-nowrap text-xs font-medium text-white/80 transition hover:text-white sm:text-sm">{item.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-5 xl:flex"><div className="text-right leading-tight"><span className="block text-xs font-semibold text-white/90">대표전화 0507-1448-6119</span><span className="block text-[11px] text-white/60">직통 010-5644-8833</span></div><Link href="#contact" className="bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:bg-secondary/90">프로젝트 문의</Link></div>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[680px] items-end bg-slate-950 pb-24 pt-36 text-white lg:min-h-[760px] lg:pb-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/images/construction-hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10"><div className="max-w-3xl"><p className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-secondary"><span className="h-px w-10 bg-secondary" />BUILDING TOMORROW</p><h1 className="font-sans text-5xl font-black leading-[1.08] tracking-tight text-balance md:text-7xl lg:text-[88px]">더 나은 내일을<br /><span className="text-secondary">짓습니다.</span></h1><p className="mt-8 max-w-xl text-base leading-7 text-white/75 md:text-lg">신덕종합건설은 사람과 도시, 자연이 조화롭게 공존하는 공간을 만듭니다.<br className="hidden md:block" /> 20년의 기술력과 진정성으로 건설의 기준을 새롭게 세웁니다.</p><div className="mt-10 flex flex-wrap gap-4"><Link href="#projects" className="bg-secondary px-7 py-4 text-sm font-bold transition hover:bg-secondary/90">프로젝트 보기 <span className="ml-5">→</span></Link><Link href="#about" className="border border-white/40 px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-primary">신덕종합건설 알아보기</Link></div></div><div className="mt-20 flex items-center gap-10 border-t border-white/20 pt-5 text-xs text-white/55"><span>SCROLL TO EXPLORE</span><span className="h-px w-16 bg-white/40" /><span>01 / 06</span></div></div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-end"><div><p className="section-kicker">ABOUT SINDEOK</p><h2 className="section-title">정직한 기술로<br />신뢰를 <span className="text-secondary">짓다.</span></h2></div><div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">신덕종합건설은 건축과 토목을 아우르는 종합건설기업입니다. 눈에 보이는 결과를 넘어, 그 안에서 살아갈 사람들의 내일을 고민하며 가장 안전하고 아름다운 공간을 만들어 왔습니다.</p><Link href="#quality" className="mt-8 inline-flex items-center gap-4 border-b-2 border-primary pb-2 text-sm font-bold">회사소개 더보기 <span className="text-secondary">↗</span></Link></div></div><div className="mt-20 grid grid-cols-2 border-t border-border max-w-2xl">{[['20', '년의 업력'], ['30', '프로젝트 수행']].map(([number, label]) => <div key={label} className="border-b border-r border-border px-4 py-8 last:border-r-0 md:px-8 md:py-10"><p className="font-sans text-4xl font-black tracking-tight text-primary md:text-5xl">{number}<span className="text-secondary">+</span></p><p className="mt-2 text-sm text-muted-foreground">{label}</p></div>)}</div></section>

      <section id="ceo" className="relative bg-white px-6 py-28 text-foreground lg:px-10 lg:py-36 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* 대표 사진 - 네모칸/테두리 없이 배경과 자연스럽게 어우러짐 */}
            <div className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px] shrink-0 flex justify-center">
              <img
                src="/images/ceo.png"
                alt="신덕종합건설 대표이사 신형섭"
                className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-md"
              />
            </div>

            {/* 대표 인사말 내용 - 품격 있고 넉넉한 공간감 */}
            <div className="flex-1 text-center md:text-left">
              <p className="section-kicker">CEO GREETINGS · 대표 인사말</p>
              <h2 className="mt-3 font-sans text-3xl font-black tracking-tight text-primary md:text-4xl lg:text-[40px] leading-tight md:leading-snug">
                "화려한 말보다, <span className="text-secondary">정직한 땀방울</span>로 답하겠습니다."
              </h2>

              <div className="mt-6 space-y-4 text-base md:text-lg leading-8 text-muted-foreground">
                <p>
                  신덕종합건설은 거창한 수식어 대신, <strong className="text-primary font-bold">대표인 제가 직접 매일 아침 작업복을 입고 현장을 챙깁니다.</strong> 눈에 잘 보이지 않는 기초 콘크리트부터 철근 한 가닥까지 직접 확인하지 않은 공정은 결코 넘어가지 않습니다.
                </p>
                <p>
                  작은 자재 하나 속이지 않는 정직한 원칙 시공과 철저한 사후관리로, 고객 한 분 한 분의 믿음에 흔들리지 않는 튼튼하고 안전한 건물로 보답하겠습니다.
                </p>
              </div>

              {/* 핵심 가치 태그 & 서명부 */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
                <div className="flex flex-wrap gap-2.5 text-xs md:text-sm">
                  <span className="bg-slate-100 px-3.5 py-1.5 font-semibold text-slate-700">현장 직영 감리</span>
                  <span className="bg-slate-100 px-3.5 py-1.5 font-semibold text-slate-700">정품 자재 100%</span>
                  <span className="bg-slate-100 px-3.5 py-1.5 font-semibold text-slate-700">철저한 책임 AS</span>
                </div>
                <div className="text-right">
                  <span className="text-xs md:text-sm text-secondary font-bold mr-2">대표이사</span>
                  <span className="font-sans text-xl md:text-2xl font-black text-primary tracking-tight">신 형 섭</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="business" className="bg-muted/60 px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">OUR BUSINESS</p><h2 className="section-title">우리가 만드는<br /><span className="text-secondary">공간의 기준.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">다양한 분야의 전문성과 축적된 경험을 바탕으로<br />고객의 가장 중요한 순간을 함께합니다.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{businesses.map((business) => <article key={business.number} className="group overflow-hidden bg-card"><div className="relative h-56 overflow-hidden"><img src={business.image} alt={business.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-secondary px-3 py-1 text-xs font-bold text-white">{business.number}</span></div><div className="p-6"><h3 className="text-xl font-bold text-primary">{business.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{business.text}</p><Link href="#contact" className="mt-6 inline-flex text-sm font-bold text-primary">자세히 보기 <span className="ml-3 text-secondary">→</span></Link></div></article>)}</div></div></section>

      <ProjectsGallery />

      <section id="quality" className="bg-primary px-6 py-24 text-white lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="section-kicker text-secondary">WHY SINDEOK</p><h2 className="section-title text-white">원칙을 지키는 것이<br />가장 <span className="text-secondary">큰 기술</span>입니다.</h2><p className="mt-7 max-w-md leading-7 text-white/65">안전, 품질, 환경에 대한 기준을 타협하지 않습니다. 모든 현장의 작은 디테일까지 한결같은 원칙으로 관리합니다.</p><Link href="#contact" className="mt-8 inline-flex border border-white/35 px-6 py-3 text-sm font-bold hover:bg-white hover:text-primary">기술·품질 자세히 보기</Link></div><div className="grid grid-cols-2 gap-px bg-white/15">{[['01', '안전 최우선', 'Zero Accident'], ['02', '품질 경영', 'Quality First'], ['03', '친환경 기술', 'Green Innovation'], ['04', '상생 협력', 'Together']].map(([no, title, sub]) => <div key={no} className="bg-primary p-6 md:p-9"><p className="font-mono text-sm text-secondary">{no}</p><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-2 text-xs text-white/45">{sub}</p></div>)}</div></div></section>

      <section id="news" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"><div className="mb-10 flex items-end justify-between"><div><p className="section-kicker">SINDEOK NEWS</p><h2 className="text-3xl font-black tracking-tight text-primary md:text-4xl">신덕종합건설 소식</h2></div><Link href="#contact" className="text-sm font-bold text-primary">뉴스룸 바로가기 ↗</Link></div><div className="divide-y divide-border border-y border-border">{[['2025. 02. 18', '신덕종합건설, 2025 안전경영 선포식 개최', '보도자료'], ['2025. 01. 06', '송도 센트럴 비즈파크 프로젝트 착공', '프로젝트'], ['2024. 12. 20', '지역사회와 함께하는 따뜻한 겨울 나눔', '사회공헌']].map(([date, title, category]) => <Link href="#contact" key={title} className="group flex flex-col gap-3 py-6 md:flex-row md:items-center md:gap-10"><span className="font-mono text-xs text-muted-foreground md:w-28">{date}</span><span className="text-xs font-bold text-secondary md:w-20">{category}</span><span className="text-lg font-bold text-primary transition group-hover:text-secondary">{title}</span><span className="ml-auto hidden text-xl text-muted-foreground group-hover:text-secondary md:block">↗</span></Link>)}</div></section>

      <BoardSection />

      <section id="contact" className="bg-muted/60 px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.15fr]"><div><p className="section-kicker">CONTACT US</p><h2 className="section-title">당신의 프로젝트를<br /><span className="text-secondary">들려주세요.</span></h2><p className="mt-6 max-w-md text-muted-foreground">새로운 가능성을 함께 만들어가겠습니다. 프로젝트 문의 및 견적 상담을 남겨주시면 대표가 직접 확인 후 신속하게 연락드리겠습니다.</p><div className="mt-10 space-y-4 text-sm"><p><strong className="mr-8 text-primary">대표전화</strong> 0507-1448-6119</p><p><strong className="mr-8 text-primary">직통전화</strong> 010-5644-8833</p><p><strong className="mr-8 text-primary">이메일</strong> sdesign30@naver.com</p><p><strong className="mr-8 text-primary">주소</strong> 경기 김포시 통진읍 가현리 277</p></div></div><ContactForm /></div></section>

      <footer className="bg-[#10263f] px-6 py-12 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row"><div><div className="flex items-center gap-3.5"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 p-1"><img src="/images/logo-symbol.svg" alt="신덕종합건설 로고" className="h-full w-full object-contain" /></div><div className="flex flex-col"><span className="text-lg font-bold text-white leading-tight">신덕종합건설<span className="text-secondary">.</span></span><span className="text-[10px] font-extrabold tracking-[0.2em] text-secondary">THE BEST ONE</span></div></div><p className="mt-5 text-xs leading-6 text-white/45">경기 김포시 통진읍 가현리 277<br />대표전화 0507-1448-6119 · 직통 010-5644-8833<br />대표이사 신형섭 · 사업자등록번호 123-45-67890</p></div><div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/65">{menuItems.map((item) => <Link href={item.href} key={item.label} className="hover:text-white">{item.label}</Link>)}</div></div><div className="mx-auto mt-10 flex max-w-7xl justify-between border-t border-white/10 pt-6 text-[11px] text-white/35"><span>© 2025 SINDEOK CONSTRUCTION. ALL RIGHTS RESERVED.</span><span>개인정보처리방침</span></div></footer>
    </main>
  )
}
