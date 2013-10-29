requirejs.config({
  baseUrl: './src',
  paths: {
    'angular': '../vendor/angular/angular'
  },
  include: [
    "angular"
  ],
  priority: [
    "angular"
  ]
});
