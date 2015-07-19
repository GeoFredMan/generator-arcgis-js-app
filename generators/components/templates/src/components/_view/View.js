import declare from 'dojo/_base/declare';
import domConstruct from 'dojo/dom-construct';

import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';

import i18n from 'dojo/i18n!./nls/<%=name%>';
import template from 'dojo/text!./templates/<%=name%>.html';

export default declare([
  _WidgetBase, _TemplatedMixin
], {

  templateString: template,
  baseClass: '<%=_.slugify(name)%>'

});
