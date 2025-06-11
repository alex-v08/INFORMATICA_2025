import React from 'react';
import { motion } from 'framer-motion';
import { Award, BarChart3, CheckCircle, Star, TrendingUp } from 'lucide-react';
import './Evaluation.css';

const Evaluation: React.FC = () => {
  const moduleEvaluations = [
    { module: "Documentos Profesionales", percentage: "15%", description: "Plantilla profesional completa" },
    { module: "Gestión Digital", percentage: "10%", description: "Sistema de organización digital" },
    { module: "Análisis de Datos", percentage: "15%", description: "Dashboard con datos reales" },
    { module: "Presentaciones", percentage: "15%", description: "Presentación profesional de 10 min" },
    { module: "Presencia Digital", percentage: "15%", description: "Perfil profesional online completo" }
  ];

  const evaluationCriteria = [
    { criterion: "Funcionalidad técnica", percentage: "40%", description: "Dominio de herramientas y aplicación correcta" },
    { criterion: "Aplicación profesional", percentage: "35%", description: "Relevancia y utilidad en el campo profesional" },
    { criterion: "Presentación y comunicación", percentage: "25%", description: "Calidad de presentación y claridad comunicativa" }
  ];

  const gradeScale = [
    { grade: "Excelente", range: "90-100%", description: "Dominio completo y aplicación excepcional", color: "#28a745" },
    { grade: "Bueno", range: "70-89%", description: "Buen dominio con detalles menores a mejorar", color: "#17a2b8" },
    { grade: "Suficiente", range: "60-69%", description: "Cumple objetivos básicos del módulo", color: "#ffc107" },
    { grade: "Insuficiente", range: "<60%", description: "No cumple criterios mínimos", color: "#dc3545" }
  ];

  return (
    <motion.div 
      className="evaluation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="evaluation-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Sistema de Evaluación
      </motion.h1>

      <motion.div 
        className="evaluation-overview"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="overview-card">
          <BarChart3 size={40} />
          <div>
            <h3>Proyectos por Módulo</h3>
            <p className="percentage">70%</p>
            <p>5 proyectos prácticos</p>
          </div>
        </div>
        <div className="overview-card">
          <Award size={40} />
          <div>
            <h3>Proyecto Integrador</h3>
            <p className="percentage">30%</p>
            <p>Síntesis de competencias</p>
          </div>
        </div>
        <div className="overview-card">
          <CheckCircle size={40} />
          <div>
            <h3>Sin Exámenes</h3>
            <p className="percentage">0%</p>
            <p>100% evaluación práctica</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2><BarChart3 size={30} /> Proyectos por Módulo (70%)</h2>
        <div className="modules-grid">
          {moduleEvaluations.map((item, index) => (
            <motion.div
              key={index}
              className="module-eval-card"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="module-percentage">{item.percentage}</div>
              <h4>{item.module}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2><Award size={30} /> Proyecto Integrador (30%)</h2>
        <div className="integrator-project">
          <div className="project-description">
            <h3>Características del Proyecto Final</h3>
            <ul>
              <li>Integración de todas las herramientas aprendidas</li>
              <li>Aplicación específica al campo profesional (Turismo o Psicología Social)</li>
              <li>Presentación de 15 minutos</li>
              <li>Demostración de competencias digitales adquiridas</li>
            </ul>
          </div>
          <div className="project-options">
            <div className="project-option tourism">
              <h4>Opción Turismo</h4>
              <p>Propuesta digital completa para destino turístico con análisis, documentación y presentación</p>
            </div>
            <div className="project-option psychology">
              <h4>Opción Psicología Social</h4>
              <p>Programa de intervención social con diagnóstico, seguimiento y materiales de apoyo</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2><TrendingUp size={30} /> Criterios de Evaluación</h2>
        <div className="criteria-grid">
          {evaluationCriteria.map((item, index) => (
            <motion.div
              key={index}
              className="criteria-card"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              <div className="criteria-percentage">{item.percentage}</div>
              <h4>{item.criterion}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h2><Star size={30} /> Escala de Calificación</h2>
        <div className="grade-scale">
          {gradeScale.map((item, index) => (
            <motion.div
              key={index}
              className="grade-item"
              style={{ borderLeftColor: item.color }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
            >
              <div className="grade-header">
                <h4 style={{ color: item.color }}>{item.grade}</h4>
                <span className="grade-range">{item.range}</span>
              </div>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="section highlight-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h2>Oportunidades de Recuperación</h2>
        <div className="recovery-info">
          <div className="recovery-item">
            <CheckCircle size={24} color="#28a745" />
            <div>
              <h4>Reentrega</h4>
              <p>Si obtienes menos del 70%, tienes oportunidad de mejorar hasta el 80%</p>
            </div>
          </div>
          <div className="recovery-item">
            <CheckCircle size={24} color="#28a745" />
            <div>
              <h4>Proyecto Alternativo</h4>
              <p>Para casos especiales, se puede acordar un proyecto alternativo</p>
            </div>
          </div>
          <div className="recovery-item">
            <CheckCircle size={24} color="#28a745" />
            <div>
              <h4>Seguimiento Personalizado</h4>
              <p>Reuniones individuales para identificar áreas de mejora</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Evaluation;