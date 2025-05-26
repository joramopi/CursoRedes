# Script para corregir el archivo TestUT1.html
$filePath = "c:\Users\joram\OneDrive\Documentos\GitHub\CursoRedes\TestUT1.html"
$backupPath = "$filePath.backup"
$tempPath = "$filePath.temp"

# Crear una copia de seguridad
Copy-Item -Path $filePath -Destination $backupPath -Force

# Leer el contenido actual
$content = Get-Content -Path $filePath -Raw

# Definir el nuevo encabezado de scripts
$newScriptHeader = @'
    <!-- Cargar dependencias -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.min.js"></script>
    <!-- Cargar las preguntas desde un archivo externo -->
    <script src="public/questions.js"></script>
'@

# Definir el nuevo código de inicialización
$newInitCode = @'
        // Usar las preguntas cargadas desde questions.js
        const allQuestions = window.quizQuestions || [];
        
        if (allQuestions.length === 0) {
            console.error('No se pudieron cargar las preguntas. Verifica que el archivo questions.js esté correctamente configurado.');
        }
'@

# Reemplazar el encabezado de scripts
$content = $content -replace '(?s)<!-- Cargar dependencias -->.*?<script>', $newScriptHeader

# Reemplazar la inicialización de preguntas
$content = $content -replace '(?s)const allQuestions = .*?;', $newInitCode

# Guardar el archivo temporal
$content | Out-File -FilePath $tempPath -Encoding utf8 -Force

# Reemplazar el archivo original
Move-Item -Path $tempPath -Destination $filePath -Force

Write-Host "Archivo corregido exitosamente. Se creó una copia de seguridad en $backupPath"
