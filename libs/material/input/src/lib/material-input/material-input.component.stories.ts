import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { MaterialInputComponent } from './material-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
const meta: Meta<MaterialInputComponent> = {
  component: MaterialInputComponent,
  title: 'MaterialInputComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<MaterialInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/material-input works!/gi)).toBeTruthy();
  },
};
