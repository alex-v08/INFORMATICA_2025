import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, BookOpen, Calendar, CheckSquare, FileText, List } from 'lucide-react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/info', label: 'Información', icon: Info },
    { path: '/modules', label: 'Módulos', icon: BookOpen },
    { path: '/schedule', label: 'Cronograma', icon: Calendar },
    { path: '/evaluation', label: 'Evaluación', icon: CheckSquare },
    { path: '/google-docs-templates', label: 'Plantillas Google Docs', icon: FileText },
    { path: '/google-docs-indices', label: 'Índices Google Docs', icon: List },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="nav-title">Informática Aplicada Profesional</h1>
        <ul className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;