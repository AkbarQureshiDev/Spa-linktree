import { motion } from 'framer-motion';
import { MapPin, Star, Home, Building2, Phone, ArrowRight } from 'lucide-react';
import './index.css';
import { LiquidButton } from './components/ui/liquid-glass-button';

const LocationPill = () => (
  <div className="info-pill">
    <MapPin size={16} />
    <span>المملكة العربية السعودية · خدمة احترافية</span>
  </div>
);

const StarRating = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.8 }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { stiffness: 300, damping: 15 }
    }
  };

  return (
    <div className="star-rating">
      <motion.div className="stars" variants={containerVariants} initial="hidden" animate="visible">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div key={i} variants={starVariants}>
            <Star size={18} fill="#facc15" className="star-icon" />
          </motion.div>
        ))}
      </motion.div>
      <motion.span 
        className="rating-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        4.9 · أكثر من 500 تقييم
      </motion.span>
    </div>
  );
};



function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <>
      <div className="background-layer">
        <div className="background-image"></div>
        <div className="background-overlay"></div>
        <div className="shimmer-sweep"></div>
        <div className="ambient-orb top-left"></div>
        <div className="ambient-orb bottom-right"></div>
      </div>
      
      <div className="clickable-wrapper" onClick={() => window.open('https://wa.me/966546420141', '_blank')}>
        <motion.div 
          className="center-card"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onClick={(e) => e.stopPropagation()} /* Prevent card click from triggering wrapper click if interacting inside */
        >
          <motion.div variants={itemVariants}>
            <LocationPill />
          </motion.div>
          
          <motion.h1 className="main-title" variants={itemVariants}>
            3 Star Special Massage - Riyadh <br />
            مساج 3 نجوم الخاص - الرياض
          </motion.h1>
          
          <motion.p className="body-text" variants={itemVariants} style={{ direction: 'rtl' }}>
            تقنيات الشفاء الإندونيسية التقليدية الأصيلة — يقدّمها لك معالجون متخصصون معتمدون.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <StarRating />
          </motion.div>

          <motion.div variants={itemVariants} className="section-label">
            احجز جلستك
          </motion.div>
          
          <motion.div variants={itemVariants} className="buttons-row">
            <LiquidButton
              onClick={() => window.open('https://wa.me/966546420141', '_blank')}
              className="w-full rounded-full text-white font-bold"
              style={{ height: '64px', fontSize: '1.1rem' }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{ width: 22, height: 22, fill: 'currentColor', flexShrink: 0, display: 'block' }}
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span style={{ textAlign: 'center' }}>+966 546 420 141</span>
              <ArrowRight size={20} style={{ flexShrink: 0 }} />
            </LiquidButton>
          </motion.div>

          {/* Service Option Cards */}
          <motion.div variants={itemVariants} className="service-cards-section">
            <div className="service-cards-heading">Service Options</div>
            <div className="service-cards-grid">
              {/* Home Visit Card */}
              <motion.div
                className="service-card"
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="service-card-glow home-glow"></div>
                <div className="service-card-icon home">
                  <Home size={26} />
                </div>
                <h3 className="service-card-title">Home Visit</h3>
                <p className="service-card-title-ar">زيارة منزلية</p>
                <div className="service-card-divider"></div>
                <p className="service-card-detail">1 Hour Massage</p>
                <div className="service-card-price">250 <span>SAR</span></div>
                <p className="service-card-detail-ar">مساج استرخائي لمدة ساعة</p>
              </motion.div>

              {/* Hotel Visit Card */}
              <motion.div
                className="service-card"
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="service-card-glow hotel-glow"></div>
                <div className="service-card-icon hotel">
                  <Building2 size={26} />
                </div>
                <h3 className="service-card-title">Hotel Visit</h3>
                <p className="service-card-title-ar">زيارة فندقية</p>
                <div className="service-card-divider"></div>
                <p className="service-card-detail">Premium Service</p>
                <div className="service-card-price">300 <span>SAR</span></div>
                <p className="service-card-detail-ar">خدمة فندقية مميزة</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Booking Details & Guidelines */}
          <motion.div variants={itemVariants} className="booking-details">
            <h3 className="booking-header">:للحجز عن طريق الواتساب</h3>
            <ul className="booking-list">
              <li>الرجاء ارسال موقعك لإرسال صور المختصات</li>
              <li>سيتم الدفع للسائق عند الوصول لموقعك</li>
            </ul>
            <p className="booking-footnote">*((الرياض فقط))*</p>
          </motion.div>

          <motion.div variants={itemVariants} className="buttons-row">
            <LiquidButton
              onClick={() => window.open('tel:+966546420141', '_self')}
              className="w-full rounded-full text-white font-semibold"
              style={{ height: '64px', fontSize: '1.1rem' }}
            >
              <Phone size={22} style={{ flexShrink: 0 }} />
              <span style={{ textAlign: 'center' }}>+966 546 420 141</span>
              <ArrowRight size={20} style={{ flexShrink: 0 }} />
            </LiquidButton>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}

export default App;
