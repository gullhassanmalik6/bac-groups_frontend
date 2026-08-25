FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
ARG VITE_API_BASE_URL=
ARG VITE_SITE_URL=
ARG VITE_CONTACT_EMAIL=info@bacgroupsa.com
ARG VITE_CONTACT_PHONE=+966599000789
ARG VITE_VAT_NUMBER=3110625023
ARG VITE_CR_NUMBER=7026169222
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL \
    VITE_SITE_URL=$VITE_SITE_URL \
    VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL \
    VITE_CONTACT_PHONE=$VITE_CONTACT_PHONE \
    VITE_VAT_NUMBER=$VITE_VAT_NUMBER \
    VITE_CR_NUMBER=$VITE_CR_NUMBER
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY start-nginx.sh /start-nginx.sh
RUN chmod +x /start-nginx.sh
EXPOSE 80
CMD ["/start-nginx.sh"]
