# mfi-ngx-pipes

Angular utility library providing extra predefined pipes. Built on top of Angular 15.

# Getting started

## Installation
```bash
npm install mfi-ngx-pipes
```

## Usage
1. Import NgxPipes module in desired module/component:
```ts
@NgModule({
  ...
  imports: [
    NgxPipesModule,
  ],
})
```

2. Apply desired pipe for string:
```html
<p>{{ article | preventOrphans }}</p>
```
