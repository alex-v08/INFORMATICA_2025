import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Clock, Target, Briefcase, BookOpen, Settings } from 'lucide-react';
import { modulesData } from '../data/modulesData';
import './Modules.css';

const Modules: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <motion.div 
      className="modules"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="modules-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Módulos del Curso
      </motion.h1>
      
      <div className="modules-container">
        {modulesData.map((module, index) => (
          <motion.div
            key={module.id}
            className="module-card"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <div 
              className="module-header"
              onClick={() => toggleModule(module.id)}
            >
              <div className="module-info">
                <h2 className="module-title">{module.title}</h2>
                <div className="module-meta">
                  <span><Clock size={16} /> {module.duration}</span>
                  <span>{module.months}</span>
                </div>
              </div>
              <div className="module-toggle">
                {expandedModule === module.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            
            <motion.div 
              className={`module-content ${expandedModule === module.id ? 'expanded' : ''}`}
              initial={false}
              animate={{ height: expandedModule === module.id ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="module-description">{module.description}</p>
              
              <div className="module-section">
                <h3><Target size={20} /> Objetivos</h3>
                <ul>
                  {module.objectives.map((objective, idx) => (
                    <li key={idx}>{objective}</li>
                  ))}
                </ul>
              </div>
              
              <div className="module-projects">
                <div className="project-card tourism">
                  <h4><Briefcase size={18} /> Proyecto Turismo</h4>
                  <p>{module.tourismProject}</p>
                </div>
                <div className="project-card psychology">
                  <h4><BookOpen size={18} /> Proyecto Psicología Social</h4>
                  <p>{module.psychologyProject}</p>
                </div>
              </div>
              
              <div className="module-tools">
                <h4><Settings size={18} /> Herramientas</h4>
                <div className="tools-list">
                  {module.tools.map((tool, idx) => (
                    <span key={idx} className="tool-badge">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Modules;