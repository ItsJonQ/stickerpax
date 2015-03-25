import Ember from 'ember';
import layout from '../templates/components/spx-booster';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['spx__booster'],
  stickers: null,

  hasStickers: Ember.computed.notEmpty('stickers')
});
