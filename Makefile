.ONESHELL:

pipes.test:
  ng test ngx-pipes
  ng lint ngx-pipes

pipes.publish:
  ng build ngx-pipes
  cd dist/ngx-pipes
  npm publish
