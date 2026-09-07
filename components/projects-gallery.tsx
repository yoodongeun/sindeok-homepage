'use client'

import { useState } from 'react'
import Image from 'next/image'

export interface ProjectItem {
  id: number
  title: string
  category: string
  location: string
  description: string
  image: string
  tags: string[]
}

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: '모던 징크 파사드 근린생활시설',
    category: '근린생활시설',
    location: '경기 김포시',
    description: '고급 모던 다크 징크 판넬 외장과 전면 와이드 통창 글라스, 천연 방부목 데크 테라스를 적용한 세련된 복합 상업 공간입니다.',
    image: '/images/projects/project-01.jpg',
    tags: ['징크 판넬', '통창 글라스', '테라스 데크']
  },
  {
    id: 2,
    title: '친환경 모던 전원주택 및 휴게 공간',
    category: '단독주택',
    location: '경기 김포시',
    description: '자연 친화적 목재 패턴 외벽 마감과 넓은 잔디마당이 어우러진 프라이빗 모던 전원 레지던스입니다.',
    image: '/images/projects/project-02.jpg',
    tags: ['전원주택', '친환경 외장', '잔디 조경']
  },
  {
    id: 3,
    title: '2층 모던 글라스 테라스 빌라',
    category: '주거시설',
    location: '수도권',
    description: '화이트 & 차콜 투톤 메탈 외장재와 2층 개방형 글라스 테라스를 시공하여 채광과 공간감을 극대화한 현대식 주거 빌라입니다.',
    image: '/images/projects/project-03.jpg',
    tags: ['복층 구조', '개방형 테라스', '투톤 마감']
  },
  {
    id: 4,
    title: '프리미엄 다층 모던 레지던스 (빌트인 차고)',
    category: '고급주택',
    location: '수도권 주택단지',
    description: '천연 석재 화강석 기단부와 와이드 유리 난간, 오버헤드 셔터가 완비된 실내 빌트인 주차장을 갖춘 최고급 하이엔드 주택입니다.',
    image: '/images/projects/project-04.jpg',
    tags: ['빌트인 차고', '석재 마감', '유리 난간']
  },
  {
    id: 5,
    title: '필로티 구조 복합 레지던스 및 사옥',
    category: '복합건축',
    location: '수도권',
    description: '견고한 석재 마감 필로티 기둥으로 지상 1층 주차 공간을 쾌적하게 확보하고 상층부 테라스 및 조망을 설계한 모던 복합 건축물입니다.',
    image: '/images/projects/project-05.jpg',
    tags: ['필로티 구조', '주차 특화', '석재 파사드']
  },
]

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('전체')
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const categories = ['전체', '근린생활시설', '단독주택', '주거시설', '고급주택', '복합건축']

  const filteredProjects = activeCategory === '전체'
    ? INITIAL_PROJECTS
    : INITIAL_PROJECTS.filter((p) => p.category === activeCategory)

  // Items per slide/page: 3 items for spacious, elegant presentation
  const ITEMS_PER_PAGE = 3
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1
  const currentProjects = filteredProjects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
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

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      {/* Section Header */}
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">FEATURED PROJECTS · 시공 실적</p>
          <h2 className="section-title">
            신덕이 완성한<br />
            <span className="text-secondary">작품의 기록.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            정직한 땀방울과 철저한 원칙 시공으로 완성된 신덕종합건설의 대표 건축 실적입니다.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 text-xs font-bold transition rounded-full ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-muted text-muted-foreground hover:text-primary hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid Container (3-4 items per page with smooth feel) */}
      <div className="relative">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden bg-card border border-border/70 hover:border-secondary/60 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              {/* Image with zoom effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-4 right-4 text-xs font-medium text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1">
                  📍 {project.location}
                </div>

                {/* Quick Details on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-card">
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tags & Action */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span key={t} className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    상세보기 ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Slide Controls (Elegant, No tacky page reload) */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
            <div className="text-xs font-bold tracking-widest text-muted-foreground">
              PAGE <span className="text-primary font-black text-sm">0{currentPage + 1}</span> / 0{totalPages}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="이전 프로젝트"
                className="flex h-11 w-11 items-center justify-center border border-border bg-card text-primary font-bold hover:bg-primary hover:text-white transition"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="다음 프로젝트"
                className="flex h-11 w-11 items-center justify-center border border-border bg-card text-primary font-bold hover:bg-primary hover:text-white transition"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Modal for Full Size Photo View */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="닫기"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition text-lg font-bold"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 bg-card">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-secondary text-white text-xs font-bold px-3 py-1">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  위치: {selectedProject.location}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-black text-primary">
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {selectedProject.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="text-xs font-semibold bg-muted px-2.5 py-1 text-primary">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
