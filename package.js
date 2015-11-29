Package.describe({
  name: 'ericmcgregor:bootstrap4scss',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'meteor implementation of bootstrap 4 scss',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ericmcgregor/bootstrap4scss.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
  	'fourseven:scss@3.4.1',
    'jquery',
  ]);

  api.add_files('bootstrap/dist/js/bootstrap.js', "client");

  api.add_files([
      'bootstrap/scss/mixins/_alert.scss',
      'bootstrap/scss/mixins/_background-variant.scss',
      'bootstrap/scss/mixins/_border-radius.scss',
      'bootstrap/scss/mixins/_breakpoints.scss',
      'bootstrap/scss/mixins/_buttons.scss',
      'bootstrap/scss/mixins/_center-block.scss',
      'bootstrap/scss/mixins/_clearfix.scss',
      'bootstrap/scss/mixins/_forms.scss',
      'bootstrap/scss/mixins/_gradients.scss',
      'bootstrap/scss/mixins/_grid-framework.scss',
      'bootstrap/scss/mixins/_grid.scss',
      'bootstrap/scss/mixins/_hide-text.scss',
      'bootstrap/scss/mixins/_hover.scss',
      'bootstrap/scss/mixins/_image.scss',
      'bootstrap/scss/mixins/_label.scss',
      'bootstrap/scss/mixins/_list-group.scss',
      'bootstrap/scss/mixins/_nav-divider.scss',
      'bootstrap/scss/mixins/_navbar-align.scss',
      'bootstrap/scss/mixins/_pagination.scss',
      'bootstrap/scss/mixins/_progress.scss',
      'bootstrap/scss/mixins/_pulls.scss',
      'bootstrap/scss/mixins/_reset-filter.scss',
      'bootstrap/scss/mixins/_reset-text.scss',
      'bootstrap/scss/mixins/_resize.scss',
      'bootstrap/scss/mixins/_responsive-visibility.scss',
      'bootstrap/scss/mixins/_screen-reader.scss',
      'bootstrap/scss/mixins/_size.scss',
      'bootstrap/scss/mixins/_tab-focus.scss',
      'bootstrap/scss/mixins/_table-row.scss',
      'bootstrap/scss/mixins/_text-emphasis.scss',
      'bootstrap/scss/mixins/_text-truncate.scss'
    ],
    "client", {
      isImport: true
    }
  )

  api.addFiles([
      'bootstrap/scss/_alert.scss',
      'bootstrap/scss/_animation.scss',
      'bootstrap/scss/_breadcrumb.scss',
      'bootstrap/scss/_button-group.scss',
      'bootstrap/scss/_buttons.scss',
      'bootstrap/scss/_card.scss',
      'bootstrap/scss/_carousel.scss',
      'bootstrap/scss/_close.scss',
      'bootstrap/scss/_code.scss',
      'bootstrap/scss/_custom-forms.scss',
      'bootstrap/scss/_dropdown.scss',
      'bootstrap/scss/_forms.scss',
      'bootstrap/scss/_grid.scss',
      'bootstrap/scss/_images.scss',
      'bootstrap/scss/_input-group.scss',
      'bootstrap/scss/_jumbotron.scss',
      'bootstrap/scss/_labels.scss',
      'bootstrap/scss/_list-group.scss',
      'bootstrap/scss/_media.scss',
      'bootstrap/scss/_mixins.scss',
      'bootstrap/scss/_modal.scss',
      'bootstrap/scss/_nav.scss',
      'bootstrap/scss/_navbar.scss',
      'bootstrap/scss/_normalize.scss',
      'bootstrap/scss/_pager.scss',
      'bootstrap/scss/_pagination.scss',
      'bootstrap/scss/_popover.scss',
      'bootstrap/scss/_print.scss',
      'bootstrap/scss/_progress.scss',
      'bootstrap/scss/_reboot.scss',
      'bootstrap/scss/_responsive-embed.scss',
      'bootstrap/scss/_tables.scss',
      'bootstrap/scss/_tooltip.scss',
      'bootstrap/scss/_type.scss',
      'bootstrap/scss/_utilities-responsive.scss',
      'bootstrap/scss/_utilities-spacing.scss',
      'bootstrap/scss/_utilities.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/bootstrap-grid.scss',
      'bootstrap/scss/bootstrap-reboot.scss'
    ],
    "client", {
      isImport: true
    }
  )

  api.add_files('bootstrap.scss', "client", {isImport:true});

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ericmcgregor:bootstrap4scss');
  api.addFiles('bootstrap4scss-tests.js');
});
