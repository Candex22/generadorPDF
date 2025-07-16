# 📝 Generador de Informe PDF

> **Aplicación web para la generación automática de informes académicos en formato PDF**

Una herramienta moderna y elegante que permite a estudiantes crear informes profesionales personalizados de manera rápida y sencilla.

## 🌟 Características

- ✨ **Interfaz moderna** con diseño responsive y animaciones suaves
- 📱 **Totalmente responsive** - funciona perfecto en móviles, tablets y desktop
- 🎨 **Diseño profesional** con paleta de colores naranja vibrante
- ⚡ **Generación instantánea** de PDFs con formato académico
- 🔍 **Validación en tiempo real** de formularios
- 💾 **Descarga automática** con nombres de archivo personalizados
- 🖼️ **Previsualización** del documento antes de descargar
- 📧 **Validación de email** con expresiones regulares
- 🕐 **Fechas localizadas** en formato argentino

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript ES6+** - Lógica de aplicación y manipulación del DOM
- **jsPDF** - Generación de documentos PDF del lado del cliente
- **Responsive Design** - Adaptable a todos los dispositivos

## 📦 Instalación

### Opción 1: Descarga Directa
```bash
# Clona el repositorio
git clone https://github.com/Candex22/generadorPDF.git

# Navega al directorio
cd generadorPDF

# Abre index.html en tu navegador
open index.html
```

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx http-server

# Con PHP
php -S localhost:8000
```

## 🎯 Uso

1. **Completa el formulario** con tus datos personales:
   - Nombre completo
   - Correo electrónico
   - Edad
   - Proyecto
   - Descripción del proyecto
   - Curso
   - Fecha de creación

2. **Haz clic en "Generar Informe PDF"**

3. **Previsualiza** el documento generado

4. **Descarga** tu informe personalizado

## 📁 Estructura del Proyecto

```
generadorPDF/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos CSS con animaciones
├── script.js           # Lógica JavaScript
├── README.md           # Documentación del proyecto

```

## 🔧 Funcionalidades Técnicas

### Validación de Formularios
- Validación en tiempo real con indicadores visuales
- Expresiones regulares para validación de email
- Campos obligatorios con mensajes de error
- Límites de edad (10-120 años)

### Generación de PDF
- Diseño profesional con colores institucionales
- Texto adaptativo para descripciones largas
- Elementos gráficos (líneas, rectángulos, degradados)
- Formateo de fechas en español argentino

### Experiencia de Usuario
- Animaciones CSS3 suaves
- Efectos hover interactivos
- Previsualización en iframe
- Descarga con nombres personalizados

## 🎨 Personalización

### Colores
```css
/* Paleta de colores principal */
:root {
    --primary-orange: #ff7518;
    --secondary-orange: #ff9a56;
    --light-orange: #ffcc80;
    --dark-orange: #d2691e;
}
```

### Fuentes y Tamaños
```css
/* Configuración de tipografía */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}
```

## 🔄 Roadmap

- [ ] **v2.0**: Plantillas múltiples de informe
- [ ] **v2.1**: Exportación a Word (.docx)
- [ ] **v2.2**: Guardado en la nube
- [ ] **v2.3**: Firma digital
- [ ] **v2.4**: Colaboración en tiempo real
- [ ] **v2.5**: Integración con Google Classroom

## 🐛 Problemas Conocidos

- La previsualización puede tardar unos segundos en navegadores más lentos
- Los PDFs se generan del lado del cliente, por lo que requieren JavaScript habilitado

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Cande Molinari**
- GitHub: [Candex22](https://github.com/Candex22)
- Email: candemolinari20@gmail.com

## 📞 Soporte

Si tienes alguna pregunta o problema:

1. Revisa los [Issues](https://github.com/Candex22/generador-informe-pdf/issues) existentes
2. Crea un nuevo issue si no encuentras solución
3. Contacta por email: candemolinari20@gmail.com

---

⭐ **¡No olvides dar una estrella si te gustó el proyecto!** ⭐

*Desarrollado con 🧡 y mucho sueño*
