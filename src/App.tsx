import { motion } from 'framer-motion';
import { MapPin, Star, Home, Building2 } from 'lucide-react';
import './index.css';
import MagneticButtonDemo from './components/magnetic-button-demo';
import PhoneButton from './components/phone-button';

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
          
          <motion.div variants={itemVariants} className="section-label">
            احجز جلستك
          </motion.div>
          
          <motion.div variants={itemVariants} className="buttons-row">
            <MagneticButtonDemo />
            <PhoneButton />
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

        </motion.div>
      </div>
    </>
  );
}

export default App;
