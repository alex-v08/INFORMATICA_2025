export interface Module {
  id: number;
  title: string;
  duration: string;
  months: string;
  description: string;
  objectives: string[];
  tourismProject: string;
  psychologyProject: string;
  tools: string[];
}

export const modulesData: Module[] = [
  {
    id: 1,
    title: "Documentos Profesionales Digitales",
    duration: "8 horas",
    months: "Mes 1-2",
    description: "Domina la creación de documentos profesionales con Google Docs y Microsoft Word, incluyendo plantillas reutilizables, estilos automatizados y colaboración en tiempo real.",
    objectives: [
      "Crear plantillas de documentos desde cero en Google Docs y Word",
      "Configurar estilos automáticos y jerarquías visuales",
      "Implementar índices automáticos, numeración y referencias cruzadas",
      "Gestionar versiones y colaboración en tiempo real",
      "Aplicar formato profesional: márgenes, tipografía y espaciado",
      "Integrar elementos visuales: tablas, imágenes y gráficos",
      "Configurar encabezados, pies de página y marcas de agua",
      "Exportar documentos en múltiples formatos (PDF, Word, etc.)"
    ],
    tourismProject: "Sistema completo de documentos turísticos: itinerario con plantilla personalizada, contrato de servicios, vouchers de reserva y material promocional",
    psychologyProject: "Kit de documentos para intervención social: informe de diagnóstico participativo, consentimiento informado, planificación de actividades y material didáctico",
    tools: ["Google Docs", "Microsoft Word", "Google Drive", "OneDrive"]
  },
  {
    id: 2,
    title: "Gestión Digital de Información",
    duration: "6 horas",
    months: "Mes 3",
    description: "Organiza tu información digital de manera eficiente con sistemas de carpetas, almacenamiento en la nube y estrategias de seguridad.",
    objectives: [
      "Crear sistemas de organización eficientes",
      "Dominar Google Drive/OneDrive",
      "Implementar seguridad y respaldos",
      "Gestionar permisos y colaboración"
    ],
    tourismProject: "Sistema de organización para paquetes turísticos",
    psychologyProject: "Archivo digital de proyectos comunitarios",
    tools: ["Google Drive", "OneDrive"]
  },
  {
    id: 3,
    title: "Análisis de Datos Básico",
    duration: "8 horas",
    months: "Mes 4-5",
    description: "Maneja hojas de cálculo para análisis de datos, crea visualizaciones profesionales y dashboards informativos.",
    objectives: [
      "Dominar funciones esenciales de Excel/Sheets",
      "Crear gráficos profesionales",
      "Diseñar dashboards básicos",
      "Analizar e interpretar datos"
    ],
    tourismProject: "Dashboard de costos y estadísticas de reservas",
    psychologyProject: "Panel de seguimiento de encuestas e indicadores",
    tools: ["Microsoft Excel", "Google Sheets"]
  },
  {
    id: 4,
    title: "Presentaciones Efectivas",
    duration: "6 horas",
    months: "Mes 6",
    description: "Diseña presentaciones profesionales impactantes aplicando principios de comunicación visual y storytelling.",
    objectives: [
      "Crear presentaciones profesionales",
      "Aplicar principios de diseño visual",
      "Usar Canva para recursos gráficos",
      "Dominar técnicas de presentación"
    ],
    tourismProject: "Presentación profesional de destino turístico",
    psychologyProject: "Exposición de diagnóstico participativo",
    tools: ["PowerPoint", "Google Slides", "Canva"]
  },
  {
    id: 5,
    title: "Presencia Digital Profesional",
    duration: "6 horas",
    months: "Mes 7",
    description: "Construye tu identidad digital profesional con CV online, portafolio y perfiles optimizados en redes profesionales.",
    objectives: [
      "Crear CV digital profesional",
      "Desarrollar portafolio online",
      "Optimizar perfil de LinkedIn",
      "Gestionar marca personal digital"
    ],
    tourismProject: "Perfil empresarial y marketing turístico básico",
    psychologyProject: "Presentación de servicios profesionales sociales",
    tools: ["LinkedIn", "Canva", "Google Sites"]
  },
  {
    id: 6,
    title: "Proyecto Integrador",
    duration: "6 horas",
    months: "Mes 8-9-10",
    description: "Integra todas las competencias adquiridas en un proyecto profesional completo aplicado a tu campo.",
    objectives: [
      "Integrar todas las herramientas aprendidas",
      "Desarrollar proyecto profesional completo",
      "Presentar resultados efectivamente",
      "Demostrar dominio de competencias digitales"
    ],
    tourismProject: "Propuesta digital completa para destino turístico",
    psychologyProject: "Programa de intervención social con todos los componentes",
    tools: ["Todas las herramientas del curso"]
  }
];