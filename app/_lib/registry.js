"use client";
/* 

[+] Global Registry component [+]

We collect all the CSS styles generated during render time and defined by us in the code, then return them. Why? To be able to use them accros all components by wrapping our app with the styled-components wrapper

*/

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({ children }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  //to inject the styles collected in the registry into the <head> HTML tag in the root layout.
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  // if window object is undefined just return the children plainly
  if (typeof window !== "undefined") return <>{children}</>;

  // if not, the children is wrapped by StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

/* 
Good to know:

1. During server rendering, styles will be extracted to a global registry and flushed to the <head> of your HTML. This ensures the style rules are placed before any content that might use them. In the future, we may use an upcoming React feature to determine where to inject the styles.

2. During streaming, styles from each chunk will be collected and appended to existing styles. After client-side hydration is complete, styled-components will take over as usual and inject any further dynamic styles.

3. We specifically use a Client Component at the top level of the tree for the style registry because it's more efficient to extract CSS rules this way. It avoids re-generating styles on subsequent server renders, and prevents them from being sent in the Server Component payload.

*/
