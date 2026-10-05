import React, { useState } from 'react';
import { appStore } from '../store/appStore';
import { submitSpaceInquiry } from '../services/firebase';
import { SpaceInquiry } from '../types';
import { CheckCircle2, Clock, Calendar, Users, Gift, Send } from 'lucide-react';

export const ReservationInquirySection: React.FC = () => {
  const [formType, setFormType] = useState<'reservation' | 'vip_gifting'>('reservation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [sessionTime, setSessionTime] = useState('13:00 (Session 1)');
  const [guests, setGuests] = useState('2인');
  const [giftQuantity, setGiftQuantity] = useState('10세트 ~ 30세트');
  const [preference, setPreference] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !contact.trim()) {
      appStore.addToast('warning', '필수 정보 입력', '성함과 연락처를 모두 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);

    const payload: SpaceInquiry = {
      type: formType,
      name,
      contact,
      date: formType === 'reservation' ? date : undefined,
      sessionTime: formType === 'reservation' ? sessionTime : undefined,
      guests: formType === 'reservation' ? guests : undefined,
      spaceType: formType === 'vip_gifting' ? `기프트 수량: ${giftQuantity}` : undefined,
      preference,
      message: preference,
      createdAt: Date.now()
    };

    try {
      const res = await submitSpaceInquiry(payload);

      setIsSubmitted(true);
      appStore.addToast(
        'success',
        formType === 'reservation' ? '다석 예약 신청 완료' : 'VIP 기프트 상담 신청 완료',
        res.isFallback
          ? '신청서가 안전하게 접수되었습니다. 전담 매니저가 연락드립니다.'
          : 'space_inquiries 컬렉션에 실시간 등록되었습니다.'
      );

      // Reset form after short delay
      setTimeout(() => {
        setName('');
        setContact('');
        setPreference('');
        setIsSubmitted(false);
      }, 5000);

    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      appStore.addToast('error', '접수 실패', '전송 중 통신 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reserve" className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-24 border-b border-[#1F2625]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Intimate Reservation Policy matching Image 1 */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-[11px] font-mono-tag tracking-[0.22em] text-[#715A3E] uppercase block mb-2">
              INTIMATE RESERVATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#1F2625] font-heading mb-4">
              다석 예약 신청
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7775] leading-relaxed font-light">
              오도행(O.DO.HAENG)은 온전한 감각의 몰입을 위해 세션당 최대 14인의 손님만을 맞이합니다. 80분 동안 세 가지 차와 디저트 코스가 정갈하게 진행됩니다.
            </p>
          </div>

          {/* Guidelines matching Image 1 */}
          <div className="p-6 rounded-2xl bg-[#E2E6E5]/40 border border-[#1F2625]/10 space-y-3 text-xs font-mono-tag tracking-wider text-[#1F2625]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3F5B4F]"></span>
              <span>· SESSION DURATION: 80 MINUTES</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3F5B4F]"></span>
              <span>· ADVANCE BOOKING ONLY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3F5B4F]"></span>
              <span>· INQUIRIES: 02-741-2048</span>
            </div>
          </div>

          <div className="text-xs text-[#6B7775] leading-relaxed font-light">
            * 예약 취소 및 인원 변경은 방문 2일 전 18:00까지 전액 환불 가능합니다. 정숙한 다도 환경을 위해 강한 향수의 사용은 삼가 주시기를 부탁드립니다.
          </div>
        </div>

        {/* Right Column: Interactive Form (#inquiry-form) matching Image 1 */}
        <div className="lg:col-span-7 bg-white border border-[#1F2625]/12 rounded-3xl p-6 sm:p-10 shadow-xs">
          {/* Tab Selector: Reservation vs VIP Gifting */}
          <div className="flex border-b border-[#1F2625]/10 mb-8">
            <button
              type="button"
              onClick={() => setFormType('reservation')}
              className={`pb-3 px-4 text-xs font-mono-tag tracking-wider uppercase transition-colors relative ${
                formType === 'reservation'
                  ? 'text-[#3F5B4F] font-semibold'
                  : 'text-[#6B7775] hover:text-[#1F2625]'
              }`}
            >
              다석 예약 신청 (RESERVATION)
              {formType === 'reservation' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3F5B4F]"></span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setFormType('vip_gifting')}
              className={`pb-3 px-4 text-xs font-mono-tag tracking-wider uppercase transition-colors relative ${
                formType === 'vip_gifting'
                  ? 'text-[#3F5B4F] font-semibold'
                  : 'text-[#6B7775] hover:text-[#1F2625]'
              }`}
            >
              VIP &amp; 대량 선물 상담 (GIFT INQUIRY)
              {formType === 'vip_gifting' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3F5B4F]"></span>
              )}
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#86EFAC]/20 text-[#3F5B4F] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-medium text-[#1F2625]">
                {formType === 'reservation' ? '다석 예약 신청이 접수되었습니다.' : 'VIP 기프트 상담 신청이 등록되었습니다.'}
              </h3>
              <p className="text-xs text-[#6B7775] max-w-md mx-auto leading-relaxed font-light">
                작성해 주신 연락처({contact})로 확정 알림 및 세부 안내 메시지를 발송해 드립니다.
              </p>
            </div>
          ) : (
            /* REQUIRED FORM ID: #inquiry-form */
            <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Contact matching Image 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                    NAME (성함) *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="성함을 입력해주세요"
                    className="w-full px-4 py-3 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs sm:text-sm text-[#1F2625] focus:outline-none focus:border-[#3F5B4F] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                    CONTACT (연락처) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs sm:text-sm text-[#1F2625] focus:outline-none focus:border-[#3F5B4F] transition-all"
                  />
                </div>
              </div>

              {/* Conditional Row for Teahouse Reservation vs Gifting */}
              {formType === 'reservation' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                        DATE (방문일)
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="w-full px-3 py-3 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs text-[#1F2625] focus:outline-none focus:border-[#3F5B4F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                        SESSION TIME
                      </label>
                      <select
                        value={sessionTime}
                        onChange={e => setSessionTime(e.target.value)}
                        className="w-full px-3 py-3 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs text-[#1F2625] focus:outline-none focus:border-[#3F5B4F]"
                      >
                        <option value="13:00 (Session 1)">13:00 (Session 1)</option>
                        <option value="15:30 (Session 2)">15:30 (Session 2)</option>
                        <option value="18:00 (Session 3)">18:00 (Session 3)</option>
                        <option value="19:30 (Session 4)">19:30 (Session 4)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                        GUESTS (인원)
                      </label>
                      <select
                        value={guests}
                        onChange={e => setGuests(e.target.value)}
                        className="w-full px-3 py-3 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs text-[#1F2625] focus:outline-none focus:border-[#3F5B4F]"
                      >
                        <option value="1인 (개인석)">1인 (개인석)</option>
                        <option value="2인">2인</option>
                        <option value="3인">3인</option>
                        <option value="4인 (최대)">4인 (최대)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                      PREFERENCE &amp; NOTES (선호하는 차 종류나 알레르기 사항)
                    </label>
                    <textarea
                      id="inq-preference"
                      value={preference}
                      onChange={e => setPreference(e.target.value)}
                      placeholder="선호하는 차 종류나 알레르기 사항"
                      rows={3}
                      className="w-full p-3.5 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs sm:text-sm text-[#1F2625] focus:outline-none focus:border-[#3F5B4F] resize-none font-light"
                    />
                  </div>
                </>
              ) : (
                /* Corporate / VIP Gifting Fields */
                <>
                  <div>
                    <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                      ESTIMATED QUANTITY (예상 주문 수량)
                    </label>
                    <select
                      value={giftQuantity}
                      onChange={e => setGiftQuantity(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs sm:text-sm text-[#1F2625] focus:outline-none focus:border-[#3F5B4F]"
                    >
                      <option value="10세트 ~ 30세트">10세트 ~ 30세트</option>
                      <option value="30세트 ~ 50세트">30세트 ~ 50세트</option>
                      <option value="50세트 ~ 100세트">50세트 ~ 100세트</option>
                      <option value="100세트 이상 (기업 VIP 전용 커스텀)">100세트 이상 (기업 VIP 전용 커스텀)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tag tracking-wider uppercase text-[#1F2625] mb-2 font-medium">
                      INQUIRY DETAILS (문의 내용 및 희망 배송 일정)
                    </label>
                    <textarea
                      value={preference}
                      onChange={e => setPreference(e.target.value)}
                      placeholder="행사 목적, 예산 범위, 로고 각인 여부, 희망 수령일 등을 자유롭게 기재해 주세요."
                      rows={4}
                      className="w-full p-3.5 bg-[#F2F4F3]/60 border border-[#1F2625]/15 rounded-xl text-xs sm:text-sm text-[#1F2625] focus:outline-none focus:border-[#3F5B4F] resize-none font-light"
                    />
                  </div>
                </>
              )}

              {/* Submit Button matching Image 1 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#284338] hover:bg-[#1E332A] disabled:opacity-50 text-[#F2F4F3] text-xs font-mono-tag tracking-[0.2em] uppercase rounded-xl transition-all font-medium flex items-center justify-center gap-2 shadow-sm"
              >
                {isSubmitting ? (
                  <span>처리 중...</span>
                ) : (
                  <span>
                    {formType === 'reservation' ? 'REQUEST RESERVATION' : 'SUBMIT GIFT INQUIRY'}
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
