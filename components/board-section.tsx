'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  Search,
  PenLine,
  Eye,
  ThumbsUp,
  MessageSquare,
  Calendar,
  User,
  ArrowLeft,
  Trash2,
  Edit3,
  Pin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

export type Category = '공지' | '현장소식' | '시공문의' | '자유게시판'

export interface Comment {
  id: string
  author: string
  content: string
  createdAt: string
}

export interface Post {
  id: string
  title: string
  content: string
  author: string
  category: Category
  isPinned?: boolean
  createdAt: string
  views: number
  likes: number
  comments: Comment[]
}

const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    category: '공지',
    isPinned: true,
    title: '[공지] 신덕종합건설 고객 소통 게시판 오픈 및 운영 가이드 안내',
    author: '관리자',
    createdAt: '2025. 02. 20',
    views: 428,
    likes: 32,
    content: `안녕하십니까, 신덕종합건설입니다.

고객 및 파트너사 여러분과의 원활한 소통과 신속하고 투명한 현장 정보 공유를 위하여 공식 웹사이트 온라인 소통 게시판을 정식 오픈하였습니다.

[주요 게시판 카테고리 안내]
1. 공지: 신덕종합건설의 주요 공지사항, 경영 정책 및 안전보건 관련 소식
2. 현장소식: 진행 중인 건축·토목 공사 현장의 공정률 및 현장 이야기 공유
3. 시공문의: 신축, 토목, 대수선 리모델링 등 시공 견적 및 공법 사전 기술 문의
4. 자유게시판: 건설 산업 관련 정보 공유 및 자유로운 의견 교환

시공 문의나 현장에 대한 궁금한 사항이 있으시면 언제든지 글을 남겨주십시오. 전문 기술진과 현장 담당자가 확인 후 성심성의껏 답변드리겠습니다.

바르고 정직한 시공으로 보답하는 신덕종합건설이 되겠습니다. 감사합니다.`,
    comments: [
      {
        id: 'c1',
        author: '박준형',
        content: '게시판 오픈 축하드립니다! 현장 소식 자주 올려주세요.',
        createdAt: '2025. 02. 20 14:15'
      },
      {
        id: 'c2',
        author: '관리자',
        content: '관심 가져주셔서 감사합니다. 생생한 현장 소식 꾸준히 전달해 드리겠습니다.',
        createdAt: '2025. 02. 20 15:02'
      }
    ]
  },
  {
    id: '2',
    category: '현장소식',
    isPinned: true,
    title: '송도 센트럴 비즈파크 지하 3층 골조 공사 완료 및 1층 슬래브 타설 (공정률 35%)',
    author: '송도현장소장',
    createdAt: '2025. 02. 16',
    views: 312,
    likes: 27,
    content: `송도 센트럴 비즈파크 신축공사 현장입니다.

현재 지하 3개층의 토공사 및 지하 골조 공사가 안전사고 없이 완벽히 마무리되었으며, 지상 1층 바닥 슬래브 콘크리트 타설 공정을 진행 중입니다.

- 현 공정률: 계획 대비 102% (누적 공정률 35.4%)
- 중점 관리 사항: 동절기 온도 보온 양생 및 콘크리트 코어 강도 전수 시험
- 안전 실적: 무재해 140일 달성

신덕종합건설의 철저한 품질 관리 기준에 맞추어 입주 기업들의 쾌적하고 안전한 공간이 될 수 있도록 최선을 다하겠습니다.`,
    comments: [
      {
        id: 'c3',
        author: '김동혁',
        content: '추운 날씨에 수고 많으십니다. 안전이 최우선입니다!',
        createdAt: '2025. 02. 17 09:40'
      }
    ]
  },
  {
    id: '3',
    category: '시공문의',
    isPinned: false,
    title: '서울 강남구 역삼동 오피스 빌딩(지하 1층~지상 6층) 대수선 리모델링 견적 문의',
    author: '이진우',
    createdAt: '2025. 02. 11',
    views: 245,
    likes: 12,
    content: `안녕하세요. 역삼동에 위치한 연면적 약 650평 규모의 업무용 빌딩 건축주입니다.

준공 후 26년이 경과하여 다음과 같은 대수선 및 리모델링을 계획하고 있습니다.
1. 전면 외관 커튼월 및 석재 교체
2. 승강기 1기 증설 및 공용 코어부 전면 교체
3. 에너지 효율 개선을 위한 단열재 보강 및 창호 교체
4. 옥상 녹화 휴게 공간 조성

현장 방문 실측 및 대략적인 공사 기간, 예상 공사비 산출 관련 상담을 받아보고 싶습니다. 연락 부탁드립니다.`,
    comments: [
      {
        id: 'c4',
        author: '신덕건설 기술영업팀',
        content: '이진우 고객님 안녕하십니까. 신덕종합건설 리모델링 사업부입니다. 남겨주신 연락처로 금일 중 전화드려 현장 실측 일정 조율해 드리겠습니다.',
        createdAt: '2025. 02. 11 11:20'
      }
    ]
  },
  {
    id: '4',
    category: '공지',
    isPinned: false,
    title: '2025년 1분기 협력업체 정기 안전보건 상생협력 교육 일정',
    author: '안전보건팀',
    createdAt: '2025. 02. 04',
    views: 189,
    likes: 9,
    content: `신덕종합건설과 함께하는 협력사 임직원 여러분의 노고에 감사드립니다.

2025년도 현장 중대재해 예방 및 안전문화 정착을 위하여 1분기 협력사 안전보건 상생협력 정기 교육을 다음과 같이 실시합니다.

- 일시: 2025년 3월 10일(월) 14:00 ~ 17:00
- 장소: 신덕종합건설 본사 대강당 (온라인 실시간 참여 가능)
- 대상: 각 현장 협력사 대표자, 안전관리자 및 공종별 반장
- 주요 내용: 고소작업 추락 방지 대책, 건설장비 신호체계 표준화, 스마트 안전장비 활용 우수사례

모든 협력사의 안전한 일터를 위해 적극적인 참여를 부탁드립니다.`,
    comments: []
  },
  {
    id: '5',
    category: '현장소식',
    isPinned: false,
    title: '친환경 저탄소 고성능 배합 콘크리트 현장 시험 타설 성공',
    author: '기술연구소',
    createdAt: '2025. 01. 28',
    views: 204,
    likes: 21,
    content: `당사 기술연구소와 산학연 공동으로 연구해 온 '탄소저감형 고강도 콘크리트 배합 기술'의 실제 구조체 적용 타설 시험이 성공적으로 완료되었습니다.

일반 레미콘 대비 시멘트 사용량을 30% 감축하면서도 고로슬래그 미분말 최적 치환으로 28일 압축강도 45MPa 이상을 안정적으로 발현하였습니다.

신덕종합건설은 ESG 친환경 건축 트렌드에 발맞추어 앞으로 신규 수주 및 시공 현장에 본 저탄소 콘크리트 적용을 점진적으로 확대할 계획입니다.`,
    comments: []
  },
  {
    id: '6',
    category: '자유게시판',
    isPinned: false,
    title: '동절기 골조 타설 시 보온양생 관리 팁 공유합니다',
    author: '현장엔지니어',
    createdAt: '2025. 01. 19',
    views: 350,
    likes: 28,
    content: `건설현장에서 겨울철 콘크리트 타설 시 가장 중요한 건 초기 동결 방지입니다.

갈탄 대신 열풍기나 탄소섬유 발열매트를 사용하면 일산화탄소 질식 위험도 줄이고 온도 분포도 훨씬 균일하게 유지됩니다.
특히 외벽 코너부 모서리는 열손실이 빠르므로 이중 보온 덮개 시공이 필수적입니다.
현장에서 일하시는 모든 기술자분들 화이팅입니다!`,
    comments: [
      {
        id: 'c5',
        author: '초보소장',
        content: '발열매트 효과가 정말 좋더군요. 좋은 팁 공유 감사합니다!',
        createdAt: '2025. 01. 20 08:30'
      }
    ]
  }
]

