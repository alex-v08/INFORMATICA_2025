import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Type, FileText, Save, Eye, Palette, ArrowUp, ArrowDown, Lightbulb, CheckCircle } from 'lucide-react';
import './AutomaticStyles.css';

const AutomaticStyles: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 1,
      title: "Acceder a Estilos",
      icon: <Type size={24} />,
      description: "Abre el panel de estilos en Google Docs",
      image: "https://www.wikihow.com/images/thumb/3/35/Save-a-Google-Doc-Step-1-Version-3.jpg/v4-728px-Save-a-Google-Doc-Step-1-Version-3.jpg.webp",
      content: [
        "Abre tu documento en Google Docs",
        "Ve al menú 'Formato' en la barra superior",
        "Selecciona 'Estilos de párrafo y carácter'",
        "Se abrirá el panel lateral de estilos"
      ],
      tip: "También puedes usar el atajo Ctrl+Alt+X (Cmd+Option+X en Mac) para acceder rápidamente"
    },
    {
      id: 2,
      title: "Configurar Jerarquías",
      icon: <ArrowUp size={24} />,
      description: "Establece niveles de títulos y subtítulos",
      image: "https://www.wikihow.com/images/thumb/1/1c/Save-a-Google-Doc-Step-2-Version-3.jpg/v4-728px-Save-a-Google-Doc-Step-2-Version-3.jpg.webp",
      content: [
        "Selecciona el texto que será tu título principal",
        "Aplica el estilo 'Título' desde el panel de estilos",
        "Para subtítulos, usa 'Título 1', 'Título 2', 'Título 3', etc.",
        "Establece una jerarquía clara: Título > Título 1 > Título 2 > Título 3"
      ],
      tip: "Una buena jerarquía facilita la navegación y mejora la legibilidad del documento"
    },
    {
      id: 3,
      title: "Personalizar Estilos",
      icon: <Palette size={24} />,
      description: "Modifica fuentes, tamaños y colores",
      image: "https://www.wikihow.com/images/thumb/8/8c/Save-a-Google-Doc-Step-3-Version-3.jpg/v4-728px-Save-a-Google-Doc-Step-3-Version-3.jpg.webp",
      content: [
        "Selecciona texto con el estilo que quieres modificar",
        "Cambia la fuente, tamaño, color según tus necesidades",
        "Haz clic derecho en el estilo en el panel lateral",
        "Selecciona 'Actualizar [nombre del estilo] para que coincida'"
      ],
      tip: "Los cambios se aplicarán automáticamente a todo el texto con ese estilo"
    },
    {
      id: 4,
      title: "Aplicar Estilos Automáticos",
      icon: <Settings size={24} />,
      description: "Usa estilos predefinidos para consistencia",
      image: "https://www.wikihow.com/images/thumb/d/db/Save-a-Google-Doc-Step-4-Version-3.jpg/v4-728px-Save-a-Google-Doc-Step-4-Version-3.jpg.webp",
      content: [
        "Selecciona el texto que quieres formatear",
        "Haz clic en el estilo apropiado en el panel lateral",
        "El formato se aplicará automáticamente",
        "Usa 'Texto normal' para párrafos regulares"
      ],
      tip: "Usa estilos consistentes en todo el documento para mantener una apariencia profesional"
    },
    {
      id: 5,
      title: "Generar Índice Automático",
      icon: <FileText size={24} />,
      description: "Crea un índice basado en tus estilos",
      image: "https://www.wikihow.com/images/thumb/5/59/Save-a-Google-Doc-Step-5-Version-3.jpg/v4-728px-Save-a-Google-Doc-Step-5-Version-3.jpg.webp",
      content: [
        "Posiciona el cursor donde quieres el índice",
        "Ve a 'Insertar' > 'Salto de página' > 'Tabla de contenido'",
        "Elige entre índice con números de página o con enlaces",
        "El índice se actualizará automáticamente cuando cambies los títulos"
      ],
      tip: "El índice se basa en los estilos de título que hayas aplicado"
    },
    {
      id: 6,
      title: "Guardar y Mantener Estilos",
      icon: <Save size={24} />,
      description: "Preserva tu configuración de estilos",
      image: "https://www.wikihow.com/images/thumb/f/f8/Save-a-Google-Doc-Step-6-Version-3.jpg/v4-728px-Save-a-Google-Doc-Step-6-Version-3.jpg.webp",
      content: [
        "Google Docs guarda automáticamente tus cambios",
        "Los estilos personalizados se mantienen en el documento",
        "Para reutilizar estilos, copia y pega desde documentos existentes",
        "Considera crear una plantilla con tus estilos preferidos"
      ],
      tip: "Guarda tus configuraciones de estilo como plantilla para uso futuro"
    }
  ];

  const styleHierarchy = [
    {
      level: "Título",
      description: "Título principal del documento",
      fontSize: "26pt",
      use: "Portada o título principal",
      color: "#1a73e8"
    },
    {
      level: "Título 1",
      description: "Secciones principales",
      fontSize: "20pt",
      use: "Capítulos o secciones principales",
      color: "#1a73e8"
    },
    {
      level: "Título 2",
      description: "Subsecciones",
      fontSize: "16pt",
      use: "Subsecciones dentro de capítulos",
      color: "#34a853"
    },
    {
      level: "Título 3",
      description: "Sub-subsecciones",
      fontSize: "14pt",
      use: "Puntos específicos o detalles",
      color: "#ea4335"
    },
    {
      level: "Texto normal",
      description: "Contenido regular",
      fontSize: "11pt",
      use: "Párrafos y contenido general",
      color: "#000000"
    }
  ];

  const bestPractices = [
    {
      title: "Consistencia Visual",
      description: "Usa los mismos estilos para elementos similares",
      icon: <Eye size={20} />
    },
    {
      title: "Jerarquía Clara",
      description: "Mantén una estructura lógica de títulos",
      icon: <ArrowDown size={20} />
    },
    {
      title: "Legibilidad",
      description: "Elige fuentes y tamaños que sean fáciles de leer",
      icon: <Type size={20} />
    },
    {
      title: "Navegación",
      description: "Facilita el movimiento por el documento",
      icon: <FileText size={20} />
    }
  ];

  return (
    <motion.div 
      className="automatic-styles"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1>Configurar Estilos Automáticos y Jerarquías Visuales</h1>
        <p>Aprende a crear documentos profesionales con estructura y formato consistente en Google Docs</p>
      </motion.div>

      <div className="content-grid">
        <motion.div 
          className="steps-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Proceso Paso a Paso</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`step-card ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="step-header">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-info">
                    <h3>Paso {step.id}: {step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
                
                {activeStep === index && (
                  <motion.div 
                    className="step-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="step-visual">
                      <img 
                        src={step.image} 
                        alt={`Paso ${step.id}: ${step.title}`}
                        className="step-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/400x250/e3f2fd/1976d2?text=Paso+${step.id}`;
                        }}
                      />
                    </div>
                    <ul>
                      {step.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="step-tip">
                      <Lightbulb size={16} />
                      <span>{step.tip}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="hierarchy-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Jerarquía de Estilos</h2>
          <div className="hierarchy-container">
            {styleHierarchy.map((style, index) => (
              <motion.div
                key={index}
                className="hierarchy-card"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (0.1 * index) }}
              >
                <div className="hierarchy-level" style={{ color: style.color }}>
                  <Type size={20} />
                  <span className="level-name">{style.level}</span>
                </div>
                <div className="hierarchy-details">
                  <p className="hierarchy-description">{style.description}</p>
                  <div className="hierarchy-specs">
                    <span className="font-size">Tamaño: {style.fontSize}</span>
                    <span className="usage">Uso: {style.use}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="best-practices-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h2>Mejores Prácticas</h2>
            <div className="practices-grid">
              {bestPractices.map((practice, index) => (
                <div key={index} className="practice-item">
                  <div className="practice-icon">{practice.icon}</div>
                  <div className="practice-content">
                    <h4>{practice.title}</h4>
                    <p>{practice.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="benefits-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h2>Beneficios de los Estilos Automáticos</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Formato consistente en todo el documento</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Facilita la creación de índices automáticos</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Mejora la navegación por el documento</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Ahorra tiempo en el formateo manual</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Facilita cambios globales de formato</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Mejora la accesibilidad del documento</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AutomaticStyles;