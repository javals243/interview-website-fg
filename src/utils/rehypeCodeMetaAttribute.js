import { visit } from "unist-util-visit";

const re = /\b([-\w]+(?![^{]*}))(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

export const rehypeCodeMetaAttribute = (options = {}) => {
  return (tree) => {
    visit(tree, "element", visitor);
  };

  function visitor(node, index, parentNode) {
    let match;

    if (node.tagName === "code" && node.data && node.data.meta) {
      re.lastIndex = 0; // Reset regex.

      while ((match = re.exec(node.data.meta))) {
        parentNode.properties[match[1]] =
          match[2] || match[3] || match[4] || "";
      }
    }
  }
};
