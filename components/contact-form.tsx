'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('성함과 연락처를 입력해주세요.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      // FormSubmit.co forwards directly to sdesign30@naver.com
      const response = await fetch('https://formsubmit.co/ajax/sdesign30@naver.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[신덕종합건설] ${formData.name}님의 프로젝트 문의`,
          _template: 'table',
          '고객 성함': formData.name,
          '연락처': formData.phone,
          '이메일': formData.email || '미입력',
          '문의 내용': formData.message || '상담 요청',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', message: '' })
      } else {
        throw new Error('전송 오류')
      }
    } catch (err: any) {
      console.error(err)
      setStatus('error')
      setErrorMessage('온라인 전송 중 지연이 발생했습니다.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-card p-8 md:p-12 border border-secondary/30 text-center flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center text-secondary text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-primary">문의가 성공적으로 전달되었습니다!</h3>
        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          작성해주신 소중한 문의가 대표 이메일(<strong className="text-primary font-bold">sdesign30@naver.com</strong>)로 안전하게 접수되었습니다.<br />
          신형섭 대표가 직접 확인 후 기재해주신 연락처로 빠르게 연락드리겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 px-6 py-2.5 text-xs font-bold text-primary border border-border hover:bg-muted transition"
        >
          추가 문의 작성하기
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-4 bg-card p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          aria-label="이름"
          placeholder="성함 *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border-b border-border bg-transparent px-1 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-secondary"
        />
        <input
          required
          aria-label="연락처"
          placeholder="연락처 (010-0000-0000) *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border-b border-border bg-transparent px-1 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-secondary"
        />
      </div>

      <input
        aria-label="이메일"
        placeholder="이메일 (선택)"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full border-b border-border bg-transparent px-1 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-secondary"
      />

      <textarea
        aria-label="문의 내용"
        placeholder="건축 위치, 희망 규모, 문의 내용을 자유롭게 적어주세요."
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full resize-none border-b border-border bg-transparent px-1 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-secondary"
      />

      {status === 'error' && (
        <div className="p-3 bg-amber-50 text-amber-800 text-xs rounded border border-amber-200 leading-relaxed">
          {errorMessage}{' '}
          <a
            href={`mailto:sdesign30@naver.com?subject=[신덕종합건설] 문의&body=성함: ${formData.name}%0D%0A연락처: ${formData.phone}%0D%0A내용: ${formData.message}`}
            className="font-bold underline ml-1 text-primary"
          >
            [메일 앱으로 직접 발송하기]
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>sdesign30@naver.com 으로 전송 중...</span>
          </>
        ) : (
          <>
            <span>문의 보내기</span>
            <span className="ml-2 text-secondary font-bold">→</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-muted-foreground text-center">
        * 제출 즉시 신덕종합건설 대표 이메일(<span className="text-primary font-bold">sdesign30@naver.com</span>)로 실시간 발송됩니다.
      </p>
    </form>
  )
}
