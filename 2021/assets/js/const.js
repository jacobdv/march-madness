// Essentially just the setup of the SVG and chart sizes.
const svgHeight = '80%';
const svgWidth = '80%';
const chartHeight = '100%';
const chartWidth = '100%';
const margin = { top:20, right:40, bottom:80, left:100 };

// Transition stuff.
const duration = 1000;

// Adding the SVG and chart to the HTML.
// SVG Div
const svgDiv = d3 
    .select('body')
    .append('div')
    .attr('height', '100%')
    .attr('width','100%')
    .attr('id','#scatter');
// SVG
const svg = d3 
    .select('#scatter')
    .append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth);
// Chart Group to add axes and points to.
const chartGroup = svg 
    .append('g')
    .attr('transform',`translate(${margin.left}, ${margin.top})`);