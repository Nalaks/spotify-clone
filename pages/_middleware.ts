import { NextResponse } from "next/server";
import { MiddlewareReq } from "../types/types";

const signedInPages = ["/", "/playlist", "/library"];

const middleware = (req: MiddlewareReq) => {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin ");
    }
  }
};

export default middleware;
