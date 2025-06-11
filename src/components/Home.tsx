import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Target, Award } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section">
        <motion.h1 
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Informática Aplicada Profesional
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Programa Reducido - 40 horas anuales
        </motion.p>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Desarrolla competencias digitales esenciales para Turismo y Psicología Social
        </motion.p>
      </div>

      <div className="info-cards">
        <motion.div 
          className="info-card"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Clock className="card-icon" size={40} />
          <h3>Modalidad</h3>
          <p>Jueves: 20:00 - 23:00</p>
          <p>Sábados: 10:00 - 11:00 (opcional)</p>
        </motion.div>

        <motion.div 
          className="info-card"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Users className="card-icon" size={40} />
          <h3>Dirigido a</h3>
          <p>Estudiantes de Turismo</p>
          <p>Estudiantes de Psicología Social</p>
        </motion.div>

        <motion.div 
          className="info-card"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Target className="card-icon" size={40} />
          <h3>Metodología</h3>
          <p>Aprendizaje acelerado</p>
          <p>Proyectos prácticos inmediatos</p>
        </motion.div>
      </div>

      <motion.div 
        className="highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h2>Características del Programa</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <Award size={24} />
            <span>Sin exámenes teóricos</span>
          </div>
          <div className="highlight-item">
            <Award size={24} />
            <span>100% práctico</span>
          </div>
          <div className="highlight-item">
            <Award size={24} />
            <span>Certificado al completar</span>
          </div>
          <div className="highlight-item">
            <Award size={24} />
            <span>Material de apoyo incluido</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;