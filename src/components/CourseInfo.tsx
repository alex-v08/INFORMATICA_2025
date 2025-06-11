import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Clock, Award, Laptop } from 'lucide-react';
import './CourseInfo.css';

const CourseInfo: React.FC = () => {
  const objectives = [
    "Desarrollar competencias digitales esenciales para el desempeño profesional",
    "Dominar herramientas de productividad digital",
    "Crear documentos, presentaciones y análisis profesionales",
    "Gestionar información de manera eficiente en la nube",
    "Construir una presencia digital profesional coherente"
  ];

  const requirements = [
    "Microsoft 365 o Google Workspace",
    "Canva (versión gratuita)",
    "Acceso básico a internet",
    "Computadora o dispositivo móvil",
    "Ganas de aprender y practicar"
  ];

  return (
    <motion.div 
      className="course-info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2><Target size={30} /> Objetivos del Curso</h2>
        <ul className="objectives-list">
          {objectives.map((objective, index) => (
            <motion.li 
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {objective}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        className="section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2><BookOpen size={30} /> Metodología</h2>
        <div className="methodology-grid">
          <div className="method-card">
            <h3>Aprendizaje Acelerado</h3>
            <p>Proyectos prácticos desde la primera clase. Sin teoría excesiva, enfoque en la aplicación inmediata.</p>
          </div>
          <div className="method-card">
            <h3>Demostraciones Express</h3>
            <p>Misma herramienta, doble aplicación. Ejemplos para Turismo y Psicología Social en cada módulo.</p>
          </div>
          <div className="method-card">
            <h3>Material Previo</h3>
            <p>Videos tutoriales de 10-20 minutos antes de cada clase para maximizar el tiempo de práctica.</p>
          </div>
          <div className="method-card">
            <h3>Mini-intercambios</h3>
            <p>30 minutos por clase para compartir aplicaciones entre carreras y enriquecer el aprendizaje.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2><Laptop size={30} /> Recursos Necesarios</h2>
        <div className="requirements-list">
          {requirements.map((req, index) => (
            <motion.div 
              key={index}
              className="requirement-item"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Award size={20} />
              <span>{req}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="section highlight-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2><Clock size={30} /> Distribución de Tiempo</h2>
        <div className="time-distribution">
          <div className="time-card">
            <h3>10 meses</h3>
            <p>Duración total del programa</p>
          </div>
          <div className="time-card">
            <h3>40 horas</h3>
            <p>Total de horas del curso</p>
          </div>
          <div className="time-card">
            <h3>31 horas</h3>
            <p>Clases presenciales (Jueves)</p>
          </div>
          <div className="time-card">
            <h3>9 horas</h3>
            <p>Prácticas opcionales (Sábados)</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseInfo;