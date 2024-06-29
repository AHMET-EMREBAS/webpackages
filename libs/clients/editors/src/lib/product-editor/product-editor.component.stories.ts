import { type Meta, type StoryObj } from '@storybook/angular';
import { ProductEditorComponent } from './product-editor.component';

import { within } from '@storybook/testing-library';

const meta: Meta<ProductEditorComponent> = {
  component: ProductEditorComponent,
  title: 'ProductEditorComponent',
};

export default meta;

type Story = StoryObj<ProductEditorComponent>;

export const Primary: Story = {};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/product-editor works!/gi)).toBeTruthy();
  },
};
