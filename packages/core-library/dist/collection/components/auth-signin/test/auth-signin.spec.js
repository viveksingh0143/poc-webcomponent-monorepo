import { newSpecPage } from "@stencil/core/testing";
import { AuthSignin } from "../auth-signin";
describe('auth-signin', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [AuthSignin],
            html: `<auth-signin></auth-signin>`,
        });
        expect(page.root).toEqualHtml(`
      <auth-signin>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </auth-signin>
    `);
    });
});
//# sourceMappingURL=auth-signin.spec.js.map
