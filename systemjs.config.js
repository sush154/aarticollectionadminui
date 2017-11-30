/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      //'@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      'angular2-fontawesome': 'npm:angular2-fontawesome',
      'angular2-toaster': 'npm:angular2-toaster/bundles/angular2-toaster.umd.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.min.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'ngx-pagination': 'https://npmcdn.com/ngx-pagination',
      'angular2-highcharts': 'node_modules/angular2-highcharts',
      'highcharts': 'node_modules/highcharts',
      "ng2-rating": "node_modules/ng2-rating",
      'angular2-loaders-css': 'node_modules/angular2-loaders-css',
      'ng2-file-upload' : 'npm:ng2-file-upload'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-fontawesome': { defaultExtension: 'js' },
      highcharts: {
        main: './highcharts.js',
        defaultExtension: 'js'
      },
      'angular2-highcharts': {
        main: './index.js',
        defaultExtension: 'js'
      },
      "ng2-rating": { "main": "index.js", "defaultExtension": "js" },
      'angular2-loaders-css': { main: 'index.js', defaultExtension: 'js' },
      'ng2-file-upload' : {
        main: './ng2-file-upload.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
