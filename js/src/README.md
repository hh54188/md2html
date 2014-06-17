# Markdown.js API

## TO XML

**Converts the given JsonML into well-formed XML.**

- renderJsonML( jsonml[, options] ) -> String
   - jsonml (Array): JsonML array to render to XML
   - options (Object): options
      - root (Boolean): wether or not the root node should be included in the output, or just its children. The default `false` is to not include the root itself.



## TO HTML

**Take markdown (either as a string or as a JsonML tree) and run it through `toHTMLTree` then turn it into a well-formated HTML fragment.**

- toHTML( markdown, [dialect]  ) -> String
- toHTML( md_tree ) -> String
   - markdown (String): markdown string to parse
   - md_tree (Markdown.JsonML): parsed markdown tree



## TO JSONML

**Turn markdown into HTML, represented as a JsonML tree.**

- toHTMLTree( markdown, [dialect] ) -> JsonML
- toHTMLTree( md_tree ) -> JsonML
   - markdown (String): markdown string to parse
   - dialect (String | Dialect): the dialect to use, defaults to gruber
   - md_tree (Markdown.JsonML): parsed markdown tree



**Parse `markdown` and return a markdown document as a Markdown.JsonML tree.**

- parse( markdown, [dialect] ) -> JsonML
   - markdown (String): markdown string to parse
   - dialect (String | Dialect): the dialect to use, defaults to gruber


**Parse `source` into a JsonML tree representing the markdown document.**

- Markdown#toTree( source ) -> JsonML
   - source (String): markdown source to parse   


## OTHER
  
**Counts the number of linebreaks in `str`**

- count_lines( str ) -> count
   - str (String): String whose lines we want to count


 
**Process `block` and return an array of JsonML nodes representing `block`.**

- Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
   - block (String): the block to process
   - next (Array): the following blocks
 
 
It does this by asking each block level function in the dialect to process the block until one can. Succesful handling is indicated by returning an array (with zero or more JsonML nodes), failure by a false value.
 
Blocks handlers are responsible for calling `Markdown#processInline` themselves as appropriate.
 
If the blocks were split incorrectly or adjacent blocks need collapsing you can adjust `next` in place using shift/splice etc.
 
If any of this default behaviour is not right for the dialect, you can define a `__call__` method on the dialect that will get invoked to handle the block processing.

   
  
   
   
   