import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import './index.css';
import MagneticButtonDemo from './components/magnetic-button-demo';

const LocationPill = () => (
  <div className="info-pill">
    <MapPin size={16} />
    <span>Los Angeles, CA</span>
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
        5.0 (124 reviews)
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
      
      <div className="clickable-wrapper" onClick={() => window.open('https://example.com', '_blank')}>
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
            Eleanor <br />
            Design Studio
          </motion.h1>
          
          <motion.p className="body-text" variants={itemVariants}>
            Crafting premium digital experiences through minimalist design and immersive animations.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <StarRating />
          </motion.div>
          
          <motion.div variants={itemVariants} className="section-label" style={{ marginTop: '32px' }}>
            Work With Us
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <MagneticButtonDemo />
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}

export default App;
