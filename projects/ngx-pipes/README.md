# mfi-ngx-pipes

Angular utility library providing extra predefined pipes. Built on top of Angular 15.

# Getting started

## Installation
```bash
npm install mfi-ngx-pipes
```

## Usage
1. Import desired pipe (standalone) in your module or component:
```ts
@NgModule({
  ...
  imports: [PreventOrphansPipe]
})
```
or
```ts
@Component({
  standalone: true,
  ...
  imports: [PreventOrphansPipe]
})
```

2. Apply desired pipe for some value:
```html
<p>{{ article | preventOrphans }}</p>
```
