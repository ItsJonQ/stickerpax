import Ember from 'ember';
import layout from '../templates/components/spx-sticker';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['stickerpax__sticker'],
  data: null,

  hasImage: Ember.computed.notEmpty('data.image')
});
