document.body.style.margin = "10";
document.body.style.padding = "10";
document.documentElement.style.margin = "10";
document.documentElement.style.padding = "10";
document.body.style.backgroundColor = "rgba(20, 33, 61)";
document.body.style.overflow = "hidden";


const leftDiv = document.createElement('div');
const rightDiv = document.createElement('div');

leftDiv.style.width = "24%";
leftDiv.style.height = "90vh"; // 100% de la altura de la ventana
leftDiv.style.float = "left";
leftDiv.style.backgroundColor = "rgb(0,0,0,0.4)"; // Solo para diferenciar las secciones
leftDiv.style.borderRadius = "20px";
leftDiv.style.marginRight = "1%";

rightDiv.style.width = "75%";
rightDiv.style.height = "90vh";
rightDiv.style.float = "right";
rightDiv.style.backgroundColor = "rgb(0,0,0,0.5)"; // Solo para diferenciar las secciones
rightDiv.style.borderRadius = "20px";
rightDiv.style.display = 'flex';
rightDiv.style.flexDirection = 'column'; // Organiza los elementos hijos en una columna
rightDiv.style.justifyContent = 'space-between'; // Alinea los elementos hijos al final del contenedor
rightDiv.style.paddingBottom = '2%';

const container = document.createElement('div');
container.style.position = 'relative';
container.style.width = '96%';
container.style.height = '8%'; // Ajusta la altura según necesites
container.style.marginRight= '2%';
container.style.marginLeft= '2%';
container.style.borderRadius = '10px';
container.style.background = 'rgba(0, 0, 0, 0.4)';

const textField = document.createElement('input'); // Crea un nuevo elemento input
textField.type = 'text'; // Establece el tipo de input como text
textField.style.paddingLeft = '3%'; // Añade un padding de 10px
textField.style.paddingRight = '3%'; // Añade un padding de 10px
textField.style.fontSize = '2vh';
textField.placeholder = 'Type your message.....'; // Opcional: añade un placeholder
textField.style.position = "relative";
textField.style.height = "100%";
textField.style.width = "80%";
textField.style.marginLeft = "0%";
textField.style.background = "rgb(0,0,0,0.4)";
textField.style.color = "white";
textField.style.border = "none";
textField.style.flexGrow = "1";
textField.maxLength = 140;



const archivebutton = document.createElement('button');
archivebutton.textContent = '📁';
archivebutton.style.fontSize = '2vh';
archivebutton.style.position = 'relative';
archivebutton.style.right = '0';
archivebutton.style.top = '0';
archivebutton.style.width = '10%'; // Ajusta el ancho del botón según necesites
archivebutton.style.height = '100%';
archivebutton.style.border = 'none';
archivebutton.style.background = 'rgb(0,0,0,0.4)';
archivebutton.style.color = 'white';
archivebutton.style.borderRadius = '10px 0 0 10px';

const sendButton = document.createElement('button');
sendButton.textContent = '⌲';
sendButton.style.fontSize = '2vh';
sendButton.style.position = 'relative';
sendButton.style.right = '0';
sendButton.style.top = '0';
sendButton.style.width = '10%'; // Ajusta el ancho del botón según necesites
sendButton.style.height = '100%';
sendButton.style.border = 'none';
sendButton.style.background = 'rgb(0,0,0,0.4)';
sendButton.style.color = 'white';
sendButton.style.borderRadius = '0 10px 10px 0';

const header = document.createElement('div');
header.style.position = 'relative';
header.style.width = '96%';
header.style.height = '10%'; // Ajusta la altura según necesites
header.style.margin = "2% 2% 0% 2%";
header.style.borderRadius = "20px 20px 0 0";
header.style.backgroundColor = "rgb(0, 0,0,0.4)";
header.style.display = 'flex'; // Activa Flexbox
header.style.alignItems = 'center'; // Opcional: centra los elementos verticalmente
header.style.justifyContent = 'space-between'; // Opcional: espacia los elementos uniformemente


const headerText = document.createElement('h1');
headerText.textContent = 'Chat of class';
headerText.style.color = 'white';
headerText.style.fontSize = '2vh';
headerText.style.fontFamily = 'Times New Roman';
headerText.style.textAlign = 'center';
headerText.style.flexGrow = '1';
headerText.style.margin = '0';


