function statsJS(page) {
    console.log('Welcome to statsPage.js!');
    
    // Structuring Stats Page
    let bodyDiv = body.append('dkv').classed('bodyDiv', true);
    let bodyHeader = bodyDiv.append('h3').classed('bodyHeader', true).text('Basic Statistics');
    let bodyText = bodyDiv.append('p').classed('bodyText', true);
    bodyText.html('');
};