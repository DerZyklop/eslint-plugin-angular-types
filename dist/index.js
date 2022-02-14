// prefer-form-group-get.ts
function preferFormGroupGet(context) {
  return {
    MemberExpression(node) {
      var _a, _b;
      if (node.property.type !== "Identifier")
        return;
      if (((_b = (_a = node.object.object) == null ? void 0 : _a.property) == null ? void 0 : _b.name) !== "controls")
        return;
      if (!node.object.object.object.property.name.includes("formGroup"))
        return;
      context.report({
        node,
        message: `You should use .get('${node.object.property.value}') instead of .controls['${node.object.property.value}']!`,
        fix: function(fixer) {
          const sourceCode = context.getSourceCode();
          return fixer.replaceText(node, sourceCode.getText() + sourceCode.getText());
        }
      });
    }
  };
}

// index.ts
module.exports = {
  rules: {
    "prefer-form-group-get": {
      meta: { fixable: "code" },
      create: preferFormGroupGet
    }
  }
};
