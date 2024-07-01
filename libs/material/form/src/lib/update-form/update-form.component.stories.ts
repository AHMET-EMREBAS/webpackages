import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { UpdateFormComponent } from './update-form.component';
import { within } from '@storybook/testing-library';
import { importProvidersFrom } from '@angular/core';
import { FormTestingModule } from '../testing';
import {
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fn } from '@storybook/test';

const meta: Meta<UpdateFormComponent> = {
  component: UpdateFormComponent,
  title: 'UpdateFormComponent',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(FormTestingModule),
        provideUpdateInputOptions([
          {
            name: 'name',
            label: 'Some Name',
            inputType: 'text',
            required: true,
            type: 'string',
            class: 'w-full',
          },
        ]),
        provideUpdateFormGroup(
          new FormBuilder().group({
            name: ['', Validators.required],
          })
        ),
      ],
    }),
  ],
  argTypes: {
    submittedEvent: fn,
    submittedEventSuccess: fn,
    submittedEventError: fn,
  },
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
