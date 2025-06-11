import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus, Save, Share2, Edit3, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import './GoogleDocsTemplates.css';

const GoogleDocsTemplates: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 1,
      title: "Iniciar Nuevo Documento",
      icon: <Plus size={24} />,
      description: "Crear la base de tu plantilla",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Start-a-new-document-1400x393.png",
      content: [
        "Abre Google Workspace en tu navegador",
        "Selecciona 'Documento en blanco' para empezar desde cero",
        "Alternativamente, abre un documento existente para convertirlo en plantilla"
      ],
      tip: "Siempre comienza con un documento limpio para evitar formateos no deseados"
    },
    {
      id: 2,
      title: "Personalizar la Plantilla",
      icon: <Edit3 size={24} />,
      description: "Diseña el contenido y estructura",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Customize-your-template-1400x675.png",
      content: [
        "Añade texto específico y encabezados formatados",
        "Inserta texto de marcador de posición para contenido que cambie frecuentemente",
        "Usa marcadores fáciles de reemplazar como '[NOMBRE CLIENTE]' o '[FECHA]'",
        "Aplica estilos consistentes para títulos, subtítulos y párrafos",
        "Incluye elementos visuales como tablas, imágenes o gráficos según necesites"
      ],
      tip: "Los marcadores entre corchetes son más fáciles de encontrar y reemplazar después"
    },
    {
      id: 3,
      title: "Guardar el Documento",
      icon: <Save size={24} />,
      description: "Preserva tu trabajo con un nombre descriptivo",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Start-a-new-document-1400x393.png",
      content: [
        "Haz clic en 'Archivo' en el menú superior",
        "Selecciona 'Guardar' o 'Guardar como'",
        "Asigna un título único y reconocible a la plantilla",
        "Usa nombres descriptivos como 'Plantilla-Contrato-Turismo' o 'Informe-Diagnostico-Social'"
      ],
      tip: "Un buen nombre de plantilla facilita encontrarla más tarde"
    },
    {
      id: 4,
      title: "Enviar a Galería de Plantillas",
      icon: <Share2 size={24} />,
      description: "Compartir con tu organización",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Create-a-template-with-ClickUp-1400x984.png",
      content: [
        "Regresa a la pantalla principal de Google Docs",
        "Haz clic en 'Galería de plantillas'",
        "Selecciona tu organización",
        "Haz clic en 'Enviar plantilla'",
        "Elige una categoría apropiada y envía"
      ],
      tip: "Esto permite que otros miembros de tu equipo accedan a la plantilla"
    },
    {
      id: 5,
      title: "Acceder a tu Plantilla",
      icon: <FileText size={24} />,
      description: "Usar la plantilla creada",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Access-your-template-1400x426.png",
      content: [
        "Ve a la Galería de plantillas",
        "Haz clic en el nombre de tu organización",
        "Encuentra tu plantilla en la lista",
        "Haz clic para crear un nuevo documento basado en la plantilla"
      ],
      tip: "Cada vez que uses la plantilla, se creará una copia nueva del documento"
    }
  ];

  const limitations = [
    "Funciones avanzadas limitadas comparado con software especializado",
    "No hay aplicación estricta de plantillas (usuarios pueden modificar libremente)",
    "No se puede integrar con bases de datos externas",
    "Reemplazo manual de marcadores de posición",
    "Permisos de compartir plantillas pueden ser complicados"
  ];

  const examples = [
    {
      title: "Plantilla para Turismo",
      description: "Itinerario de viaje personalizable",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Customize-your-template-1400x675.png",
      placeholders: ["[NOMBRE CLIENTE]", "[DESTINO]", "[FECHAS VIAJE]", "[ACTIVIDADES]", "[COSTO TOTAL]"]
    },
    {
      title: "Plantilla para Psicología Social",
      description: "Informe de diagnóstico participativo",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Create-a-template-with-ClickUp-1400x984.png",
      placeholders: ["[COMUNIDAD]", "[FECHA DIAGNÓSTICO]", "[METODOLOGÍA]", "[HALLAZGOS]", "[RECOMENDACIONES]"]
    },
    {
      title: "Plantilla Administrativa",
      description: "Contrato de servicios profesionales",
      image: "https://clickup.com/blog/wp-content/uploads/2024/09/Access-your-template-1400x426.png",
      placeholders: ["[NOMBRE PROVEEDOR]", "[SERVICIO]", "[DURACIÓN]", "[MONTO]", "[TÉRMINOS]"]
    }
  ];

  return (
    <motion.div 
      className="google-docs-templates"
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
        <h1>Crear Plantillas en Google Docs</h1>
        <p>Aprende a crear plantillas profesionales paso a paso para optimizar tu flujo de trabajo</p>
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
          className="examples-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Ejemplos de Plantillas</h2>
          <div className="examples-container">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                className="example-card"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (0.1 * index) }}
              >
                <div className="example-image">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="example-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/300x200/f8f9fa/495057?text=${encodeURIComponent(example.title)}`;
                    }}
                  />
                </div>
                <div className="example-content">
                  <h3>{example.title}</h3>
                  <p>{example.description}</p>
                  <div className="placeholders">
                    <h4>Marcadores de posición:</h4>
                    <div className="placeholder-tags">
                      {example.placeholders.map((placeholder, idx) => (
                        <span key={idx} className="placeholder-tag">{placeholder}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="limitations-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h2>Limitaciones a Considerar</h2>
            <div className="limitations-list">
              {limitations.map((limitation, index) => (
                <div key={index} className="limitation-item">
                  <AlertCircle size={16} />
                  <span>{limitation}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="best-practices"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h2>Mejores Prácticas</h2>
            <div className="practices-grid">
              <div className="practice-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Nomenclatura Clara</h4>
                  <p>Usa nombres descriptivos para tus plantillas</p>
                </div>
              </div>
              <div className="practice-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Marcadores Consistentes</h4>
                  <p>Usa el mismo formato para todos los marcadores</p>
                </div>
              </div>
              <div className="practice-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Estructura Lógica</h4>
                  <p>Organiza el contenido de manera intuitiva</p>
                </div>
              </div>
              <div className="practice-item">
                <CheckCircle size={20} />
                <div>
                  <h4>Versioning</h4>
                  <p>Mantén versiones actualizadas de tus plantillas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GoogleDocsTemplates;