FROM httpd:2.4-alpine

WORKDIR /usr/local/apache2/htdocs/

COPY dist/ /usr/local/apache2/htdocs/

EXPOSE 80
