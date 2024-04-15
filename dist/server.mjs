import {
  registerForEvent
} from "./chunk-WJVSSVKO.mjs";
import {
  errorHandler
} from "./chunk-H2OG3LNC.mjs";
import {
  checkIn
} from "./chunk-66E3AGGV.mjs";
import {
  createEvent
} from "./chunk-4OI4NU6Y.mjs";
import "./chunk-XV6B7DUV.mjs";
import {
  getAttendeeBadge
} from "./chunk-H46K6ZSD.mjs";
import {
  getEventAttendees
} from "./chunk-FQVMN2GW.mjs";
import {
  getEvent
} from "./chunk-SPX7ECLH.mjs";
import "./chunk-6OJH4T5L.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in construida durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
