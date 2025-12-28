import React from 'react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './CityPage.css'

const CityPage = () => {
  return (
    <div className="citypage-wrap">
      <div className="citypage-root">

        <div className="citypage-top">
          <Swiper modules={[Autoplay]} className="swiper citySwiper" autoplay={{ delay:2500, disableOnInteraction:false }} loop>
            <div className="slide-title">Pyeongchang</div>
            <SwiperSlide><img src="/images/city/pyeongchang_slide1.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_slide2.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_slide3.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_slide4.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_slide5.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_slide6.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_slide7.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_slide8.jpg" /></SwiperSlide>
          </Swiper>
        </div>

        <div className="citypage-inner">

          <section className="destination-section">
            <div className="section-header">
              <h2 className="destination-section-title">Destination</h2>
              <a href="#" className="more-btn"><img src="/images/common/p.png" /></a>
            </div>
            <div className="destination-card-row">
              <div className="destination-card"><img src="/images/city/pyeongchang_destination1.jpg" /><p className="destination-name">월정사·전나무숲</p></div>
              <div className="destination-card"><img src="/images/city/pyeongchang_destination2.jpg" /><p className="destination-name">이효석 문화마을</p></div>
              <div className="destination-card"><img src="/images/city/pyeongchang_destination3.jpg" /><p className="destination-name">오대산 국립공원</p></div>
            </div>
          </section>

          <section className="activity-section">
            <div className="section-header">
              <h2 className="activity-section-title">Activity</h2>
              <a href="#" className="more-btn"><img src="/images/common/p.png" /></a>
            </div>

            <div className="activity-item">
              <img src="/images/city/pyeongchang_activity1.jpg" />
              <div className="activity-text"><h3>대관령 양떼목장</h3><p>한국의 알프스로 불리는 대관령 양떼목장은 푸른 풀밭과 향긋한 풀 냄새를 실어 나르는 상쾌한 바람이 어우러진 자연 명소이다. 봄·여름·가을·겨울 사계절은 물론, 시시각각 달라지는 목장의 풍경을 통해 자연의 신비로움과 아름다움을 직접 느낄 수 있는 곳이다.</p></div>
            </div>

            <div className="activity-item reverse">
              <img src="/images/city/pyeongchang_activity2.png" />
              <div className="activity-text"><h3>발왕산 케이블카</h3><p>발왕산 케이블카는 안정성과 속도감이 뛰어난 100대의 8인승 케빈이 이어진 왕복 7.4㎞의 케이블카이다. 이는 국내 최대 길이로 드래건 플라자 탑승장에서 출발하여 발왕산 정상의 드래건 캐슬 하차장에 이르는 18분 동안, 해발 1,458m의 발왕산 하늘을 날아오르는 듯한 착각을 하게 한다.</p></div>
            </div>

            <div className="activity-item">
              <img src="/images/city/pyeongchang_activity3.jpg" />
              <div className="activity-text"><h3>허브나라 농원</h3><p>Happy 700 평창, 이효석의 『메밀꽃 필 무렵』의 고장인 봉평면에 자리한 허브나라농원은 1993년에 개장한 우리나라 최초의 허브 테마 관광농원이다. 맑은 물이 흐르는 흥정계곡의 천혜 자연환경 속에 위치해 자연이 제공하고 사람이 가꾸어 가는 자연친화적 힐링 가든으로 자리매김하며 많은 이들이 찾는 강원도의 대표 관광지이다.</p></div>
            </div>
          </section>

          <section className="festival-section">
            <div className="section-header">
              <h2 className="festival-section-title">Festival</h2>
              <a href="#" className="more-btn"><img src="/images/common/p.png" /></a>
            </div>
          </section>

        </div>

        <div className="festival-container">
          <Swiper modules={[Navigation]} className="festivalSwiper" centeredSlides navigation breakpoints={{768:{slidesPerView:'auto'}}}>
            <SwiperSlide><img src="/images/city/pyeongchang_festival1.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_festival2.jpg" /></SwiperSlide>
            <SwiperSlide><img src="/images/city/pyeongchang_festival3.jpg" /></SwiperSlide>
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default CityPage
