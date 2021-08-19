/* eslint-disable no-extend-native */

String.prototype.removeDiacritics = function () {
  return this.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
