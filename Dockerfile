FROM busybox

MAINTAINER Larry Chen <chendachao@outlook.com>

WORKDIR /var/www

RUN mkdir -p /var/www/stone
ADD dist /var/www/stone
