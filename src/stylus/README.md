[#Stylys](http://stylus-lang.com/ "Stylus homepage")
Stylus is a dynamic stylesheet language that is compiled into Cascading Style Sheets (CSS). Its design is influenced by Sass and LESS. It's regarded as the [third most used CSS preprocessor syntax](https://css-tricks.com/poll-results-popularity-of-css-preprocessors/ "CSS-tricks.com"). It was created by TJ Holowaychuk, a former programmer for Node.js and the creator of the Luna language. It is written in JADE and Node.js.



## Folder structure
Boatless uses a "cherrypicked" combination of BEM and SMACSS.

<dl>
  <dt>`./base`</dt>
  <dd>The default styles for your site, think of an article- or search result page and their content.</dd>

  <dt>`./components`</dt>
  <dd>Components that can override styles from the basic form, these should be considered as individual "code blocks" but the use of components inside other components should also be considered. This could be achieved by not adding layout rules to the components themselves. Helpers could be included here as well.</dd>

  <dt>`./layout`</dt>
  <dd>Grids, custom component layouts, or helper classes (<em>.clearfix</em> etc.).</dd>

  <dt>`./settings`</dt>
  <dd>Settings could include <em>global colors</em> or other <em>global values</em> and mixins if needed.</dd>

  <dt>`./sources`</dt>
  <dd>This is the folder for the <em>main.css</em> -file and similar; it should be easier to manage multiple style sheet <em>versions</em> this way, keeping critical styles and global ones separated. You could of course also compile component based style bundles if desired.</dd>
</dl>


## Usage
This setup could be used to only include the components or base styles that are needed, this way minimizing the file size and complexity from the start. When compiling the `critical` CSS, one could include some `base` -elements, some `layout` -elements, and some "critical" `components` such as the site header and the banner area if such are used.


### Credits
#### HTML 5 Boilerplate
Nicolas Gallagher, Jonathan Neal, Kroc Camen, and the H5BP dev community and team.

#### Normalize.css
Normalize.css is a project by Nicolas Gallagher, co-created with Jonathan Neal.
