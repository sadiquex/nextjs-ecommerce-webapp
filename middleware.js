/*
 put this file on the same level as the /app
*/

// without a default matcher, this line applies next-auth to the entire application
export { default } from "next-auth/middleware";

// apply next auth to matching pages - can be regex
export const config = { matcher: ["/products"] };
