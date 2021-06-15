# Iniciar u proyecto de git
git init

# Para enviar archivos al staging 
git add .
## Se grega punto al final para agregar todos los archivos al igual que se puede utilizar -A

# Crear commit con su mensaje
git commit -m "message"

# Agregar repositorio remoto, solo se hace la primera vez
git remote add origin https://github.com/jorgealbertogomezgomez77/bedu.git

# Enviar commits al servidor de Github
git push -u origin master