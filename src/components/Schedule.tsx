import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import './Schedule.css';

const Schedule: React.FC = () => {
  const schedule = [
    {
      month: "Mes 1",
      module: "Documentos Profesionales - Parte 1",
      thursday: {
        time: "20:00 - 23:00",
        content: "Presentación + Formato profesional + Estilos básicos"
      },
      saturday: {
        time: "10:00 - 11:00",
        content: "Práctica guiada y consultas"
      }
    },
    {
      month: "Mes 2",
      module: "Documentos Profesionales - Parte 2",
      thursday: {
        time: "20:00 - 23:00",
        content: "Plantillas + Colaboración + Proyecto Express"
      },
      saturday: {
        time: "10:00 - 11:00",
        content: "Entrega y feedback de proyectos"
      }
    },
    {
      month: "Mes 3",
      module: "Gestión Digital de Información",
      thursday: {
        time: "20:00 - 24:00",
        content: "Organización + Drive/OneDrive + Seguridad"
      },
      saturday: {
        time: "10:00 - 12:00",
        content: "Implementación práctica del sistema"
      }
    },
    {
      month: "Mes 4",
      module: "Análisis de Datos - Parte 1",
      thursday: {
        time: "20:00 - 23:00",
        content: "Excel/Sheets fundamentales + Filtros"
      },
      saturday: {
        time: "10:00 - 11:00",
        content: "Práctica con datos reales"
      }
    },
    {
      month: "Mes 5",
      module: "Análisis de Datos - Parte 2",
      thursday: {
        time: "20:00 - 23:00",
        content: "Gráficos + Dashboard básico"
      },
      saturday: {
        time: "10:00 - 11:00",
        content: "Finalización de Dashboard"
      }
    },
    {
      month: "Mes 6",
      module: "Presentaciones Efectivas",
      thursday: {
        time: "20:00 - 24:00",
        content: "PowerPoint/Slides + Canva + Comunicación visual"
      },
      saturday: {
        time: "10:00 - 12:00",
        content: "Desarrollo + Presentaciones finales"
      }
    },
    {
      month: "Mes 7",
      module: "Presencia Digital Profesional",
      thursday: {
        time: "20:00 - 24:00",
        content: "CV digital + Redes profesionales + Perfil coherente"
      },
      saturday: {
        time: "10:00 - 12:00",
        content: "Implementación + Proyecto Express"
      }
    },
    {
      month: "Mes 8",
      module: "Proyecto Integrador - Parte 1",
      thursday: {
        time: "20:00 - 23:00",
        content: "Planificación + Desarrollo inicial + Consultas"
      },
      saturday: {
        time: "-",
        content: "No hay sesión (compensado en otros meses)"
      }
    },
    {
      month: "Mes 9",
      module: "Proyecto Integrador - Parte 2",
      thursday: {
        time: "20:00 - 23:00",
        content: "Finalización + Presentaciones cruzadas"
      },
      saturday: {
        time: "-",
        content: "No hay sesión"
      }
    },
    {
      month: "Mes 10",
      module: "Síntesis y Evaluación Final",
      thursday: {
        time: "20:00 - 23:00",
        content: "Presentaciones finales + Reflexión + Certificación"
      },
      saturday: {
        time: "10:00 - 11:00",
        content: "Consultas finales opcionales"
      }
    }
  ];

  return (
    <motion.div 
      className="schedule"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="schedule-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Cronograma del Curso
      </motion.h1>

      <motion.div 
        className="schedule-summary"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="summary-card">
          <Calendar size={30} />
          <div>
            <h3>Duración</h3>
            <p>10 meses</p>
          </div>
        </div>
        <div className="summary-card">
          <Clock size={30} />
          <div>
            <h3>Horarios</h3>
            <p>Jueves 20:00-23:00<br />Sábados 10:00-11:00 (opcional)</p>
          </div>
        </div>
        <div className="summary-card">
          <MapPin size={30} />
          <div>
            <h3>Modalidad</h3>
            <p>Presencial con práctica opcional</p>
          </div>
        </div>
        <div className="summary-card">
          <Users size={30} />
          <div>
            <h3>Total de Horas</h3>
            <p>40 horas anuales</p>
          </div>
        </div>
      </motion.div>

      <div className="schedule-grid">
        {schedule.map((item, index) => (
          <motion.div
            key={index}
            className="schedule-card"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="schedule-header">
              <h3>{item.month}</h3>
              <h4>{item.module}</h4>
            </div>
            <div className="schedule-content">
              <div className="day-schedule">
                <h5><Clock size={16} /> Jueves</h5>
                <p className="time">{item.thursday.time}</p>
                <p className="content">{item.thursday.content}</p>
              </div>
              <div className="day-schedule saturday">
                <h5><Clock size={16} /> Sábado</h5>
                <p className="time">{item.saturday.time}</p>
                <p className="content">{item.saturday.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Schedule;