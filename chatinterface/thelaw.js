function openChatbot(link) {
    // Hide all iframes
    const iframes = document.querySelectorAll('.box iframe');
    iframes.forEach(iframe => {
        iframe.style.display = 'none';
    });

    // Show the clicked iframe
    const overlay = document.getElementById('chatbotOverlay');
    const iframe = document.getElementById('chatbotIframe');
    iframe.src = link;
    overlay.style.display = 'block';

    // Show the iframe in the clicked box
    const activeBox = event.currentTarget.querySelector('iframe');
    activeBox.style.display = 'block';
}