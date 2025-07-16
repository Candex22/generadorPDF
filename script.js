// Función para generar el informe PDF
async function generateReport() {
    // Validar que todos los campos estén completos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const project = document.getElementById("project").value.trim();
    const about = document.getElementById("about").value.trim();
    const course = document.getElementById("course").value.trim();
    const date = document.getElementById("date").value.trim();

    // Validación básica
    if (!name || !email || !age || !project || !about || !course || !date) {
        alert("⚠️ Por favor, completa todos los campos antes de generar el informe.");
        return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("⚠️ Por favor, ingresa un email válido.");
        return;
    }

    try {
        // Crear nueva instancia de jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Configurar colores y fuentes
        const orangeColor = [255, 117, 24]; 
        const darkOrange = [210, 105, 30]; 
        const lightOrange = [255, 204, 128]; 

        // Encabezado del documento
        doc.setFillColor(...orangeColor);
        doc.rect(0, 0, 210, 30, 'F'); 

        // Título principal
        doc.setTextColor(255, 255, 255); 
        doc.setFontSize(22);
        doc.text("INFORME DE PROYECTO", 105, 20, { align: 'center' });

        // Información de la escuela
        doc.setFontSize(10);
        doc.text("EEST N.º 1 - Eduardo Ader - Vicente López", 105, 25, { align: 'center' });

        // Línea decorativa
        doc.setDrawColor(...darkOrange);
        doc.setLineWidth(2);
        doc.line(20, 35, 190, 35);

        // Configurar texto para el contenido
        doc.setTextColor(0, 0, 0); 
        doc.setFontSize(12);

        // Sección de datos personales
        doc.setFontSize(16);
        doc.setTextColor(...darkOrange);
        doc.text("DATOS PERSONALES", 20, 50);

        // Línea bajo el subtítulo
        doc.setDrawColor(...lightOrange);
        doc.setLineWidth(1);
        doc.line(20, 52, 100, 52);

        // Información del usuario
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        
        doc.text("Nombre Completo:", 20, 65);
        doc.text(name, 70, 65);
        
        doc.text("Correo Electrónico:", 20, 75);
        doc.text(email, 70, 75);
        
        doc.text("Edad:", 20, 85);
        doc.text(age + " años", 70, 85);
        
        doc.text("Curso:", 20, 95);
        doc.text(course, 70, 95);

         // Sección de proyecto
        doc.setFontSize(16);
        doc.setTextColor(...darkOrange);
        doc.text("INFORMACIÓN DEL PROYECTO", 20, 115);

        // Línea bajo el subtítulo
        doc.setDrawColor(...lightOrange);
        doc.setLineWidth(1);
        doc.line(20, 117, 140, 117);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Descripción:", 20, 130);
        const startX = 70; 
        const startY = 130; 
        const maxWidth = 120;
        const descriptionLines = doc.splitTextToSize(about, maxWidth);
        doc.text(descriptionLines, startX, startY, {lineHeightFactor: 1.2});

        // Configuración para la fecha
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Fecha de Creación:", 20, startY + (descriptionLines.length * 6)); 
        doc.text(formatDate(date), 70, startY + (descriptionLines.length * 6));

        // Pie de página
        doc.setFillColor(...lightOrange);
        doc.rect(0, 270, 210, 25, 'F');

        doc.setFontSize(10);
        doc.setTextColor(...darkOrange);
        doc.text("Proyecto de Implementación de Sitios Web Dinámicos", 105, 285, { align: 'center' });

        // Decoración adicional - rectángulos naranjas
        doc.setFillColor(...orangeColor);
        doc.rect(15, 40, 4, 200, 'F');
        doc.rect(191, 40, 4, 200, 'F');

        // Generar y mostrar el PDF
        const pdfDataUri = doc.output("datauristring");
        
        // Mostrar el PDF en un iframe
        const iframe = `<iframe width="100%" height="600px" src="${pdfDataUri}" style="border: none;"></iframe>`;
        
        document.getElementById("reportContainer").innerHTML = `
            <h3 style="color: #d2691e; margin-bottom: 15px;">✅ ¡Informe generado exitosamente!</h3>
            ${iframe}
            <div style="margin-top: 15px; text-align: center;">
                <button onclick="downloadPDF()" style="background: linear-gradient(135deg, #ff7518, #ff9a56); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold;">
                    💾 Descargar PDF
                </button>
            </div>
        `;

        // Guardar el PDF globalmente para descarga
        window.currentPDF = doc;

    } catch (error) {
        console.error("Error al generar el PDF:", error);
        alert("❌ Error al generar el informe. Por favor, intenta nuevamente.");
    }
}

// Función para descargar el PDF
function downloadPDF() {
    if (window.currentPDF) {
        const name = document.getElementById("name").value.trim();
        const filename = `Informe_${name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        window.currentPDF.save(filename);
    }
}

// Función para formatear la fecha
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'America/Argentina/Buenos_Aires'
    };
    return date.toLocaleDateString('es-AR', options);
}

// Función para obtener la hora actual
function getCurrentTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires'
    };
    return now.toLocaleTimeString('es-AR', options);
}

// Función para generar un ID único
function generateUserId() {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 5);
    return `USR-${timestamp}-${randomStr}`.toUpperCase();
}

// Función para establecer la fecha actual por defecto
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
    
    // Agregar efectos de animación al cargar
    setTimeout(() => {
        document.querySelector('.container').style.animation = 'slideIn 0.8s ease-out';
    }, 100);
});

// Validación en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.validity.valid) {
                this.style.borderColor = '#4CAF50';
            } else {
                this.style.borderColor = '#ff4444';
            }
        });
    });
});

// Efecto de escritura para el título
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});