const swap = document.createElement('button');
swap.textContent = 'Swap';
swap.style.fontSize = '2vh';
headerText.style.fontFamily = 'Times New Roman';
swap.style.flexGrow = '0'; 
swap.style.margin = '2%';
swap.style.borderRadius = '10px';
swap.style.border = 'none';
swap.style.background = 'rgb(0,0,0,0.4)';
swap.style.color = 'white';
swap.style.width = '20%';
swap.style.height = '50%';


const middleContainer = document.createElement('div');
middleContainer.style.flexGrow = '0.8';
middleContainer.style.backgroundColor = 'rgba(0,0,0,0.6)';
middleContainer.style.borderRadius = '0 0 20px 20px';
middleContainer.style.margin = '0% 2% 2% 2%';
middleContainer.style.overflowY = 'scroll';



const textfieldforchat = document.createElement('input');
textfieldforchat.type = 'text'; // Establece el tipo de input como text
textfieldforchat.style.paddingLeft = '5%'; // Añade un padding de 10px
textfieldforchat.style.paddingRight = '3%'; // Añade un padding de 10px
textfieldforchat.style.fontSize = '2vh';
textfieldforchat.placeholder = 'Search'; // Opcional: añade un placeholder 
textfieldforchat.style.height = "5%";
textfieldforchat.style.width = "90%";
textfieldforchat.style.margin = "5%";
textfieldforchat.style.borderRadius = "10px";
textfieldforchat.style.background = "rgb(0,0,0,0.4)";
textfieldforchat.style.color = "white";
textfieldforchat.style.border = "none";




const card = document.createElement('button');
card.style.position = 'relative';
card.style.width = '90%';
card.style.height = '10%'; // Ajusta la altura según necesites
card.style.margin = "5%";
card.style.borderRadius = "10px";
card.style.backgroundColor = "rgb(0, 0,0,0.4)";
card.style.display = 'flex'; // Activa Flexbox
card.textContent = 'Chat Server of class';
card.style.fontSize = '2vh';
card.style.color = 'white';
card.style.padding = '10%';
card.style.alignItems = 'center'; // Opcional: centra los elementos verticalmente


// Suponiendo que tienes un elemento con id="chatContainer" para contener los mensajes

