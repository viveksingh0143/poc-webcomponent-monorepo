import { newE2EPage } from "@stencil/core/testing";
describe('auth-signin', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<auth-signin></auth-signin>');
        const element = await page.find('auth-signin');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=auth-signin.e2e.js.map
