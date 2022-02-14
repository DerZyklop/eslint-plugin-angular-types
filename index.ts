// eslint/index.js
import { preferFormGroupGet } from "./prefer-form-group-get";

module.exports = {
	rules: {
		"prefer-form-group-get": {
			meta: { fixable: "code" },
			create: preferFormGroupGet
		}
	}
};
