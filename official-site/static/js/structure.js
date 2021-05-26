// Selects body element to append all content into.
let body = d3.select('body');

// Header
let headerDiv = body.append('div').classed('headerDiv', true);
let title = body.append('h1').classed('title', true);
let navbarUL = body.append('ul').classed('navbarUL', true);
// Creates pages from list.
let pages = ['Home','Stats'];
pages.forEach(page => {
    let navbarLI = navbarUL.append('li').attr('value', page).classed('navbarLI', true);
    let navbarA = navbarLI.append('a').attr('value', page).classed('active', false).classed('inactive', true).text(page);
});

navbarUL.selectAll('li').on('click', function() {
    let selectedPage = d3.select(this);
    console.log(`Click. @navbar=> ${selectedPage.attr('value')}`);
    let navList = d3.selectAll('li').classed('active', false).classed('inactive', true);
    selectedPage.classed('active', true).classed('inactive', false);
    switch (selectedPage.attr('value')) {
        case 'Home':
            // Call home page.
            homeJS(selectedPage.attr('value'));
            break;
        case 'Stats':
            // Call basic stats page.
            statsJS(selectedPage.attr('value'));
            break;
    }
});

// Content
let bodyDiv = body.append('div').classed('bodyDiv', true);
let bodyHeader = bodyDiv.append('h3').classed('bodyHeader', true);

// Footer
let footerDiv = body.append('div').classed('footerDiv', true);
let zwazCitation = footerDiv.append('p').attr('id','zwazCitation');
let zwazLink = zwazCitation.append('a').attr('id','zwazLink').text('Zwaz | June 2021');