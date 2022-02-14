import { Rule } from "eslint";

// export function preferFormGroupGet(context: RuleContext<'test', ['test']>): Rule.RuleListener {
export function preferFormGroupGet(context: Rule.RuleContext): Rule.RuleListener {
	return {
		MemberExpression(node : any) {
			if (node.property.type !== "Identifier") return;
			if (node.object.object?.property?.name !== "controls") return;
			if (!node.object.object.object.property.name.includes("formGroup")) return;
			context.report({
				node,
				message: `You should use .get('${node.object.property.value}') instead of .controls['${node.object.property.value}']. It has a better type.`,
				fix: function(fixer) {
					// console.log(node);

					// Get an instance of `SourceCode` so we can convert the argument to source code
					// & append the fix to it
					const sourceCode = context.getSourceCode();
					// let fixedCode = sourceCode.getText(node) + ' === null';

					return fixer.replaceText(node, sourceCode.getText() + sourceCode.getText());
					// fixer.replaceText(node, sourceCode.getText());
				}
			});
		}
	};
}
