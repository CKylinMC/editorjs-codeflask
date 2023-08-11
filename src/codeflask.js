
 /**
  * EditorJsCodeFlask Block for the Editor.js.
  *
  * @author Calum Knott (calum@calumk.com)
  * @license The MIT License (MIT)
  */
 
 /**
  * @typedef {object} EditorJsCodeFlaskConfig
  * @property {string} placeholder - placeholder for the empty EditorJsCodeFlask
  * @property {boolean} preserveBlank - Whether or not to keep blank EditorJsCodeFlasks when saving editor data
  */
 
 /**
  * @typedef {Object} EditorJsCodeFlaskData
  * @description Tool's input and output data format
  * @property {String} text — EditorJsCodeFlask's content. Can include HTML tags: <a><b><i>
  */

  import './codeflask.css'
  import icon from './codeflask.svg';

  import Prism from 'prismjs';

  // import "prismjs-components-importer/esm"; // ALL - Massivly Increases Bundle size!

  import "prismjs-components-importer/esm/prism-css";
  import "prismjs-components-importer/esm/prism-javascript";
  import "prismjs-components-importer/esm/prism-apacheconf";
  import "prismjs-components-importer/esm/prism-applescript";
  import "prismjs-components-importer/esm/prism-asciidoc";
  import "prismjs-components-importer/esm/prism-autohotkey";
  import "prismjs-components-importer/esm/prism-autoit";
  import "prismjs-components-importer/esm/prism-bash";
  import "prismjs-components-importer/esm/prism-basic";
  import "prismjs-components-importer/esm/prism-batch";
  import "prismjs-components-importer/esm/prism-bbcode";
  import "prismjs-components-importer/esm/prism-c";
  import "prismjs-components-importer/esm/prism-csharp";
  import "prismjs-components-importer/esm/prism-cpp";
  import "prismjs-components-importer/esm/prism-clojure";
  import "prismjs-components-importer/esm/prism-cmake";
  import "prismjs-components-importer/esm/prism-css-extras";
  import "prismjs-components-importer/esm/prism-csv";
  import "prismjs-components-importer/esm/prism-dart";
  import "prismjs-components-importer/esm/prism-diff";
  import "prismjs-components-importer/esm/prism-django";
  import "prismjs-components-importer/esm/prism-dns-zone-file";
  import "prismjs-components-importer/esm/prism-docker";
  import "prismjs-components-importer/esm/prism-dot";
  import "prismjs-components-importer/esm/prism-editorconfig";
  import "prismjs-components-importer/esm/prism-ejs";
  import "prismjs-components-importer/esm/prism-excel-formula";
  import "prismjs-components-importer/esm/prism-flow";
  import "prismjs-components-importer/esm/prism-go";
  import "prismjs-components-importer/esm/prism-glsl";
  import "prismjs-components-importer/esm/prism-graphql";
  import "prismjs-components-importer/esm/prism-haskell";
  import "prismjs-components-importer/esm/prism-hlsl";
  import "prismjs-components-importer/esm/prism-http";
  import "prismjs-components-importer/esm/prism-hpkp";
  import "prismjs-components-importer/esm/prism-hsts";
  import "prismjs-components-importer/esm/prism-ignore";
  import "prismjs-components-importer/esm/prism-ini";
  import "prismjs-components-importer/esm/prism-java";
  import "prismjs-components-importer/esm/prism-javadoc";
  import "prismjs-components-importer/esm/prism-javadoclike";
  import "prismjs-components-importer/esm/prism-javastacktrace";
  import "prismjs-components-importer/esm/prism-jsdoc";
  import "prismjs-components-importer/esm/prism-jq";
  import "prismjs-components-importer/esm/prism-js-extras";
  import "prismjs-components-importer/esm/prism-json";
  import "prismjs-components-importer/esm/prism-jsonp";
  import "prismjs-components-importer/esm/prism-json5";
  import "prismjs-components-importer/esm/prism-jsstacktrace";
  import "prismjs-components-importer/esm/prism-js-templates";
  import "prismjs-components-importer/esm/prism-kotlin";
  import "prismjs-components-importer/esm/prism-latex";
  import "prismjs-components-importer/esm/prism-less";
  import "prismjs-components-importer/esm/prism-liquid";
  import "prismjs-components-importer/esm/prism-llvm";
  import "prismjs-components-importer/esm/prism-log";
  import "prismjs-components-importer/esm/prism-lua";
  import "prismjs-components-importer/esm/prism-makefile";
  import "prismjs-components-importer/esm/prism-markdown";
  import "prismjs-components-importer/esm/prism-matlab";
  import "prismjs-components-importer/esm/prism-mongodb";
  import "prismjs-components-importer/esm/prism-monkey";
  import "prismjs-components-importer/esm/prism-nginx";
  import "prismjs-components-importer/esm/prism-nsis";
  import "prismjs-components-importer/esm/prism-objectivec";
  import "prismjs-components-importer/esm/prism-opencl";
  import "prismjs-components-importer/esm/prism-perl";
  import "prismjs-components-importer/esm/prism-php";
  import "prismjs-components-importer/esm/prism-phpdoc";
  import "prismjs-components-importer/esm/prism-php-extras";
  import "prismjs-components-importer/esm/prism-powershell";
  import "prismjs-components-importer/esm/prism-protobuf";
  import "prismjs-components-importer/esm/prism-python";
  import "prismjs-components-importer/esm/prism-qsharp";
  import "prismjs-components-importer/esm/prism-q";
  import "prismjs-components-importer/esm/prism-qml";
  import "prismjs-components-importer/esm/prism-jsx";
  import "prismjs-components-importer/esm/prism-tsx";
  import "prismjs-components-importer/esm/prism-regex";
  import "prismjs-components-importer/esm/prism-renpy";
  import "prismjs-components-importer/esm/prism-rest";
  import "prismjs-components-importer/esm/prism-ruby";
  import "prismjs-components-importer/esm/prism-rust";
  import "prismjs-components-importer/esm/prism-sass";
  import "prismjs-components-importer/esm/prism-scss";
  import "prismjs-components-importer/esm/prism-scala";
  import "prismjs-components-importer/esm/prism-scheme";
  import "prismjs-components-importer/esm/prism-shell-session";
  import "prismjs-components-importer/esm/prism-sql";
  import "prismjs-components-importer/esm/prism-swift";
  import "prismjs-components-importer/esm/prism-toml";
  import "prismjs-components-importer/esm/prism-typescript";
  import "prismjs-components-importer/esm/prism-v";
  import "prismjs-components-importer/esm/prism-uri";
  import "prismjs-components-importer/esm/prism-unrealscript";
  import "prismjs-components-importer/esm/prism-vhdl";
  import "prismjs-components-importer/esm/prism-vim";
  import "prismjs-components-importer/esm/prism-visual-basic";
  import "prismjs-components-importer/esm/prism-wasm";
  import "prismjs-components-importer/esm/prism-wiki";
  import "prismjs-components-importer/esm/prism-xml-doc";
  import "prismjs-components-importer/esm/prism-yaml";
 

  import CodeFlask from 'codeflask';

  import NiceSelect from "nice-select2/dist/js/nice-select2";
  import NiceSelectStyle from "nice-select2/dist/css/nice-select2.css";




  // console.log(Prism.languages)


 
 class EditorJsCodeFlask {
   /**
    * Default placeholder for EditorJsCodeFlask Tool
    *
    * @return {string}
    * @constructor
    */
   static get DEFAULT_PLACEHOLDER() {
     return '// Hello';
   }

   static get enableLineBreaks() {
    return true;
  }
 
   /**
    * Render plugin`s main Element and fill it with saved data
    *
    * @param {object} params - constructor params
    * @param {EditorJsCodeFlaskData} params.data - previously saved data
    * @param {EditorJsCodeFlaskConfig} params.config - user config for Tool
    * @param {object} params.api - editor.js api
    * @param {boolean} readOnly - read only mode flag
    */
   constructor({data, config, api, readOnly}) {
    //  console.log(data)
     this.api = api;
     this.readOnly = readOnly;
 
     this._CSS = {
       block: this.api.styles.block,
       wrapper: 'ce-EditorJsCodeFlask',
       settingsButton: this.api.styles.settingsButton,
       settingsButtonActive: this.api.styles.settingsButtonActive,
     };
 
     if (!this.readOnly) {
       this.onKeyUp = this.onKeyUp.bind(this);
     }
 
     /**
      * Placeholder for EditorJsCodeFlask if it is first Block
      * @type {string}
      */
     this._placeholder = config.placeholder ? config.placeholder : EditorJsCodeFlask.DEFAULT_PLACEHOLDER;

     this._preserveBlank = config.preserveBlank !== undefined ? config.preserveBlank : false;

     this._element; // used to hold the wrapper div, as a point of reference

     this.langStatus = {};

     let languages = Object.keys(Prism.languages).sort(function (a, b) {
       return a.toLowerCase().localeCompare(b.toLowerCase());
     });
     for(let lang of languages){
      this.langStatus[lang] = lang == (data.language||'plain');
     }
 

     // let x = (x === undefined) ? your_default_value : x;
     this.data = {}
     this.data.code = (data.code === undefined) ? '// Hello World' : data.code;
     this.data.language = (data.language === undefined) ? 'plain' : data.language;
     this.data.showlinenumbers = (data.showlinenumbers === undefined) ? true : data.showlinenumbers;
     this.data.editorInstance = {}

    //  console.log(this.data)

   }
 
   /**
    * Check if text content is empty and set empty string to inner html.
    * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
    *
    * @param {KeyboardEvent} e - key up event
    */
   onKeyUp(e) {
     if (e.code !== 'Backspace' && e.code !== 'Delete') {
       return;
     }
 
     const {textContent} = this._element;
 
     if (textContent === '') {
       this._element.innerHTML = '';
     }
   }

 
   /**
    * Return Tool's view
    *
    * @returns {HTMLDivElement}
    */
   render() {

    this._element = document.createElement('div');
    this._element.classList.add('editorjs-codeFlask_Wrapper')
    let editorElem = document.createElement('div');
    editorElem.classList.add('editorjs-codeFlask_Editor')
    let langdisplay = document.createElement('div');
    langdisplay.classList.add('editorjs-codeFlask_LangDisplay')

    langdisplay.innerHTML = this.data.language

    this._element.appendChild(editorElem)
    this._element.appendChild(langdisplay)

    this.data.editorInstance = new CodeFlask(editorElem, { 
      language: this.data.language, 
      lineNumbers : this.data.showlinenumbers,
      readonly : this.readOnly
    });

    this.data.editorInstance.onUpdate((code) => {

      let _length = code.split('\n').length
      this._debounce(this._updateEditorHeight(_length))

    });

    this.data.editorInstance.addLanguage(this.data.language, Prism.languages[this.data.language]);
    this.data.editorInstance.updateCode(this.data.code);

    return this._element
   }

  _updateEditorHeight(length){

    let _height = (length * 21) + 10
    if (_height < 60){ _height = 60 }

    this._element.style.height = _height + 'px';
  }


  _debounce(func, timeout = 500){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

   renderSettings() {
    const settingsContainer = document.createElement('div');




    let languagesSelect = document.createElement("select");
    languagesSelect.classList.add("small");

    //sort available languages alphabetically (ignore case)
    let languages = Object.keys(Prism.languages).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    let btnArr = [];

    const setAllFalse = ()=>{
      for(var langItem of Object.keys(this.langStatus)){
        this.langStatus[langItem] = false;
      }
    }
    //Create and append the options
    for (var i = 0; i < languages.length; i++) {
        // Weirdly PrismJS doesnt expose a list of installed languages, or rather it does, but it is mixed with helper functions, which i have to clear here.
        if (languages[i] == "extend" || languages[i] == "insertBefore" || languages[i] == "DFS") {
          continue;
        }

        const lang = languages[i];

        btnArr.push({
          label: lang,
          isActive: this.langStatus[lang],
          closeOnActivate: true,
          toggle: false,
          onActivate: () => {
            setAllFalse();
            this.langStatus[lang] = true;
            this._updateLanguage(lang)
          }
        })
        // var option = document.createElement("option");
        // option.value = languages[i];
        // option.text = languages[i];
        // if(languages[i] == this.data.language){
        //   option.selected="selected"
        // }
        // languagesSelect.appendChild(option);
    }

    // languagesSelect.addEventListener('change', (event) => {
    //   this._updateLanguage(event.target.value)
    // });


    // Disabled until codeflask supports toggle of line numbers
    // const settingsButton = document.createElement('div');
    // settingsButton.classList.add(this._CSS.settingsButton);
    // settingsButton.innerHTML = '<small>123</small>'


    // settingsButton.addEventListener('click', (e) => {
    //   console.log(e)
    //   e.target.classList.toggle(this._CSS.settingsButtonActive)
    //   this._toggleLineNumbers()
    // });



    // settingsContainer.appendChild(languagesSelect);
    // new NiceSelect(languagesSelect, {searchable : true, placeholder : "Language..."});
    
    // settingsContainer.appendChild(settingsButton);

    return btnArr;
  }

  _toggleLineNumbers = (thing) => {
    this.data.showlinenumbers = !this.data.showlinenumbers

    // replace this with a native method for codeflask, if it gets implemented.
    // for now, we will completely destroy the codeflask instance, and rebuild it - lazy but effective


  }

  _updateLanguage = (lang) => {
    this.data.language = lang
    this._element.querySelector('.editorjs-codeFlask_LangDisplay').innerHTML = this.data.language
    this.data.editorInstance.updateLanguage(this.data.language)
  }
 

 
   /**
    * Extract Tool's data from the view
    * @param {HTMLDivElement} toolsContent - EditorJsCodeFlask tools rendered view
    * @returns {EditorJsCodeFlaskData} - saved data
    * @public
    */
   save(toolsContent) {
    let resp = {
      code : this.data.editorInstance.getCode(),
      language : this.data.language,
      showlinenumbers : this.data.showlinenumbers
    };
    
    return resp
   }
 
   /**
    * Returns true to notify the core that read-only mode is supported
    *
    * @return {boolean}
    */
   static get isReadOnlySupported() {
     return true;
   }

 
   /**
    * Icon and title for displaying at the Toolbox
    *
    * @return {{icon: string, title: string}}
    */
   static get toolbox() {
     return {
       icon: icon,
       title: 'CodeFlask'
     };
   }
 }
 
export { EditorJsCodeFlask as default }