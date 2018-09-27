class DOMNodeCollection {

  constructor(arr) {
    this.htmlelements = arr;
  }

  html(str){
    if(str === undefined){
      return this.htmlelements[0].innerHTML;
    } else {
      this.htmlelements.forEach((el) => {
        el.innerHTML = str;
      });
    }
  }

  empty(){
    this.htmlelements.forEach((el) => {
      el.innerHTML = "";
    });
    return this.htmlelements;
  }

  append(arg){
    if(arg instanceof HTMLElement){
      this.htmlelements.forEach((el) => {
        el.innerHTML = el.innerHTML.concat(arg.outerHTML);
      });
    } else if(typeof(arg) === 'string'){
      this.htmlelements.forEach((el) => {
        el.innerHTML = el.innerHTML.concat(arg);
      });
    }
    else {
//domNodeCollection instance of
      this.htmlelements.forEach((el) => {
        for(let i = 0; i < arg.htmlelements.length; i++){
          el.innerHTML = el.innerHTML.concat(arg.htmlelements[i].outerHTML);
        }
      });
    }
  }

  attr(attribute, set){
    if(set === undefined){
      this.htmlelements.forEach((el) => {
        return el.attributes[attribute].nodeValue;
      });
    } else {
      this.htmlelements.forEach((el) => {
        el.attributes.createAttribute(attribute);
        el.attributes[attribute].nodeValue = set;
      });
    }
  }
}

module.exports = DOMNodeCollection;
