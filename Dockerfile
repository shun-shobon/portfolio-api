FROM node:14 as build

WORKDIR /work

ENV HUSKY=0

COPY package.json pnpm-lock.yaml /work/
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . /work/
RUN pnpm generate && pnpm build


FROM node:14 as stage

WORKDIR /work

ENV HUSKY=0 \
    NODE_ENV="production"

COPY --from=build /work/package.json /work/pnpm-lock.yaml /work/info.yml /work/
COPY --from=build /work/dist /work/dist

RUN npm install -g pnpm && pnpm install --frozen-lockfile


FROM gcr.io/distroless/nodejs:14

ENV NODE_ENV="production"

WORKDIR /app

COPY --from=stage /work/ /app/

CMD ["dist/index.js"]