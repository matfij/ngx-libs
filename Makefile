.ONESHELL:

pipes.test:
  ng test ngx-pipes
  ng build ngx-pipes --configuration development
  ng lint ngx-pipes

pipes.publish:
  ng build ngx-pipes
  cd dist/ngx-pipes
  npm publish
