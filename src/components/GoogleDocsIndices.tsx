import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { List, FileText, Settings, Eye, RefreshCw, Trash2, Smartphone, Monitor, Tablet, CheckCircle, AlertCircle } from 'lucide-react';
import './GoogleDocsIndices.css';

const GoogleDocsIndices: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeIndexType, setActiveIndexType] = useState<string>('numbered');

  const steps = [
    {
      id: 1,
      title: "Preparar el Documento",
      icon: <FileText size={24} />,
      description: "Configura tu documento con encabezados apropiados",
      image: "https://www.adslzone.net/app/uploads-adslzone.net/2022/05/google-1.jpg",
      content: [
        "Abre tu documento en Google Docs",
        "Selecciona el texto que será tu título principal",
        "Aplica el formato 'Título' desde la barra de herramientas",
        "Para subtítulos, usa 'Título 1', 'Título 2', 'Título 3'",
        "Asegúrate de tener una estructura jerárquica clara"
      ],
      tip: "Los índices funcionan mejor con documentos largos que tienen múltiples secciones"
    },
    {
      id: 2,
      title: "Insertar Tabla de Contenido",
      icon: <List size={24} />,
      description: "Accede al menú de inserción de índices",
      image: "https://www.adslzone.net/app/uploads-adslzone.net/2022/05/indice-1-715x356.jpg",
      content: [
        "Posiciona el cursor donde quieres insertar el índice",
        "Ve al menú 'Insertar' en la barra superior",
        "Busca y selecciona 'Tabla de contenido'",
        "Se desplegará un menú con opciones de formato"
      ],
      tip: "Coloca el índice al inicio del documento para mejor navegación"
    },
    {
      id: 3,
      title: "Elegir Tipo de Índice",
      icon: <Settings size={24} />,
      description: "Selecciona entre índice numerado o con enlaces",
      image: "https://www.adslzone.net/app/uploads-adslzone.net/2022/05/google.jpg",
      content: [
        "Opción 1: Índice con números de página (para documentos impresos)",
        "Opción 2: Índice con enlaces azules (para documentos digitales)",
        "Selecciona la opción que mejor se adapte a tu uso",
        "El índice se generará automáticamente"
      ],
      tip: "Para documentos digitales, usa enlaces para facilitar la navegación"
    },
    {
      id: 4,
      title: "Personalizar el Índice",
      icon: <Eye size={24} />,
      description: "Ajusta la apariencia y configuración",
      image: "https://www.adslzone.net/app/uploads-adslzone.net/2022/05/crear-indices-google-docs.jpg",
      content: [
        "Haz clic en el índice para seleccionarlo",
        "Aparecerán opciones de personalización",
        "Puedes cambiar el formato de fuente",
        "Ajustar espaciado y alineación",
        "Configurar qué niveles de título incluir"
      ],
      tip: "Mantén un formato consistente con el resto del documento"
    },
    {
      id: 5,
      title: "Actualizar el Índice",
      icon: <RefreshCw size={24} />,
      description: "Mantén el índice sincronizado con cambios",
      image: "https://www.adslzone.net/app/uploads-adslzone.net/2022/05/indice-1-715x356.jpg",
      content: [
        "Cuando agregues nuevos títulos o subtítulos",
        "Haz clic en el índice existente",
        "Busca el ícono de actualización (flecha circular)",
        "Haz clic para actualizar automáticamente",
        "El índice reflejará todos los cambios"
      ],
      tip: "Actualiza el índice regularmente mientras trabajas en documentos largos"
    },
    {
      id: 6,
      title: "Gestionar y Eliminar",
      icon: <Trash2 size={24} />,
      description: "Modifica o elimina el índice si es necesario",
      image: "https://www.adslzone.net/app/uploads-adslzone.net/2022/05/google.jpg",
      content: [
        "Para eliminar: selecciona todo el índice y presiona 'Delete'",
        "Para mover: corta y pega en la nueva ubicación",
        "Para duplicar: copia y pega donde necesites",
        "Puedes tener múltiples índices en un documento"
      ],
      tip: "Usa múltiples índices para secciones específicas en documentos muy largos"
    }
  ];

  const indexTypes = [
    {
      id: 'numbered',
      title: 'Índice con Números',
      description: 'Perfecto para documentos que se van a imprimir',
      image: 'https://www.adslzone.net/app/uploads-adslzone.net/2022/05/indice-1-715x356.jpg',
      features: [
        'Muestra números de página',
        'Ideal para documentos impresos',
        'Formato tradicional',
        'Fácil referencia física'
      ],
      use: 'Informes, tesis, documentos académicos'
    },
    {
      id: 'linked',
      title: 'Índice con Enlaces',
      description: 'Ideal para documentos digitales con navegación',
      image: 'https://www.adslzone.net/app/uploads-adslzone.net/2022/05/crear-indices-google-docs.jpg',
      features: [
        'Enlaces clicables en azul',
        'Navegación instantánea',
        'Perfecto para pantalla',
        'Interactividad mejorada'
      ],
      use: 'Manuales digitales, guías online, presentaciones'
    }
  ];

  const platformCompatibility = [
    {
      platform: 'Escritorio',
      icon: <Monitor size={24} />,
      compatibility: 'Completa',
      features: [
        'Crear índices',
        'Personalizar formato',
        'Actualizar automáticamente',
        'Todas las opciones disponibles'
      ],
      status: 'full'
    },
    {
      platform: 'iOS',
      icon: <Smartphone size={24} />,
      compatibility: 'Parcial',
      features: [
        'Ver índices existentes',
        'Navegación por enlaces',
        'Limitada personalización',
        'No creación nueva'
      ],
      status: 'partial'
    },
    {
      platform: 'Android',
      icon: <Tablet size={24} />,
      compatibility: 'Limitada',
      features: [
        'Ver índices básicos',
        'Navegación limitada',
        'Sin personalización',
        'Solo lectura'
      ],
      status: 'limited'
    }
  ];

  const bestPractices = [
    {
      title: "Estructura Jerárquica",
      description: "Usa una jerarquía clara: Título > Título 1 > Título 2 > Título 3",
      icon: <List size={20} />
    },
    {
      title: "Documentos Largos",
      description: "Los índices son más útiles en documentos de más de 5 páginas",
      icon: <FileText size={20} />
    },
    {
      title: "Actualización Regular",
      description: "Actualiza el índice cada vez que agregues nuevas secciones",
      icon: <RefreshCw size={20} />
    },
    {
      title: "Formato Consistente",
      description: "Mantén un estilo uniforme en todos los títulos y subtítulos",
      icon: <Eye size={20} />
    }
  ];

  return (
    <motion.div 
      className="google-docs-indices"
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
        <h1>Cómo Crear Índices en Google Docs</h1>
        <p>Aprende a crear tablas de contenido automáticas para mejorar la navegación en tus documentos</p>
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
                          target.src = `https://via.placeholder.com/600x300/e3f2fd/1976d2?text=Paso+${step.id}:+${step.title.replace(/\s+/g, '+')}`;
                        }}
                      />
                    </div>
                    <ul>
                      {step.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="step-tip">
                      <AlertCircle size={16} />
                      <span>{step.tip}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="sidebar-content"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="index-types-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2>Tipos de Índices</h2>
            <div className="index-types-container">
              {indexTypes.map((type) => (
                <motion.div
                  key={type.id}
                  className={`index-type-card ${activeIndexType === type.id ? 'active' : ''}`}
                  onClick={() => setActiveIndexType(type.id)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="type-header">
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </div>
                  
                  {activeIndexType === type.id && (
                    <motion.div 
                      className="type-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={type.image} 
                        alt={type.title}
                        className="type-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/400x200/f5f5f5/666?text=${type.title.replace(/\s+/g, '+')}`;
                        }}
                      />
                      <div className="type-features">
                        <h4>Características:</h4>
                        <ul>
                          {type.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        <div className="type-use">
                          <strong>Mejor para:</strong> {type.use}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="compatibility-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <h2>Compatibilidad por Plataforma</h2>
            <div className="compatibility-grid">
              {platformCompatibility.map((platform, index) => (
                <div key={index} className={`compatibility-card ${platform.status}`}>
                  <div className="platform-header">
                    <div className="platform-icon">{platform.icon}</div>
                    <div className="platform-info">
                      <h4>{platform.platform}</h4>
                      <span className={`status ${platform.status}`}>
                        {platform.compatibility}
                      </span>
                    </div>
                  </div>
                  <ul>
                    {platform.features.map((feature, idx) => (
                      <li key={idx}>
                        {platform.status === 'full' ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

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
            <h2>Beneficios de los Índices</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Navegación rápida por el documento</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Visión general de la estructura</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Profesionalismo en documentos largos</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Actualización automática</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Mejora la accesibilidad</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Facilita la revisión y edición</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GoogleDocsIndices;