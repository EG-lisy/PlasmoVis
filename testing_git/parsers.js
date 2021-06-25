
parsers = function () {
    var parsers = {
        version: "1.0"
    };

      //Return length of a chromosome, substraying the title
  parsers.parse_fasta = function(chromosomeName, chromosomeLength, lineLength, onError, chromosomeSignature) {

    // catch empty string
    if (!chromosomeLength || !chromosomeName) {
      console.log("Empty String !");
      return [];
    }
    //Split by line if the text is not an array already
    var label = chromosomeName;
    var length = chromosomeLength - label.length;

    var retrieve = 0;
    if (label.slice(-1) === '\r') {
      retrieve = 2 * (Math.round(length / lineLength) - 1) - 1;

    } else {
      retrieve = (Math.round(length / lineLength) - 1) - 1;

    }

    if (chromosomeSignature.use) {
      var expression = chromosomeSignature.begins + "([A-Za-z0-9])*(?=" + chromosomeSignature.ends + ")";
      var rx = new RegExp(expression, 'i');

      if (label.match(rx)) {
        label = label.match(rx)[0];
        label = label.replace(chromosomeSignature.begins, '');
        label = this.numberInChromosome(label);

      } else {
        console.log("Ignored Fasta Sequence, doesn't match given signature")
        return [];
      }



    } else {
      label = this.numberInChromosome(label.slice(1));
    }


        //Add last entry to list_chromosome_length

        length = length - retrieve;
        var chromosome_length;
        if (length < 2) {
          var Error_Chromosome = label;
          chromosome_length = [label, 0];
          onError({
            message: Error_Chromosome,
            severity: 'warn'
          });
    
        } else {
          chromosome_length = [label, length];
        }
    
        return chromosome_length;
      }
    


    parsers.getVCFHeader = function (file, format, e, selectedFasta, callback, onError) {
        var CHUNK_SIZE = 1000000; // 50kb, arbitrarily chosen.


        var decoder = new TextDecoder();
        var results = '';
        var fr = new FileReader();
        var lastLine = '';
        fr.onload = function () {


            // Use stream:true in case we cut the file
            // in the middle of a multi-byte character
            results = decoder.decode(fr.result, {
                stream: false
            });
            //console.log(results);

            //console.log(results.lastIndexOf("\n"));
            var lengthLastLine = results.length - 1 - results.lastIndexOf("\n");
            //console.log("Length of Last line : "+lengthLastLine);
            lastLine = results.slice(results.lastIndexOf("\n"));
            //console.log("Last line : " + lastLine);
            results = results.slice(0, -(lengthLastLine + 1));

            lines = results.split("\n")

            columnIndex = {};