const STORAGE_KEY = 'sindeok_construction_board_posts'
const POSTS_PER_PAGE = 5

export default function BoardSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('전체')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // View mode: 'list' | 'detail' | 'write' | 'edit'
  const [viewMode, setViewMode] = useState<'list' | 'detail' | 'write' | 'edit'>('list')
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

  // Form states for Write / Edit
  const [formCategory, setFormCategory] = useState<Category>('현장소식')
  const [formTitle, setFormTitle] = useState('')
  const [formAuthor, setFormAuthor] = useState('')
  const [formContent, setFormContent] = useState('')
  const [formIsPinned, setFormIsPinned] = useState(false)

  // Comment input state
  const [commentAuthor, setCommentAuthor] = useState('')
  const [commentText, setCommentText] = useState('')

  // Toast / notification
  const [notification, setNotification] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setNotification(msg)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPosts(parsed)
          setIsLoaded(true)
          return
        }
      }
    } catch (e) {
      console.error('Failed to parse board posts from localStorage', e)
    }
    setPosts(INITIAL_POSTS)
    setIsLoaded(true)
  }, [])

  // Save to LocalStorage whenever posts change
  const savePosts = (newPosts: Post[]) => {
    setPosts(newPosts)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts))
    } catch (e) {
      console.error('Failed to save board posts to localStorage', e)
    }
  }

  // Filtered & searched posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory = activeCategory === '전체' || post.category === activeCategory
      const query = searchQuery.trim().toLowerCase()
      const matchQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      return matchCategory && matchQuery
    })
  }, [posts, activeCategory, searchQuery])

  // Separate pinned vs normal
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1
      if (!a.isPinned && b.isPinned) return 1
      return Number(b.id) - Number(a.id)
    })
  }, [filteredPosts])

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE))
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE
    return sortedPosts.slice(start, start + POSTS_PER_PAGE)
  }, [sortedPosts, currentPage])

  // Selected post object
  const currentPost = useMemo(() => {
    return posts.find((p) => p.id === selectedPostId) || null
  }, [posts, selectedPostId])

  // Handle click on post
  const handleOpenPost = (id: string) => {
    setSelectedPostId(id)
    // Increment view count
    const updated = posts.map((p) => {
      if (p.id === id) {
        return { ...p, views: p.views + 1 }
      }
      return p
    })
    savePosts(updated)
    setViewMode('detail')
  }

  // Handle Like
  const handleLikePost = (id: string) => {
    const updated = posts.map((p) => {
      if (p.id === id) {
        return { ...p, likes: p.likes + 1 }
      }
      return p
    })
    savePosts(updated)
    showToast('게시글을 추천하였습니다.')
  }

  // Handle Delete Post
  const handleDeletePost = (id: string) => {
    if (!window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) return
    const updated = posts.filter((p) => p.id !== id)
    savePosts(updated)
    setSelectedPostId(null)
    setViewMode('list')
    showToast('게시글이 삭제되었습니다.')
  }

  // Handle Open Create Form
  const handleOpenCreate = () => {
    setFormCategory('현장소식')
    setFormTitle('')
    setFormAuthor('')
    setFormContent('')
    setFormIsPinned(false)
    setViewMode('write')
  }

  // Handle Open Edit Form
  const handleOpenEdit = () => {
    if (!currentPost) return
    setFormCategory(currentPost.category)
    setFormTitle(currentPost.title)
    setFormAuthor(currentPost.author)
    setFormContent(currentPost.content)
    setFormIsPinned(!!currentPost.isPinned)
    setViewMode('edit')
  }

  // Submit Create Post
  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formTitle.trim()) {
      alert('제목을 입력해주세요.')
      return
    }
    if (!formAuthor.trim()) {
      alert('작성자명을 입력해주세요.')
      return
    }
    if (!formContent.trim()) {
      alert('내용을 입력해주세요.')
      return
    }

    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const dd = String(today.getDate()).padStart(2, '0')

    const newPost: Post = {
      id: String(Date.now()),
      title: formTitle.trim(),
      content: formContent.trim(),
      author: formAuthor.trim(),
      category: formCategory,
      isPinned: formIsPinned,
      createdAt: `${yyyy}. ${mm}. ${dd}`,
      views: 1,
      likes: 0,
      comments: []
    }

    const updated = [newPost, ...posts]
    savePosts(updated)
    setSelectedPostId(newPost.id)
    setViewMode('detail')
    showToast('게시글이 성공적으로 등록되었습니다.')
  }

  // Submit Edit Post
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPost) return
    if (!formTitle.trim() || !formContent.trim() || !formAuthor.trim()) {
      alert('필수 입력 항목을 모두 작성해주세요.')
      return
    }

    const updated = posts.map((p) => {
      if (p.id === currentPost.id) {
        return {
          ...p,
          title: formTitle.trim(),
          content: formContent.trim(),
          author: formAuthor.trim(),
          category: formCategory,
          isPinned: formIsPinned
        }
      }
      return p
    })

    savePosts(updated)
    setViewMode('detail')
    showToast('게시글이 수정되었습니다.')
  }

  // Add Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPost) return
    if (!commentAuthor.trim()) {
      alert('댓글 작성자명을 입력해주세요.')
      return
    }
    if (!commentText.trim()) {
      alert('댓글 내용을 입력해주세요.')
      return
    }

    const now = new Date()
    const yyyy = now.getFullYear()
    const mm = String(now.getMonth() + 1).padStart(2, '0')
    const dd = String(now.getDate()).padStart(2, '0')
    const hh = String(now.getHours()).padStart(2, '0')
    const min = String(now.getMinutes()).padStart(2, '0')

    const newComment: Comment = {
      id: `c_${Date.now()}`,
      author: commentAuthor.trim(),
      content: commentText.trim(),
      createdAt: `${yyyy}. ${mm}. ${dd} ${hh}:${min}`
    }

    const updated = posts.map((p) => {
      if (p.id === currentPost.id) {
        return {
          ...p,
          comments: [...p.comments, newComment]
        }
      }
      return p
    })

    savePosts(updated)
    setCommentText('')
    showToast('댓글이 등록되었습니다.')
  }

  // Delete Comment
  const handleDeleteComment = (commentId: string) => {
    if (!currentPost) return
    if (!window.confirm('댓글을 삭제하시겠습니까?')) return

    const updated = posts.map((p) => {
      if (p.id === currentPost.id) {
        return {
          ...p,
          comments: p.comments.filter((c) => c.id !== commentId)
        }
      }
      return p
    })
    savePosts(updated)
    showToast('댓글이 삭제되었습니다.')
  }

  const categoryBadgeClass = (category: Category) => {
    switch (category) {
      case '공지':
        return 'bg-secondary text-white'
      case '현장소식':
        return 'bg-blue-800 text-white'
      case '시공문의':
        return 'bg-amber-600 text-white'
      case '자유게시판':
        return 'bg-slate-700 text-white'
      default:
        return 'bg-muted text-foreground'
    }
  }

  const categories = ['전체', '공지', '현장소식', '시공문의', '자유게시판']

  return (
    <section id="board" className="relative bg-muted/40 px-6 py-24 lg:px-10 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl">
        {/* Toast Notification */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 shadow-2xl transition-all duration-300">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">{notification}</span>
          </div>
        )}

        {/* Header Title Section */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">COMMUNITY & BOARD</p>
            <h2 className="section-title">
              고객 소통 <span className="text-secondary">게시판</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              신덕종합건설의 현장 이야기, 공지사항 및 시공 문의를 자유롭게 나누는 공간입니다.
            </p>
          </div>

          {viewMode === 'list' && (
            <button
              onClick={handleOpenCreate}
              className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold text-white transition hover:bg-primary/90 cursor-pointer"
            >
              <PenLine className="h-4 w-4 text-secondary" />
              새 글 작성하기
            </button>
          )}
        </div>

        {/* View: LIST MODE */}
        {viewMode === 'list' && (
          <div>
            {/* Category tabs & Search bar */}
            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-border pb-4 lg:flex-row lg:items-center">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat)
                      setCurrentPage(1)
                    }}
                    className={`px-4 py-2 text-xs md:text-sm font-bold transition cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="제목, 내용, 작성자 검색..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full bg-card border border-border px-4 py-2.5 pl-10 text-sm outline-none focus:border-secondary transition placeholder:text-muted-foreground/60"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    초기화
                  </button>
                )}
              </div>
            </div>

            {/* Board Post Table (Desktop) & Card List (Mobile) */}
            <div className="overflow-hidden bg-card border border-border shadow-sm">
              {/* Desktop Table Header */}
              <div className="hidden grid-cols-12 gap-4 border-b border-border bg-muted/80 px-6 py-4 text-xs font-bold text-muted-foreground md:grid">
                <div className="col-span-1 text-center">번호</div>
                <div className="col-span-2 text-center">분류</div>
                <div className="col-span-5">제목</div>
                <div className="col-span-2 text-center">작성자</div>
                <div className="col-span-1 text-center">작성일</div>
                <div className="col-span-1 text-center">조회</div>
              </div>

              {/* Post Items */}
              {paginatedPosts.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">
                  <AlertCircle className="mx-auto h-10 w-10 text-muted-foreground/40 mb-3" />
                  <p className="text-base font-medium">등록된 게시글이 없습니다.</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    검색어를 확인하시거나 첫 번째 게시글을 작성해보세요.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {paginatedPosts.map((post, idx) => {
                    const postNumber = sortedPosts.length - ((currentPage - 1) * POSTS_PER_PAGE + idx)
                    return (
                      <div
                        key={post.id}
                        onClick={() => handleOpenPost(post.id)}
                        className={`group cursor-pointer transition hover:bg-muted/40 ${
                          post.isPinned ? 'bg-amber-50/40 dark:bg-amber-950/10' : ''
                        }`}
                      >
                        {/* Desktop Row */}
                        <div className="hidden md:grid grid-cols-12 items-center gap-4 px-6 py-4 text-sm">
                          <div className="col-span-1 text-center text-xs font-mono text-muted-foreground">
                            {post.isPinned ? (
                              <span className="inline-flex items-center justify-center text-secondary font-bold">
                                <Pin className="h-3.5 w-3.5 fill-secondary mr-1" />
                                공지
                              </span>
                            ) : (
                              postNumber
                            )}
                          </div>
                          <div className="col-span-2 text-center">
                            <span
                              className={`inline-block px-2.5 py-0.5 text-[11px] font-bold ${categoryBadgeClass(
                                post.category
                              )}`}
                            >
                              {post.category}
                            </span>
                          </div>
                          <div className="col-span-5 flex items-center gap-2 overflow-hidden">
                            <span className="truncate font-semibold text-foreground group-hover:text-secondary transition">
                              {post.title}
                            </span>
                            {post.comments.length > 0 && (
                              <span className="shrink-0 text-xs font-bold text-secondary">
                                [{post.comments.length}]
                              </span>
                            )}
                          </div>
                          <div className="col-span-2 text-center text-xs text-muted-foreground truncate">
                            {post.author}
                          </div>
                          <div className="col-span-1 text-center text-xs font-mono text-muted-foreground">
                            {post.createdAt}
                          </div>
                          <div className="col-span-1 text-center text-xs font-mono text-muted-foreground">
                            {post.views}
                          </div>
                        </div>

                        {/* Mobile Card */}
                        <div className="p-4 md:hidden">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              {post.isPinned && (
                                <span className="inline-flex items-center text-xs font-bold text-secondary">
                                  <Pin className="h-3 w-3 fill-secondary mr-1" />
                                  공지
                                </span>
                              )}
                              <span
                                className={`px-2 py-0.5 text-[10px] font-bold ${categoryBadgeClass(
                                  post.category
                                )}`}
                              >
                                {post.category}
                              </span>
                            </div>
                            <span className="text-[11px] text-muted-foreground font-mono">
                              {post.createdAt}
                            </span>
                          </div>
                          <h4 className="font-bold text-sm text-foreground group-hover:text-secondary transition line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                            <span>{post.author}</span>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" />
                                {post.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-3.5 w-3.5" />
                                {post.likes}
                              </span>
                              {post.comments.length > 0 && (
                                <span className="flex items-center gap-1 text-secondary font-bold">
                                  <MessageSquare className="h-3.5 w-3.5" />
                                  {post.comments.length}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-9 w-9 items-center justify-center border border-border bg-card text-muted-foreground hover:bg-muted disabled:opacity-40 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-9 w-9 items-center justify-center text-xs font-bold border transition cursor-pointer ${
                      currentPage === page
                        ? 'border-primary bg-primary text-white'
                        : 'border-border bg-card text-foreground hover:bg-muted'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-9 w-9 items-center justify-center border border-border bg-card text-muted-foreground hover:bg-muted disabled:opacity-40 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* View: DETAIL MODE */}
        {viewMode === 'detail' && currentPost && (
          <div className="bg-card border border-border shadow-sm p-6 lg:p-10">
            {/* Top Back & Action buttons */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
              <button
                onClick={() => setViewMode('list')}
                className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                목록으로 돌아가기
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenEdit}
                  className="inline-flex items-center gap-1.5 border border-border px-3.5 py-1.5 text-xs font-bold text-foreground hover:bg-muted transition cursor-pointer"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                  수정
                </button>
                <button
                  onClick={() => handleDeletePost(currentPost.id)}
                  className="inline-flex items-center gap-1.5 border border-red-300 text-red-600 px-3.5 py-1.5 text-xs font-bold hover:bg-red-50 dark:hover:bg-red-950/20 transition cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  삭제
                </button>
              </div>
            </div>

            {/* Post Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 text-xs font-bold ${categoryBadgeClass(currentPost.category)}`}>
                  {currentPost.category}
                </span>
                {currentPost.isPinned && (
                  <span className="flex items-center text-xs font-bold text-secondary">
                    <Pin className="h-3.5 w-3.5 fill-secondary mr-1" />
                    상단고정
                  </span>
                )}
              </div>
              <h1 className="font-sans text-2xl font-black text-primary md:text-3xl leading-snug">
                {currentPost.title}
              </h1>

              {/* Meta information bar */}
              <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-6 border-y border-border py-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-secondary" />
                  작성자: <strong className="text-foreground">{currentPost.author}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-secondary" />
                  등록일: {currentPost.createdAt}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5 text-secondary" />
                  조회수: {currentPost.views}
                </span>
                <span className="flex items-center gap-1.5">
                  <ThumbsUp className="h-3.5 w-3.5 text-secondary" />
                  추천: {currentPost.likes}
                </span>
              </div>
            </div>

            {/* Post Content Body */}
            <div className="py-10 text-base leading-8 text-foreground whitespace-pre-line border-b border-border">
              {currentPost.content}
            </div>

            {/* Like Recommendation Button */}
            <div className="my-8 flex justify-center">
              <button
                onClick={() => handleLikePost(currentPost.id)}
                className="group flex items-center gap-3 border-2 border-secondary bg-secondary/5 px-6 py-3 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-white cursor-pointer"
              >
                <ThumbsUp className="h-4 w-4 transition group-hover:scale-110" />
                이 글 추천하기 ({currentPost.likes})
              </button>
            </div>

            {/* Comment Section */}
            <div className="mt-12">
              <h3 className="flex items-center gap-2 text-lg font-bold text-primary mb-6">
                <MessageSquare className="h-5 w-5 text-secondary" />
                댓글 ({currentPost.comments.length})
              </h3>

              {/* Existing Comments */}
              <div className="space-y-4 divide-y divide-border mb-8">
                {currentPost.comments.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4">첫 댓글을 작성해보세요.</p>
                ) : (
                  currentPost.comments.map((comment) => (
                    <div key={comment.id} className="pt-4 first:pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-sm text-foreground">{comment.author}</span>
                          <span className="text-xs text-muted-foreground font-mono">{comment.createdAt}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          className="text-xs text-muted-foreground hover:text-red-500 transition cursor-pointer"
                        >
                          삭제
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-foreground/90 leading-6">{comment.content}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="bg-muted/50 p-4 sm:p-6 border border-border">
                <h4 className="text-xs font-bold tracking-wider text-muted-foreground mb-3">댓글 작성</h4>
                <div className="grid gap-3 sm:grid-cols-4 mb-3">
                  <div className="sm:col-span-1">
                    <input
                      type="text"
                      placeholder="작성자명"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      className="w-full bg-card border border-border px-3 py-2 text-sm outline-none focus:border-secondary"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      placeholder="댓글 내용을 입력해주세요"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full bg-card border border-border px-3 py-2 text-sm outline-none focus:border-secondary"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary px-5 py-2 text-xs font-bold text-white transition hover:bg-primary/90 cursor-pointer"
                  >
                    댓글 등록
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View: WRITE OR EDIT MODE */}
        {(viewMode === 'write' || viewMode === 'edit') && (
          <div className="bg-card border border-border shadow-sm p-6 lg:p-10">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <h3 className="text-xl font-bold text-primary">
                {viewMode === 'write' ? '새 게시글 작성' : '게시글 수정'}
              </h3>
              <button
                onClick={() => setViewMode(selectedPostId ? 'detail' : 'list')}
                className="text-sm font-bold text-muted-foreground hover:text-foreground cursor-pointer"
              >
                취소
              </button>
            </div>

            <form onSubmit={viewMode === 'write' ? handleCreateSubmit : handleEditSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-2">분류 (카테고리)</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as Category)}
                    className="w-full bg-card border border-border px-4 py-3 text-sm outline-none focus:border-secondary"
                  >
                    <option value="현장소식">현장소식</option>
                    <option value="시공문의">시공문의</option>
                    <option value="자유게시판">자유게시판</option>
                    <option value="공지">공지</option>
                  </select>
                </div>

                {/* Author input */}
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-2">작성자명</label>
                  <input
                    type="text"
                    placeholder="작성자 이름 또는 부서명"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    className="w-full bg-card border border-border px-4 py-3 text-sm outline-none focus:border-secondary"
                  />
                </div>
              </div>

              {/* Title input */}
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-2">제목</label>
                <input
                  type="text"
                  placeholder="게시글 제목을 입력하세요"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full bg-card border border-border px-4 py-3 text-sm outline-none focus:border-secondary"
                />
              </div>

              {/* Content textarea */}
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-2">내용</label>
                <textarea
                  rows={10}
                  placeholder="내용을 상세히 입력해주세요."
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  className="w-full bg-card border border-border p-4 text-sm outline-none focus:border-secondary leading-relaxed resize-y"
                />
              </div>

              {/* Pin option */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="pinCheck"
                  checked={formIsPinned}
                  onChange={(e) => setFormIsPinned(e.target.checked)}
                  className="h-4 w-4 rounded accent-secondary"
                />
                <label htmlFor="pinCheck" className="text-xs font-bold text-muted-foreground cursor-pointer">
                  게시판 상단에 중요 공지로 고정
                </label>
              </div>

              {/* Form buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setViewMode(selectedPostId ? 'detail' : 'list')}
                  className="border border-border px-6 py-3 text-sm font-bold text-muted-foreground hover:bg-muted transition cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="bg-primary px-8 py-3 text-sm font-bold text-white transition hover:bg-primary/90 cursor-pointer"
                >
                  {viewMode === 'write' ? '게시글 등록' : '수정 완료'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
