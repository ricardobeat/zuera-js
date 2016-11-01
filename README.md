# zuera.js

*NSFW*

Validate your brazilian users' personal data according to the new government's [official rules](http://datasus.saude.gov.br/images/standalone/REGRAS%20DE%20HIGIENIZA%C3%87%C3%83O%20E%20QUALIFICA%C3%87%C3%83O%20DE%20INFORMA%C3%87%C3%95ES%20DO%20CADASTRO%20NACIONAL%20DE%20USU%C3%81RIOS%20DO%20SUS.pdf) (see page 25) on data sanitization.

The module exports an array of invalid data strings, extended with a special contains() method. String normalization (removing diacritics) is performed automatically.

## Usage

    var zuera = require('zuerajs')

    zuera.contains('PASTEL DE PELO') // true
