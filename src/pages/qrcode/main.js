export default () => {
    const resetContainer = document.createElement('div');
    resetContainer.setAttribute('class', 'container');

    const template = `
    
    <h1 class='start'>QR code</h1>
    
      `;
    resetContainer.innerHTML = template;

    return resetContainer;
}