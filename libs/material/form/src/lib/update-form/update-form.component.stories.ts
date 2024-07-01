import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { UpdateFormComponent } from './update-form.component';
import { within } from '@storybook/testing-library';
import { importProvidersFrom } from '@angular/core';
import { FormTestingModule } from '../testing';

const meta: Meta<UpdateFormComponent> = {
  component: UpdateFormComponent,
  title: 'UpdateFormComponent',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(FormTestingModule)],
    }),
  ],
};
export default meta;
type Story = StoryObj<UpdateFormComponent>;

export const Primary: Story = {
  args: {
    entityId: 0,
  },
};

export const Heading: Story = {
  args: {
    entityId: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/update-form works!/gi)).toBeTruthy();
  },
};
