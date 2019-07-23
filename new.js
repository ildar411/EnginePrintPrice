var im = require('imagemagick');
var pdf2pic = require('pdf2pic');
var pdfParser = require('pdf2json');
var jPdf = require('j-pdfjson');
async function price(filename){
    function pages(filename){
        pdfParser.on('pdfParser_dataError', errData => console.error(errData));
        pdfParser.on('pdfParser_dataReady', pdfData => {
            console.log('число страниц: ' + pdfData.formImage.Pages.length)
        });
        pdfParser.loadPDF(filename);
        return pdfData.formImage.Pages.length
    }
    pgs =  pages(filename);
    console.log(pgs);
}
price('./aa.pdf');