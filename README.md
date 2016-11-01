# zuera.js

*NSFW*

Validate your brazilian users' personal data according to the new government's [official rules](http://datasus.saude.gov.br/images/standalone/REGRAS DE HIGIENIZAÇÃO E QUALIFICAÇÃO DE INFORMAÇÕES DO CADASTRO NACIONAL DE USUÁRIOS DO SUS.pdf) (see page 25) on data sanitization.

The module exports an array of invalid data strings, extended with a special contains() method. String normalization (removing diacritics) is performed automatically.

## Usage

    var zuera = require('zuerajs')

    zuera.contains('PASTEL DE PELO') // true
