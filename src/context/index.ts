import express from "express";
import { IncomingHttpHeaders } from "http";
import { Helpers } from "../helpers";
import { RequestContext } from "./types";

interface ServerContext {
  req: express.Request;
  res: express.Response;
}

const getAuthToken = (headers: IncomingHttpHeaders): string =>
  headers["authorization"] ?? "";

export const context = (ctx: ServerContext): RequestContext => ({
  authToken: getAuthToken(ctx.req.headers),
  helpers: {} as Helpers,
});
