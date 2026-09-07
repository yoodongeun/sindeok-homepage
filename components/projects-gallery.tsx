'use client'

import { useState } from 'react'

export interface ProjectItem {
  id: number
  title: string
  category: '교육·공공' | '산업·사옥' | '상업·근생' | '주거·주택'
  location: string
  description: string
  image: string
  tags: string[]
}

export const PROJECTS_DATA: ProjectItem[] = [
  // 1. 대형 교육시설 신축 (화려한 랜드마크 프로젝트 1위)
  {
    id: 1,
    title: '초·중등 교육시설 및 미래형 복합 학교 신축 공사',
    category: '교육·공공',
    location: '수도권 교육지구',
    description: '학생들의 안전과 쾌적한 학습 환경을 최우선으로 시공한 대규모 학교 신축 프로젝트입니다. 견고한 친환경 외장과 컬러풀 캐노피 파사드를 완공했습니다.',
    image: '/images/projects/project-06.jpg',
    tags: ['학교 신축', '교육시설', '친환경 시공', '대형 프로젝트']
  },
  // 2. 대형 물류/산업 복합 사옥
  {
    id: 2,
    title: '대형 물류·산업 클러스터 및 글라스 복합 사옥 신축',
    category: '산업·사옥',
    location: '수도권 산업단지',
    description: '대규모 물류 제조동과 블루 반사유리 커튼월을 적용한 4층 규모 첨단 비즈니스 복합 사옥을 정밀 시공했습니다.',
    image: '/images/projects/project-07.jpg',
    tags: ['대형 산업단지', '커튼월 글라스', '복합 사옥']
  },
  // 3. 도심형 4층 상가 타워
  {
    id: 3,
    title: '도심형 4층 모던 상업타워 및 사옥 빌딩',
    category: '상업·근생',
    location: '도심 상업지구',
    description: '투톤 알루미늄 패널과 버티컬 글라스 타워를 결합하여 도심 코너에 랜드마크로 우뚝 선 세련된 4층 규모 상업 타워입니다.',
    image: '/images/projects/project-08.jpg',
    tags: ['4층 상가타워', '알루미늄 패널', '도심 랜드마크']
  },
  // 4. 골드 브론즈 복합 사옥
  {
    id: 4,
    title: '골드 브론즈 메탈릭 패널 복합 사옥 및 제조 콤플렉스',
    category: '산업·사옥',
    location: '수도권 비즈니스 파크',
    description: '품격 있는 골드 브론즈 메탈릭 판넬과 코너 글라스 큐브를 매치하여 제조 효율성과 기업 브랜드 가치를 동시에 높인 복합 사옥입니다.',
    image: '/images/projects/project-10.jpg',
    tags: ['골드 메탈릭', '사옥 신축', '코너 글라스']
  },
  // 5. 첨단 알루미늄 사옥
  {
    id: 5,
    title: '첨단 알루미늄 패널 복합 사옥 및 클린 제조시설',
    category: '산업·사옥',
    location: '수도권 첨단산업단지',
    description: '단열성과 내구성이 뛰어난 프리미엄 알루미늄 판넬과 대형 셔터 도어, 블루 틴티드 글라스를 조화롭게 구성한 현대식 복합 사옥입니다.',
    image: '/images/projects/project-13.jpg',
    tags: ['알루미늄 판넬', '클린룸 제조', '사옥 신축']
  },
  // 6. 필로티 구조 사옥
  {
    id: 6,
    title: '필로티 구조 복합 레지던스 및 사옥',
    category: '산업·사옥',
    location: '수도권',
    description: '견고한 석재 마감 필로티 기둥으로 지상 1층 주차 공간을 쾌적하게 확보하고 상층부 테라스 및 조망을 설계한 모던 복합 건축물입니다.',
    image: '/images/projects/project-05.jpg',
    tags: ['필로티 구조', '주차 특화', '석재 파사드']
  },
  // 7. 프리미엄 다층 주택
  {
    id: 7,
    title: '프리미엄 다층 모던 레지던스 (빌트인 실내 차고)',
    category: '주거·주택',
    location: '수도권 고급주택단지',
    description: '천연 석재 기단부와 와이드 유리 난간, 오버헤드 셔터가 완비된 실내 빌트인 주차장을 갖춘 최고급 하이엔드 주택입니다.',
    image: '/images/projects/project-04.jpg',
    tags: ['빌트인 차고', '석재 마감', '와이드 발코니']
  },
  // 8. 4층 투톤 벽돌 다가구
  {
    id: 8,
    title: '모던 투톤 벽돌 다가구 레지던스 (필로티 주차)',
    category: '주거·주택',
    location: '수도권 주거단지',
    description: '클래식한 블랙 브릭과 화이트 브릭의 감각적인 투톤 배색, 지상 1층 필로티 주차 공간을 완비한 4층 규모 다가구 주택입니다.',
    image: '/images/projects/project-11.jpg',
    tags: ['투톤 벽돌', '필로티 주차', '다가구 주택']
  },
  // 9. 대형 F&B 상가 (북극해 고등어)
  {
    id: 9,
    title: '북극해 고등어 부천작동점 상업시설 신축',
    category: '상업·근생',
    location: '경기 부천시 작동',
    description: '쾌적한 전면 주차장과 세련된 그레이 톤 메탈 패널, 전면 파노라마 통창을 완비한 대형 F&B 프랜차이즈 전문 매장 신축 공사입니다.',
    image: '/images/projects/project-09.jpg',
    tags: ['프랜차이즈 상가', '주차장 완비', '파노라마 통창']
  },
  // 10. 자동차 디테일링 상업시설
  {
    id: 10,
    title: '자동차 프리미엄 디테일링 전문 상업시설 (Detailer 明)',
    category: '상업·근생',
    location: '수도권',
    description: '차량 진출입에 최적화된 전면 폴딩도어 시스템과 넓은 아스팔트 전면 주차장, 감각적인 모던 외관 디자인을 갖춘 전문 상업시설입니다.',
    image: '/images/projects/project-12.jpg',
    tags: ['폴딩도어', '상업시설', '주차장 특화']
  },
  // 11. (구 1페이지 -> 맨 끝 배치) 2층 모던 글라스 테라스 빌라
  {
    id: 11,
    title: '2층 모던 글라스 테라스 주거 빌라',
    category: '주거·주택',
    location: '수도권',
    description: '화이트 & 차콜 투톤 메탈 외장과 2층 개방형 글라스 테라스를 시공하여 채광과 공간감을 극대화한 주거 시설입니다.',
    image: '/images/projects/project-03.jpg',
    tags: ['복층 주거', '글라스 테라스', '투톤 마감']
  },
  // 12. (구 1페이지 -> 맨 끝 배치) 가현리 모던 징크 근생
  {
    id: 12,
    title: '가현리 모던 징크 파사드 근린생활시설',
    category: '상업·근생',
    location: '경기 김포시 가현리',
    description: '고급 다크 징크 판넬 외장과 전면 와이드 통창 글라스, 천연 방부목 데크 테라스를 적용한 세련된 모던 근린생활시설입니다.',
    image: '/images/projects/project-01.jpg',
    tags: ['징크 판넬', '전면 통창', '데크 테라스']
  },
  // 13. (구 1페이지 -> 맨 끝 배치) 친환경 모던 전원주택
  {
    id: 13,
    title: '친환경 모던 전원주택 및 휴게 공간',
    category: '주거·주택',
    location: '경기 김포시',
    description: '자연 친화적 목재 패턴 외장재와 넓은 잔디마당이 조화를 이루는 안락하고 따뜻한 전원 단독주택입니다.',
    image: '/images/projects/project-02.jpg',
    tags: ['전원주택', '목재 패턴', '친환경 설계']
  },
]

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('전체')
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = useState<3 | 4>(3)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const categories = ['전체', '교육·공공', '산업·사옥', '상업·근생', '주거·주택']

  const filteredProjects = activeCategory === '전체'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1
  const currentProjects = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setCurrentPage(0)
  }

  // Modal navigation
  const handleModalPrev = () => {
    if (!selectedProject) return
    const curIdx = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id)
    const prevIdx = curIdx > 0 ? curIdx - 1 : PROJECTS_DATA.length - 1
    setSelectedProject(PROJECTS_DATA[prevIdx])
  }

  const handleModalNext = () => {
    if (!selectedProject) return
    const curIdx = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id)
    const nextIdx = curIdx < PROJECTS_DATA.length - 1 ? curIdx + 1 : 0
    setSelectedProject(PROJECTS_DATA[nextIdx])
  }

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32 border-b border-border">
      {/* Header Section */}
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <p className="section-kicker !mb-0">FEATURED PROJECTS · 대표 시공 실적</p>
          </div>
          <h2 className="section-title mt-2">
            신덕이 완성한<br />
            <span className="text-secondary">작품의 기록.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            학교 신축, 대형 산업·물류 복합사옥, 도심 랜드마크 타워 등 신덕종합건설의 주요 건축 실적(총 {PROJECTS_DATA.length}개)입니다.
          </p>
        </div>

        {/* View Options & Categories */}
        <div className="flex flex-col items-start md:items-end gap-3">
          {/* 3개씩 / 4개씩 보기 토글 */}
          <div className="flex items-center gap-1.5 bg-muted p-1 rounded-md text-xs font-semibold">
            <span className="px-2 text-muted-foreground">한 화면에:</span>
            <button
              onClick={() => { setItemsPerPage(3); setCurrentPage(0); }}
              className={`px-3 py-1 rounded transition ${
                itemsPerPage === 3
                  ? 'bg-card text-primary font-bold shadow-xs'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              3개씩 보기
            </button>
            <button
              onClick={() => { setItemsPerPage(4); setCurrentPage(0); }}
              className={`px-3 py-1 rounded transition ${
                itemsPerPage === 4
                  ? 'bg-card text-primary font-bold shadow-xs'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              4개씩 보기
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const count = cat === '전체'
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter(p => p.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1.5 text-xs font-bold transition rounded-md ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-muted text-muted-foreground hover:text-primary hover:bg-muted/80'
                  }`}
                >
                  {cat} <span className="text-[10px] opacity-75">({count})</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid Container (Dynamic 3 or 4 columns) */}
      <div className="relative">
        <div
          className={`grid gap-6 ${
            itemsPerPage === 4
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {currentProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden bg-card border border-border/80 hover:border-secondary transition-all duration-300 hover:shadow-2xl flex flex-col"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="bg-secondary text-white text-[11px] font-extrabold px-2.5 py-1 shadow-sm tracking-tight">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 text-[11px] font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1">
                  📍 {project.location}
                </div>

                {/* Bottom Quick Title */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <h3 className="text-base font-bold tracking-tight text-white leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-card">
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tags & Action */}
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    크게보기 ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Bottom Control Bar (No Page Reload, Smooth Transition) */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-muted-foreground">
                PAGE <strong className="text-primary font-black text-sm">0{currentPage + 1}</strong> / 0{totalPages}
              </span>
              <span className="text-xs text-muted-foreground/60">· {filteredProjects.length}개 실적 중 표시</span>
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="이전 프로젝트"
                className="flex h-11 w-11 items-center justify-center border border-border bg-card text-primary font-bold hover:bg-primary hover:text-white transition shadow-xs"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="다음 프로젝트"
                className="flex h-11 w-11 items-center justify-center border border-border bg-card text-primary font-bold hover:bg-primary hover:text-white transition shadow-xs"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Lightbox / Modal for Full Size Lookbook */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-card overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="닫기"
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition text-lg font-bold"
            >
              ✕
            </button>

            {/* Modal Image with Navigation Arrows */}
            <div className="relative aspect-[16/10] w-full bg-black flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next within Modal */}
              <button
                onClick={handleModalPrev}
                aria-label="이전 사진"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition text-xl font-bold"
              >
                ‹
              </button>
              <button
                onClick={handleModalNext}
                aria-label="다음 사진"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition text-xl font-bold"
              >
                ›
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 bg-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    📍 {selectedProject.location}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {selectedProject.id} / {PROJECTS_DATA.length}
                </span>
              </div>

              <h3 className="mt-3 text-2xl md:text-3xl font-black text-primary">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                {selectedProject.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold bg-muted px-3 py-1 text-primary">
                      #{t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="bg-secondary px-5 py-2 text-xs font-bold text-white hover:bg-secondary/90 transition inline-flex items-center gap-2"
                >
                  비슷한 프로젝트 견적 문의 →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