function addMessageToChat(username, message) {

    const messageElement = document.createElement('div');
    messageElement.style.borderRadius = '10px';
    messageElement.style.backgroundColor = 'rgba(0,0,0,0.1)';
    messageElement.style.color = 'white';
    messageElement.className = 'chat-message';
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    messageElement.style.padding = '2%';
    messageElement.style.margin = '1%';
    messageElement.style.maxWidth = '50%';
    messageElement.style.overflow = 'auto';
    messageElement.style.borderRadius = '10px';
    messageElement.style.wordWrap = 'break-word';

    if (username === 'Andy') {
      messageElement.style.marginLeft = 'auto';  // Move message to the right
      messageElement.style.backgroundColor = 'rgba(0,0,0,1)';
  }

    function isImageLink(text) {
        // Puedes mejorar esta lógica según tus necesidades
        return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(text);
      }
      const webLinkRegex = /(https?:\/\/[^\s]+)/gi;
      const matches = message.match(webLinkRegex);

      if (matches && matches.length > 0) {
          // If a web link is found, create a preview element
          const previewElement = document.createElement('div');
          
          // Use fetch to get information about the link
          fetch(matches[0])
              .then(response => response.text())
              .then(html => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(html, 'text/html');
                  const title = doc.querySelector('head title').textContent;

                  previewElement.innerHTML = `<a href="${matches[0]}" target="_blank">${title}</a>`;
                  previewElement.style.marginBottom = '5px';
                  messageElement.appendChild(previewElement);
              })
              .catch(error => {
                  console.error('Error fetching link information:', error);
                  previewElement.innerHTML = `Preview: <a href="${matches[0]}" target="_blank">${matches[0]}</a>`;
                  previewElement.style.marginBottom = '5px';
                  messageElement.appendChild(previewElement);
              });
      }



    
      // Si es un enlace a una imagen, mostrar la vista previa
      if (isImageLink(message)) {
        const imageElement = document.createElement('img');
        imageElement.src = message;
        imageElement.style.maxWidth = '100%';
        imageElement.style.height = 'auto';
        messageElement.appendChild(imageElement);
      } else {
        // Si no es un enlace a una imagen, mostrar el texto normal
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
      }
    

    messageElement.style.backgroundColor = 'rgba(0,0,0,1)';
    middleContainer.appendChild(messageElement);
    middleContainer.scrollTop = middleContainer.scrollHeight;
    
  }


  function initialChatLoad() {
    fetch('https://chat.tiburoncin.lat/messages')
        .then(response => response.json())
        .then(data => {
            const mensajesEnOrdenDescendente = data.reverse();
            mensajesEnOrdenDescendente.forEach(message => {
                addMessageToChat(message.username, message.message);
            });
            // Desplaza al final solo en la carga inicial
            middleContainer.scrollTop = middleContainer.scrollHeight;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


let lastMessageId = 0; // Asumiendo que los IDs de mensajes son numéricos y comienzan desde 1

function refreshChat() {
    fetch('https://chat.tiburoncin.lat/messages')
        .then(response => response.json())
        .then(data => {
            const mensajesEnOrdenDescendente = data.reverse();
            
            mensajesEnOrdenDescendente.forEach(message => {
                if (message.id > lastMessageId) {
                    addMessageToChat(message.username, message.message);
                    lastMessageId = message.id; // Actualizamos el ID del último mensaje añadido
                }
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}



document.addEventListener('DOMContentLoaded', function() {
  initialChatLoad(); // Carga inicial de mensajes
  setInterval(refreshChat, 5000); // Refresco automático cada 5 segundos
});






  sendButton.addEventListener('click', () => {
    sendMessage();
  });

  // Agrega un evento de tecla al campo de entrada
  textField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = textField.value.trim();
  
    if (message !== '') {
      // Puedes utilizar fetch para enviar el mensaje al servidor
      fetch('https://chat.tiburoncin.lat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'Andy', message: message }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          // Agrega el mensaje enviado al chat localmente
          addMessageToChat(Andy, message);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
  
      // Limpiar el campo de texto después de enviar el mensaje
      textField.value = '';
    }
  }
  
  function detectURLs(message) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    return message.match(urlRegex);
}
 
  


  fetch('https://chat.tiburoncin.lat/messages')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {

        const mensajesEnOrdenDescendente = data.reverse();

        mensajesEnOrdenDescendente.forEach(message => {
            addMessageToChat(message.username, message.message);
        });
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

    let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}


function applyTheme(darkMode) {
    if (darkMode) {
        document.body.style.backgroundColor = 'rgba(20, 33, 61)';
        document.body.style.color = 'white';
        leftDiv.style.backgroundColor = "rgb(0,0,0,0.4)"; 
        middleContainer.style.backgroundColor = 'rgba(0,0,0,0.6)';
        rightDiv.style.backgroundColor = "rgb(0,0,0,0.5)"; 
        container.style.background = 'rgba(0, 0, 0, 0.4)';
        sendButton.style.background = 'rgb(0,0,0,0.4)';
        textField.style.background = "rgb(0,0,0,0.4)";
        archivebutton.style.background = 'rgb(0,0,0,0.4)';
        header.style.backgroundColor = "rgb(0, 0,0,0.4)";
        swap.style.background = 'rgb(0,0,0,0.4)';
        textfieldforchat.style.background = "rgb(0,0,0,0.4)";
    } else {
        document.body.style.backgroundColor = 'rgba(254, 250, 224)';
        document.body.style.color = 'white';
        container.style.backgroundColor = 'rgba(254, 250, 224)';
        leftDiv.style.backgroundColor = 'rgba(204, 213, 174)';
        rightDiv.style.backgroundColor = 'rgba(204, 213, 174)';
        middleContainer.style.backgroundColor = 'rgba(250, 237, 205)';
        sendButton.style.background = 'rgb(250, 237, 205)';
        textField.style.background = "rgb(250, 237, 205)";
        archivebutton.style.background = 'rgb(250, 237, 205)';
        header.style.backgroundColor = "rgb(250, 237, 205, 0.5)";
        swap.style.background = 'rgb(250, 237, 205)';
        textfieldforchat.style.background = "rgb(250, 237, 205)";
        
        
    }
}


// Aplicar el tema al cargar la página
applyTheme(isDarkMode);

// Agregar evento al botón "Swap"
swap.addEventListener('click', toggleTheme);


document.body.appendChild(leftDiv);
document.body.appendChild(rightDiv);
rightDiv.appendChild(header);
rightDiv.appendChild(middleContainer);
rightDiv.appendChild(container);
container.appendChild(archivebutton);
container.appendChild(textField);
container.appendChild(sendButton);
header.appendChild(headerText);
header.appendChild(swap);
leftDiv.appendChild(textfieldforchat);
leftDiv.appendChild(card);

