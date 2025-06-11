#!/bin/bash

# Script de despliegue para la Presentación de Informática Aplicada Profesional

echo "🚀 Iniciando proceso de despliegue..."

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Ejecutar pruebas
echo "🧪 Ejecutando pruebas..."
npm test -- --coverage --silent

# Crear build de producción
echo "🏗️  Creando build de producción..."
npm run build

# Verificar que el build fue exitoso
if [ $? -eq 0 ]; then
    echo "✅ Build completado exitosamente!"
    echo "📁 Los archivos están listos en la carpeta 'build/'"
    echo ""
    echo "🌐 Para servir localmente:"
    echo "   npm install -g serve"
    echo "   serve -s build"
    echo ""
    echo "☁️  Para desplegar en la web:"
    echo "   - Sube la carpeta 'build/' a tu servidor web"
    echo "   - O usa servicios como Netlify, Vercel, o GitHub Pages"
    echo ""
    echo "🎉 ¡Despliegue listo!"
else
    echo "❌ Error en el build. Revisa los errores arriba."
    exit 1
fi