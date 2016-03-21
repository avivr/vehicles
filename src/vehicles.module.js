import angular from 'angular';
import brands from './brands';

angular.module('vehicles', ['ngMaterial', 'bootstrapLightbox'])
    .component('vehiclesGrid', {
        template: require('./vehicles-grid.tpl.html'),
        controller: function(Lightbox, $log) {
            var ctrl = this;

            ctrl.brands = brands;


            ctrl.selectBrand = function(brand) {
                $log.debug(brand);
                ctrl.openLightboxModal(0);
            };
            
            var images = brands.map(brand => ({
              url: brand.logo  
            }));
            
            ctrl.openLightboxModal = function(index) {
                Lightbox.openModal(images, index);
            };
        }
    });
