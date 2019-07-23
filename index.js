var im = require('imagemagick');
var pdf2pic = require('pdf2pic');
var jPdf = require('j-pdfjson'); 
function precent1(filename){
    var prom1 = new Promise((res, rej) => {  
      var pixlist;
      im.convert([filename, '-define', 'histogram:unique-colors=true',
      '-format', '%c', 'histogram:info:-'], (err, stdout) => {
        if(err) throw err;
        pixlist = stdout.split('\n');
        res(pixlist);
      });
    }).then(pixlist => {
      var whitePower = 0;
      pixlist.map(pix => {
        var pixel = pix.split(':');  
        var [number, prop] = pixel;
        if(prop){
          var startHex =prop.indexOf('#');
          var color = prop.slice(startHex, startHex+7);
          if(color == '#FFFFFF'){
          whitePower += +number;
          console.log(whitePoiwer);
            }
        }
        console.log(whitePower);
      })
             
      return whitePower;
    })
};
function precent(filename){
  var prom = new Promise((res, rej) => {
    async () => {
      var a = await precent1(filename);
      res(a);
    }
  }).then(a => {
    console.log(a);
    return a;
  })
};
a = precent('1_1.png');
console.log(a)
/*
pdfParser.on('pdfParser_dataError', errData => console.error(errData));
pdfParser.on('pdfParser_dataReady', pdfData => {
    console.log('число страниц: ' + pdfData.formImage.Pages.length)
});
pdfParser.loadPDF('./aa.pdf');
function price(numOfPageInPrinter, filename){ //filename or path examle './aa.pdf' string
  var pdfParser = new jPdf();
  var conv = new pdf2pic({
    denstity: 100,
    savename: 'untitled',
    savedir: './',
    format: 'jpg',
    size: 500
  });
  var prom2 = new Promise((res, rej) => {
    var precentsOfFillPage = [];
    im.identify('1.jpg', (err, features) => {
      if (err) throw err;
      console.log(features);
    });
  })
  var prom1 = new Promise((res, rej) => {
    var numPage;
    pdfParser.on('pdfParser_dataError', errData => console.error(errData));
    pdfParser.on('pdfParser_dataReady', pdfData => {
      numPage = pdfData.formImage.Pages.length;
      console.log('число страниц: ' + numPage);      
    });
    pdfParser.loadPDF('./aa.pdf'); //filename
    if(numPage < numOfPageInPrinter){
      res(numPage);
    }
    else{
      rej('Слишком большой документ для этого принтера');
    };
  })
  .then(numPage => {
    conv.convertBulk('./aa.pdf', -1) //filename
    .then(resolve => {
    console.log('image converted successfully');
    });
    var obj = numPage;
    return prom2;
  })
}*/