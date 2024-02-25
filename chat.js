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
headerText.textContent = 'Chat With Server of Web Class';
headerText.style.color = 'white';
headerText.style.fontSize = '3vh';
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
swap.style.width = '8%';
swap.style.height = '50%';


const middleContainer = document.createElement('div');
middleContainer.style.flexGrow = '1';
middleContainer.style.backgroundColor = 'rgba(0,0,0,0.6)';
middleContainer.style.borderRadius = '0 0 20px 20px';
middleContainer.style.margin = '0% 2% 2% 2%';



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
