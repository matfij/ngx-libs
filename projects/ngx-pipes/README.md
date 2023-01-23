# mfi-ngx-pipes

Angular utility library providing extra predefined pipes. Built on top of Angular 15.

# Getting started

## Installation
```bash
npm install mfi-ngx-pipes
```

## Usage
1. Import NgxPipes module or a signle pipe in your module or standalone component:
```ts
@NgModule({
  ...
  imports: [NgxPipesModule],
})
```
or
```ts
@Component({
  standalone: true,
  ...
  imports: [PreventOrphansPipe],
})
```
in case of import error make sure the module is imported in the following way:
```ts
import { NgxPipesModule, PreventOrphansPipe } from 'mfi-ngx-pipes';
```

2. Apply desired pipe for some value:
```html
<p>{{ article | preventOrphans }}</p>
```
You may also add argumenets to selected pipes:
```html
<p>{{ article | preventOrphans:myPattern }}</p>
```
```ts
export class AppComponent {
  myPattern = /(\s+)((?:[\S][\s]+)+\S{2,})/g;
}
```
