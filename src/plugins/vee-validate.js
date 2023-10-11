import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import { required, min, max, email } from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", Form);
    app.component("VeeField", Field);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("phone", min);

    configure({
      generateMessage(ctx) {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          email: `The field ${ctx.field} is invalid`,
          phone: `The field ${ctx.field} is invalid`,
        };

        return messages[ctx.rule?.name]
          ? messages[ctx.rule?.name]
          : `${ctx.field} should not be empty`;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: true,
      validateOnModelUpdate: true,
    });
  },
};
